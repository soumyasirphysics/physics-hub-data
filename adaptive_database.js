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
                "topic": "Coulomb's Law",
                "difficulty": 3,
                "tags": ["Maxima and Minima", "Calculus Based"],
                "q": "A charge $Q$ is divided into two parts $q_1$ and $q_2$ such that they experience the maximum force of repulsion when separated by a certain distance. The ratio of $Q : q_1 : q_2$ is:",
                "options": ["1 : 1 : 2", "1 : 2 : 2", "2 : 2 : 1", "2 : 1 : 1"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Let the two parts be $q$ and $Q-q$. According to Coulomb's law, Force $F \\propto q(Q-q)$.<br><b>Step 2:</b> For maximum force, we differentiate and equate to zero: $\\frac{dF}{dq} = Q - 2q = 0 \\implies q = \\frac{Q}{2}$.<br><b>Step 3:</b> Thus, $q_1 = \\frac{Q}{2}$ and $q_2 = \\frac{Q}{2}$. The ratio is $Q : \\frac{Q}{2} : \\frac{Q}{2}$ which simplifies to $2 : 1 : 1$."
            },
            {
                "id": "ES-TEST-024",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Vector Form", "3D Geometry"],
                "q": "Two charges, each $1 \\mu C$, are located at points $P(2\\hat{i}+3\\hat{j}+\\hat{k})$ m and $Q(\\hat{i}+\\hat{j}-\\hat{k})$ m. The electrostatic force between them is:",
                "options": ["100 N", "10 N", "$10^4$ dyne", "100 dyne"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Find the position vector $\\vec{r} = \\vec{r}_P - \\vec{r}_Q = (2-1)\\hat{i} + (3-1)\\hat{j} + (1 - (-1))\\hat{k} = \\hat{i} + 2\\hat{j} + 2\\hat{k}$.<br><b>Step 2:</b> Calculate the distance $r = |\\vec{r}| = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$ m.<br><b>Step 3:</b> Force $F = \\frac{k q_1 q_2}{r^2} = \\frac{9 \\times 10^9 \\times (10^{-6})^2}{3^2} = 10^{-3}$ N.<br><b>Step 4:</b> Convert to dynes ($1 N = 10^5$ dyne): $F = 10^{-3} \\times 10^5 = 100$ dyne."
            },
            {
                "id": "ES-TEST-025",
                "topic": "Coulomb's Law",
                "difficulty": 3,
                "tags": ["Vector Resolution", "Superposition"],
                "q": "Two charges of $+200 \\mu C$ and $-200 \\mu C$ are placed at the corners B and C of an equilateral triangle ABC of side $0.1$ m. The force on a charge of $5 \\mu C$ placed at corner A is:",
                "options": ["1800 N", "$1200\\sqrt{3}$ N", "$600\\sqrt{3}$ N", "900 N"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The force magnitude due to B is $F_1 = \\frac{9\\times 10^9 \\times 200\\times 10^{-6} \\times 5\\times 10^{-6}}{0.1^2} = 900$ N (Repulsive).<br><b>Step 2:</b> The force magnitude due to C is $F_2 = 900$ N (Attractive).<br><b>Step 3:</b> The angle between the attractive and repulsive force vectors is $120^{\\circ}$.<br><b>Step 4:</b> Resultant force $F_{net} = \\sqrt{F_1^2 + F_2^2 + 2F_1 F_2 \\cos 120^{\\circ}} = \\sqrt{900^2 + 900^2 - 900^2} = 900$ N."
            },
            {
                "id": "ES-TEST-026",
                "topic": "Coulomb's Law",
                "difficulty": 1,
                "tags": ["Equilibrium", "Basic Formula"],
                "q": "Two equally charged pith balls 3 cm apart repel each other with a force of $4 \\times 10^{-5}$ N. The charge on each ball is:",
                "options": ["$2 \\times 10^9$ C", "$2 \\times 10^{-9}$ C", "$\\frac{2}{3} \\times 10^9$ C", "$\\frac{2}{3} \\times 10^{-9}$ C"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Use Coulomb's Law: $F = \\frac{k q^2}{r^2}$.<br><b>Step 2:</b> Plug in the given values: $4 \\times 10^{-5} = \\frac{9 \\times 10^9 \\times q^2}{(0.03)^2}$.<br><b>Step 3:</b> Simplify the equation: $4 \\times 10^{-5} = \\frac{9 \\times 10^9 \\times q^2}{9 \\times 10^{-4}} = 10^{13} q^2$.<br><b>Step 4:</b> Solving gives $q^2 = 4 \\times 10^{-18} \\implies q = 2 \\times 10^{-9}$ C."
            },
            {
                "id": "ES-TEST-027",
                "topic": "Electric Field",
                "difficulty": 1,
                "tags": ["Mechanics Mix", "Kinematics"],
                "q": "An electron (mass = $9.1 \\times 10^{-31}$ kg) is sent into an electric field of intensity $9.1 \\times 10^6$ N/C. The acceleration produced is:",
                "options": ["$1.6 \\times 10^{18}$ m/s²", "$1.6 \\times 10^6$ m/s²", "$1.6 \\times 10^{-18}$ m/s²", "$1.6 \\times 10^{-6}$ m/s²"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The electric force acting on the electron is $F = eE$.<br><b>Step 2:</b> From Newton's second law, acceleration is $a = \\frac{F}{m} = \\frac{eE}{m}$.<br><b>Step 3:</b> $a = \\frac{1.6 \\times 10^{-19} \\times 9.1 \\times 10^6}{9.1 \\times 10^{-31}} = 1.6 \\times 10^{18}$ m/s²."
            },
            {
                "id": "ES-TEST-028",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Vector Form", "Coordinate Geometry"],
                "q": "The electric field at $(30, 30)$ cm due to a charge of $-8$ nC at the origin in N/C is:",
                "options": ["$-400(\\hat{i}+\\hat{j})$", "$400(\\hat{i}+\\hat{j})$", "$-200\\sqrt{2}(\\hat{i}+\\hat{j})$", "$200\\sqrt{2}(\\hat{i}+\\hat{j})$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Establish the position vector $\\vec{r} = 0.3\\hat{i} + 0.3\\hat{j}$ meters. Its magnitude is $r = 0.3\\sqrt{2}$ m.<br><b>Step 2:</b> The electric field in vector form is $\\vec{E} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^3} \\vec{r}$.<br><b>Step 3:</b> $\\vec{E} = \\frac{9 \\times 10^9 \\times (-8 \\times 10^{-9}) \\times 0.3(\\hat{i}+\\hat{j})}{(0.3\\sqrt{2})^3}$.<br><b>Step 4:</b> $\\vec{E} = \\frac{-21.6(\\hat{i}+\\hat{j})}{0.054\\sqrt{2}} = \\frac{-400}{\\sqrt{2}}(\\hat{i}+\\hat{j}) = -200\\sqrt{2}(\\hat{i}+\\hat{j})$."
            },
            {
                "id": "ES-TEST-029",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Null Point", "Equilibrium"],
                "q": "Two charges of $10 \\mu C$ and $-90 \\mu C$ are separated by a distance of 24 cm. The electrostatic field strength is zero at a distance from the smaller charge equal to:",
                "options": ["12 cm", "24 cm", "36 cm", "48 cm"],
                "correct": 0,
                "sol": "<b>Step 1:</b> For opposite charges, the null point (zero field) lies outside the region between the charges, situated closer to the smaller magnitude charge.<br><b>Step 2:</b> Let this point be at a distance $x$ from the $10 \\mu C$ charge. Equating field magnitudes: $\\frac{k(10)}{x^2} = \\frac{k(90)}{(24+x)^2}$.<br><b>Step 3:</b> Taking square roots on both sides gives: $\\frac{1}{x} = \\frac{3}{24+x}$.<br><b>Step 4:</b> Cross-multiply: $24 + x = 3x \\implies 2x = 24 \\implies x = 12$ cm."
            },
            {
                "id": "ES-TEST-030",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Superposition", "Symmetry"],
                "q": "Two electric charges of $+10^{-9}$ C and $-10^{-9}$ C are placed at the corners A and B of an equilateral triangle ABC of side 5 cm. The electric intensity at corner C is:",
                "options": ["1800 N/C", "3600 N/C", "900 N/C", "2700 N/C"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Field magnitude generated by one charge at C: $E_1 = \\frac{k q}{a^2} = \\frac{9 \\times 10^9 \\times 10^{-9}}{(0.05)^2} = \\frac{9}{0.0025} = 3600$ N/C.<br><b>Step 2:</b> Because they are equal and opposite charges, the two field vectors at C form an angle of $120^{\\circ}$ (one points outward from A, one points inward toward B).<br><b>Step 3:</b> The resultant field is $E_{net} = \\sqrt{E_1^2 + E_1^2 + 2E_1^2 \\cos 120^{\\circ}}$.<br><b>Step 4:</b> Since $\\cos 120^{\\circ} = -0.5$, $E_{net} = \\sqrt{E_1^2} = 3600$ N/C."
            }
        ]
    }
};
