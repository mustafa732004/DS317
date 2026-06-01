/* Fill (Q3) & short (Q4) — answers verbatim from official Cairo CS317 solution sheets */
const FILL_SHORT_DATA = {
  1: {
    fill: [
      { q: "A DS that appears as only a single computer system is said to be ______.", a: ["transparent"] },
      { q: "App developed for DS A executed on DS B: ______.", a: ["interoperability"] },
      { q: "Masking volatile memory vs disk: ______ transparency.", a: ["persistence"] },
      { q: "Size scalability limits: centralized ______, ______, and ______.", a: ["services", "data", "algorithms", "services, data, algorithms"] },
      { q: "Scaling solved by hiding latencies, ______, and ______.", a: ["distribution", "replication", "distribution, replication"] },
      { q: "Caching and replication leads to ______ problem.", a: ["consistency", "Consistency"] },
      { q: "Hide latencies: ______ communication and/or reduce the overall communication.", a: ["asynchronous", "asynchronous communication"] },
      { q: "Collect at one site, process, distribute: ______ algorithm.", a: ["centralized", "Centralized"] }
    ],
    short: [
      { q: "Mention scalability techniques (a) and how each is implemented (b).", a: "A- hiding communication latencies: 1. asynchronous communication: 2. to reduce the overall communication, B- distribution: Distribution involves taking a component, splitting it into smaller parts, and subsequently spreading those parts across the system. C- replication: replicate components across a distributed system." },
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
      { q: "Variety of independent computers on different networks: ______ system.", a: ["heterogeneous multicomputer", "heterogeneous multicomputer system"] },
      { q: "CPU modes: ______ mode and ______ mode.", a: ["kernel", "user", "kernel mode", "user mode"] },
      { q: "Protect shared memory with ______ and ______.", a: ["semaphores", "monitors", "semaphores, monitors"] },
      { q: "In a ______ network, messages route at each switch step.", a: ["switched", "Switched", "In Switched"] },
      { q: "Bus-based multiprocessors problem: limited ______.", a: ["scalability", "there limited scalability"] },
      { q: "Caching and replication → ______ problem.", a: ["consistency", "Consistency"] },
      { q: "OS categories: ______ coupled and ______ coupled systems.", a: ["tightly", "loosely", "tightly coupled", "loosely coupled"] },
      { q: "Reduce bus scalability using ______ and dividing memory into ______.", a: ["caches", "modules", "using caches", "caches, modules"] },
      { q: "Reduce switching cost with ______ network or ______ (NUMA).", a: ["omega", "nonuniform memory access", "omega network", "NonUniform Memory Access"] },
      { q: "______ and ______ belong to switched multicomputers.", a: ["massively parallel processors", "clusters of workstations", "Massively Parallel Processors", "Clusters Of Workstations"] }
    ],
    short: [
      { q: "Compare tightly coupled vs loosely coupled operating systems.", a: "Tightly coupled: the OS tries to maintain a single, global view of the resources it manages; DOS; multiprocessors and homogeneous multicomputers. Loosely coupled: collection of computers each running their own OS, cooperating to share services; NOS; heterogeneous multicomputer systems." },
      { q: "Difference between distributed OS and network OS.", a: "Network OS: heterogeneous hardware, independent nodes with own OS, primitive, easy to add/remove machines. DOS makes serious attempt at full transparency (single-system view)." },
      { q: "Page-based DSM: idea, page fault, improve transfer cost, false sharing.", a: "a) Virtual memory per node; address space in pages spread over processors. b) Trap on non-local reference; OS fetches page (remote RAM as backing store) and restarts instruction. c) Replicate read-only pages; replicate more pages. d) False sharing: two independent processes' data in the same page." },
      { q: "Middleware role, four services, interface completeness.", a: "Hides heterogeneity and improves transparency. Services: name, persistence, distributed transactions, security. Complete means everything needed to implement is specified; incompleteness prevents interoperability." }
    ]
  },
  3: {
    fill: [
      { q: "1. Middleware is a layer of software used in NOSs to hide the ______ of the underlying platforms.", a: ["heterogeneity"] },
      { q: "2. Middleware also improves distribution ______.", a: ["transparency"] },
      { q: "3. Middleware sits in the middle between applications and the network ______.", a: ["operating", "operating system", "network operating"] },
      { q: "4. Middleware provides an additional layer on top of the ______ implementing general-purpose services.", a: ["nos", "NOS"] },
      { q: "5. Each local system provides local resource ______.", a: ["management"] },
      { q: "6. Each local system provides simple communication means to connect to other ______.", a: ["computers"] },
      { q: "7. Middleware itself will not manage an individual node; this is left entirely to the local ______.", a: ["os", "OS"] },
      { q: "8. To hide heterogeneity, many middleware systems offer a complete collection of ______.", a: ["services"] },
      { q: "9. One key model is treating everything as a ______.", a: ["file"] },
      { q: "10. In the file model, every \"file\" is exposed through the same ______.", a: ["api", "API"] },
      { q: "11. The file model was originally introduced in UNIX and rigorously followed in ______.", a: ["plan 9", "Plan 9"] },
      { q: "12. All resources, including I/O devices, are treated as ______.", a: ["files"] },
      { q: "13. There is no difference whether a file is local or ______.", a: ["remote"] },
      { q: "14. A DFS is a classical model of a file system distributed across multiple ______.", a: ["machines"] },
      { q: "15. The purpose of DFS is to promote sharing of ______ files.", a: ["dispersed"] },
      { q: "16. The server interface is the normal set of file ______.", a: ["operations"] },
      { q: "17. Distribution transparency is supported only for traditional ______.", a: ["files"] },
      { q: "18. RPC: a process calls a procedure whose implementation is on a ______ machine.", a: ["remote"] },
      { q: "19. In RPC, parameters are transparently ______ to the remote machine.", a: ["shipped"] },
      { q: "20. Then the results are sent back to the ______.", a: ["caller"] },
      { q: "21. With RPC, the calling process remains unaware of ______ communication.", a: ["network"] },
      { q: "22. In object orientation, remote objects are invoked transparently; each object implements an ______.", a: ["interface"] },
      { q: "23. An interface consists of the ______ the object implements.", a: ["methods"] },
      { q: "24. The only thing that a process sees of an object is its ______.", a: ["interface"] },
      { q: "25. Name services define external names identified by a ______ server.", a: ["name"] },
      { q: "26. Persistence services help store long-running ______ instead of holding them in memory.", a: ["workflows"] },
      { q: "27. Persistence allows an idle instance to be unloaded to save ______ and enable scalability.", a: ["memory"] },
      { q: "28. Distributed transaction services ensure ______ of read and write operations.", a: ["atomicity"] },
      { q: "29. Atomicity means the transaction either succeeds or fails leaving all referenced data ______.", a: ["unaffected"] },
      { q: "30. Security in middleware should be ______ and cannot rely only on underlying local OSs.", a: ["invasive"] },
      { q: "31. A truly open DS is specified by means of interfaces that are ______.", a: ["complete"] },
      { q: "32. Complete means everything needed for ______ the system has been specified.", a: ["implementing", "implementation"] }
    ],
    short: [
      { q: "Why neither DOS nor NOS alone fully qualifies as a DS?", a: "Because a DOS does not handle a collection of independent computers as its target, and a NOS does not provide a view of a single coherent system. A DS needs properties from both, such as transparency and scalability." },
      { q: "What is middleware and its two main benefits?", a: "Middleware is a layer of software used in NOSs to hide heterogeneity of underlying platforms and to improve distribution transparency." },
      { q: "Best of both NOS and DOS.", a: "Combine scalability and openness of NOSs with transparency and ease of use of DOSs, achieved by adding middleware." },
      { q: "How middleware sits in the middle.", a: "Middleware is positioned between applications and the network operating system, providing general-purpose services that simplify communication and resource access for applications." },
      { q: "What each local system provides; why middleware doesn't manage nodes.", a: "Each local system provides local resource management and simple communication means. Middleware itself does not manage an individual node; that responsibility is left to the local OS." },
      { q: "Idea behind treating everything as a file.", a: "Middleware provides a unified abstraction so many resources—documents, devices, directories, disks, even communication endpoints—can be accessed using a common file abstraction through the same basic API/commands." },
      { q: "Why DFS transparency is limited to traditional files.", a: "Because transparency works well for traditional data files, while other aspects (like starting processes on specific machines) often require explicit handling, so full transparency is not always supported." },
      { q: "How RPC hides network communication.", a: "In RPC, a process calls a remote procedure as if it were local; middleware transparently ships parameters to the remote machine, executes the procedure there, and returns results, so the caller remains unaware of the network communication." },
      { q: "What is an object interface; what does the user see?", a: "An interface is the set of methods the object implements. The only thing a process/users see is the object's interface, while internal implementation details are hidden." },
      { q: "Why middleware openness can be limited.", a: "Middleware implementations often create strong dependencies on specific middleware because they may be less open than claimed. True openness requires middleware to be defined using complete interfaces; if interfaces are incomplete, implementations may not interoperate." }
    ]
  },
  4: {
    fill: [
      { q: "IP is a ______-layer protocol.", a: ["network"] },
      { q: "UDP is a ______-layer protocol.", a: ["transport"] },
      { q: "Connectionless has low ______.", a: ["overhead"] },
      { q: "Connectionless protocols are usually ______.", a: ["stateless"] },
      { q: "Client may ______ the request when no reply comes.", a: ["resend"] },
      { q: "Client cannot tell if the ______ failed.", a: ["reply"] },
      { q: "Add ______ + retransmission at application.", a: ["timeouts", "timeout"] },
      { q: "Use ______ IDs to handle duplicates.", a: ["request", "sequence"] },
      { q: "Peers establish a ______ before user data.", a: ["connection", "channel"] },
      { q: "TCP handshake first packet: ______.", a: ["syn", "SYN"] },
      { q: "Layers: user-interface, processing, and ______.", a: ["data"] },
      { q: "IP is a ______ protocol.", a: ["connectionless"] },
      { q: "TCP is ______ transport.", a: ["connection-oriented", "connection oriented"] },
      { q: "UDP is ______.", a: ["connectionless"] },
      { q: "TCP sends ______.", a: ["segments"] },
      { q: "Three-way handshake establishes a ______.", a: ["connection"] },
      { q: "Second handshake message: ______.", a: ["syn-ack", "syn ack", "SYN-ACK"] },
      { q: "Third handshake message: ______.", a: ["ack", "ACK"] },
      { q: "SYN stands for ______.", a: ["synchronize", "Synchronize"] },
      { q: "ACK means ______ receipt.", a: ["acknowledge", "confirm"] },
      { q: "A ______ implements a specific service.", a: ["server"] },
      { q: "May use ______ or ______ protocol.", a: ["connectionless", "connection oriented", "connectionless, connection oriented"] },
      { q: "Process groups: ______ and ______ processes.", a: ["server", "client", "server, client", "A server processes", "A client processes"] },
      { q: "______ level interfaces with the user (display management).", a: ["user-interface", "the user-interface", "The user-interface level"] },
      { q: "______ level typically contains applications.", a: ["processing", "The processing", "processing level"] },
      { q: "______ level contains actual data acted on.", a: ["data", "Data level"] },
      { q: "______ level: programs for end users to interact with applications.", a: ["user-interface", "The user-interface level"] },
      { q: "______ level contains core functionality.", a: ["processing", "processing level"] },
      { q: "______ level maintains actual data.", a: ["data", "the data level"] },
      { q: "In ______ architecture a server may act as client.", a: ["three-tiered", "three tiered", "three-tier", "three-tiered architecture"] }
    ],
    short: [
      { q: "Describe connectionless protocols.", a: "No setup in advance is needed. The sender just transmits the first message when it is ready. Dropping a letter in a mailbox is an example of connectionless communication." },
      { q: "Describe three-tiered architecture.", a: "Distribute the programs in the application layers across different machines, clients and servers. And A server may sometimes need to act as a client." },
      { q: "User-interface level.", a: "Contains all that is necessary to directly interface with the user, such as display management." },
      { q: "Processing level.", a: "Typically contains the applications." },
      { q: "Data level.", a: "Contains the actual data that is being acted on." },
      { q: "Vertical distribution.", a: "The logical placement of different components on different machines." },
      { q: "Horizontal distribution.", a: "A client or server may be physically split up into logically equivalent parts, but each part is operating on its own share of the complete data set, thus balancing the load." }
    ]
  },
  5: {
    fill: [],
    short: [
      { q: "Describe connection-oriented protocols (sheet Q3).", a: "Before exchanging data the sender and receiver first explicitly establish a connection, and possibly negotiate the protocol they will use. When they are done, they must release (terminate) the connection. The telephone is a connection-oriented communication system." },
      { q: "What is a protocol suite? (sheet Q3)", a: "The collection of protocols used in a particular system." },
      { q: "Usefulness of session-layer synchronization facilities.", a: "To allow users to insert checkpoints into long transfers, so that in the event of a crash it is necessary to go back only to the last checkpoint, rather than all the way back to the beginning. It allows information of different streams, perhaps originating from different sources, to be properly combined or synchronized." },
      { q: "Why is low-level message passing fundamental?", a: "Because regardless of which high-level service we want (RPC, RMI, streaming, messaging), everything ultimately becomes an exchange of bits over a network. The underlying network carries those bits, and the higher-level protocols build their behavior on top of this basic message passing." },
      { q: "Agree on the meaning of the bits being sent.", a: "It means the sender and receiver must use the same rules/protocols for how data is represented and interpreted—e.g., how to detect the start/end of a message, how 0 and 1 are signaled electrically, how numbers/strings are encoded, and how errors are handled." },
      { q: "What does a system call do for communication?", a: "When process A wants to communicate with process B, it first prepares the message in its own memory, then makes a system call so the operating system can transfer the message onto the network toward B according to the networking stack/protocols." },
      { q: "Examples of agreements at different protocol levels.", a: "Electrical signaling levels (volts for 0/1), how the receiver knows message boundaries, how errors are detected (checksum/parity), what to do when a message is damaged/lost (retransmit/ignore), and how long data items (numbers, strings) are represented and encoded." },
      { q: "Why is OSI model useful though OSI protocols unused?", a: "Because the model provides a clear conceptual framework: it organizes communication into layers, defines what each layer should do, and shows how data is prepared for delivery. Even if the exact OSI implementations weren't common, the abstraction helps understanding real networks." },
      { q: "Compare connection-oriented vs connectionless.", a: "Connection-oriented means the sender and receiver explicitly establish a connection first and release it later (like telephone calls). Connectionless means no setup is needed; the sender just sends the first message when ready (like dropping a letter into a mailbox). Connectionless has low overhead, but it does not guarantee ordering because packets may follow different routes and arrive at different times." },
      { q: "Why layers provide service and shield upper layers.", a: "Because each layer focuses on a specific aspect of communication. Upper layers don't need to know the exact details of how bits are transmitted physically or how frames are error-checked. They just use the service interface offered by the layer below, making system design simpler and modular." },
      { q: "Role of the Data Link layer.", a: "The Data Link layer groups bits into frames and uses error detection mechanisms such as checksums and parity. When an error is detected, the receiver asks for retransmission. It also marks frames using specific bit patterns at the start and end, helping the receiver correctly identify frame boundaries." },
      { q: "Network routing; shortest vs best route.", a: "Because the network layer is responsible for delivering packets from source host to destination host across multiple hops. \"Shortest route is not always the best route\" implies that routing decisions may depend on factors like congestion, reliability, or cost—not only hop count." },
      { q: "Why TCP may be unattractive for request-reply client-server.", a: "The document indicates TCP's overhead comes from managing connections, and the TCP behavior is not tailored to efficiently support synchronous request-reply patterns in many client-server interactions. Even when messages don't get lost, TCP still performs connection setup/maintenance in a way that can introduce more overhead than necessary for certain request-reply workflows." }
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
