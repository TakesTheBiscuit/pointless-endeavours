# It's a redpanda producer

- `docker exec -it redpanda-0 rpk cluster info`
- Create a topic `chat-room`
    - `docker exec -it redpanda-0 rpk topic create chat-room`
    - Should see:
    ```
    TOPIC      STATUS
    chat-room  OK
    ```
- Produce a message: `docker exec -it redpanda-0 rpk topic produce chat-room`
    - Type a message on the console and hit enter
    - Should see:
    ```
    Produced to partition 0 at offset 0 with timestamp 1695807993057.
    ```
- Press Ctrl+C to finish producing messages to the topic.
- You can use the infinite loop script: `./produce.sh` 
    - Which will write a message to the `chat-room` topic and then sleep 1 second


