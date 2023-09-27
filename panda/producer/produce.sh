#!/bin/bash

while true; do
    # Define the input you want to pass to rpk
    input="YourInputHere"

    # Use echo and a pipe to send input to rpk
    echo "$input" | docker exec -i redpanda-0 rpk topic produce chat-room

    # Add a sleep to control the loop's frequency (optional)
    sleep 1
done
