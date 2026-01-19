import pyrogram

from .client import Client
from ..utils import patch_into, should_patch


@patch_into(pyrogram.types.user_and_chats.chat.Chat)
class Chat(pyrogram.types.user_and_chats.chat.Chat):
    _client: Client

    @should_patch()
    async def listen(self, *args, **kwargs):
        return await self._client.listen(*args, chat_id=self.id, **kwargs)

    @should_patch()
    async def ask(self, text, *args, **kwargs):
        return await self._client.ask(self.id, text, *args, **kwargs)

    @should_patch()
    async def stop_listening(self, *args, **kwargs):
        return await self._client.stop_listening(*args, chat_id=self.id, **kwargs)
