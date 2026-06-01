/* Q(3) Fill-in-the-blank & Q(4) Short answer — wording/answers from official solution sheets */
const FILL_SHORT_DATA = {
  1: {
    fill: [
      { q: "A DS that appears to users/applications as if it were only a single computer system is said to be ______.", a: ["transparent"] },
      { q: "To what extent an app developed for DS A runs on DS B is called ______.", a: ["interoperability"] },
      { q: "Masking whether a resource is in volatile memory or on disk is ______ transparency.", a: ["persistence", "persistence transparency"] },
      { q: "Size scalability limits: centralized ______, ______, and ______.", a: ["services", "data", "algorithms", "services, data, algorithms"] },
      { q: "Scaling problems solved by hiding communication latencies, ______, and ______.", a: ["distribution", "replication", "distribution, replication"] },
      { q: "Caching and replication leads to ______ problem.", a: ["consistency"] },
      { q: "Hide latencies using ______ and/or reduce the overall communication.", a: ["asynchronous communication", "asynchronous"] },
      { q: "Collect info at one site, process, distribute results: ______ algorithm.", a: ["centralized", "Centralized"] }
    ],
    short: [
      { q: "Mention scalability techniques (a) and how each is implemented (b).", a: "A- hiding communication latencies: 1. asynchronous communication; 2. to reduce the overall communication. B- distribution: taking a component, splitting it into smaller parts, and spreading those parts across the system. C- replication: replicate components across a distributed system." },
      { q: "Define a distributed system in your own words based on the document.", a: "A distributed system is a collection of independent computers that appears to users as a single coherent system." },
      { q: "Why are distributed systems often easier to scale and expand?", a: "Because resources can be added or upgraded across multiple machines rather than limited to a single system, enabling growth without a major redesign." },
      { q: "What is transparency and why is it important?", a: "Transparency means hiding the distribution of resources from users and applications so they experience a simple, unified system; it reduces complexity and makes resource use seamless." },
      { q: "List at least three motivations for distributed systems.", a: "Resource sharing: Multiple users can access shared resources efficiently. Availability: System components are accessible even if some parts fail. Extensibility: The system can grow and adapt to changing needs." },
      { q: "What is a Digital Firm?", a: "A firm with digitally enabled relationships and rapid sensing/response to changes in the business environment." },
      { q: "Role of middleware in a distributed system.", a: "Middleware sits between higher-level applications and the local OS to enable communication, coordination, and services across distributed components." },
      { q: "Example where users are unaware of request flow.", a: "A workflow information system used across departments; users interact with the system without needing to know the internal routing of orders." },
      { q: "How is the WWW characterized as a distributed system?", a: "It is described as a distributed system where documents appear to users as being served from a distributed set of servers, not a single server." },
      { q: "Define transparency and name one form.", a: "Transparency hides aspects of distribution (e.g., location, migration, replication) so users don't see the underlying complexity. Example: location transparency hides where resources reside." },
      { q: "What is interoperability and why important for openness?", a: "Interoperability is the ability to intermix components from different manufacturers, enabling diverse systems to work together and coexist under open standards." }
    ]
  },
  2: {
    fill: [
      { q: "Two groups: shared memory (______) and distributed memory (______).", a: ["multiprocessors", "multicomputers"] },
      { q: "A variety of independent computers on different networks: ______ system.", a: ["heterogeneous multicomputer", "heterogeneous multicomputer system"] },
      { q: "CPU modes: ______ mode and ______ mode.", a: ["kernel", "user", "kernel mode", "user mode"] },
      { q: "Protect shared memory with ______ and ______.", a: ["semaphores", "monitors", "semaphores, monitors"] },
      { q: "In a ______ interconnection network, messages route at each switch step.", a: ["switched", "Switched", "In Switched"] },
      { q: "Bus-based multiprocessors problem: limited ______.", a: ["scalability", "there limited scalability"] },
      { q: "Caching and replication → ______ problem.", a: ["consistency", "Consistency"] },
      { q: "OS categories: ______ coupled and ______ coupled systems.", a: ["tightly", "loosely", "tightly coupled", "loosely coupled"] },
      { q: "Reduce bus scalability using ______ and dividing memory into ______.", a: ["caches", "modules", "using caches", "caches, modules"] },
      { q: "Reduce switching cost with ______ network or ______ (NUMA).", a: ["omega", "nonuniform memory access", "omega network", "NonUniform Memory Access"] },
      { q: "______ and ______ belong to switched multicomputers.", a: ["massively parallel processors", "clusters of workstations", "Massively Parallel Processors", "Clusters Of Workstations"] }
    ],
    short: [
      { q: "Compare tightly coupled vs loosely coupled operating systems.", a: "Tightly coupled: OS maintains single global view of resources; DOS; multiprocessors and homogeneous multicomputers. Loosely coupled: collection of computers each running own OS, cooperating to share services; NOS; heterogeneous multicomputer systems." },
      { q: "Difference between distributed OS and network OS.", a: "Network OS: heterogeneous hardware, independent nodes with own OS, primitive, easy to add/remove machines. DOS makes serious attempt at full transparency (single-system view)." },
      { q: "Page-based distributed shared memory: idea and page fault handling.", a: "Virtual memory per node with address space in pages spread over processors; on fault OS fetches remote page (remote RAM as backing store) and restarts instruction." },
      { q: "Improve cost of transferring a page; what is false sharing?", a: "Replicate read-only pages; replicate more pages. False sharing: two independent processes' data in the same page." },
      { q: "Middleware role, four services, and interface completeness.", a: "Hides heterogeneity, improves transparency. Services: naming, persistence, distributed transactions, security. Complete interfaces specify everything needed to implement; incompleteness prevents interoperability." }
    ]
  },
  3: {
    fill: [
      { q: "Middleware hides ______ of underlying platforms.", a: ["heterogeneity"] },
      { q: "Middleware improves distribution ______.", a: ["transparency"] },
      { q: "Middleware sits between applications and the network ______.", a: ["operating", "operating system", "network operating"] },
      { q: "Middleware is an additional layer on the ______.", a: ["nos", "NOS"] },
      { q: "Each local system provides local resource management and simple ______ means.", a: ["communication"] },
      { q: "Middleware will not manage an individual node; the local ______ does.", a: ["os", "OS"] },
      { q: "File model originally introduced in UNIX and ______.", a: ["plan 9", "Plan 9"] },
      { q: "DFS promotes sharing of ______ files.", a: ["dispersed"] },
      { q: "RPC: parameters shipped transparently; caller unaware of ______.", a: ["network communication"] },
      { q: "An interface consists of the ______ the object implements.", a: ["methods"] },
      { q: "Name services define external names for components identified by a ______.", a: ["name server"] },
      { q: "Persistence services help store long-running ______ instead of holding them in memory.", a: ["workflows"] },
      { q: "Distributed transaction services ensure ______ of read and write operations.", a: ["atomicity"] },
      { q: "Atomicity means the transaction either succeeds or fails leaving data ______.", a: ["unaffected"] },
      { q: "Security in middleware should be ______.", a: ["invasive"] },
      { q: "A truly open DS is specified by means of interfaces that are ______.", a: ["complete"] },
      { q: "Complete means everything needed for ______ the system has been specified.", a: ["implementing", "implementation"] }
    ],
    short: [
      { q: "Why neither DOS nor NOS alone fully qualifies as a DS?", a: "Because a DOS does not handle a collection of independent computers as its target, and a NOS does not provide a view of a single coherent system. A DS needs properties from both, such as transparency and scalability." },
      { q: "What is middleware and its two main benefits?", a: "Middleware is a layer of software used in NOSs to hide the heterogeneity of the underlying platforms and improve distribution transparency." },
      { q: "Best of both NOS and DOS.", a: "Middleware combines scalability/openness of NOS with transparency/ease of DOS." },
      { q: "How middleware sits between applications and networking.", a: "Middleware sits in the middle between applications and the network operating system, providing an additional layer implementing general-purpose services." },
      { q: "What each local system provides; why middleware doesn't manage nodes.", a: "Each local system provides local resource management and simple communication means; node management is left entirely to the local OS." },
      { q: "Idea behind treating everything as a file.", a: "One key model is treating everything as a file; every file is exposed through the same API (originally UNIX and Plan 9)." },
      { q: "Why DFS transparency is limited to traditional files.", a: "Distribution transparency is supported only for traditional files." },
      { q: "How RPC hides network communication.", a: "A process calls a procedure on a remote machine; parameters are transparently shipped, executed remotely, results sent back; the calling process remains unaware of network communication." },
      { q: "What is an object interface; what does the user see?", a: "An interface consists of the methods the object implements; the only thing a process sees of an object is its interface." },
      { q: "Why middleware openness can be limited.", a: "A truly open DS needs complete interface definitions; incomplete definitions prevent full openness/interoperability." }
    ]
  },
  4: {
    fill: [
      { q: "IP is a ______-layer protocol.", a: ["network"] },
      { q: "UDP is a ______-layer protocol.", a: ["transport"] },
      { q: "Connectionless has low ______ vs connection-oriented.", a: ["overhead"] },
      { q: "Connectionless protocols are usually ______.", a: ["stateless"] },
      { q: "Client may ______ request when no reply arrives.", a: ["resend"] },
      { q: "Client cannot tell if ______ failed.", a: ["reply", "the reply"] },
      { q: "Add ______ + retransmission at application.", a: ["timeouts", "timeout"] },
      { q: "Use ______ IDs to handle duplicates.", a: ["request", "sequence"] },
      { q: "Peers establish a ______ before user data (connection-oriented).", a: ["connection", "channel"] },
      { q: "TCP handshake first packet: ______.", a: ["syn", "SYN"] },
      { q: "Client-server layers: user-interface, processing, and ______.", a: ["data"] },
      { q: "IP is a ______ protocol.", a: ["connectionless"] },
      { q: "TCP is ______ transport.", a: ["connection-oriented", "connection oriented"] },
      { q: "UDP is ______.", a: ["connectionless"] },
      { q: "TCP sends ______.", a: ["segments"] },
      { q: "Three-way handshake establishes a ______.", a: ["connection"] },
      { q: "Second handshake message: ______.", a: ["syn-ack", "syn ack", "SYN-ACK"] },
      { q: "Third handshake message: ______.", a: ["ack", "ACK"] },
      { q: "SYN stands for ______.", a: ["synchronize"] },
      { q: "ACK means ______ receipt.", a: ["acknowledge", "confirm"] },
      { q: "A ______ implements a specific service.", a: ["server"] },
      { q: "Client-server may use ______ or ______ protocol.", a: ["connectionless", "connection oriented", "connectionless, connection oriented"] },
      { q: "Process groups: ______ processes and ______ processes.", a: ["server", "client", "server, client"] },
      { q: "______ level interfaces directly with the user.", a: ["user-interface", "the user-interface"] },
      { q: "______ level typically contains applications.", a: ["processing", "the processing"] },
      { q: "______ level contains actual data acted on.", a: ["data"] },
      { q: "Core functionality is in the ______ level.", a: ["processing", "processing level"] },
      { q: "Programs maintaining data are in ______ level.", a: ["data", "the data level"] },
      { q: "In ______ architecture a server may act as client.", a: ["three-tiered", "three tiered", "three-tier"] }
    ],
    short: [
      { q: "Describe connectionless protocols.", a: "No setup in advance; sender transmits when ready. Example: dropping a letter in a mailbox." },
      { q: "Describe three-tiered architecture.", a: "Programs distributed across clients and servers; a server may sometimes act as a client." },
      { q: "User-interface level of client-server applications.", a: "Everything needed to interface with the user (e.g. display management)." },
      { q: "Processing level.", a: "Typically contains the applications / core functionality." },
      { q: "Data level.", a: "Contains the actual persistent data being acted on." },
      { q: "Vertical distribution.", a: "Logical placement of different components on different machines." },
      { q: "Horizontal distribution.", a: "Client/server split into equivalent parts, each with its own share of data, balancing load." }
    ]
  },
  5: {
    fill: [
      { q: "OSI model has ______ layers.", a: ["7", "seven"] },
      { q: "Three lowest OSI layers: Physical, ______, Network.", a: ["data link", "datalink", "Data Link"] },
      { q: "Data Link groups bits into ______.", a: ["frames"] },
      { q: "Routing is primary task of ______ layer.", a: ["network"] },
      { q: "Transport provides reliable ______.", a: ["connection"] },
      { q: "X.25 is ______; IP is ______.", a: ["connection-oriented", "connectionless", "connection oriented, connectionless"] },
      { q: "Session layer: dialog control and ______.", a: ["synchronization"] },
      { q: "Presentation: translation, compression, ______.", a: ["encryption"] }
    ],
    short: [
      { q: "Usefulness of session-layer synchronization facilities.", a: "Checkpoints in long transfers (recover from last checkpoint); combine/synchronize streams from different sources." },
      { q: "Why is low-level message passing fundamental?", a: "All high-level services ultimately exchange bits over the network; higher protocols build on this." },
      { q: "Agree on the meaning of bits being sent.", a: "Same rules for representation, boundaries, encoding, and error handling." },
      { q: "What does a system call do for communication?", a: "OS transfers message from process memory onto the network per the networking stack." },
      { q: "Examples of agreements at different protocol levels.", a: "Volts for 0/1, message boundaries, checksums/parity, retransmit policy, data encoding." },
      { q: "Why is OSI model useful though OSI protocols unused?", a: "Clear framework of layers, responsibilities, and data preparation; helps understand real networks." },
      { q: "Compare connection-oriented vs connectionless.", a: "CO: setup/release (telephone). CL: no setup (mailbox); lower overhead but no guaranteed ordering." },
      { q: "Why layers provide service and shield upper layers.", a: "Modularity: upper layers use service interface without physical/error details." },
      { q: "Role of Data Link layer.", a: "Frames, checksums/parity, retransmit on error, frame boundaries." },
      { q: "Network layer routing; shortest vs best route.", a: "Delivers packets host-to-host; best route may consider congestion/reliability/cost, not only hops." },
      { q: "Why TCP may be unattractive for request-reply client-server.", a: "Connection overhead not tailored to efficient synchronous request-reply patterns." },
      { q: "Describe connection-oriented protocols.", a: "Establish connection before data, negotiate protocol, release when done; e.g. telephone." },
      { q: "What is a protocol suite?", a: "The collection of protocols used in a particular system." }
    ]
  }
};

if (typeof QUIZ_DATA !== "undefined") {
  Object.keys(FILL_SHORT_DATA).forEach((k) => {
    const ch = QUIZ_DATA.chapters.find((c) => c.id === +k);
    if (ch) {
      ch.fill = FILL_SHORT_DATA[k].fill;
      ch.short = FILL_SHORT_DATA[k].short;
    }
  });
}
