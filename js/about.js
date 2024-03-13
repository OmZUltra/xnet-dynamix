const mButton = document.getElementsByClassName('modal_button');

const memberName = document.getElementById('member_name');
const memberTitle = document.getElementById('member_title');
const memberInfo = document.getElementById('member_info');
const memberSkillList = document.getElementById('member_skill_list');

const modal = document.getElementsByTagName('dialog')[0];
const closeButton =  document.getElementsByClassName('close_button')[0];
const backdrop = window.getComputedStyle(modal, '::backdrop');

const membersObj = {
    on: {
        name: 'Obiora Nwafor', 
        title: 'Managing Director',
        info: `Obiora Nwafor is the Managing Director of Xnet Dynamix Services Limited. He is an
        experienced Oracle Applications Database Administrator with Strong PL/SQL
        background and 14+ years post qualification and cognate experience in multi-platform
        Application Database Administration with strong emphasis on Oracle E-Business Suite.
        He has a strong technical/functional knowledge of Oracle E-Business Suite and Hyperion
        Planning. A unique ability to design, develop, implement in line with the business
        strategy. Good knowledge of Enterprise Application Integration, data conversion and
        Requirement analysis. Focuses on researching and recommending emerging and
        innovative technologies to reduce costs, increase performance, and provide robust
        security and redundancy to prevent business interruptions and information loss.`,
        skillList: [`Over 15 cycles of Oracle ERP implementations and Hyperion Planning projects
        across Public and Private sectors, with critical inputs in database administration,
        performance tuning, patching, cloning, integration, data conversion, building data
        warehouse, operational data store, ERP customization, integration and managing
        day to day operations.`, `Designed, implemented and maintained several business continuity solutions that
        has guaranteed over 99% uptime on mission critical systems.`, `Upgraded over 7 Oracle EBS installations from R12.1.x to R12.2.x.`,
        `Self-motivated, results driven, analytical mind, able to work independently and
        under any condition. The go-to resource for solving complex problems in a fast-
        paced environment.`]
    },
    bo: {
        name: 'Boniface Oche', 
        title: 'Chief Technology Officer',
        info: `Boniface Oche is the Chief Technical Officer of Xnet Dynamix Services Limited. He is an
        expert in Oracle E-Business Suite (R12), including but not limited to Financials,
        Procurement Financial Accounting Hub (FAH) and Business Intelligence (OBIEE). A
        strong experience in designing and developing technical solutions for Oracle
        Applications including conversions, extensions, interfaces and reports.
        He is very skillful in Oracle development tools to design and develop Application
        extensions, integrations, conversions, XML transactions, reports modification/creation, AOL/CRM foundation, standard Applications workflows, any new application schema
        changes and new techniques to create extensions
        Very strong and deep understanding of the Oracle Applications technical architecture
        Mentored and expanded knowledge and capabilities of the Oracle EBS platform with
        other members of the technical team.`,
        skillList:[`Seasoned IT professional with comprehensive business/technical skill set and
        good knowledge in enterprise application integration (EAI), core banking,
        enterprise resource planning (ERP), process improvement, systems integration,
        requirements analysis, workflow design, project management, leadership,
        process modeling, testing/quality assurance, software development and
        customer service.`, `Experienced IT Consultant with over 13 years post qualification and diversified
        cognate experience in Project Implementation, Software Solution Design and
        Development, Deployment and Support, System Administration, Multi-platform
        Database Administration, eChannels/SWIFT Delivery Interface Implementation
        and IT Infrastructure Management. Excellent experience in Banking, Financial
        services and Insurance (BFSI) industries with Competent and sound Functional
        and Technical knowledge of Oracle E-Business Suite.`, `Proficient problem-solver and systems analyst who envisions business and
        technical perspectives to develop workable solutions. Adept at communicating
        with management, team members and all stakeholders to coordinate and ensure
        overall projects success.`, `Motivated achiever who guides organizations in applying technology to business
        settings, provides added value, and creates project deliverables in a timely
        manner.`] 
    },
    oi: {
        name: 'Olu Idowu', 
        title: 'Senior Manager',
        info: `Olu Idowu is a Senior Manager and Lead ERP Solutions and Data Warehousing of Xnet
        Dynamix Services Limited. He is an experienced Oracle Applications Database
        Administrator with Strong PL/SQL background and 12+ years post qualification and
        cognate experience in multi-platform Application Database Administration with strong
        emphasis on Oracle E-Business Suite. He has a strong technical/functional knowledge of
        Oracle E-Business Suite (Financials). A unique ability to design, develop, implement in
        line with the business strategy. Good knowledge of Enterprise Application Integration,
        data conversion and Requirement analysis. A team-oriented individual with strong analytical, communication, interpersonal, good
        organizing skills and research-oriented mind. He has the ability to handle and Supervise
        multiple tasks.`,
        skillList:[`Training on Oracle financial offering - Accounts Payable, Accounts Receivable,
        Asset, Cash Management, General Leger (Rapid Implementation). Data Migration,
        particularly validate data for loading.`, `Implementation of Oracle Financial, Supply Chain Management, Process
        Manufacturing and Enterprise Asset Management. Oracle E-Business Suite R12`, `Functional Support Person / Lead Consultant O2C business process.
        Environment: Oracle E-Business Suite R12`, `Lead Consultant for the following Oracle E-Business modules - Inventory,
        Purchasing, Payables and Fixed Asset.`]
    },
    uw: {
        name: 'Uwhojega Williams', 
        title: 'Senior Manager',
        info: `Uwhojega Williams is a Senior Manager and Lead Network and Security Solutions of
        Xnet Dynamix Services Limited. Williams has Over 15 years extensive experience in
        digital technology, Telecom, Global Enterprise, Services Provider, Network Security
        and Infrastructure services for business and technology strategies with proven record.
        Expert level hands on experience with IP nodes like Cisco (CRS, ASR, Nexus, Catalyst
        and ISR). Arista, Juniper, Huawei, Nokia/Alcatel etc.
        Expert knowledge and Hands on configuration on Low latency Specialized Electronic
        Trading Infrastructure. Strong Global Enterprise & Service Provider experience
        Network and Security Consultant, working with different technologies and vendor
        products which include but not limited to Palo Alto, Checkpoint firewall, F5, Cisco
        ASA, FWSM, Bluecoat SG Proxy and Linux OS.
        An astute professional in Planning and supporting of IP /MPLS network technologies
        such as BGP, L2VPN, VPLS, L3VPN, MPLS Traffic Engineering etc.`,
        skillList:[]
    },
    aym: {
        name: 'Abdulsamad Yusuf Mohammed', 
        title: 'Senior Manager',
        info: `
        Abdulsamad Yusuf Mohammed is a Senior Manager and Lead Software Development
        of Xnet Dynamix Services Limited. He is a career expert and professional .NET
        developer with over 16 years of experience in ASP.NET MVC, and client-side web
        development. He has worked on 10+ projects for SQL database design. Developed
        and maintained over 20 .NET web applications with 100% client satisfaction.`,
        skillList:[`Team lead in an Agile team of .NET developers for fast-paced software
        development life cycle.`, `Implemented a smoothing function into a client CAD tool that improved UX
        scores 25%.`, `Worked on 35+ SQL database design projects. Improved speed to complete
        projects by 35% in 15 weeks.`, `Developed and provided maintenance for 20+ .NET web applications using
        ASP.NET MVC, jQuery, HTML, and CSS. Achieved 100% client satisfaction and on-
        time completion.`, `Created remote coding and testing environment with bash and Docker scripts.`]
    }
};

const assembleModal = buttonName => {
    let profile;
    switch (buttonName) {
        case 'on':
            profile = membersObj.on;
            break;
        case 'bo':
            profile = membersObj.bo;
            break;
        case 'oi':
            profile = membersObj.oi;
            break;
        case 'uw':
            profile = membersObj.uw;
            break;
        case 'aym':
            profile = membersObj.aym;
            break;
    }
    memberName.innerHTML = profile.name;
    memberTitle.innerHTML = profile.title;
    memberInfo.innerHTML = profile.info;
    if (profile.skillList.length > 0) {
        for (let skill of profile.skillList) {
            if (memberSkillList.innerHTML !== '') {
                memberSkillList.innerHTML += `<li>${skill}</li>`;
            } else {
                memberSkillList.innerHTML += `\n<li>${skill}</li>`;
            }
        }
    } else {
        memberSkillList.style.display = 'none';
    }
    modal.showModal();
};


for(let button of mButton) {
    button.addEventListener('click', () => {assembleModal(button.getAttribute('name'))});
}

closeButton.addEventListener('click', () => {
    memberName.innerHTML = null;
    memberTitle.innerHTML =null;
    memberInfo.innerHTML = null;
    memberSkillList.innerHTML = null;
    memberSkillList.style.display = 'block';
    modal.close();
});