


# Title
    - ML based Placement Refinement to minimize DRC Violations

## Introduction

    > The ASIC physical design process consists of multiple steps such as RTL design, Placement, Routing etc.
        [As we know there are many steps involved in the ASIC physical design process like RTL design synthesis, Floorplaning, placement to routing]

    > With recent advancements in VLSI and semiconductor technology, the design rules have become increasingly complex [1]
        [With Modernaization of VLSI and the semiconductors, the designs are getting larger and larger also they are validated with more complex design rules]

    > Physical design process is an iterative process which is performed by EDA tools
        [With larger designs, the EDA tools take too much of time iteratively performing the design steps to optimize the layout design]
        
    > Routability is the most important factor that should be considered at the time of placement [1] [2]
        [Of all the steps, routability is the more challenging job and it depends on placement. If the placement is not accurate and optimized it results
        the design beign un-routable. This pushes us back to re-placement, optimization basically executing the complete design flow again]

    > In this paper, we discuss the machine learning based placement flow to reduce the DRC violations taking minimum number of iterations by the EDA tools
        [The paper discusses the machine learning based placement refinement process to reduce the number of iterations taken by the EDA tool to minimize the
            DRC violations
        ]

## Background

    > (Discuss physical design steps, explain global and detailed routing, show figures of placement and routing, congestion)

## Problem Statement
    > Routability is directly dependent on placement.Placement is the initial design process [1] (place and route are inseparable) 
    > Failure to make accurate speculation while placement causes repeating the complete flow i.e, placement, global routing,  detailed routing which is time-consuming
    > In fact, to obtain accurante and comprehensive routing information, the global and detailed routing needs to be performed [1] [2]

    [In ASIC design flow, Placement is the initial step after floorplanning. After Placement, global and detailed routing is performed. Detailed rouing is 
        complex and time consuming process. If any DRC violations occcur or if there are any cells that cannot be routed, we need to repeat the process from begining
        i,e. again re-position the cells by performing re-placement again, then global and detailed routing.

        This is a trial and error procedure. It will be beneficial to make some smart speculations at the time of placement to reduce the number of DRC violations,
        hence reducing the number of iterations

            or

        When designers, encouter violations during the detailed routing process, they have to rip-up and reroute and even re-run the iterations from place and route a lot of times.

        Therefore it is necessary to determine the routability issues in the early stage. So aim is to obtain detailed routing information during the place operation
        and not to have placement solely rely on global router to provide routability information
    ]

## Literature Survey

    1. [1] proposes Support Vector machines to predict DRC violations
    2. [2] propses Neural Network model to detect the DRC violations
    3. [3] & [4] uses Multivariate adaptive regression splines (MARS) as training model for estimating DRC violations
    4. [5] In this approach, a probabilistic congestion estimation technique is used

    [The results indicate that the SVM and Neural network based approaches demonstrate better performance and scalability]

## Methodology
    > This paper, presents two proposals based on ML-based placement refinements to minimize DRC violations along with the EDA iterations
        1. Support Vector Model based placement refinement [1]
        2. Neural Networks based placement refinement [2] [3]
    
        [In this paper, we will be focusing on discussing the SVM based and Neural Network based placement refinement techniques]

Proposed Method - 1 : SVM based Placement Refinement [1]

    > In the SVM based approach [1]
        (Diagram Fig.1 overview of flow {from paper-1})

        [
            - An existing placer is used to generate the placement result. Then a model is trained to detect DRC violations
            - Once the model is trained, the placement refinement is done to reduce the number of short violations and overlapping
            - In placement stage, short violations aware refinement process is performed taking into account the trained model's predictions
            - And then the standard cells positions are adjusted accordingly. 
        ]

    #### Feature extraction and Model Training
        
        (Fig. 2 short violations {paper-1})

        [
            - For this, the design is dividing into square bins of sizes 4 by 4 micro meter.
            - The cells are standard cells as specified by 65 nano meter library
            - The classification task performed by ML models is binary classification
            - Therefore, each bins are lableled using 0 and 1 where 0 indicates no short violation inside that bin and 1 represents that the data bin has violations
            - The features that are extracted and used for training involves informations such as:
                1. Number of local nets
                2. Number of global nets
                3. Number of clock pins
                4. Pin area and characteristics of local placement
        ]

    
    (Fig 4 overall flow {paper-1})

    [
        - This diagram shows the over all flow and design architecture
        - First, in the initial placement stage, The RTL code is synthesised to generate Netlist.
        - Then the VDA placer is used to obtain initial location of each cell 
        - This result is fed to the refinement placement stage, where refinement happens before detailed routing in iterations
        - If each iteration short violations are checked and cell positions are adjusted
        - At the end of each iteration, number of short violations are checked, if violations decreases, more iterations are performed to get better results otherwise
        the process is terminated
        - Then with these refined placement results, detailed routing can be performed
    ]


    Proposed Method - II Neural Network based placement refinement [2]

        - Deep learning based machine learning algorithm is used 
            [ In this method Deep learning is used as compared to SVM in the previous approach]
        - The methodology and flow of experiment is same as the previous approach
            [
                - The flow chart discussed earlier holds good here as well
                - Because only differemt ML is used
                - Instead of bins, the design is divided into Tiles
            ]
        - The data is normalized during feature gathering
            [- The data is scaled using the normalization technique]
        - The neural network model has following hyperparameters:
            [Following model specifications are considered for the design]
            - Total of five layers  - 
                [
                    one I/p layer, 
                    one O/P layer
                    and three hidden layers
                ] 
            - 43 neurons in Input layer
                [The input layer consisted of 43 neurons]
            - Each hidden layer consisted of 100 neurons
                [
                    A 100 neurons was used in each of the hidden layer
                ]
            - ReLU activation function
                [
                    In the hidden layers, the ReLU activation function is used
                ]
        - For training TensorFlow is used
            [
                The models were trained and tested using the TensorFlow machine learning framework
            ]
## Results

    
Method-1 SVM based Placement Refinement Results [1]
        > The placements were evaluated using Cadence Innovus EDA tool
        > The metrics used for evaluation are:
            1. True-Positive rate (TPR)
            2. Specificity (SPC)
            3. Accuracy (ACC)
            4. Matthews Correlation Coefficient (MCC)

        [But we will evaluate results using the True positive metric for this presentation]

    (Insert Table -1  Benchmark Testcases {paper-1})

    [
        - This table shows the design specs used for study
    ]

    (Insert table-2 Prediction results (Binary Prediction model))

    [
        - Comparing the TPR, we can observe that the highest true-positive rate is for FFT design which about 94%
    ]

    (Insert table 3 {paper-1})

    [
        - This table compares the detection rate of VDA placer Vs the  refinement method
        - It can be observed that in case of the 1st and 2nd design there is no improvement in short violations. Author explaines this could be due to high utilization of these designs (i,e more iterations performed for refinement)
        - Where as for the 3rd design, significant improvement can be observed in detecting short violations
    ]

Method-2 Deep learning based Refinement Results [2]

    [
        - Same metrics are used here for evaluation
    ]

    - The model could predict about 98% of the violations

        (Make this table in PPT)

        Desing                      TPR (%)             ACC

        mgc_des_perf_1              100                 88
        mgc_fft_1                   100                 97
        mgc_matrix_mul              96                  93
## Conclusion

    - The methods detects areas in circuits prone to short violations
        [
            The methods discussed in this presentation, successfully detect violations in pre placement stage
        ]
    - The proposed machine learning based approaches demonstrate significant performance boost during detailed routing
        [
            The machine learning based placement refinement significantly reduces the run time during placement and routing
        ]
    - The results demonstrate that the performance of Neural Network based architecture is better
        [
            From the results it can be observed that the Neural network based design performed better than the SVM based model in terms of TPR and accuracy
        ]

    - The neural network based model can predict violations 14 times faster with smaller designs and up to 96 times faster with larger designs

## References

    1. Y. -Y. Huang, C. -T. Lin, W. -L. Liang and H. -M. Chen, "Learning Based Placement Refinement to Reduce DRC Short Violations," 2021 International Symposium on VLSI Design, Automation and Test (VLSI-DAT), 2021, pp. 1-4, doi: 10.1109/VLSI-DAT52063.2021.9427321.
   
    2. A. F. Tabrizi, N. K. Darav, L. Rakai, I. Bustany, A. Kennings, and L. Behjat, “Eh?Predictor: A Deep Learning Framework to Identify Detailed Routing Short Violations From a Placed Netlist,” IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems, vol. 39, no. 6, pp. 1177–1190, 2020.

    3. Q. Zhou, X. Wang, Z. Qi, Z. Chen, Q. Zhou, and Y. Cai, “An accurate detailed routing routability prediction model in placement,” in 2015 6th Asia Symposium on Quality Electronic Design (ASQED), pp. 119–122, 2015.

    4. Z. Qi, Y. Cai, and Q. Zhou, “Accurate prediction of detailed routing congestion using supervised data learning,” in 2014 IEEE 32nd International Conference on Computer Design (ICCD), pp. 97–103, 2014.

    5. J. Westra, C. Bartels, and P. Groeneveld, “Probabilistic Congestion Prediction,” in Proc. ISPD, p. 204–209, 2004.




.https://inst.eecs.berkeley.edu/~cs152/sp05/handouts/lab_3.html