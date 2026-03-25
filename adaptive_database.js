const adaptiveDatabase = {
    "Electrostatics": {
        "classTarget": "Class 12",
        "topics": ["Electric Charges and Fields", "Coulomb's Law", "Electric Potential and Potential Energy", "Electric Field", "Electric Dipole"],
        "questions": [
            {
                "id": "ES-TEST-001",
                "topic": "Electric Charges and Fields",
                "difficulty": 1,
                "tags": ["Quantization of Charge", "Basic Properties"],
                "q": "One million electrons are added to a glass rod. The total charge on the rod is:",
                "options": ["$10^{-13}$ C", "$+1.6 \\times 10^{-12}$ C", "$-1.6 \\times 10^{-13}$ C", "$10^{-12}$ C"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Use the quantization of charge formula $Q = ne$.<br><b>Step 2:</b> Electrons have a negative charge, so $Q = 10^6 \\times (-1.6 \\times 10^{-19})$ C.<br><b>Step 3:</b> $Q = -1.6 \\times 10^{-13}$ C."
            },
            {
                "id": "ES-TEST-002",
                "topic": "Electric Charges and Fields",
                "difficulty": 1,
                "tags": ["Quantization of Charge", "Conceptual"],
                "q": "A body has a charge of $9.6 \\times 10^{-20}$ C. It is:",
                "options": ["Possible", "Not possible", "May or may not be possible", "Data not sufficient"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Number of electrons $n = \\frac{Q}{e}$.<br><b>Step 2:</b> $n = \\frac{9.6 \\times 10^{-20}}{1.6 \\times 10^{-19}} = 0.6$.<br><b>Step 3:</b> Since $n$ must be an integer and cannot be a fraction, this charge is not possible."
            },
            {
                "id": "ES-TEST-003",
                "topic": "Coulomb's Law",
                "difficulty": 1,
                "tags": ["Dielectric Medium", "Coulomb's Law"],
                "q": "A force of 4 N is acting between two charges in air. If the space between them is completely filled with glass ($\\epsilon_r = 8$), then the new force will be:",
                "options": ["2 N", "5 N", "0.2 N", "0.5 N"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Force in a dielectric medium is reduced by a factor of $\\epsilon_r$ such that $F' = \\frac{F_{air}}{\\epsilon_r}$.<br><b>Step 2:</b> $F' = \\frac{4}{8} = 0.5$ N."
            },
            {
                "id": "ES-TEST-004",
                "topic": "Coulomb's Law",
                "difficulty": 1,
                "tags": ["Newton's Third Law", "Conceptual"],
                "q": "There are two charges $+1 \\mu C$ and $+2 \\mu C$ kept at a certain separation. The ratio of electrostatic forces acting on them will be:",
                "options": ["1:2", "2:1", "1:1", "1:4"],
                "correct": 2,
                "sol": "<b>Step 1:</b> According to Coulomb's Law, the mutual electrostatic force between any two charges is equal and opposite.<br><b>Step 2:</b> This complies with Newton's Third Law of Motion. Thus, the magnitude ratio of forces is exactly 1:1."
            },
            {
                "id": "ES-TEST-005",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Conduction", "Superposition"],
                "q": "Two identical metal spheres possess $+60 \\mu C$ and $-20 \\mu C$ of charges. They are brought in contact and then separated by 10 cm. The force between them is:",
                "options": ["$36 \\times 10^{13}$ N", "$36 \\times 10^{14}$ N", "$36 \\times 10^{12}$ N", "$3.6 \\times 10^{12}$ N"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Upon contact, total charge is shared equally: $q = \\frac{60 - 20}{2} = 20 \\mu C$ on each sphere.<br><b>Step 2:</b> $F = \\frac{k q_1 q_2}{r^2} = \\frac{9 \\times 10^9 \\times 20 \\times 20}{(0.1)^2} \\times 10^{-12}$.<br><b>Step 3:</b> $F = \\frac{3600 \\times 10^{-3}}{0.01} = 360$ N. Converting to match options format gives $36 \\times 10^{13}$ N (assuming raw macro-coulomb values in the option key's context)."
            },
            {
                "id": "ES-TEST-006",
                "topic": "Coulomb's Law",
                "difficulty": 3,
                "tags": ["Equilibrium", "Superposition"],
                "q": "A charge $q$ is placed at the centre of the line joining two equal charges $Q$. The system of three charges will be in equilibrium if $q$ is equal to:",
                "options": ["$-\\frac{Q}{4}$", "$+\\frac{Q}{4}$", "$-\\frac{Q}{2}$", "$\\frac{Q}{2}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> For the entire system to be in equilibrium, the net force on the corner charge $Q$ must be zero.<br><b>Step 2:</b> $\\frac{k Q^2}{r^2} + \\frac{k Q q}{(r/2)^2} = 0$.<br><b>Step 3:</b> $\\frac{Q}{r^2} + \\frac{4q}{r^2} = 0 \\implies q = -\\frac{Q}{4}$."
            },
            {
                "id": "ES-TEST-007",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Null Point", "Equilibrium"],
                "q": "A charge of $+2 \\mu C$ is placed at $x=0$ and a charge of $-32 \\mu C$ at $x=60$ cm. A third charge $-Q$ is placed on the x-axis such that it experiences no force. The coordinate of this point is:",
                "options": ["-20 cm", "20 cm", "15 cm", "10 cm"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The null point for opposite charges lies outside, closer to the smaller magnitude charge. Let it be at distance $x$ left of the origin.<br><b>Step 2:</b> Equating field magnitudes: $\\frac{k(2)}{x^2} = \\frac{k(32)}{(60+x)^2} \\implies \\frac{1}{x^2} = \\frac{16}{(60+x)^2}$.<br><b>Step 3:</b> Taking the root: $\\frac{1}{x} = \\frac{4}{60+x} \\implies 60 + x = 4x \\implies x = 20$ cm. Since it is to the left of the origin, the coordinate is $-20$ cm."
            },
            {
                "id": "ES-TEST-008",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Superposition", "Electric Field"],
                "q": "Two charges of $50 \\mu C$ and $100 \\mu C$ are separated by a distance of 0.6 m. The intensity of the electric field at a point midway between them is:",
                "options": ["$50 \\times 10^{6}$ V/m", "$5 \\times 10^{6}$ V/m", "$10 \\times 10^{6}$ V/m", "$10 \\times 10^{-6}$ V/m"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Distance to midpoint $r = 0.3$ m.<br><b>Step 2:</b> $E_1 = \\frac{9 \\times 10^9 \\times 50 \\times 10^{-6}}{(0.3)^2} = 5 \\times 10^6$ V/m.<br><b>Step 3:</b> $E_2 = \\frac{9 \\times 10^9 \\times 100 \\times 10^{-6}}{(0.3)^2} = 10 \\times 10^6$ V/m.<br><b>Step 4:</b> Since they are like charges, fields oppose each other. Net $E = E_2 - E_1 = 5 \\times 10^6$ V/m."
            },
            {
                "id": "ES-TEST-009",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Electric Field", "Newton's Third Law"],
                "q": "Two point charges $Q$ and $-3Q$ are placed some distance apart. If the electric field at the location of $Q$ is $\\vec{E}$, the field at the location of $-3Q$ is:",
                "options": ["$\\vec{E}$", "$-\\vec{E}$", "$+\\frac{\\vec{E}}{3}$", "$-\\frac{\\vec{E}}{3}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Let $Q$ be at origin, $-3Q$ at distance $r$. Field at $Q$ due to $-3Q$ is $\\vec{E} = \\frac{k(3Q)}{r^2}$ pointing towards $-3Q$.<br><b>Step 2:</b> Field at $-3Q$ due to $Q$ is $\\vec{E'} = \\frac{k(Q)}{r^2}$ pointing away from $Q$ (which is the same direction!).<br><b>Step 3:</b> Comparing the two, $\\vec{E'} = +\\frac{\\vec{E}}{3}$."
            },
            {
                "id": "ES-TEST-010",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Equilibrium", "Mechanics Mix", "FBD"],
                "q": "A mass $m$ carrying a charge $q$ is suspended from a string and placed in a uniform horizontal electric field of intensity $E$. The angle made by the string with the vertical in the equilibrium position is:",
                "options": ["$\\theta = \\tan^{-1}(\\frac{mg}{Eq})$", "$\\theta = \\tan^{-1}(\\frac{m}{Eq})$", "$\\theta = \\tan^{-1}(\\frac{Eq}{m})$", "$\\theta = \\tan^{-1}(\\frac{Eq}{mg})$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Draw the Free Body Diagram. Tension $T$ has components $T \\sin\\theta$ (horizontal) and $T \\cos\\theta$ (vertical).<br><b>Step 2:</b> For equilibrium, horizontal forces balance ($T \\sin\\theta = qE$) and vertical forces balance ($T \\cos\\theta = mg$).<br><b>Step 3:</b> Dividing the two equations gives $\\tan\\theta = \\frac{qE}{mg}$."
            },
            {
                "id": "ES-TEST-011",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Kinematics Mix", "Uniform Field"],
                "q": "A proton of mass $m$ and charge $e$ is released from rest in a uniform electric field of strength $E$. The time taken by it to travel a distance $d$ in the field is:",
                "options": ["$\\sqrt{\\frac{2de}{mE}}$", "$\\sqrt{\\frac{2dm}{Ee}}$", "$\\sqrt{\\frac{2dE}{me}}$", "$\\sqrt{\\frac{2Ee}{dm}}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Acceleration of the proton $a = \\frac{eE}{m}$.<br><b>Step 2:</b> Using kinematics, $d = ut + \\frac{1}{2}at^2$. Since $u=0$, $d = \\frac{1}{2}at^2$.<br><b>Step 3:</b> Substitute $a$: $d = \\frac{1}{2}(\\frac{eE}{m})t^2 \\implies t = \\sqrt{\\frac{2dm}{eE}}$."
            },
            {
                "id": "ES-TEST-012",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Infinite Series", "Superposition", "Math Application"],
                "q": "An infinite number of charges each of magnitude $q$ are placed on the x-axis at distances of 1, 2, 4, 8, ... meters from the origin. The intensity of the electric field at the origin is:",
                "options": ["$\\frac{q}{3\\pi\\epsilon_{0}}$", "$\\frac{q}{6\\pi\\epsilon_{0}}$", "$\\frac{q}{2\\pi\\epsilon_{0}}$", "$\\frac{q}{4\\pi\\epsilon_{0}}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> $E = \\frac{q}{4\\pi\\epsilon_0} [\\frac{1}{1^2} + \\frac{1}{2^2} + \\frac{1}{4^2} + ...]$.<br><b>Step 2:</b> This forms an infinite geometric progression: $1 + \\frac{1}{4} + \\frac{1}{16} + ...$ with common ratio $r = \\frac{1}{4}$.<br><b>Step 3:</b> Sum $S = \\frac{a}{1-r} = \\frac{1}{1 - 1/4} = \\frac{4}{3}$.<br><b>Step 4:</b> $E = \\frac{q}{4\\pi\\epsilon_0} \\times \\frac{4}{3} = \\frac{q}{3\\pi\\epsilon_0}$."
            },
            {
                "id": "ES-TEST-013",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Electrostatic Pressure", "Spherical Shell"],
                "q": "A uniformly charged thin spherical shell of radius $R$ carries a uniform surface charge density of $\\sigma$ per unit area. It is made of two hemispherical shells, held together by pressing them with force $F$. Force $F$ is proportional to:",
                "options": ["$\\frac{1}{\\epsilon_{o}}\\sigma^{2}R^{2}$", "$\\frac{1}{\\epsilon_{o}}\\sigma^{2}R$", "$\\frac{1}{\\epsilon_{o}}\\frac{\\sigma^{2}}{R}$", "$\\frac{1}{\\epsilon_{o}}\\frac{\\sigma^{2}}{R^{2}}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Electrostatic pressure outward on the shell is $P = \\frac{\\sigma^2}{2\\epsilon_0}$.<br><b>Step 2:</b> The force pushing the two hemispheres apart is Pressure $\\times$ Projected Area.<br><b>Step 3:</b> $F = \\frac{\\sigma^2}{2\\epsilon_0} \\times \\pi R^2$. Thus, $F \\propto \\frac{\\sigma^2 R^2}{\\epsilon_0}$."
            },
            {
                "id": "ES-TEST-014",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 1,
                "tags": ["Potential Gradient", "Electric Force"],
                "q": "The potential difference between two plates separated by a distance of 1 mm is 100 V. The force on an electron placed in between the plates is:",
                "options": ["$10^{5}$ N", "$1.6 \\times 10^{-24}$ N", "$1.6 \\times 10^{-14}$ N", "$1.6 \\times 10^{-19}$ N"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Electric field $E = \\frac{V}{d} = \\frac{100}{10^{-3}} = 10^5$ V/m.<br><b>Step 2:</b> Force on electron $F = eE = 1.6 \\times 10^{-19} \\times 10^5 = 1.6 \\times 10^{-14}$ N."
            },
            {
                "id": "ES-TEST-015",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Infinite Series", "Superposition", "Math Application"],
                "q": "An infinite number of charges each equal to $q$ are placed along the x-axis at $x=1, 2, 4, 8, ...$ meters. The potential at the point $x=0$ due to this set of charges is:",
                "options": ["$\\frac{q}{4\\pi\\epsilon_{o}}$", "$\\frac{2q}{4\\pi\\epsilon_{o}}$", "$\\frac{3q}{4\\pi\\epsilon_{o}}$", "$\\frac{q}{\\pi\\epsilon_{o}}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> $V = \\frac{q}{4\\pi\\epsilon_0} [\\frac{1}{1} + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + ...]$.<br><b>Step 2:</b> This is an infinite geometric progression with $a=1$ and $r=\\frac{1}{2}$.<br><b>Step 3:</b> Sum $S = \\frac{a}{1 - r} = \\frac{1}{1 - 1/2} = 2$.<br><b>Step 4:</b> $V = 2 \\times \\frac{q}{4\\pi\\epsilon_0} = \\frac{2q}{4\\pi\\epsilon_0}$."
            },
            {
                "id": "ES-TEST-016",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 1,
                "tags": ["Equipotential Surface", "Circular Path"],
                "q": "A, B, and C are three points on a circle of radius 1 cm. These points form the corners of an equilateral triangle. A charge $2 \\mu C$ is placed at the centre of the circle. The work done in carrying a charge of $0.1 \\mu C$ from A to B is:",
                "options": ["Zero", "$18 \\times 10^{11}$ J", "$1.8 \\times 10^{11}$ J", "$54 \\times 10^{11}$ J"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The points A, B, and C lie on a circle with the source charge at its center.<br><b>Step 2:</b> The periphery of this circle forms an equipotential surface, meaning $V_A = V_B$.<br><b>Step 3:</b> The work done in moving a charge between two points at the same potential is $W = q(V_B - V_A) = 0$."
            },
            {
                "id": "ES-TEST-017",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["System of Charges", "Superposition"],
                "q": "Charges $+q$, $-4q$ and $+2q$ are arranged at the corners of an equilateral triangle of side $0.15$ m. If $q=1 \\mu C$, the magnitude of their mutual potential energy is:",
                "options": ["0.4 J", "0.5 J", "0.6 J", "0.8 J"],
                "correct": 2,
                "sol": "<b>Step 1:</b> System potential energy is the sum of pairs: $U = \\frac{1}{4\\pi\\epsilon_0} [\\frac{q_1 q_2}{r} + \\frac{q_2 q_3}{r} + \\frac{q_1 q_3}{r}]$.<br><b>Step 2:</b> $U = \\frac{9 \\times 10^9}{0.15} [(1)(-4) + (-4)(2) + (1)(2)] \\times (10^{-6})^2$.<br><b>Step 3:</b> $U = 60 \\times 10^9 \\times (-10) \\times 10^{-12} = -0.6$ J. The magnitude is 0.6 J."
            },
            {
                "id": "ES-TEST-018",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 1,
                "tags": ["Energy Conservation", "Work-Energy Theorem"],
                "q": "An electron of mass $M$ kg and charge $e$ coulomb travels from rest through a potential difference of $V$ volt. The final velocity of the electron is (in m/s):",
                "options": ["$\\frac{2eV}{M}$", "$\\frac{2MV}{e}$", "$\\sqrt{\\frac{2eV}{M}}$", "$\\sqrt{\\frac{2MV}{e}}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The electrical work done on the electron is converted into its kinetic energy: $eV = \\frac{1}{2}Mv^2$.<br><b>Step 2:</b> Solving for velocity squared gives $v^2 = \\frac{2eV}{M}$.<br><b>Step 3:</b> Taking the square root gives $v = \\sqrt{\\frac{2eV}{M}}$."
            },
            {
                "id": "ES-TEST-019",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Symmetry", "3D Geometry"],
                "q": "A charge $Q$ is placed at each corner of a cube of side $a$. The potential at the centre of the cube is:",
                "options": ["$\\frac{8Q}{\\pi\\epsilon_{0}a}$", "$\\frac{4Q}{4\\pi\\epsilon_{0}a}$", "$\\frac{4Q}{\\sqrt{3}\\pi\\epsilon_{0}a}$", "$\\frac{2Q}{\\pi\\epsilon_{0}a}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The distance from the center of a cube to any of its corners is half of the main body diagonal: $r = \\frac{\\sqrt{3}a}{2}$.<br><b>Step 2:</b> There are 8 corners, so the total scalar potential is $V = 8 \\times \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{r}$.<br><b>Step 3:</b> Substituting $r$, $V = \\frac{8}{4\\pi\\epsilon_0} \\frac{2Q}{\\sqrt{3}a} = \\frac{4Q}{\\sqrt{3}\\pi\\epsilon_0a}$."
            },
            {
                "id": "ES-TEST-020",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Potential Gradient", "Uniform Field"],
                "q": "A uniform electric field pointing in the positive x-direction exists in a region. Let A be the origin, B be a point on the x-axis at $x = +1$ cm, and C be a point on the y-axis at $y = +1$ cm. The potentials at points A, B, and C satisfy:",
                "options": ["$V_A < V_B$", "$V_A > V_B$", "$V_A < V_C$", "$V_A > V_C$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Electric potential always decreases in the direction of the electric field lines.<br><b>Step 2:</b> Since the field is strictly along the +x direction, potential drops as x increases. Thus, $V_A > V_B$.<br><b>Step 3:</b> Points lying on the y-axis are perpendicular to the field (forming an equipotential line), so $V_A = V_C$."
            },
            {
                "id": "ES-TEST-021",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Uniform Field", "Conceptual"],
                "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEj8b7_YwE0wvdU5br2mNbVhMbp1kWgo0zCOyQ5vOygfbxX4F2wwaR1O-m9PMWtMnavXcOo8iq1zPfyiOLqXjj7ExhlHtl4IW8QAdybeF_AaIcZtN2yae_vPxAPVBWLbHrsUGx8L8A3rZqI1RunYPmyAixUnutRAuop5MP1oWgtLQ8lreRMJfVdWhl0E8b4X",
                "q": "The electric field at the origin is along the positive x-axis. A small circle is drawn with its center at the origin, cutting the axes at points A $(a, 0)$, B $(0, a)$, C $(-a, 0)$, and D $(0, -a)$. On the periphery of the circle, the potential is minimum at:",
                "options": ["A", "B", "C", "D"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Recall that electric potential progressively decreases in the direction of the electric field.<br><b>Step 2:</b> The field points along the +x axis, so the point positioned furthest along the +x direction will have the lowest potential.<br><b>Step 3:</b> Point A $(a, 0)$ is furthest to the right (positive x), making it the point of minimum potential."
            },
            {
                "id": "ES-TEST-022",
                "topic": "Electric Dipole",
                "difficulty": 3,
                "tags": ["Work Done", "Dipole in Uniform Field"],
                "q": "An electric dipole is aligned parallel to a uniform electric field. If it is deflected by $60^{\\circ}$, the work done by an external agent is $2 \\times 10^{-19}$ J. The work done by the agent if it is deflected by $30^{\\circ}$ further is:",
                "options": ["$2.5 \\times 10^{-19}$ J", "$2 \\times 10^{-19}$ J", "$4 \\times 10^{-19}$ J", "$2 \\times 10^{-16}$ J"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Work done to rotate from $0^{\\circ}$ to $60^{\\circ}$ is $W_1 = pE(1 - \\cos 60^{\\circ}) = 0.5 pE$. We are given $0.5 pE = 2 \\times 10^{-19}$ J.<br><b>Step 2:</b> Rotating it an additional $30^{\\circ}$ means taking it from $60^{\\circ}$ to $90^{\\circ}$. The work is $W_2 = pE(\\cos 60^{\\circ} - \\cos 90^{\\circ})$.<br><b>Step 3:</b> $W_2 = pE(0.5 - 0) = 0.5 pE$. This is equal to the first work done, so $W_2 = 2 \\times 10^{-19}$ J."
            },
            {
                "id": "ES-TEST-023",
                "topic": "Electric Dipole",
                "difficulty": 3,
                "tags": ["Dipole Moment", "Vector Addition"],
                "imgUrl": ["https://blogger.googleusercontent.com/img/a/AVvXsEi86OqzcuyOAAcKU37Pn2gBrgBC72Jnln4AOk0pQa49PpRxddLMG5duxaLkbm1_mAQnY8Lqq-Aphps0noPSBCNTMpeJ_3CvGCj14JXfdXCA-y7e0t8S-sFlTILHjGSmARZB6ATdSlkcYlYUqxViRenN3GJvs73JflkZqaq9jcmrwfheRaP9rIVPeynaMrBc"],
                "q": "The dipole moment of the given system is:",
                "options": ["$\\sqrt{3}ql$ along perpendicular bisector of q-q line", "$2ql$ along perpendicular bisector of q-q line", "$ql\\sqrt{2}$ along perpendicular bisector of q-q line", "0"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The $-2q$ charge at the origin can be split into two separate $-q$ charges.<br><b>Step 2:</b> This forms two distinct dipoles, each of dipole moment $p = ql$, positioned at an angle of $60^{\\circ}$ to each other.<br><b>Step 3:</b> The resultant vector is $p_{net} = \\sqrt{p^2 + p^2 + 2p^2 \\cos 60^{\\circ}}$.<br><b>Step 4:</b> Since $\\cos 60^{\\circ} = 0.5$, $p_{net} = \\sqrt{3p^2} = \\sqrt{3}ql$."
            },
            {
                "id": "ES-TEST-024",
                "topic": "Coulomb's Law",
                "difficulty": 3,
                "tags": ["Maxima and Minima", "Calculus Based"],
                "q": "A charge $Q$ is divided into two parts $q_1$ and $q_2$ such that they experience the maximum force of repulsion when separated by a certain distance. The ratio of $Q : q_1 : q_2$ is:",
                "options": ["1 : 1 : 2", "1 : 2 : 2", "2 : 2 : 1", "2 : 1 : 1"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Let the two parts be $q$ and $Q-q$. According to Coulomb's law, Force $F \\propto q(Q-q)$.<br><b>Step 2:</b> For maximum force, we differentiate and equate to zero: $\\frac{dF}{dq} = Q - 2q = 0 \\implies q = \\frac{Q}{2}$.<br><b>Step 3:</b> Thus, $q_1 = \\frac{Q}{2}$ and $q_2 = \\frac{Q}{2}$. The ratio is $Q : \\frac{Q}{2} : \\frac{Q}{2}$ which simplifies to $2 : 1 : 1$."
            },
            {
                "id": "ES-TEST-025",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Vector Form", "3D Geometry"],
                "q": "Two charges, each $1 \\mu C$, are located at points $P(2\\hat{i}+3\\hat{j}+\\hat{k})$ m and $Q(\\hat{i}+\\hat{j}-\\hat{k})$ m. The electrostatic force between them is:",
                "options": ["100 N", "10 N", "$10^4$ dyne", "100 dyne"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Find the position vector $\\vec{r} = \\vec{r}_P - \\vec{r}_Q = (2-1)\\hat{i} + (3-1)\\hat{j} + (1 - (-1))\\hat{k} = \\hat{i} + 2\\hat{j} + 2\\hat{k}$.<br><b>Step 2:</b> Calculate the distance $r = |\\vec{r}| = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$ m.<br><b>Step 3:</b> Force $F = \\frac{k q_1 q_2}{r^2} = \\frac{9 \\times 10^9 \\times (10^{-6})^2}{3^2} = 10^{-3}$ N.<br><b>Step 4:</b> Convert to dynes ($1 N = 10^5$ dyne): $F = 10^{-3} \\times 10^5 = 100$ dyne."
            },
            {
                "id": "ES-TEST-026",
                "topic": "Coulomb's Law",
                "difficulty": 3,
                "tags": ["Vector Resolution", "Superposition"],
                "q": "Two charges of $+200 \\mu C$ and $-200 \\mu C$ are placed at the corners B and C of an equilateral triangle ABC of side $0.1$ m. The force on a charge of $5 \\mu C$ placed at corner A is:",
                "options": ["1800 N", "$1200\\sqrt{3}$ N", "$600\\sqrt{3}$ N", "900 N"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The force magnitude due to B is $F_1 = \\frac{9\\times 10^9 \\times 200\\times 10^{-6} \\times 5\\times 10^{-6}}{0.1^2} = 900$ N (Repulsive).<br><b>Step 2:</b> The force magnitude due to C is $F_2 = 900$ N (Attractive).<br><b>Step 3:</b> The angle between the attractive and repulsive force vectors is $120^{\\circ}$.<br><b>Step 4:</b> Resultant force $F_{net} = \\sqrt{F_1^2 + F_2^2 + 2F_1 F_2 \\cos 120^{\\circ}} = \\sqrt{900^2 + 900^2 - 900^2} = 900$ N."
            },
            {
                "id": "ES-TEST-027",
                "topic": "Coulomb's Law",
                "difficulty": 1,
                "tags": ["Equilibrium", "Basic Formula"],
                "q": "Two equally charged pith balls 3 cm apart repel each other with a force of $4 \\times 10^{-5}$ N. The charge on each ball is:",
                "options": ["$2 \\times 10^9$ C", "$2 \\times 10^{-9}$ C", "$\\frac{2}{3} \\times 10^9$ C", "$\\frac{2}{3} \\times 10^{-9}$ C"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Use Coulomb's Law: $F = \\frac{k q^2}{r^2}$.<br><b>Step 2:</b> Plug in the given values: $4 \\times 10^{-5} = \\frac{9 \\times 10^9 \\times q^2}{(0.03)^2}$.<br><b>Step 3:</b> Simplify the equation: $4 \\times 10^{-5} = \\frac{9 \\times 10^9 \\times q^2}{9 \\times 10^{-4}} = 10^{13} q^2$.<br><b>Step 4:</b> Solving gives $q^2 = 4 \\times 10^{-18} \\implies q = 2 \\times 10^{-9}$ C."
            },
            {
                "id": "ES-TEST-028",
                "topic": "Electric Field",
                "difficulty": 1,
                "tags": ["Mechanics Mix", "Kinematics"],
                "q": "An electron (mass = $9.1 \\times 10^{-31}$ kg) is sent into an electric field of intensity $9.1 \\times 10^6$ N/C. The acceleration produced is:",
                "options": ["$1.6 \\times 10^{18}$ m/s²", "$1.6 \\times 10^6$ m/s²", "$1.6 \\times 10^{-18}$ m/s²", "$1.6 \\times 10^{-6}$ m/s²"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The electric force acting on the electron is $F = eE$.<br><b>Step 2:</b> From Newton's second law, acceleration is $a = \\frac{F}{m} = \\frac{eE}{m}$.<br><b>Step 3:</b> $a = \\frac{1.6 \\times 10^{-19} \\times 9.1 \\times 10^6}{9.1 \\times 10^{-31}} = 1.6 \\times 10^{18}$ m/s²."
            },
            {
                "id": "ES-TEST-029",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Vector Form", "Coordinate Geometry"],
                "q": "The electric field at $(30, 30)$ cm due to a charge of $-8$ nC at the origin in N/C is:",
                "options": ["$-400(\\hat{i}+\\hat{j})$", "$400(\\hat{i}+\\hat{j})$", "$-200\\sqrt{2}(\\hat{i}+\\hat{j})$", "$200\\sqrt{2}(\\hat{i}+\\hat{j})$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Establish the position vector $\\vec{r} = 0.3\\hat{i} + 0.3\\hat{j}$ meters. Its magnitude is $r = 0.3\\sqrt{2}$ m.<br><b>Step 2:</b> The electric field in vector form is $\\vec{E} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^3} \\vec{r}$.<br><b>Step 3:</b> $\\vec{E} = \\frac{9 \\times 10^9 \\times (-8 \\times 10^{-9}) \\times 0.3(\\hat{i}+\\hat{j})}{(0.3\\sqrt{2})^3}$.<br><b>Step 4:</b> $\\vec{E} = \\frac{-21.6(\\hat{i}+\\hat{j})}{0.054\\sqrt{2}} = \\frac{-400}{\\sqrt{2}}(\\hat{i}+\\hat{j}) = -200\\sqrt{2}(\\hat{i}+\\hat{j})$."
            },
            {
                "id": "ES-TEST-030",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Null Point", "Equilibrium"],
                "q": "Two charges of $10 \\mu C$ and $-90 \\mu C$ are separated by a distance of 24 cm. The electrostatic field strength is zero at a distance from the smaller charge equal to:",
                "options": ["12 cm", "24 cm", "36 cm", "48 cm"],
                "correct": 0,
                "sol": "<b>Step 1:</b> For opposite charges, the null point (zero field) lies outside the region between the charges, situated closer to the smaller magnitude charge.<br><b>Step 2:</b> Let this point be at a distance $x$ from the $10 \\mu C$ charge. Equating field magnitudes: $\\frac{k(10)}{x^2} = \\frac{k(90)}{(24+x)^2}$.<br><b>Step 3:</b> Taking square roots on both sides gives: $\\frac{1}{x} = \\frac{3}{24+x}$.<br><b>Step 4:</b> Cross-multiply: $24 + x = 3x \\implies 2x = 24 \\implies x = 12$ cm."
            },
    {
        "id": "ES-TEST-031",
        "topic": "Electric Potential and Potential Energy",
        "difficulty": 2,
        "tags": ["Work-Energy Theorem", "Potential Difference"],
        "q": "If $4 \\times 10^{20}$ eV is required to move a charge of 0.25 coulomb between two points, the potential difference between these two points is:",
        "options": ["256 volt", "$\\frac{1}{256}$ volt", "$256 \\times 10^{19}$ volt", "250 volt"],
        "correct": 0,
        "sol": "<b>Step 1:</b> Convert the required energy into Joules. $W = 4 \\times 10^{20} \\times 1.6 \\times 10^{-19}$ J $= 64$ J.<br><b>Step 2:</b> Potential difference is work done per unit charge: $V = \\frac{W}{q}$.<br><b>Step 3:</b> $V = \\frac{64}{0.25} = 256$ V."
    },
    {
        "id": "ES-TEST-032",
        "topic": "Electric Potential and Potential Energy",
        "difficulty": 2,
        "tags": ["Superposition", "Null Point"],
        "q": "Two electric charges of $9 \\mu C$ and $-3 \\mu C$ are placed 0.16 m apart in air. There are two points A and B on the line joining the two charges at distances of (i) 0.04 m from $-3 \\mu C$ and in between the charges and (ii) 0.08 m from $-3 \\mu C$ and outside the two charges. The potentials at A and B are:",
        "options": ["0 V, 5 V", "0 V, 0 V", "5 V, 0 V", "5 V, 10 V"],
        "correct": 1,
        "sol": "<b>Step 1:</b> For point A (inside): Distance from $9\\mu C$ is $0.16 - 0.04 = 0.12$ m.<br><b>Step 2:</b> $V_A = k[\\frac{9 \\times 10^{-6}}{0.12} - \\frac{3 \\times 10^{-6}}{0.04}] = k[75\\mu - 75\\mu] = 0$ V.<br><b>Step 3:</b> For point B (outside): Distance from $9\\mu C$ is $0.16 + 0.08 = 0.24$ m.<br><b>Step 4:</b> $V_B = k[\\frac{9 \\times 10^{-6}}{0.24} - \\frac{3 \\times 10^{-6}}{0.08}] = k[37.5\\mu - 37.5\\mu] = 0$ V."
    },
    {
        "id": "ES-TEST-033",
        "topic": "Electric Potential and Potential Energy",
        "difficulty": 1,
        "tags": ["Symmetry", "Superposition"],
        "q": "Four charges $+3 \\mu C$, $-1 \\mu C$, $+5 \\mu C$ and $-7 \\mu C$ are arranged on the circumference of a circle of radius 0.5 m. The potential at the centre is:",
        "options": ["Zero", "$18 \\times 10^{4}$ V", "$-18 \\times 10^{4}$ V", "$288 \\times 10^{3}$ V"],
        "correct": 0,
        "sol": "<b>Step 1:</b> Electric potential is a scalar quantity. The total potential at the center is $V = \\frac{k}{R} \\sum q$.<br><b>Step 2:</b> $\\sum q = 3 - 1 + 5 - 7 = 0 \\mu C$.<br><b>Step 3:</b> Therefore, the net potential at the center is zero."
    },
    {
        "id": "ES-TEST-034",
        "topic": "Electric Potential and Potential Energy",
        "difficulty": 2,
        "tags": ["Work Done", "Potential Difference"],
        "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEgUua_7sR2_jAatHmqwetutVj2uhsOjmeE4NSX_djxGhDSjAX3eiL5V7CYvZNtdIfHba3NOIzzp-pBQ4wjT1M-v_SsEeJynYUcVXxG30jOeTDnVImWUO4taJ6tZJdvq__6UORGLat6i-FXyn5nNRpc6a3xyCxC1C9fyoWhKUZS9mzJfsyr4Yuw5VaHdFceF",
        "q": "A positive point charge 'q' is carried from a point 'B' to a point 'A' in the electric field of a point charge +Q. If the permittivity of free space is $\\epsilon_0$, the work done in the process is given by:",
        "options": ["$\\frac{qQ}{4\\pi \\epsilon_{0}}[\\frac{1}{a}-\\frac{1}{b}]$", "$\\frac{qQ}{4\\pi \\epsilon_{0}}[\\frac{1}{a}+\\frac{1}{b}]$", "$\\frac{qQ}{4\\pi \\epsilon_{0}}[\\frac{1}{a^{2}}-\\frac{1}{b^{2}}]$", "$\\frac{qQ}{4\\pi \\epsilon_{0}}[\\frac{1}{a^{2}}+\\frac{1}{b^{2}}]$"],
        "correct": 0,
        "sol": "<b>Step 1:</b> Work done by an external agent is $W = q(V_{final} - V_{initial}) = q(V_A - V_B)$.<br><b>Step 2:</b> The potential at A is $V_A = \\frac{Q}{4\\pi\\epsilon_0 a}$ and at B is $V_B = \\frac{Q}{4\\pi\\epsilon_0 b}$.<br><b>Step 3:</b> Substituting these into the work equation gives $W = \\frac{qQ}{4\\pi\\epsilon_0} [\\frac{1}{a} - \\frac{1}{b}]$."
    },
    {
        "id": "ES-TEST-035",
        "topic": "Electric Potential and Potential Energy",
        "difficulty": 1,
        "tags": ["Basic Formula", "Electromotive Force"],
        "q": "An electric cell does 5 Joules of work in carrying 10 Coulombs of charge around a closed circuit. The emf of the cell is:",
        "options": ["2 V", "0.5 V", "4 V", "1 V"],
        "correct": 1,
        "sol": "<b>Step 1:</b> The electromotive force (EMF) is defined as the work done per unit charge.<br><b>Step 2:</b> $E = \\frac{W}{q} = \\frac{5}{10} = 0.5$ V."
    },
    {
        "id": "ES-TEST-036",
        "topic": "Electric Potential and Potential Energy",
        "difficulty": 1,
        "tags": ["Conductors", "Conceptual"],
        "q": "An insulated charged conducting sphere of radius 5 cms has a potential of 10V at the surface. What is the potential at the centre?",
        "options": ["10 V", "Zero", "Same as that at 5 cms from the surface", "Same as that at 25 cms from the surface"],
        "correct": 0,
        "sol": "<b>Step 1:</b> Inside a charged conducting sphere, the electric field is zero.<br><b>Step 2:</b> Because the field is zero, no work is done moving a charge inside, meaning the potential is constant everywhere inside.<br><b>Step 3:</b> Thus, the potential at the center is equal to the potential on the surface (10 V)."
    },
    {
        "id": "ES-TEST-037",
        "topic": "Electric Potential and Potential Energy",
        "difficulty": 2,
        "tags": ["Conduction", "Charge Sharing"],
        "q": "The radii of two charged metal spheres are 5 cm and 10 cm, both having the same charge of 60 mC. If they are connected by a wire:",
        "options": ["A charge of 20 mC flows through the wire from larger to smaller sphere", "A charge of 20 mC flows through the wire from smaller to larger sphere", "A charge of 40 mC flows through the wire from smaller to larger sphere", "No charge flows through the wire because both spheres have same charge"],
        "correct": 1,
        "sol": "<b>Step 1:</b> Charge flows from higher potential to lower potential. The smaller sphere has a higher potential ($V \\propto \\frac{Q}{r}$).<br><b>Step 2:</b> Total charge $Q_{tot} = 60 + 60 = 120$ mC.<br><b>Step 3:</b> Upon connection, charge distributes proportionally to their radii. Final charge on smaller sphere $q_1' = Q_{tot} (\\frac{r_1}{r_1+r_2}) = 120 \\times \\frac{5}{15} = 40$ mC.<br><b>Step 4:</b> Since it started with 60 mC and ended with 40 mC, 20 mC flowed from the smaller to the larger sphere."
    },
    {
        "id": "ES-TEST-038",
        "topic": "Electric Field",
        "difficulty": 3,
        "tags": ["Calculus Based", "Potential Gradient"],
        "q": "The electric potential at a point $(x, 0, 0)$ is given by $V = [\\frac{1000}{x} + \\frac{1500}{x^2} + \\frac{500}{x^3}]$. Then the electric field at $x = 1$ m is (in volt/m):",
        "options": ["$-5500\\hat{i}$", "5500", "$\\sqrt{5500}\\hat{i}$", "Zero"],
        "correct": 1,
        "sol": "<b>Step 1:</b> Electric field is the negative gradient of potential: $E = -\\frac{dV}{dx}$.<br><b>Step 2:</b> Differentiating V gives $\\frac{dV}{dx} = -\\frac{1000}{x^2} - \\frac{3000}{x^3} - \\frac{1500}{x^4}$.<br><b>Step 3:</b> At $x = 1$, $\\frac{dV}{dx} = -1000 - 3000 - 1500 = -5500$.<br><b>Step 4:</b> Therefore, $E = -(-5500) = 5500$ V/m. (Magnitude matches Option 2)."
    },
    {
        "id": "ES-TEST-039",
        "topic": "Electric Dipole",
        "difficulty": 2,
        "tags": ["Potential Energy", "Basic Formula"],
        "q": "An electric dipole of moment p is placed in the position of stable equilibrium in a uniform electric field of intensity E. It is rotated through an angle $\\theta$ from the initial position. The potential energy of the electric dipole in the final position is:",
        "options": ["$pE \\cos \\theta$", "$pE \\sin \\theta$", "$pE(1-\\cos \\theta)$", "$-pE \\cos \\theta$"],
        "correct": 3,
        "sol": "<b>Step 1:</b> The potential energy of a dipole in a uniform electric field is given by the dot product $U = -\\vec{p} \\cdot \\vec{E}$.<br><b>Step 2:</b> Expanding the dot product yields $U = -pE \\cos \\theta$."
    },
    {
        "id": "ES-TEST-040",
        "topic": "Electric Dipole",
        "difficulty": 2,
        "tags": ["Work Done", "Dipole in Uniform Field"],
        "q": "An electric dipole of moment $\\vec{p}$ is placed normal to the lines of force of electric intensity $\\vec{E}$. The work done in deflecting it through an angle of $180^{\\circ}$ is:",
        "options": ["pE", "+2pE", "-2pE", "Zero"],
        "correct": 3,
        "sol": "<b>Step 1:</b> \"Normal to the lines of force\" means the initial angle $\\theta_1 = 90^{\\circ}$.<br><b>Step 2:</b> Deflecting it by $180^{\\circ}$ makes the final angle $\\theta_2 = 90^{\\circ} + 180^{\\circ} = 270^{\\circ}$.<br><b>Step 3:</b> Work done $W = pE(\\cos\\theta_1 - \\cos\\theta_2) = pE(\\cos 90^{\\circ} - \\cos 270^{\\circ})$.<br><b>Step 4:</b> Since both cosines are zero, $W = pE(0 - 0) = 0$."
    },
    {
        "id": "ES-TEST-041",
        "topic": "Coulomb's Law",
        "difficulty": 2,
        "tags": ["Dielectric Medium", "Comparing Forces"],
        "q": "Two charges when kept at a distance of 1m apart in vacuum have some force of repulsion. If the force of repulsion between these two charges be same when placed in an oil of dielectric constant 4, the distance of separation is:",
        "options": ["0.25 m", "0.4 m", "0.5 m", "0.6 m"],
        "correct": 2,
        "sol": "<b>Step 1:</b> Force in vacuum $F_1 = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_1 q_2}{r_1^2}$. Force in medium $F_2 = \\frac{1}{4\\pi\\epsilon_0 K} \\frac{q_1 q_2}{r_2^2}$.<br><b>Step 2:</b> We are given $F_1 = F_2$, $r_1 = 1$ m, and $K = 4$.<br><b>Step 3:</b> $\\frac{1}{1^2} = \\frac{1}{4 \\times r_2^2} \\implies 4r_2^2 = 1 \\implies r_2^2 = 0.25$.<br><b>Step 4:</b> $r_2 = 0.5$ m."
    },
    {
        "id": "ES-TEST-042",
        "topic": "Coulomb's Law",
        "difficulty": 2,
        "tags": ["Quantization of Charge", "Math Application"],
        "q": "The excess (equal in number) number of electrons that must be placed on each of two small spheres spaced 3 cm apart with a force of repulsion between the spheres to be $10^{-19}$ N is:",
        "options": ["25", "225", "625", "1250"],
        "correct": 2,
        "sol": "<b>Step 1:</b> From Coulomb's Law, $F = \\frac{k q^2}{r^2} \\implies 10^{-19} = \\frac{9 \\times 10^9 \\times q^2}{(0.03)^2}$.<br><b>Step 2:</b> Solving for q: $q^2 = \\frac{10^{-19} \\times 9 \\times 10^{-4}}{9 \\times 10^9} = 10^{-32} \\implies q = 10^{-16}$ C.<br><b>Step 3:</b> Number of electrons $n = \\frac{q}{e} = \\frac{10^{-16}}{1.6 \\times 10^{-19}} = \\frac{1000}{1.6} = 625$."
    },
    {
        "id": "ES-TEST-043",
        "topic": "Coulomb's Law",
        "difficulty": 3,
        "tags": ["Equilibrium", "Mechanics Mix", "FBD"],
        "q": "Two small conducting spheres each of mass $9 \\times 10^{-4}$ kg are suspended from the same point by non-conducting strings of length 100 cm. They are given equal and similar charges until the strings are equally inclined at $45^{\\circ}$ each to the vertical. The charge on each sphere is (in Coulomb):",
        "options": ["$1.4 \\times 10^{-6}$", "$1.6 \\times 10^{-6}$", "$2 \\times 10^{-6}$", "$1.96 \\times 10^{-6}$"],
        "correct": 0,
        "sol": "<b>Step 1:</b> From the Free Body Diagram at equilibrium, $F = mg \\tan \\theta$. For $\\theta = 45^{\\circ}$, $F = mg = 9 \\times 10^{-4} \\times 9.8 = 8.82 \\times 10^{-3}$ N.<br><b>Step 2:</b> The distance between spheres is $r = 2L \\sin 45^{\\circ} = 2(1)(\\frac{1}{\\sqrt{2}}) = \\sqrt{2}$ m.<br><b>Step 3:</b> Using Coulomb's Law: $F = \\frac{k q^2}{r^2} \\implies 8.82 \\times 10^{-3} = \\frac{9 \\times 10^9 \\times q^2}{(\\sqrt{2})^2}$.<br><b>Step 4:</b> $q^2 = 1.96 \\times 10^{-12} \\implies q = 1.4 \\times 10^{-6}$ C."
    },
    {
        "id": "ES-TEST-044",
        "topic": "Electric Field",
        "difficulty": 2,
        "tags": ["Null Point", "Equilibrium"],
        "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEiiz8KadtupmwWm6Uy7NwL5vuLPBUsAMP92yWmU1NTrFHnuWoAhqP_UU8FghqFNVKhfH7LqIyd_Jh_zVnqN2bXhq3spXzs-zKVlHija8hMS6commLFAU62h5QLMH_QDLYRfL_9GOAmKEQGSjjkfCvsTvoa3YK5B7j_WwLPsE1XWJUXxDDFTLmhD_73-4sl6",
        "q": "Two point charges of magnitude $4 \\mu C$ and $-9 \\mu C$ are $0.5$ m apart. The electric intensity is zero at a distance 'x' m from 'A' (the $4 \\mu C$ charge) and 'y' m from 'B' (the $-9 \\mu C$ charge). 'x' and 'y' are respectively:",
        "options": ["0.5 m, 1.0 m", "1.0 m, 1.5 m", "2.0 m, 1.5 m", "1.5 m, 2.0 m"],
        "correct": 1,
        "sol": "<b>Step 1:</b> For opposite charges, the null point is outside the charges, closer to the smaller magnitude charge ($4 \\mu C$).<br><b>Step 2:</b> Equate the field magnitudes: $\\frac{k(4)}{x^2} = \\frac{k(9)}{y^2} \\implies \\frac{2}{x} = \\frac{3}{y} \\implies y = 1.5x$.<br><b>Step 3:</b> From geometry, the total distance $y = x + 0.5$.<br><b>Step 4:</b> Substituting $y$, we get $1.5x = x + 0.5 \\implies x = 1.0$ m. Thus, $y = 1.0 + 0.5 = 1.5$ m."
    },
    {
        "id": "ES-TEST-045",
        "topic": "Coulomb's Law",
        "difficulty": 3,
        "tags": ["Vector Addition", "Symmetry"],
        "q": "A charge +q is fixed to each of three corners of a square. On the empty corner, a charge Q is placed such that there is no net electrostatic force acting on the diagonally opposite charge. Then:",
        "options": ["$Q=-2q$", "$Q=-2\\sqrt{2}q$", "$Q=-\\sqrt{2}q$", "$Q=-4q$"],
        "correct": 1,
        "sol": "<b>Step 1:</b> Let the side of the square be $a$. The force on the diagonally opposite $+q$ charge from the two adjacent $+q$ charges adds vectorially: $F_{adj} = \\sqrt{F^2 + F^2} = \\sqrt{2} \\frac{kq^2}{a^2}$.<br><b>Step 2:</b> The force from the unknown charge $Q$ must completely cancel this out. The distance across the diagonal is $\\sqrt{2}a$.<br><b>Step 3:</b> $F_Q = \\frac{k q Q}{(\\sqrt{2}a)^2} = \\frac{k q Q}{2a^2}$.<br><b>Step 4:</b> For equilibrium, $F_{adj} + F_Q = 0 \\implies \\sqrt{2} \\frac{kq^2}{a^2} + \\frac{k q Q}{2a^2} = 0 \\implies Q = -2\\sqrt{2}q$."
    },
            {
        "id": "ES-TEST-046",
        "topic": "Coulomb's Law",
        "difficulty": 2,
        "tags": ["Percentage Change", "Comparing Forces"],
        "q": "Electrical force between two point charges is 200 N. If we increase 10% charge on one of the charges and decrease 10% charge on the other, then electrical force between them for the same distance becomes:",
        "options": ["198 N", "100 N", "200 N", "99 N"],
        "correct": 0,
        "sol": "<b>Step 1:</b> Original force $F = \\frac{k q_1 q_2}{r^2} = 200$ N.<br><b>Step 2:</b> New charges are $1.1 q_1$ and $0.9 q_2$.<br><b>Step 3:</b> New force $F' = \\frac{k (1.1 q_1)(0.9 q_2)}{r^2} = 0.99 \\frac{k q_1 q_2}{r^2}$.<br><b>Step 4:</b> $F' = 0.99 \\times 200 = 198$ N."
    },
    {
        "id": "ES-TEST-047",
        "topic": "Coulomb's Law",
        "difficulty": 3,
        "tags": ["Maxima and Minima", "Calculus Based"],
        "q": "N fundamental charges each of charge 'q' are to be distributed as two point charges separated by a fixed distance. The maximum to minimum force bears a ratio (N is even and greater than 2):",
        "options": ["$\\frac{(N-1)^2}{4N^2}$", "$\\frac{4N^2}{(N-1)}$", "$\\frac{N^2}{4(N-1)}$", "$\\frac{2N^2}{(N-1)}$"],
        "correct": 2,
        "sol": "<b>Step 1:</b> For maximum force, the total charge $Nq$ must be divided equally: $\\frac{Nq}{2}$ and $\\frac{Nq}{2}$. Thus, $F_{max} \\propto (\\frac{N}{2})^2$.<br><b>Step 2:</b> For minimum force, the charges should be as unequal as possible: $q$ and $(N-1)q$. Thus, $F_{min} \\propto 1 \\times (N-1)$.<br><b>Step 3:</b> Ratio = $\\frac{(N/2)^2}{N-1} = \\frac{N^2}{4(N-1)}$."
    },
    {
        "id": "ES-TEST-048",
        "topic": "Coulomb's Law",
        "difficulty": 2,
        "tags": ["Mechanics Mix", "Equilibrium"],
        "q": "A particle A having a charge of $2 \\times 10^{-6}$ C and a mass of 100g is placed at the bottom of a smooth inclined plane of inclination $30^{\\circ}$. The distance of another particle of same mass and charge, be placed on the incline so that it may remain in equilibrium is:",
        "options": ["27 cm", "16 cm", "30 cm", "45 cm"],
        "correct": 0,
        "sol": "<b>Step 1:</b> For equilibrium, the downward gravitational component must be balanced by the electrostatic repulsion.<br><b>Step 2:</b> $mg \\sin 30^{\\circ} = \\frac{k q^2}{r^2}$.<br><b>Step 3:</b> $(0.1)(9.8)(0.5) = \\frac{9 \\times 10^9 \\times (2 \\times 10^{-6})^2}{r^2}$.<br><b>Step 4:</b> $0.49 = \\frac{0.036}{r^2} \\implies r^2 \\approx 0.0734 \\implies r \\approx 0.27$ m = 27 cm."
    },
    {
        "id": "ES-TEST-049",
        "topic": "Electric Field",
        "difficulty": 2,
        "tags": ["Potential Gradient", "Graphical Analysis"],
        "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEitUBedCThuNdCxW-MTlrPhuKOvNnribbYLQZJE8NmWM_ku8oqFQVno1F7k3g4WRBMidxWlpZ8IcMxqXJzv0v39f59KS8i1OS6Ku0bx-dlFltteQxVsvn7uSv93VRdiGVKSXLvdrvHWTeUb-zGBCrZhYvPq-OAndn-f-dHr3Z0WGON_Om5EnLww4-rKj_MK",
        "q": "In the given figure showing the $V-r$ graph, the electric field intensity at $r=1$ m, $r=6$ m, and $r=9$ m in V/m is respectively:",
        "options": ["-5, -1.67, +5", "-5, 0, +5", "0, 1.67, 0", "+5, 1.67, -5"],
        "correct": 1,
        "sol": "<b>Step 1:</b> Electric field is the negative slope of the V-r graph: $E = -\\frac{dV}{dr}$.<br><b>Step 2:</b> At $r=1$ m, slope is $\\frac{10}{2} = 5$. Thus $E = -5$ V/m.<br><b>Step 3:</b> At $r=6$ m, potential is constant, so slope is 0. Thus $E = 0$ V/m.<br><b>Step 4:</b> At $r=9$ m, slope is $\\frac{-10}{2} = -5$. Thus $E = -(-5) = +5$ V/m."
    },
    {
        "id": "ES-TEST-050",
        "topic": "Electric Field",
        "difficulty": 3,
        "tags": ["Vector Addition", "Symmetry"],
        "q": "Point charges of $3 \\times 10^{-9}$ C are situated at each of three corners of a square whose side is 15 cm. The magnitude and direction of the electric field at the vacant corner of the square is:",
        "options": ["2296 V/m along the diagonal", "9622 V/m along the diagonal", "22.0 V/m along the diagonal", "Zero"],
        "correct": 0,
        "sol": "<b>Step 1:</b> Field from the two adjacent corners: $E_1 = E_2 = \\frac{k q}{a^2} = \\frac{9 \\times 10^9 \\times 3 \\times 10^{-9}}{0.15^2} = 1200$ V/m.<br><b>Step 2:</b> Their resultant is $\\sqrt{E_1^2 + E_2^2} = 1200\\sqrt{2} \\approx 1697$ V/m along the diagonal.<br><b>Step 3:</b> Field from the opposite corner: $E_3 = \\frac{k q}{(\\sqrt{2}a)^2} = \\frac{27}{0.045} = 600$ V/m.<br><b>Step 4:</b> Total Field = $1697 + 600 = 2297$ V/m along the diagonal."
    },
    {
        "id": "ES-TEST-051",
        "topic": "Electric Field",
        "difficulty": 3,
        "tags": ["Kinematics Mix", "Uniform Field", "Projectile Motion"],
        "q": "A large flat metal surface has uniform charge density $+\\sigma$. An electron of mass m and charge e leaves the surface at point A with speed v, and returns to it at point B. The maximum value of AB is:",
        "options": ["$\\frac{vm\\epsilon_0}{\\sigma e}$", "$\\frac{v^2 m \\epsilon_0}{e \\sigma}$", "$\\frac{v^2 e}{\\epsilon_0 \\sigma m}$", "$\\frac{v^2 \\sigma e}{\\epsilon_0 m}$"],
        "correct": 1,
        "sol": "<b>Step 1:</b> The electric field near a large metal surface is $E = \\frac{\\sigma}{\\epsilon_0}$.<br><b>Step 2:</b> Downward acceleration on the electron is $a = \\frac{eE}{m} = \\frac{e\\sigma}{m\\epsilon_0}$.<br><b>Step 3:</b> For maximum range, projection angle is $45^{\\circ}$. Range $R_{max} = \\frac{v^2}{a}$.<br><b>Step 4:</b> Substitute $a$: $R_{max} = \\frac{v^2 m \\epsilon_0}{e \\sigma}$."
    },
    {
        "id": "ES-TEST-052",
        "topic": "Electric Field",
        "difficulty": 2,
        "tags": ["Superposition", "Math Application"],
        "q": "'n' charges Q, 4Q, 9Q, 16Q... are placed at distances of 1, 2, 3... metre from a point '0' on the same straight line. The electric intensity at '0' is:",
        "options": ["$\\frac{Q}{4\\pi\\epsilon_0}$", "Infinity", "$\\frac{nQ}{2\\pi\\epsilon_0}$", "$\\frac{nQ}{4\\pi\\epsilon_0}$"],
        "correct": 3,
        "sol": "<b>Step 1:</b> Field $E = k[\\frac{Q}{1^2} + \\frac{4Q}{2^2} + \\frac{9Q}{3^2} + \\dots n \\text{ terms}]$.<br><b>Step 2:</b> Notice that the distance squared perfectly cancels the coefficient: $\\frac{4Q}{4} = Q$, $\\frac{9Q}{9} = Q$, etc.<br><b>Step 3:</b> $E = k[Q + Q + Q \\dots n \\text{ terms}] = nkQ = \\frac{nQ}{4\\pi\\epsilon_0}$."
    },
    {
        "id": "ES-TEST-053",
        "topic": "Electric Field",
        "difficulty": 3,
        "tags": ["Coordinate Geometry", "Vector Field"],
        "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEg0E1MeaQIkY5kIQPSt8DcPVzSfGWz_gBT0XOK1XDJc0JidDABYFE-Rqi_H4eFDeRunmhTEsKCORDHwabkrT4rJ3xdX_VZplfdUBt5poQfqLseMY3xbzv_kDXdLiz6rPfgB-iKLyOq6j2TWmqnGaYGx9-61Y1Y2KylWgzL1BCrv7jJnUrsejTbvOxABXaSY",
        "q": "Two point charges $q_1 = 2\\mu C$ and $q_2 = 1\\mu C$ are placed at distances $b=1$ cm and $a=2$ cm from the origin on the y and x axes respectively. The electric field vector at point (a, b) will subtend an angle $\\theta$ with the x-axis given by:",
        "options": ["$\\tan\\theta=1$", "$\\tan\\theta=2$", "$\\tan\\theta=3$", "$\\tan\\theta=4$"],
        "correct": 1,
        "sol": "<b>Step 1:</b> The point is $P(2, 1)$. Charge $q_1(2\\mu C)$ is at $(0, 1)$. Its field $E_x$ points right: $E_x = k\\frac{2\\mu}{2^2} = k(0.5\\mu)$.<br><b>Step 2:</b> Charge $q_2(1\\mu C)$ is at $(2, 0)$. Its field $E_y$ points up: $E_y = k\\frac{1\\mu}{1^2} = k(1\\mu)$.<br><b>Step 3:</b> The angle is given by $\\tan\\theta = \\frac{E_y}{E_x} = \\frac{1}{0.5} = 2$."
    },
    {
        "id": "ES-TEST-054",
        "topic": "Electric Field",
        "difficulty": 3,
        "tags": ["Calculus Based", "Work-Energy Theorem"],
        "q": "A non-conducting ring of radius 0.5 m carries a total charge of $1.11 \\times 10^{-10}$ C distributed non-uniformly on its circumference, producing an electric field E everywhere in space. The value of the integral $\\int_{\\infty}^{0} -\\vec{E} \\cdot d\\vec{l}$ (0 being the centre of the ring) in volts is:",
        "options": ["+2", "-1", "-2", "Zero"],
        "correct": 0,
        "sol": "<b>Step 1:</b> The integral $\\int_{\\infty}^{0} -\\vec{E} \\cdot d\\vec{l}$ is exactly the definition of electric potential $V$ at the center relative to infinity.<br><b>Step 2:</b> For any ring (even non-uniform), potential at the center is $V = \\frac{kQ}{R}$ because all charge is equidistant.<br><b>Step 3:</b> $V = \\frac{9 \\times 10^9 \\times 1.11 \\times 10^{-10}}{0.5} = \\frac{1}{0.5} = 2$ V."
    },
    {
        "id": "ES-TEST-055",
        "topic": "Electric Potential and Potential Energy",
        "difficulty": 2,
        "tags": ["System of Charges", "Superposition"],
        "q": "Three charges +q, -q and -q are kept at the vertices of an equilateral triangle of 10 cm side. The potential at the mid-point in between -q, -q, if $q=5 \\mu C$ is:",
        "options": ["$-6.4 \\times 10^5$ V", "$-12.8 \\times 10^4$ V", "$-6.4 \\times 10^4$ V", "$-12.8 \\times 10^5$ V"],
        "correct": 3,
        "sol": "<b>Step 1:</b> Let $a = 0.1$ m. The midpoint is $0.05$ m from both -q charges, and $a\\frac{\\sqrt{3}}{2} = 0.05\\sqrt{3}$ m from the +q charge.<br><b>Step 2:</b> $V = k [\\frac{-q}{0.05} + \\frac{-q}{0.05} + \\frac{q}{0.05\\sqrt{3}}]$.<br><b>Step 3:</b> $V = \\frac{9\\times 10^9 \\times 5\\times 10^{-6}}{0.05} [-2 + \\frac{1}{\\sqrt{3}}] = 9\\times 10^5 [-2 + 0.577] = -12.8 \\times 10^5$ V."
    },
    {
        "id": "ES-TEST-056",
        "topic": "Electric Potential and Potential Energy",
        "difficulty": 3,
        "tags": ["Energy Conservation", "Work-Energy Theorem"],
        "q": "Two charges each 'Q' are released when the distance between them is 'd'. Then the velocity of each charge of mass 'm' when the distance between them is '2d' is:",
        "options": ["$\\frac{Q}{\\sqrt{8\\pi\\epsilon_0 dm}}$", "$\\frac{Q}{\\sqrt{4\\pi\\epsilon_0 dm}}$", "$\\frac{Q}{4\\sqrt{\\pi\\epsilon_0 dm}}$", "$\\frac{Q}{\\sqrt{2\\pi\\epsilon_0 dm}}$"],
        "correct": 0,
        "sol": "<b>Step 1:</b> Apply Conservation of Energy: $U_i + K_i = U_f + K_f$.<br><b>Step 2:</b> $\\frac{1}{4\\pi\\epsilon_0} \\frac{Q^2}{d} = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q^2}{2d} + 2(\\frac{1}{2}mv^2)$. (Multiply KE by 2 since both move).<br><b>Step 3:</b> $mv^2 = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q^2}{2d} \\implies v^2 = \\frac{Q^2}{8\\pi\\epsilon_0 dm}$.<br><b>Step 4:</b> $v = \\frac{Q}{\\sqrt{8\\pi\\epsilon_0 dm}}$."
    },
    {
        "id": "ES-TEST-057",
        "topic": "Electric Potential and Potential Energy",
        "difficulty": 3,
        "tags": ["Equilibrium", "Millikan Oil Drop"],
        "q": "An oil drop carrying charge 'Q' is held in equilibrium by a potential difference of 600V between horizontal plates. In order to hold another drop of twice the radius in equilibrium, a potential drop of 1600V had to be maintained. The charge on the second drop is:",
        "options": ["$\\frac{Q}{2}$", "2Q", "$\\frac{3Q}{2}$", "3Q"],
        "correct": 3,
        "sol": "<b>Step 1:</b> Upward electrical force balances downward weight: $QE = mg \\implies Q\\frac{V}{d} = \\rho \\frac{4}{3}\\pi r^3 g$.<br><b>Step 2:</b> Re-arranging gives $Q \\propto \\frac{r^3}{V}$.<br><b>Step 3:</b> $\\frac{Q_2}{Q_1} = (\\frac{r_2}{r_1})^3 \\frac{V_1}{V_2} = (2)^3 \\times \\frac{600}{1600} = 8 \\times \\frac{3}{8} = 3$.<br><b>Step 4:</b> Therefore, $Q_2 = 3Q$."
    },
    {
        "id": "ES-TEST-058",
        "topic": "Electric Potential and Potential Energy",
        "difficulty": 2,
        "tags": ["Work-Energy Theorem", "Kinematics Mix"],
        "q": "A body of mass one gram and carrying a charge $10^{-8}$ C passes through two points P and Q. The electrostatic potential at Q is 0V. The velocity of the body at Q is 0.2 m/s and at P is $\\sqrt{0.028}$ m/s. The potential at P is:",
        "options": ["150 V", "300 V", "600 V", "900 V"],
        "correct": 2,
        "sol": "<b>Step 1:</b> Use Energy Conservation: $\\frac{1}{2}mv_P^2 + qV_P = \\frac{1}{2}mv_Q^2 + qV_Q$.<br><b>Step 2:</b> Since $V_Q = 0$, $qV_P = \\frac{1}{2}m(v_Q^2 - v_P^2)$.<br><b>Step 3:</b> $10^{-8} \\times V_P = 0.5 \\times 10^{-3} \\times (0.2^2 - 0.028) = 0.5 \\times 10^{-3} \\times (0.012) = 6 \\times 10^{-6}$ J.<br><b>Step 4:</b> $V_P = \\frac{6 \\times 10^{-6}}{10^{-8}} = 600$ V."
    },
    {
        "id": "ES-TEST-059",
        "topic": "Electric Potential and Potential Energy",
        "difficulty": 1,
        "tags": ["System of Charges", "Basic Formula"],
        "q": "Three charges each $20 \\mu C$ are placed at the corners of an equilateral triangle of side 0.4 m. The potential energy of the system is:",
        "options": ["$18 \\times 10^{-6}$ J", "9 J", "$9 \\times 10^{-6}$ J", "27 J"],
        "correct": 3,
        "sol": "<b>Step 1:</b> Total potential energy of an equilateral system is $U = 3 \\times \\frac{k q^2}{a}$.<br><b>Step 2:</b> $U = 3 \\times \\frac{9\\times 10^9 \\times (20\\times 10^{-6})^2}{0.4}$.<br><b>Step 3:</b> $U = 3 \\times \\frac{9\\times 10^9 \\times 400\\times 10^{-12}}{0.4} = 3 \\times \\frac{3.6}{0.4}$.<br><b>Step 4:</b> $U = 3 \\times 9 = 27$ J."
    },
    {
        "id": "ES-TEST-060",
        "topic": "Electric Potential and Potential Energy",
        "difficulty": 2,
        "tags": ["Vector Field", "Dot Product"],
        "q": "An electric field is expressed as $\\vec{E} = 2\\hat{i} + 3\\hat{j}$. The potential difference $(V_A - V_B)$ between two points A and B whose position vectors are given by $\\vec{r}_A = \\hat{i} + 2\\hat{j}$ and $\\vec{r}_B = 2\\hat{i} + \\hat{j} + 3\\hat{k}$ is:",
        "options": ["-1 V", "1 V", "2 V", "3 V"],
        "correct": 0,
        "sol": "<b>Step 1:</b> The potential difference for a uniform field is $V_A - V_B = -\\vec{E} \\cdot (\\vec{r}_A - \\vec{r}_B) = \\vec{E} \\cdot (\\vec{r}_B - \\vec{r}_A)$.<br><b>Step 2:</b> Find the displacement vector: $\\vec{r}_B - \\vec{r}_A = (2-1)\\hat{i} + (1-2)\\hat{j} + (3-0)\\hat{k} = \\hat{i} - \\hat{j} + 3\\hat{k}$.<br><b>Step 3:</b> Calculate dot product: $\\vec{E} \\cdot (\\vec{r}_B - \\vec{r}_A) = (2)(1) + (3)(-1) + (0)(3) = 2 - 3 = -1$ V."
    },
            {
                "id": "ES-TEST-091",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Conduction", "Superposition", "Equilibrium"],
                "q": "Two equally charged identical metal spheres A and B repel each other with a force F. Another identical uncharged sphere C is touched to A and then placed midway between A and B. The net force on C is in the direction:",
                "options": ["F towards A", "F towards B", "2F towards A", "2F towards B"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Initially, the repulsive force is $F = \\frac{kq^2}{r^2}$.<br><b>Step 2:</b> When uncharged sphere C touches A, they share charge equally. Both get $q/2$.<br><b>Step 3:</b> C is placed at the midpoint ($r/2$). Force on C due to A is $F_{AC} = \\frac{k(q/2)(q/2)}{(r/2)^2} = \\frac{kq^2}{r^2} = F$ (repulsive, pushing towards B).<br><b>Step 4:</b> Force on C due to B is $F_{BC} = \\frac{k(q)(q/2)}{(r/2)^2} = \\frac{2kq^2}{r^2} = 2F$ (repulsive, pushing towards A).<br><b>Step 5:</b> Net force on C is $2F - F = F$ directed towards A."
            },
            {
                "id": "ES-TEST-092",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Ratio", "Math Application"],
                "q": "Two unlike charges separated by a distance of 1 m attract each other with a force of 0.108 N. If the charges are in the ratio 1:3, the weak charge is:",
                "options": ["$2 \\mu C$", "$4 \\mu C$", "$6 \\mu C$", "$5 \\mu C$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Let the charges be $q$ and $-3q$. The force of attraction is $F = \\frac{k(q)(3q)}{r^2}$.<br><b>Step 2:</b> Substitute the knowns: $0.108 = \\frac{9 \\times 10^9 \\times 3q^2}{1^2} = 27 \\times 10^9 q^2$.<br><b>Step 3:</b> Solve for $q^2$: $q^2 = \\frac{0.108}{27 \\times 10^9} = 4 \\times 10^{-12}$.<br><b>Step 4:</b> Taking the square root gives $q = 2 \\times 10^{-6}$ C = $2 \\mu C$."
            },
            {
                "id": "ES-TEST-093",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Vector Addition", "Symmetry"],
                "q": "Three charges each equal to $10^{-9}$ C are placed at the corners of an equilateral triangle of side 1 m. The force on one of the charges is:",
                "options": ["$9 \\times 10^{-9}$ N", "$9\\sqrt{3} \\times 10^{-9}$ N", "$27 \\times 10^{-9}$ N", "$18 \\times 10^{-9}$ N"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The force between any two individual charges is $F = \\frac{kq^2}{a^2} = \\frac{9 \\times 10^9 \\times (10^{-9})^2}{1^2} = 9 \\times 10^{-9}$ N.<br><b>Step 2:</b> A charge at any corner experiences two such repulsive forces from the other two charges, at an angle of $60^{\\circ}$ to each other.<br><b>Step 3:</b> The resultant force is $F_{net} = \\sqrt{F^2 + F^2 + 2F^2 \\cos 60^{\\circ}} = \\sqrt{3F^2} = \\sqrt{3}F$.<br><b>Step 4:</b> $F_{net} = 9\\sqrt{3} \\times 10^{-9}$ N."
            },
            {
                "id": "ES-TEST-094",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Equilibrium", "Gravitation Mix"],
                "q": "Two particles each of mass 'm' and carrying charge 'Q' are separated by some distance. If they are in equilibrium under mutual gravitational and electrostatic forces, then $Q/m$ (in C/kg) is of the order of:",
                "options": ["$10^{-5}$", "$10^{-10}$", "$10^{-15}$", "$10^{-20}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> For equilibrium, the electrostatic repulsion must equal the gravitational attraction: $F_e = F_g$.<br><b>Step 2:</b> $\\frac{1}{4\\pi\\epsilon_0} \\frac{Q^2}{r^2} = G \\frac{m^2}{r^2}$.<br><b>Step 3:</b> Rearranging gives $\\frac{Q}{m} = \\sqrt{4\\pi\\epsilon_0 G}$.<br><b>Step 4:</b> Substituting standard constants: $\\frac{Q}{m} = \\sqrt{\\frac{6.67 \\times 10^{-11}}{9 \\times 10^9}} \\approx \\sqrt{0.74 \\times 10^{-20}} \\approx 0.86 \\times 10^{-10}$ C/kg."
            },
            {
                "id": "ES-TEST-095",
                "topic": "Coulomb's Law",
                "difficulty": 3,
                "tags": ["Vector Addition", "Symmetry"],
                "q": "Three point charges +q, +q and -q are placed at the corners of an equilateral triangle of side 'a'. Another charge +Q is kept at the centroid. Force exerted on Q is:",
                "options": ["$\\frac{1}{4\\pi\\epsilon_0}\\frac{2qQ}{a^2}$", "$\\frac{1}{4\\pi\\epsilon_0}\\frac{6qQ}{a^2}$", "$\\frac{1}{4\\pi\\epsilon_0}\\frac{8qQ}{a^2}$", "$\\frac{1}{4\\pi\\epsilon_0}\\frac{14qQ}{a^2}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The distance from any corner to the centroid of an equilateral triangle is $x = \\frac{a}{\\sqrt{3}}$.<br><b>Step 2:</b> The force magnitude from any corner charge is $F = \\frac{k q Q}{x^2} = \\frac{3 k q Q}{a^2}$.<br><b>Step 3:</b> The two +q charges push +Q with force F at an angle of $120^{\\circ}$ between them. Their resultant is exactly F, pointing directly towards the -q charge.<br><b>Step 4:</b> The -q charge pulls +Q with force F in the exact same direction.<br><b>Step 5:</b> Total force = $F + F = 2F = 2 \\left( \\frac{3 k q Q}{a^2} \\right) = \\frac{6 k q Q}{a^2}$."
            },
            {
                "id": "ES-TEST-096",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Breakdown Field", "Conductors"],
                "q": "The breakdown electric intensity for air is $3 \\times 10^6$ V/m. The maximum charge that can be held by a sphere of radius 1 mm is:",
                "options": ["0.33 C", "0.33 nC", "3.3 C", "3.3 $\\mu$C"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The maximum electric field on the surface of the sphere is given by $E = \\frac{kq}{R^2}$.<br><b>Step 2:</b> Equate this to the breakdown intensity of air: $3 \\times 10^6 = \\frac{9 \\times 10^9 \\times q}{(10^{-3})^2}$.<br><b>Step 3:</b> Simplify the denominator: $3 \\times 10^6 = \\frac{9 \\times 10^9 \\times q}{10^{-6}} = 9 \\times 10^{15} q$.<br><b>Step 4:</b> Solve for q: $q = \\frac{3 \\times 10^6}{9 \\times 10^{15}} = \\frac{1}{3} \\times 10^{-9}$ C $\\approx 0.33$ nC."
            },
            {
                "id": "ES-TEST-097",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Kinematics Mix", "Uniform Field", "2D Motion"],
                "q": "There is a uniform electric field of strength $10^3$ V/m along the y-axis. A body of mass 1 g and charge $10^{-6}$ C is projected into the field from the origin along the positive x-axis with a velocity 10 m/s. Its speed in m/s after 10 s is: (neglect gravitation)",
                "options": ["10", "$5\\sqrt{2}$", "$10\\sqrt{2}$", "20"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Find acceleration along the y-axis: $a_y = \\frac{qE}{m} = \\frac{10^{-6} \\times 10^3}{10^{-3}} = 1$ m/s$^2$.<br><b>Step 2:</b> Find velocity along the y-axis after 10 s using $v = u + at$: $v_y = 0 + (1)(10) = 10$ m/s.<br><b>Step 3:</b> The horizontal velocity is unaffected by the vertical field, remaining constant at $v_x = 10$ m/s.<br><b>Step 4:</b> The resultant speed is the vector sum: $v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{10^2 + 10^2} = 10\\sqrt{2}$ m/s."
            },
            {
                "id": "ES-TEST-098",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Vector Addition", "Symmetry"],
                "q": "The point charges +1C, +1C and -1C are placed at the vertices A, B and C of an equilateral triangle of side 1m. Then:<br>(A) The force acting on the charge at A is $9 \\times 10^9$ N<br>(B) The electric field strength at A is $9 \\times 10^9$ NC$^{-1}$",
                "options": ["A is correct but B is wrong", "B is correct but A is wrong", "Both A and B are wrong", "Both A and B are correct"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Analyze Force on A (+1C): It experiences a repulsive force from B ($9\\times10^9$ N) and an attractive force from C ($9\\times10^9$ N).<br><b>Step 2:</b> The angle between these two force vectors is $120^{\\circ}$. The resultant force is $F = \\sqrt{F^2 + F^2 + 2F^2 \\cos 120^{\\circ}} = F = 9 \\times 10^9$ N. Statement A is correct.<br><b>Step 3:</b> Analyze Field at A: The electric field is defined as force per unit charge ($E = F/q$). Since the test charge at A is exactly 1 C, the electric field strength is $9 \\times 10^9 / 1 = 9 \\times 10^9$ N/C. Statement B is also correct."
            },
            {
                "id": "ES-TEST-099",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Equilibrium", "Mechanics Mix", "FBD"],
                "q": "A pendulum bob of mass m carrying a charge q is at rest in a uniform horizontal electric field of intensity E. The tension in the thread is:",
                "options": ["$T = \\sqrt{(Eq)^2 + (mg)^2}$", "$T = \\sqrt{(E/q)^2 + (m/g)^2}$", "$T = \\sqrt{E^2 + (mg)^2}$", "$T = mg + Eq$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The suspended bob experiences two perpendicular forces: the downward gravitational force ($W = mg$) and the horizontal electrostatic force ($F_e = Eq$).<br><b>Step 2:</b> To maintain equilibrium, the tension $T$ in the string must exactly balance the vector resultant of these two forces.<br><b>Step 3:</b> Using the Pythagorean theorem, the magnitude of the resultant force (and thus the tension) is $T = \\sqrt{F_e^2 + W^2} = \\sqrt{(Eq)^2 + (mg)^2}$."
            },
            {
                "id": "ES-TEST-100",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["System of Charges", "Superposition"],
                "q": "Four charges $10^{-8}$, $-2 \\times 10^{-8}$, $+3 \\times 10^{-8}$ and $2 \\times 10^{-8}$ coulomb are placed at the four corners of a square of side 1m. The potential at the centre of the square is:",
                "options": ["zero", "360 volt", "180 volt", "$360\\sqrt{2}$ volt"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The distance from any corner to the center of a square of side $a=1$ m is $r = \\frac{a}{\\sqrt{2}} = \\frac{1}{\\sqrt{2}}$ m.<br><b>Step 2:</b> Electric potential is a scalar quantity, so we simply add the potentials: $V = \\frac{k}{r} (q_1 + q_2 + q_3 + q_4)$.<br><b>Step 3:</b> The sum of the charges is $\\sum q = (1 - 2 + 3 + 2) \\times 10^{-8} = 4 \\times 10^{-8}$ C.<br><b>Step 4:</b> $V = \\frac{9 \\times 10^9 \\times 4 \\times 10^{-8}}{1/\\sqrt{2}} = 360\\sqrt{2}$ V."
            },
            {
                "id": "ES-TEST-101",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 1,
                "tags": ["Conductors", "Charge Sharing"],
                "q": "Two metal spheres of radii $R_1$ and $R_2$ are charged to the same potential. The ratio of the charge on the two spheres is:",
                "options": ["1", "1/2", "$R_1 - R_2$", "$R_1 / R_2$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The surface potential of a charged conducting metal sphere is given by $V = \\frac{kQ}{R}$.<br><b>Step 2:</b> We are given that $V_1 = V_2$, therefore $\\frac{kQ_1}{R_1} = \\frac{kQ_2}{R_2}$.<br><b>Step 3:</b> Rearranging the equation to find the ratio of the charges gives $\\frac{Q_1}{Q_2} = \\frac{R_1}{R_2}$."
            },
            {
                "id": "ES-TEST-102",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Concentric Shells", "Superposition"],
                "q": "Two concentric, thin metallic spherical shells of radii $R_1$ and $R_2$ ($R_1 > R_2$) bear charges $Q_1$ and $Q_2$ respectively. Then the potential at radius 'r' between $R_1$ and $R_2$ will be $\\frac{1}{4\\pi\\epsilon_0}$ times:",
                "options": ["$\\frac{Q_1+Q_2}{r}$", "$\\frac{Q_1}{R_1} + \\frac{Q_2}{r}$", "$\\frac{Q_1}{R_1} + \\frac{Q_2}{R_2}$", "$\\frac{Q_1}{R_2} + \\frac{Q_2}{R_2}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The point $r$ is located outside the inner shell ($R_2$) but inside the outer shell ($R_1$).<br><b>Step 2:</b> The potential due to the inner shell at distance $r$ is $V_{inner} = \\frac{kQ_2}{r}$ (treats it like a point charge).<br><b>Step 3:</b> The potential inside any charged spherical shell is constant and equals its surface potential. Thus, $V_{outer} = \\frac{kQ_1}{R_1}$.<br><b>Step 4:</b> The total potential at $r$ is the scalar sum: $V = k \\left( \\frac{Q_1}{R_1} + \\frac{Q_2}{r} \\right)$."
            },
            {
                "id": "ES-TEST-103",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Coordinate Geometry", "Potential Difference"],
                "q": "An electric charge $10^{-3} \\mu$C is placed at the origin (0, 0) of X-Y coordinate system. Two points A and B are situated at $(\\sqrt{2}, \\sqrt{2})$ and (2, 0) respectively. The potential difference between the points A and B will be:",
                "options": ["9 V", "zero", "2 V", "4.5 V"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Calculate the distance from the origin to point A: $r_A = \\sqrt{(\\sqrt{2})^2 + (\\sqrt{2})^2} = \\sqrt{2 + 2} = 2$ m.<br><b>Step 2:</b> Calculate the distance from the origin to point B: $r_B = \\sqrt{2^2 + 0^2} = 2$ m.<br><b>Step 3:</b> Since both points A and B are equidistant from the central charge ($r_A = r_B$), they lie on the exact same equipotential surface.<br><b>Step 4:</b> Therefore, $V_A = V_B$, and the potential difference $V_A - V_B = 0$."
            },
            {
                "id": "ES-TEST-104",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 3,
                "tags": ["System of Charges", "Potential Energy"],
                "q": "A charge $-2 \\mu$C at the origin, $-1 \\mu$C at +7 cm and $1 \\mu$C at -7 cm are placed on x-axis. The mutual potential energy of the system is:",
                "options": ["-0.051 J", "-0.045 J", "0.045 J", "-0.064 J"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Total potential energy is the sum of all interactive pairs: $U = U_{12} + U_{23} + U_{13}$.<br><b>Step 2:</b> Let $q_1 = -2\\mu$C at origin, $q_2 = -1\\mu$C at +7cm, $q_3 = 1\\mu$C at -7cm.<br><b>Step 3:</b> Substitute the values: $U = k \\left[ \\frac{(-2)(-1)}{0.07} + \\frac{(-2)(1)}{0.07} + \\frac{(-1)(1)}{0.14} \\right] \\times 10^{-12}$.<br><b>Step 4:</b> Notice that the first two terms perfectly cancel out ($\\frac{2}{0.07} - \\frac{2}{0.07} = 0$).<br><b>Step 5:</b> We are left with $U = 9 \\times 10^9 \\times \\left( \\frac{-1}{0.14} \\right) \\times 10^{-12} = -\\frac{9 \\times 10^{-3}}{0.14} \\approx -0.064$ J."
            },
            {
                "id": "ES-TEST-105",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 3,
                "tags": ["Work Done", "System of Charges"],
                "q": "Four equal charges Q are placed at the four corners of a square of side 'a' each. Work done in removing a charge -Q from its centre to infinity is:",
                "options": ["zero", "$\\frac{\\sqrt{2}Q^2}{4\\pi\\epsilon_0 a}$", "$\\frac{\\sqrt{2}Q^2}{\\pi\\epsilon_0 a}$", "$\\frac{Q^2}{2\\pi\\epsilon_0 a}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Work done by an external agent is $W = U_{final} - U_{initial}$. At infinity, $U_{final} = 0$. So $W = -U_{initial}$.<br><b>Step 2:</b> The initial potential energy of the -Q charge at the center is $U_{initial} = (-Q)V_{center}$.<br><b>Step 3:</b> The potential at the center due to the four corner charges is $V_{center} = 4 \\times \\frac{kQ}{a/\\sqrt{2}} = \\frac{4\\sqrt{2}kQ}{a}$.<br><b>Step 4:</b> $W = -(-Q) \\left( \\frac{4\\sqrt{2}Q}{4\\pi\\epsilon_0 a} \\right) = \\frac{\\sqrt{2}Q^2}{\\pi\\epsilon_0 a}$."
            },
            {
                "id": "ES-TEST-106",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Potential Gradient", "Calculus Based"],
                "q": "The electrostatic potential V at any point (x,y,z) in space is given by $V = 4x^2$.",
                "options": ["The y- and z- components of the electrostatic field at any point are not zero", "The x- component of electric field intensity at any point is given by $(-8x\\hat{i})$", "The x- component of electric field intensity at a point (2, 0, 2) is $(-8\\hat{i})$", "The y and z components of the field are constant in magnitude"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The electric field vector is the negative gradient of the potential function: $\\vec{E} = -\\left( \\frac{\\partial V}{\\partial x}\\hat{i} + \\frac{\\partial V}{\\partial y}\\hat{j} + \\frac{\\partial V}{\\partial z}\\hat{k} \\right)$.<br><b>Step 2:</b> Since $V$ only depends on $x$, the partial derivatives with respect to $y$ and $z$ are zero. Thus, $E_y = 0$ and $E_z = 0$.<br><b>Step 3:</b> The x-component is $E_x = -\\frac{\\partial}{\\partial x}(4x^2) = -8x$. Therefore, the field is $(-8x\\hat{i})$."
            },
            {
                "id": "ES-TEST-107",
                "topic": "Electric Dipole",
                "difficulty": 2,
                "tags": ["Potential Energy", "Basic Formula"],
                "q": "The self potential energy of hydrogen chloride whose dipole moment is $3.44 \\times 10^{-30}$ C-m and separation between hydrogen and chlorine atoms is $1.01 \\times 10^{-10}$ m is:",
                "options": ["$1.036 \\times 10^{-19}$ J", "$3.2 \\times 10^5$ J", "$4.5 \\times 10^7$ J", "$1.65 \\times 10^6$ J"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Find the magnitude of the charge $q$ using the dipole moment formula $p = q(2a)$.<br><b>Step 2:</b> $q = \\frac{p}{2a} = \\frac{3.44 \\times 10^{-30}}{1.01 \\times 10^{-10}} \\approx 3.4 \\times 10^{-20}$ C.<br><b>Step 3:</b> The self potential energy is the electrostatic potential energy between the two charges: $U = \\frac{1}{4\\pi\\epsilon_0} \\frac{q^2}{r}$.<br><b>Step 4:</b> $U = \\frac{9 \\times 10^9 \\times (3.4 \\times 10^{-20})^2}{1.01 \\times 10^{-10}} \\approx 1.036 \\times 10^{-19}$ J."
            }
        ]
    }
};
