// import { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Icon } from '@iconify/react';
import educationIcon from '@iconify/icons-charm/graduate-cap';
import devIcon from '@iconify/icons-fluent-mdl2/work';
import "react-vertical-timeline-component/style.min.css";
import { Box, Badge , Center, Heading, useColorMode } from "@chakra-ui/react"



export default function Work() {
    const { colorMode } = useColorMode();
    // const [durantion, setDurantion] = useState(0);
    // const today = new Date()
    const mainBackTech = ['Apache Hadoop · ', 'Apache Spark · ', 'Shell scripting ·', 'Python ·', 'Apache Airflow ·', 'Docker ·', 'Json  ·', 'MongoDB ·', 'LLMS ·', 'Git ·', 'GitHub ']
    const mainBackTech2 = ['Elasticsearch · ', 'Kibana · ', 'Logstash ·', 'Python ·', 'Winlogbeat ·', 'Docker ·', 'Json  ·', 'Apache Kafka ·', 'LLMS ·', 'scikit learn ']
    const mainBackTech3 = ['Web-scraping news · ', 'Apache Spark · ', 'Shell scripting ·', 'Python ·', 'Apache Airflow ·', 'Docker ·', 'Json  ·', 'MongoDB ·', 'LLMS ·', 'Git ·', 'GitHub ']
    const mainBackTech4 = ['VMware vSphere Client · ', 'VMWare ESXi · ', 'Windows server ']
    const mainMP = ['Maths (analysis & algebre) · ', 'Computer Science ·' , 'Python programming language ·', 'Database & SQL · ', 'physique & chemistry']
    const mainBach = ['Collective intelligence', 'High-performance computing', 'Machine Learning Theory, ', 'Data Science, ', 'IOT, ', 'Java OOP programming, ',' Database Administration, ','Relational Databases Management Systems (MySQL), ', 'Networking (OSI network model), ', 'Operating Systems (Linux) & bash scripitng, ', 'UML, ', 'English/French (TEC).']
    var mainTec = mainBackTech.map((p, i) => {
      return (
        <Badge fontSize="0.8em" ml={1} borderWidth="1px" p={1} m={1}  borderRadius="10" key={i}>
          {p}
        </Badge>
      );
    });
    var mainTec2 = mainBackTech2.map((p, i) => {
      return (
        <Badge fontSize="0.8em" ml={1} borderWidth="1px" p={1} m={1}  borderRadius="10" key={i}>
          {p}
        </Badge>
      );
    });
    var mainTec3 = mainBackTech3.map((p, i) => {
      return (
        <Badge fontSize="0.8em" ml={1} borderWidth="1px" p={1} m={1}  borderRadius="10" key={i}>
          {p}
        </Badge>
      );
    });
    var mainTec4 = mainBackTech4.map((p, i) => {
      return (
        <Badge fontSize="0.8em" ml={1} borderWidth="1px" p={1} m={1}  borderRadius="10" key={i}>
          {p}
        </Badge>
      );
    });

    var mainmp = mainMP.map((p, i) => {
      return (
        <Badge fontSize="0.8em" ml={1} borderWidth="1px" p={1} m={1}  borderRadius="10" key={i}>
          {p}
        </Badge>
      );
    });

    var mainbach = mainBach.map((p, i) => {
      return (
        <Badge fontSize="0.8em" ml={1} borderWidth="1px" p={1} m={1}  borderRadius="10" key={i}>
          {p}
        </Badge>
      );
    });
    // function monthDiff(d1, d2) {
    //   var months;
    //   months = (d2.getFullYear() - d1.getFullYear()) * 12;
    //   months -= d1.getMonth();
    //   months += d2.getMonth();
    //   return months <= 0 ? 0 : months;
    // }
    // useEffect(() => {
    //   setDurantion(monthDiff(new Date('27/07/2021'), today))
    // }, [setDurantion])
    

    return (
      <Box mt={100}>
        <Center>
          <Box backgroundColor={`mode.${colorMode}.background`} sx={{ border: 'solid black 1px', borderRadius: 15, marginBottom: 10, backgroundColor: "#0CA678"}} >
            <Heading p={40}>
              Work Exprience 
            </Heading>
          </Box>
        </Center>
        <VerticalTimeline
        
        >
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="15 february 2024 - Present (5 months)"
            iconStyle={{ background: '#0CA678'}}
            icon={<Icon icon={devIcon} />}
            intersectionObserverProps={{ rootMargin: '-20px 0px -20px 0px' }}
          >
            <Box p={15} sx={{ background: `mode.${colorMode}.background`}} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16">
              <Heading as="h3" size="lg" fontSize={30}>
                Data Engineering Intern
              </Heading>
              <Heading as="h4" size="md" color="#0CA678" pt={2}>
                H E N C E F O R T H
              </Heading>
              <p>
                In this experience, I worked on a PFE project titled "Big Data Infrastructure Enhancement with Query Expansion". This project was divided into two parts:
                <ul>
                  <li><strong>Designing a Batch Pipeline for Data Processing:</strong> This involved collecting, storing, and processing data from the YouTube API. As part of this phase:
                    <ul>
                      <li>Designed the entire pipeline component and conducted benchmarks among all available open-source tools that we could use.</li>
                      <li>Configured the pipeline and addressed all technical aspects.</li>
                      <li>Held weekly meetings and provided daily reports to track progress and address any technical issues during the configuration.</li>
                      <li>Collected and processed approximately 150,000 videos and 134,000 channel pieces of information over a period of 20 days.</li>
                    </ul>
                  </li>
                  <li><strong>Benchmarking Methods of Query Expansion:</strong> The second part involved comparing available methods of query expansion:
                    <ul>
                      <li>Tested the capabilities of LLM, the Google API, and large graphs for the specific task of query expansion.</li>
                      <li>Integrated both parts of the project to ultimately create a comprehensive research system.</li>
                    </ul>
                  </li>
                </ul>
              </p>
              <p>
                <br/>
                Skills Acquired:
                <div style={{ textAlign: 'left', marginBottom: 4, padding: 4 }}>
                  {mainTec}
                </div>
              </p>
            </Box>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="01 June 2023 - 28 August 2023 (3 months)"
            iconStyle={{ background: '#0CA678'}}
            icon={<Icon icon={devIcon} />}
            intersectionObserverProps={{ rootMargin: '-20px 0px -20px 0px' }}
          >
            <Box p={15} sx={{ background: `mode.${colorMode}.background`}} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16">
              <Heading as="h3" size="lg" fontSize={30}>
                  Data Engineering Intern
              </Heading>
              <Heading as="h4" size="md" color="#0CA678" pt={2}>
                D A T A P R O T A E C T
              </Heading>
              <p>
                <ul>
                  <li>Development of a resilient pipeline for collecting, analyzing, and storing logs.</li>
                  <li>Designed and implemented a machine learning model that achieved a notable 93% accuracy rate for analyzing logs to predict cyberattacks.</li>
                  <li>Integrated the model into the pipeline for real-time monitoring of logs.</li>
                </ul>
              </p>
              <p>
                Skills Acquired : 
              <div style={{ textAlign: "left", marginBottom: "4px", padding: "4px" }}>
                {mainTec2}
              </div>
              </p>
            </Box>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="28 July 2023 - 30 September 2023 (2 months)"
            iconStyle={{ background: '#0CA678'}}
            icon={<Icon icon={devIcon} />}
            intersectionObserverProps={{ rootMargin: '-20px 0px -20px 0px' }}
          >
            <Box p={15} sx={{ background: `mode.${colorMode}.background`}} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16">
              <Heading as="h3" size="lg" fontSize={30}>
                Machine Learning (ML) Intern
              </Heading>
              <Heading as="h4" size="md" color="#0CA678" pt={2}>
                T E N D E R P O R T
              </Heading>
              <p>
                <ul>
                  <li>Development of an AI model for address extraction, with the aim of replacing the use of GPT-3.</li>
                  <li>Achieved a notable 96.72% accuracy rate with the developed model, closely rivaling that of GPT-3.</li>
                  <li>Deployed the model and integrated APIs, facilitating real-time data acquisition</li>
                  <li>Create a robust data warehouse capable of efficiently storing and processing large datasets</li>
                </ul>
              </p>
              <p>
                Skills Acquired : 
              <div style={{ textAlign: "left", marginBottom: "4px", padding: "4px" }}>
                {mainTec3}
              </div>
              </p>
            </Box>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="1 June 2022 - 1 August 2022 (1 months)"
            iconStyle={{ background: '#0CA678'}}
            icon={<Icon icon={devIcon} />}
            intersectionObserverProps={{ rootMargin: '-20px 0px -20px 0px' }}
          >
            <Box p={15} sx={{ background: `mode.${colorMode}.background`}} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16">
              <Heading as="h3" size="lg" fontSize={30}>
              Virtualization Engineering Intern
              </Heading>
              <Heading as="h4" size="md" color="#0CA678" pt={2}>
              O C P  G R O U P 
              </Heading>
              <p>
                <ul>
                  <li>Creating a virtualization architecture for two physical servers using VMware solution..</li>
                </ul>
              </p>
              <p>
                Skills Acquired : 
              <div style={{ textAlign: "left", marginBottom: "4px", padding: "4px" }}>
                {mainTec4}
              </div>
              </p>
            </Box>
          </VerticalTimelineElement>
          
        </VerticalTimeline>
        <Box>
            <Heading p={50}>
            </Heading>
          </Box>
        <Center>
          <Box backgroundColor={`mode.${colorMode}.background`} sx={{ border: 'solid black 1px', borderRadius: 15, marginBottom: 10, backgroundColor: "#0CA678"}} >
            <Heading p={40}>
              Education Path
            </Heading>
          </Box>
        </Center>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="September 2021 - Present"
            iconStyle={{ background: '#0CA678'}}
            icon={<Icon icon={educationIcon} />}
            position = "right"
            intersectionObserverProps={{ rootMargin: '-20px 0px -20px 0px' }}
          >
            <Box p={15} sx={{ background: `mode.${colorMode}.background`}} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16">
              <Heading as="h3" size="lg" fontSize={30}>
                Artificial Intelligence Engineering
              </Heading>
              <Heading as="h4" size="md" color="#0CA678" pt={2}>
                at National School of Computer Science and Systems Analysis (ENSIAS in French)
              </Heading>
              <p>
                The main programme : 
              <div style={{ textAlign: "left", marginBottom: "4px", padding: "4px" }}>
                {mainbach}
              </div>
              </p>
            </Box>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="September 2019 - June 2021"
            iconStyle={{ background: '#0CA678'}}
            icon={<Icon icon={educationIcon} />}
            position = "left"
            intersectionObserverProps={{ rootMargin: '-20px 0px -20px 0px' }}
          >
            <Box p={15} sx={{ background: `mode.${colorMode}.background`}} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16">
              <Heading as="h3" size="lg" fontSize={30}>
                MP <br/>(Math, Physics)
              </Heading>
              <Heading as="h4" size="md" color="#0CA678" pt={2}>
                at Preparatory Classes for Engineering Schools in Agadir (CPGET)
              </Heading>
              <p>
                The main program : 
                <div style={{ textAlign: "left", marginBottom: "4px", padding: "4px" }}>
                  {mainmp}
                </div>
              </p>
            </Box>
          </VerticalTimelineElement>
          
        </VerticalTimeline>
        
      </Box>
      
    );
  }