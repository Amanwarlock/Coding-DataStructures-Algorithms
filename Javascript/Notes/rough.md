
## Introduction

    - Moore's law predicted that the number of transistors double every two years and now it is dying
    - Advancements in semiconductor technology and minitiarization of transistors has revolutionalized the ASIC design process
    - It has enabled to squeeze many many transistors into a smaller chip
    - The two challenges faced by semiconductor technology are: [1]
        1. Increasingly large designs
        2. Complex design contraints
    - The above two factors have increased the computational load causing longer design cycles in the physical design flow Aman et al. [1]
    - This research explores the concept of GPU acceleration for the backend VLSI physical design process to speed up the automation algorithms such as those 
        used in Cadence EDA tool by Synopsys


## Problem Statement
    - VLSI physical design flow involves various steps such as:
        1. Floorplanning
        2. Placement
        3. Routing
        4. Clock Tree Synthesis
        5. Timing analysis etc
    - These design flow involves optimization algorithms for optimizing wirelength, density of cells during placment etc
    - These algorithms work on graph theory problems, greedy algorithms such as Bellman ford, Dijsktra's
    - This cause heavy compuational loads causing longer design cycles

## Objective
    - The goal of this paper is to study and determine the modern vlsi desing trends to indentify the challenges and research gaps
    - Further, the goal is to explore GPU acceleration of the ASIC physical design process to exploit parallelism

## Background on GPU's - NVIDIA, CUDA
    - According to NVIDIA, they have observed massive growth in performing the number of floating point operations and levearaging the peak bandwidth in past few years [2]
    - With modern innovations in the GPU family like VOlta, Turing and Ampere provide ultra fast tensor cores for parallel computation
    - Research studies have demonstrated that GPU acceleration has supercharged the key physical design steps such as placement, routing and timing analysis

    <GPU image with corres and blocks>

    - A GPU architecture consists of many cores orgamnized in blocks that can run tasks in parallel and thus achieving massive speed up
    - CUDA, which is a high performance acceleration framework by NVIDIA exposes important API's for exploiting parallelsim
    - In this CPU-GPU hybrid computational model, computationally heavy tasks are offloaded from the CPU to the GPU where blocks of threads can perform parallel operations

## Deep Learning
    - 

## Accelerating ASIC physical Design Process (In EDA tools)

    - The ASIC physical design process involves:
        1. Floorplanning
        2. Placement
        3. Routing
        4. Clock Synthesis
        5. Timing analysis

        <explain the flow chart diagram>

## Proposed Model

    - <Diagram of DREAM architecture>
    - In the figure python ML framework called PyTorch is used for training neural networks
    - The ADAM, SGD are cost functions. Once the model is trained and tested against the dataset, we will obtain predicted outcomes and true outcomes
    - The role of optimizer is to reduce the distance i.e, minimize the error in prediction
    - ADAM is the adaptive optimizer which takes aggressive steps in minimizing the loss in training and then takes slow steps as it reaches the local minima i.e, as it
        approaches the true outcome
    - The ReLU is the optimizer whose job is to tune the weights to bring the model prediction close to true outcomes in various iterations
    -  The CUDA framework in the diagram offloads these machine learning heavy computations to the GPU for parallel and accelerated computation

## Future Scope
    - Routing is knonwn as the most time consuming step in the physical design process
    - Due to its complexity and also the lack of parallelism, its challenging to exploit GPU acceleration 

## Conclusion & Results
    - The GPU accelerates the optimizing process of neural network over 60X
    - GPU innovation, models can be trained from weeks to hours
    - DREAMPlace significantly accelerates the VSLI placement process by using deep learning and GPU architecture
    - The benchmarks demonstrate that proposed model achieved 34x speedup with larger designs involving 1M-10M cells 40X speedup was observed
    - A 10M cell design can be completed with in 5 min compared to the 3h timeline with a CPU.

## References
    1. Y. Lin, "GPU Acceleration in VLSI Back-end Design: Overview and Case Studies," 2020 IEEE/ACM International Conference On Computer Aided Design (ICCAD), 2020, pp. 1-4.

    2. Y. Lin et al., "DREAMPlace: Deep Learning Toolkit-Enabled GPU Acceleration for Modern VLSI Placement," in IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems, vol. 40, no. 4, pp. 748-761, April 2021, doi: 10.1109/TCAD.2020.3003843.

    3. C. -K. Lee, "Deep Learning Creativity in EDA," 2020 International Symposium on VLSI Design, Automation and Test (VLSI-DAT), 2020, pp. 1-1, doi: 10.1109/VLSI-DAT49148.2020.9196288.


# Background (Experimental Procedure)
    - The aim of this project is to study and analyze the AISC physical design process using the Cadence EDA tool by Synopsys. The Ripple carry adder is modeled using Verilog HDL. The RTL design is then passed to Cadence for the pysical design automation process.The Cadence consists of <Nandlibrary> which is a standard cell library
    with design rules and specifications. It translates the given RTL design into gate-level logic design. 

    - After the Gate-level design is synthezied, Cadence provides different reports for analysis and verification such as:
        1. Area report
        2. Timing report
        3. Power report
        4. Heirarchy report

    - These reports provide insights about our design such as the total area, power consuming, timing analysis which can be used to check and verify DRC violations.

    - The various stages of the pysical design process involves:
        1. Floor planning
        2. Placement
        3. Routing
        4. Clock Tree Synthesis
        5. Timing Analysis

    - In this report, we focus on synthesis our RTL code to the gate level logic design and the above discussed ASIC physical design flow is out of scope of this document

# Experimental Procedure
    - In this undertaking, the RTL code is modeled in Verilog HDL using the ModelSim. The RTL code is synthesised using Cadence with the help of a Makefile TCL script.
    The script loads the standard cell library and automates the process of design translation. Any design violations or run time issues stop the translation process with
    status codes which can be later reviewd in the log file generated during the process. We can modify the clock speed in case if the slack is violated for the design under consideration. The clock speed can be varied in the Makefile. Once the synthesis process is successful different reports are generated which can be used for
    design analysis and verification

    Tools
        - ModelSim
        - Synopsys Desgin Compiler

# Results



# Conclusion

    After analysis of our area report and timing analysis we can conclude that the discussed design does not have any design violations and the timing analysis reveals that the slack has been met. In this project we have successfully observed and verified the steps involved in the synthesis process of the RTL code of 8-bit Ripple adder using Synopsys Design Compiler EDA tool. The results demonstrate that our design specifications such as area, power and timing contraints are acceptable.
      