---
title: Kurigram Compatibility
sidebar_position: 2
---

## Understanding Kurigram and Pyrogram

### What is Kurigram?

Kurigram is a Telegram MTProto API client library for Python that maintains **100% API compatibility with Pyrogram**. It's essentially Pyrogram with a different name and maintained by a different developer (KurimuzonAkuma).

### API Compatibility

All Pyrogram API calls work exactly the same in Kurigram. Here's a comparison:

```python
# Pyrogram
from pyrogram import Client, filters

# Kurigram (same API!)
from pyrogram import Client, filters

# Both work identically
client = Client("my_bot", api_id=12345, api_hash="abc123")
```

### Why Use Kurigram?

1. **Active Maintenance**: Kurigram is actively maintained with regular updates
2. **Same API**: No need to learn new methods or change your code
3. **Optimizations**: May include performance optimizations while maintaining compatibility
4. **Community**: Different community and support channels

### Migration from Pyrogram

If you're already using Pyrogram, migrating to Kurigram is as simple as changing the import:

```python
# Before (Pyrogram)
from pyrogram import Client

# After (Kurigram)
from pyrogram import Client
```

That's it! Everything else remains the same.

### Common API Examples

Both libraries share the exact same API:

#### Client Methods

```python
from pyrogram import Client

client = Client("my_bot", api_id=12345, api_hash="abc123")

# All these methods work exactly the same as in Pyrogram
await client.start()
await client.send_message(chat_id, "Hello!")
await client.edit_message_text(chat_id, message_id, "Updated text")
await client.delete_messages(chat_id, message_ids)
```

#### Filters

```python
from pyrogram import filters

# All filters work identically
filters.text
filters.command("start")
filters.user(user_id)
filters.chat(chat_id)
filters.regex(r"pattern")
```

#### Types

```python
from kurigram.types import Message, User, Chat

# All types have the same structure and methods
message = await client.get_messages(chat_id, message_id)
user = message.from_user
chat = message.chat
```

### Summary

- **Kurigram = Pyrogram** (same API, different maintainer)
- **No code changes needed** when switching between them
- **All documentation for Pyrogram applies to Kurigram**
- **Use Kurigram** if you want active maintenance and potential optimizations
- **Use Pyrogram** if you prefer the original library

### Resources

- [Kurigram Repository](https://github.com/KurimuzonAkuma/kurigram)
- [Kurigram Documentation](https://docs.kurigram.icu/)
- [Pyrogram Documentation](https://docs.pyrogram.org/) (applies to Kurigram too!)
