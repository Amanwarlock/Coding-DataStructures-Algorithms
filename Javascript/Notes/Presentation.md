
## Virgin Hyperloop - Assignment


## Requirement: UI Application - Hyperloop Simulator

    > Functional Requirements:
        - Visibility: What exactly happened in the simulation
        - 


## To-DO

    > Architecture
        - Time Series data
        - UI architecture and design 
        - Use-cases for simulator 
        - Fronend system desing --> video app, player, simulator, realtime data etc
        - React app architecture and planning -- estimation

    > Project Management


## Idea:
    > Application:
        > General requirement
        > Specific requirement
            - Components Architecture
            - Data Entities
            - Data API's
            - Data store
            - Optimization
            - Accessibility (supporting all devices)

        > Real Time:  
            1. Long Polling --> Low Latency in Production, need to send full request with headers token etc everytime ---> Overhead due to mulitple handshakes
            2. Web sockets --> Bidirectional and fast, does not support HTTP2 (can be blocked by firewalls) --> less overhead as connection and handshake happens only once
            3. Server Sent Events (SSR) -->  Very effective, easy to load balance, load only the piece you need, supports HTTP2. Only server to client -- one-way commuincation
                    --> They are not supported by all browsers (compatibility)
                    --> Cannot be blocked by firewall
            Resources:
                > https://www.youtube.com/watch?v=ZBM28ZPlin8
                > https://www.youtube.com/watch?v=k56H0DHqu5Y

        > Optimization:
            - Network Perf
            - Rendering Perf
            - Javascript Perf
            - Bundle splitting - cache busting using HTTP params

        > Rendering
            - Server side rending
            - Async loading and load scripts async

        > Javascript
            - Do less stuff
            - DO async
            - cache results
            - Service/web workers - for parallel processing as JS is single threaded

        > Accessibilty
            - All inputs and text areas and other elements should have aria-label for screen readers
            - Hot Keys:
                - Play
                - Pause
                - Fast Forward
                - Speed
                -
## Use cases:




I hope this email finds you well. I'm checking in on the Software Engineer role. It was great interviewing with the team earlier. I enjoyed the interviewing experience and gained tons of insights through the conversation with different managers. I want to thank you for providing me with this amazing opportunity.

I'm looking forward to your update at your earliest convenience. Please let me know if there's anything else I can provide to assist in the decision-making process.

Once again, thank you for your time and consideration. I hope you have a wonderful day!








## VLSI
    > UART: https://github.com/jamieiles/uart

    > LFSR: https://github.com/alexforencich/verilog-lfsr

    > Traffic light controller: https://github.com/nxbyte/Verilog-Projects

    > AES-128bit: https://github.com/pnvamshi/Hardware-Implementation-of-AES-Verilog

    > DES: https://github.com/ppashakhanloo/verilog-DES

    > SHA256: https://github.com/ahmad2smile/SHA256_Verilog

    > Huffman: https://github.com/spike556/HuffmanCode/tree/master/rtl%20model

    > Hufman decoder: https://github.com/rahuldhameja/Huffman-Decoder   

    > Image encryption: https://github.com/Ariskumar/Image-Encryption-Verilog

    > hmac: https://github.com/secworks/hmac