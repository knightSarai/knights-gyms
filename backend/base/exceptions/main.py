import logging
from rest_framework.views import exception_handler
from django.http import JsonResponse

from base.formatters import format_pydantic_value_error


def handle_value_error(exc, context):
    response = exception_handler(exc, context)

    if isinstance(exc, ValueError):
        err_data = {'error': format_pydantic_value_error(exc)}
        logging.error(f"Original error detail and callstack: {exc}")
        return JsonResponse(err_data, status=503)

    return response
