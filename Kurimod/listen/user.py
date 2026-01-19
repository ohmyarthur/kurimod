import pyrogram

from .client import Client
from ..utils import patch_into, should_patch


@patch_into(pyrogram.types.user_and_chats.user.User)
class User(pyrogram.types.user_and_chats.user.User):
    _client: Client

    @should_patch()
    async def listen(self, *args, **kwargs):
        return await self._client.listen(*args, user_id=self.id, **kwargs)

    @should_patch()
    async def ask(self, text, *args, **kwargs):
        return await self._client.ask(self.id, text, *args, user_id=self.id, **kwargs)

    @should_patch()
    async def stop_listening(self, *args, **kwargs):
        return await self._client.stop_listening(*args, user_id=self.id, **kwargs)
