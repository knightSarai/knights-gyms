def format_pydantic_value_error(e):
    new_errors = []
    for error in e.errors():
        if error.get('type') == 'value_error':
            new_errors.append(error.get('msg'))
        else:
            new_errors.append(f'{error.get("msg")} {error.get("loc")[0]}')
    return new_errors
