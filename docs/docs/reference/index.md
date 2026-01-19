---
title: Introduction
sidebar_position: 0
---

# *package* kurimod

This is a concise list of the main modules, objects, helpers, and decorators provided by kurimod.

- Modules:
    - kurimod.config
    - kurimod.helpers
    - kurimod.listen
    - kurimod.nav
    - kurimod.utils
    - kurimod.exceptions
    - kurimod.types

- Objects:
    - kurimod.config.config
    - kurimod.listen.Client
    - kurimod.listen.Message
    - kurimod.listen.Chat
    - kurimod.listen.User
    - kurimod.nav.Pagination
    - kurimod.types.Identifier
    - kurimod.types.ListenerTypes
    - kurimod.types.Listener
    - kurimod.exceptions.ListenerTimeout
    - kurimod.exceptions.ListenerStopped
    - kurimod.utils.patch_into
    - kurimod.utils.should_patch

- Helpers:
    - kurimod.helpers.ikb
    - kurimod.helpers.bki
    - kurimod.helpers.ntb
    - kurimod.helpers.btn
    - kurimod.helpers.kb
    - kurimod.helpers.kbtn
    - kurimod.helpers.array_chunk
    - kurimod.helpers.force_reply

- Decorators:
    - kurimod.utils.patch_into(target_class)
    - kurimod.utils.should_patch(func)
