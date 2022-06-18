import logging

from django.http import JsonResponse
from rest_framework.views import exception_handler

from base.formatters import format_pydantic_value_error


def handle_value_error(exc, context):
    response = exception_handler(exc, context)

    if isinstance(exc, ValueError):
        logging.error(f"Original error detail and callstack: {exc}")
        return JsonResponse({'errors': format_pydantic_value_error(exc)}, status=400)

    return response
