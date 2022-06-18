def format_pydantic_value_error(e):
    new_errors = {}
    if hasattr(e, 'errors'):
        for error in e.errors():
            if error.get('type') == 'value_error':
                new_errors[error.get('type')] = [error.get('msg')]
            else:
                new_errors[error.get('loc')[0]] = [error.get('msg')]
        return new_errors

    new_errors['value_error'] = [f'{e}']
    return new_errors
