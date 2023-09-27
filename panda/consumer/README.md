# It's a redpanda consumer

- Consume one message: `docker exec -it redpanda-0 rpk topic consume chat-room --num 1`
- Should see e.g:
```
{
  "topic": "chat-room",
  "value": "peaches for free",
  "timestamp": 1695807993057,
  "partition": 0,
  "offset": 0
}
```
