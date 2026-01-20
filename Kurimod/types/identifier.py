from dataclasses import dataclass, fields
from typing import Optional, List, Union


@dataclass(slots=True)
class Identifier:
    inline_message_id: Optional[Union[str, List[str]]] = None
    chat_id: Optional[Union[Union[int, str], List[Union[int, str]]]] = None
    message_id: Optional[Union[int, List[int]]] = None
    from_user_id: Optional[Union[Union[int, str], List[Union[int, str]]]] = None

    def matches(self, update: "Identifier") -> bool:
        for field in fields(self):
            pattern_value = getattr(self, field.name)
            update_value = getattr(update, field.name)

            if pattern_value is not None:
                if isinstance(update_value, list):
                    if isinstance(pattern_value, list):
                        if not set(update_value).intersection(set(pattern_value)):
                            return False
                    elif pattern_value not in update_value:
                        return False
                elif isinstance(pattern_value, list):
                    if update_value not in pattern_value:
                        return False
                elif update_value != pattern_value:
                    return False
        return True

    def count_populated(self):
        non_null_count = 0

        for field in fields(self):
            if getattr(self, field.name) is not None:
                non_null_count += 1

        return non_null_count

