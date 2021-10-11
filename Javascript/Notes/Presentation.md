


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
            - The classification task performed by ML models is binary classification
            - Therefore, each bins are lableled using 0 and 1 where 0 indicates no short violation inside that bin and 1 represents that the data bin has violations
            - The features that are extracted and used for training involves informations such as:
                1. Number of local nets
                2. Number of global nets
                3. Number of clock pins
                4. Pin area and characteristics of local placement
        ]

## Results


## Conclusion

## References

    1. Y. -Y. Huang, C. -T. Lin, W. -L. Liang and H. -M. Chen, "Learning Based Placement Refinement to Reduce DRC Short Violations," 2021 International Symposium on VLSI Design, Automation and Test (VLSI-DAT), 2021, pp. 1-4, doi: 10.1109/VLSI-DAT52063.2021.9427321.
   
    2. A. F. Tabrizi, N. K. Darav, L. Rakai, I. Bustany, A. Kennings, and L. Behjat, “Eh?Predictor: A Deep Learning Framework to Identify Detailed Routing Short Violations From a Placed Netlist,” IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems, vol. 39, no. 6, pp. 1177–1190, 2020.

    3. Q. Zhou, X. Wang, Z. Qi, Z. Chen, Q. Zhou, and Y. Cai, “An accurate detailed routing routability prediction model in placement,” in 2015 6th Asia Symposium on Quality Electronic Design (ASQED), pp. 119–122, 2015.

    4. Z. Qi, Y. Cai, and Q. Zhou, “Accurate prediction of detailed routing congestion using supervised data learning,” in 2014 IEEE 32nd International Conference on Computer Design (ICCD), pp. 97–103, 2014.

    5. J. Westra, C. Bartels, and P. Groeneveld, “Probabilistic Congestion Prediction,” in Proc. ISPD, p. 204–209, 2004.
