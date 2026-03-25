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
                "options": ["$10^{-13}$ C", "$-1.6 \\times 10^{-13}$ C", "$+1.6 \\times 10^{-12}$ C", "$10^{-12}$ C"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Use the quantization of charge formula $Q = ne$.<br><b>Step 2:</b> Electrons have a negative charge, so $Q = 10^6 \\times (-1.6 \\times 10^{-19})$ C.<br><b>Step 3:</b> $Q = -1.6 \\times 10^{-13}$ C."
            },
            {
                "id": "ES-TEST-002",
                "topic": "Electric Charges and Fields",
                "difficulty": 1,
                "tags": ["Quantization of Charge", "Conceptual"],
                "q": "A body has a charge of $9.6 \\times 10^{-20}$ coulomb. It is:",
                "options": ["Possible", "Not possible", "May or may not be possible", "Data not sufficient"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Calculate the number of electrons using $n = \\frac{Q}{e}$.<br><b>Step 2:</b> $n = \\frac{9.6 \\times 10^{-20}}{1.6 \\times 10^{-19}} = 0.6$.<br><b>Step 3:</b> Since $n$ must be an integer and cannot be a fraction, this charge is not possible."
            },
            {
                "id": "ES-TEST-003",
                "topic": "Coulomb's Law",
                "difficulty": 1,
                "tags": ["Dielectric Constant", "Electric Force"],
                "q": "A force of 4 N is acting between two charges in air. If the space between them is completely filled with glass ($\\epsilon_{r}=8$), then the new force will be:",
                "options": ["2 N", "5 N", "0.2 N", "0.5 N"],
                "correct": 4,
                "sol": "<b>Step 1:</b> The force in a medium is given by $F' = \\frac{F}{K}$, where $K$ is the dielectric constant.<br><b>Step 2:</b> Substitute the given values: $F' = \\frac{4}{8}$.<br><b>Step 3:</b> $F' = 0.5$ N."
            },
            {
                "id": "ES-TEST-004",
                "topic": "Coulomb's Law",
                "difficulty": 1,
                "tags": ["Newton's Third Law", "Conceptual"],
                "q": "There are two charges +1 µC and +2 µC kept at certain separation. The ratio of electrostatic forces acting on them will be in the ratio of:",
                "options": ["1:2", "2:1", "1:1", "1:4"],
                "correct": 3,
                "sol": "<b>Step 1:</b> According to Coulomb's Law, the mutual electrostatic force between two charges is equal and opposite.<br><b>Step 2:</b> This is an application of Newton's Third Law of Motion. Both charges experience the exact same magnitude of force.<br><b>Step 3:</b> Therefore, the ratio is 1:1."
            },
            {
                "id": "ES-TEST-005",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Conservation of Charge", "Electric Force"],
                "q": "Two identical metal spheres possess +60 C and -20 C of charges. They are brought in contact and then separated by 10 cm. The force between them is:",
                "options": ["$36 \\times 10^{13}$ N", "$36 \\times 10^{14}$ N", "$36 \\times 10^{12}$ N", "$3.6 \\times 10^{12}$ N"],
                "correct": 1,
                "sol": "<b>Step 1:</b> When identical spheres are brought into contact, charge is distributed equally. New charge $q = \\frac{60 + (-20)}{2} = 20$ C on each.<br><b>Step 2:</b> Use Coulomb's law $F = \\frac{1}{4\\pi\\epsilon_0}\\frac{q_{1}q_{2}}{r^2}$.<br><b>Step 3:</b> $F = \\frac{9 \\times 10^9 \\times 20 \\times 20}{(0.1)^2} = \\frac{3600 \\times 10^9}{0.01} = 36 \\times 10^{13}$ N."
            },
            {
                "id": "ES-TEST-008",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Equilibrium of Charges", "Null Point"],
                "q": "A charge of +2 µC is placed at $x=0$ and a charge of -32 µC at $x=60$ cm. A third charge -Q be placed on the x-axis such that it experiences no force. The distance of the point from +2 µC is (in cm):",
                "options": ["-20", "20", "15", "10"],
                "correct": 1,
                "sol": "<b>Step 1:</b> For opposite charges, the null point lies outside the charges, near the smaller magnitude charge.<br><b>Step 2:</b> Let the distance from the smaller charge ($q_1$) be $x$. Use the formula $x = \\frac{d}{\\sqrt{\\frac{|q_2|}{|q_1|}} - 1}$.<br><b>Step 3:</b> $x = \\frac{60}{\\sqrt{\\frac{32}{2}} - 1} = \\frac{60}{\\sqrt{16} - 1} = \\frac{60}{3} = 20$ cm.<br><b>Step 4:</b> Since it must be on the side opposite to the -32 µC charge relative to the +2 µC charge at the origin, the coordinate is -20 cm."
            },
            {
                "id": "ES-TEST-009",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Superposition Principle", "Electric Field Intensity"],
                "q": "Two charges of 50 µC and 100 µC are separated by a distance of 0.6 m. The intensity of electric field at a point midway between them is:",
                "options": ["$50 \\times 10^{6}$ V/m", "$5 \\times 10^{6}$ V/m", "$10 \\times 10^{6}$ V/m", "$10 \\times 10^{-6}$ V/m"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The distance from the midpoint to each charge is $r = 0.3$ m. The fields from the two positive charges will oppose each other.<br><b>Step 2:</b> Net Field $E = E_2 - E_1 = k\\frac{q_2}{r^2} - k\\frac{q_1}{r^2} = k\\frac{q_2 - q_1}{r^2}$.<br><b>Step 3:</b> $E = 9 \\times 10^9 \\times \\frac{(100 - 50) \\times 10^{-6}}{(0.3)^2} = 9 \\times 10^9 \\times \\frac{50 \\times 10^{-6}}{0.09}$.<br><b>Step 4:</b> $E = 5 \\times 10^6$ V/m."
            },
            {
                "id": "ES-TEST-010",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Electric Force", "Vector Relations"],
                "q": "Two point charges Q and -3Q are placed some distance apart. If the electric field at the location of Q is $\\vec{E}$, the field at the location of -3Q is:",
                "options": ["$\\vec{E}$", "$-\\vec{E}$", "$+\\frac{\\vec{E}}{3}$", "$-\\frac{\\vec{E}}{3}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The force experienced by charge Q is $\\vec{F}_Q = Q\\vec{E}$.<br><b>Step 2:</b> By Newton's Third Law, the force on -3Q is equal and opposite: $\\vec{F}_{-3Q} = -\\vec{F}_Q = -Q\\vec{E}$.<br><b>Step 3:</b> The electric field at the location of -3Q is $\\vec{E}' = \\frac{\\vec{F}_{-3Q}}{-3Q} = \\frac{-Q\\vec{E}}{-3Q} = +\\frac{\\vec{E}}{3}$."
            },
            {
                "id": "ES-TEST-011",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Equilibrium", "Mechanics and Electrostatics"],
                "q": "A mass m carrying a charge q is suspended from a string and placed in a uniform horizontal electric field of intensity E. The angle made by the string with the vertical in the equilibrium position is:",
                "options": ["$\\theta = \\tan^{-1}\\left(\\frac{mg}{Eq}\\right)$", "$\\theta = \\tan^{-1}\\left(\\frac{m}{Eq}\\right)$", "$\\theta = \\tan^{-1}\\left(\\frac{Eq}{m}\\right)$", "$\\theta = \\tan^{-1}\\left(\\frac{Eq}{mg}\\right)$"],
                "correct": 4,
                "sol": "<b>Step 1:</b> In equilibrium, balance the horizontal and vertical forces.<br><b>Step 2:</b> Horizontal component of tension balances electric force: $T \\sin\\theta = qE$.<br><b>Step 3:</b> Vertical component of tension balances weight: $T \\cos\\theta = mg$.<br><b>Step 4:</b> Divide the two equations: $\\tan\\theta = \\frac{qE}{mg}$, which gives $\\theta = \\tan^{-1}\\left(\\frac{Eq}{mg}\\right)$."
            },
            {
                "id": "ES-TEST-012",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Kinematics of Charged Particles"],
                "q": "A proton of mass 'm' and charge 'e' is released from rest in a uniform electric field of strength 'E'. The time taken by it to travel a distance 'd' in the field is:",
                "options": ["$\\sqrt{\\frac{2de}{mE}}$", "$\\sqrt{\\frac{2dm}{Ee}}$", "$\\sqrt{\\frac{2dE}{me}}$", "$\\sqrt{\\frac{2Ee}{dm}}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Acceleration of the proton in the electric field is $a = \\frac{F}{m} = \\frac{eE}{m}$.<br><b>Step 2:</b> Use the kinematic equation $s = ut + \\frac{1}{2}at^2$. Since it starts from rest, $u=0$.<br><b>Step 3:</b> Substitute the values: $d = \\frac{1}{2}\\left(\\frac{eE}{m}\\right)t^2$.<br><b>Step 4:</b> Solve for time: $t^2 = \\frac{2dm}{eE}$, so $t = \\sqrt{\\frac{2dm}{Ee}}$."
            },
            {
                "id": "ES-TEST-013",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Superposition Principle", "Geometric Progression"],
                "q": "An infinite number of charges each of magnitude q are placed on the x-axis at distances of 1, 2, 4, 8, ... meter from the origin. The intensity of the electric field at the origin is:",
                "options": ["$\\frac{q}{3\\pi\\epsilon_{0}}$", "$\\frac{q}{6\\pi\\epsilon_{0}}$", "$\\frac{q}{2\\pi\\epsilon_{0}}$", "$\\frac{q}{4\\pi\\epsilon_{0}}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The total electric field at the origin is the sum of the fields from each charge: $E = \\frac{q}{4\\pi\\epsilon_0} \\left(\\frac{1}{1^2} + \\frac{1}{2^2} + \\frac{1}{4^2} + \\dots\\right)$.<br><b>Step 2:</b> This forms an infinite geometric progression: $E = \\frac{q}{4\\pi\\epsilon_0} \\left(1 + \\frac{1}{4} + \\frac{1}{16} + \\dots\\right)$.<br><b>Step 3:</b> The sum of an infinite GP is $S = \\frac{a}{1 - r}$. Here $a = 1$, $r = 1/4$. So, sum = $\\frac{1}{1 - 1/4} = \\frac{4}{3}$.<br><b>Step 4:</b> Therefore, $E = \\frac{q}{4\\pi\\epsilon_0} \\times \\frac{4}{3} = \\frac{q}{3\\pi\\epsilon_0}$."
            },
            {
                "id": "ES-TEST-014",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Electrostatic Pressure"],
                "q": "A uniformly charged thin spherical shell of radius R carries uniform surface charge density of $\\sigma$ per unit area. It is made of two hemispherical shells, held together by pressing them with force F. F is proportional to:",
                "options": ["$\\frac{1}{\\epsilon_{o}}\\sigma^{2}R^{2}$", "$\\frac{1}{\\epsilon_{o}}\\sigma^{2}R$", "$\\frac{1}{\\epsilon_{o}}\\frac{\\sigma^{2}}{R}$", "$\\frac{1}{\\epsilon_{o}}\\frac{\\sigma^{2}}{R^{2}}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The electrostatic pressure outward on the surface of a charged conductor is given by $P = \\frac{\\sigma^2}{2\\epsilon_o}$.<br><b>Step 2:</b> The force tending to separate the hemispheres is equal to the pressure multiplied by the projected area of the hemisphere, which is $\\pi R^2$.<br><b>Step 3:</b> $F = P \\times A = \\frac{\\sigma^2}{2\\epsilon_o} \\times \\pi R^2$.<br><b>Step 4:</b> Therefore, $F$ is directly proportional to $\\frac{1}{\\epsilon_{o}}\\sigma^{2}R^{2}$."
            },
            {
                "id": "ES-TEST-015",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 1,
                "tags": ["Relation between V and E", "Electric Force"],
                "q": "The p.d. between two plates separated by a distance of 1 mm is 100 V. The force on an electron placed in between the plates is:",
                "options": ["$10^{5}$ N", "$1.6 \\times 10^{-24}$ N", "$1.6 \\times 10^{-14}$ N", "$1.6 \\times 10^{-19}$ N"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Find the electric field between the plates using $E = \\frac{V}{d}$.<br><b>Step 2:</b> $E = \\frac{100}{1 \\times 10^{-3}} = 10^5$ V/m.<br><b>Step 3:</b> The force on an electron is $F = qE = eE$.<br><b>Step 4:</b> $F = 1.6 \\times 10^{-19} \\times 10^5 = 1.6 \\times 10^{-14}$ N."
            },
            {
                "id": "ES-TEST-016",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 3,
                "tags": ["Superposition Principle", "Infinite Series", "Electric Potential"],
                "q": "An infinite number of charges each equal to 'q' are placed along the X-axis at $x=1$, $x=2$, $x=4$, $x=8$ ..... The potential at the point $x=0$ due to this set of charges is:",
                "options": ["$\\frac{q}{4\\pi\\epsilon_{o}}$", "$\\frac{2q}{4\\pi\\epsilon_{o}}$", "$\\frac{3q}{4\\pi\\epsilon_{o}}$", "$\\frac{q}{\\pi\\epsilon_{o}}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The total potential at the origin is the algebraic sum of potentials due to each charge: $V = \\frac{q}{4\\pi\\epsilon_0} \\left(\\frac{1}{1} + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\dots\\right)$.<br><b>Step 2:</b> The terms in the bracket form an infinite geometric progression (GP) with first term $a = 1$ and common ratio $r = \\frac{1}{2}$.<br><b>Step 3:</b> The sum of an infinite GP is $S = \\frac{a}{1 - r} = \\frac{1}{1 - 0.5} = 2$.<br><b>Step 4:</b> Therefore, $V = \\frac{q}{4\\pi\\epsilon_0} \\times 2 = \\frac{2q}{4\\pi\\epsilon_{o}}$."
            },
            {
                "id": "ES-TEST-017",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Equipotential Surface", "Work Done"],
                "q": "A, B, C are three points on a circle of radius 1 cm. These points form the corners of an equilateral triangle. A charge 2C is placed at the centre of the circle. The work done in carrying a charge of $0.1 \\mu\\text{C}$ from A to B is:",
                "options": ["Zero", "$18 \\times 10^{11}$ J", "$1.8 \\times 10^{11}$ J", "$54 \\times 10^{11}$ J"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The points A and B lie on the circumference of a circle with the source charge (2C) at its center.<br><b>Step 2:</b> All points on this circular path are at the same distance from the center, making the circumference an equipotential surface.<br><b>Step 3:</b> The potential difference $\\Delta V$ between points A and B is zero.<br><b>Step 4:</b> Work done $W = q\\Delta V = q(0) = 0$."
            },
            {
                "id": "ES-TEST-019",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Conservation of Energy", "Kinetic Energy"],
                "q": "An electron of mass 'M' kg and charge 'e' coulomb travels from rest through a potential difference of 'V' volt. The final velocity of the electron is (in m/s):",
                "options": ["$\\frac{2eV}{M}$", "$\\frac{2MV}{e}$", "$\\sqrt{\\frac{2eV}{M}}$", "$\\sqrt{\\frac{2MV}{e}}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> When an electron is accelerated through a potential difference $V$, the work done on it is converted into kinetic energy.<br><b>Step 2:</b> Apply conservation of energy: $W = \\Delta K.E$.<br><b>Step 3:</b> $eV = \\frac{1}{2}Mv^2$.<br><b>Step 4:</b> Solve for velocity $v$: $v^2 = \\frac{2eV}{M} \\Rightarrow v = \\sqrt{\\frac{2eV}{M}}$."
            },
            {
                "id": "ES-TEST-020",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 3,
                "tags": ["Electric Potential", "Symmetry", "3D Geometry"],
                "q": "A charge 'Q' is placed at each corner of a cube of side 'a'. The potential at the centre of the cube is:",
                "options": ["$\\frac{8Q}{\\pi\\epsilon_{0}a}$", "$\\frac{4Q}{4\\pi\\epsilon_{0}a}$", "$\\frac{4Q}{\\sqrt{3}\\pi\\epsilon_{0}a}$", "$\\frac{2Q}{\\pi\\epsilon_{0}a}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The distance from the center of a cube of side $a$ to any of its corners is half the body diagonal: $r = \\frac{a\\sqrt{3}}{2}$.<br><b>Step 2:</b> Since potential is a scalar quantity, the total potential at the center is the sum of the potentials from all 8 identical charges at the corners.<br><b>Step 3:</b> $V = 8 \\times \\left(\\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{r}\\right)$.<br><b>Step 4:</b> Substitute $r$: $V = 8 \\times \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{\\frac{a\\sqrt{3}}{2}} = \\frac{16Q}{4\\pi\\epsilon_0 a\\sqrt{3}} = \\frac{4Q}{\\sqrt{3}\\pi\\epsilon_0 a}$."
            },
            {
                "id": "ES-TEST-021",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Relation between V and E", "Equipotential Surface"],
                "q": "A uniform electric field pointing in positive x-direction exists in a region. Let A be the origin, B be the point on the x-axis at $x=+1$ cm and C be the point on the y-axis at $y=+1$ cm. Then the potentials at the points A, B and C satisfy:",
                "options": ["$V_{A} < V_{B}$", "$V_{A} > V_{B}$", "$V_{A} < V_{C}$", "$V_{A} > V_{C}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Electric potential always decreases in the direction of the electric field.<br><b>Step 2:</b> Since the field is in the $+x$ direction, point B ($x=+1$ cm) is further down the field line than point A (origin). Therefore, $V_A > V_B$.<br><b>Step 3:</b> Point A and Point C are on the y-axis (perpendicular to the field direction), which forms an equipotential plane. Thus, $V_A = V_C$."
            },
            {
                "id": "ES-TEST-022",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Relation between V and E", "Conceptual"],
                "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEj8b7_YwE0wvdU5br2mNbVhMbp1kWgo0zCOyQ5vOygfbxX4F2wwaR1O-m9PMWtMnavXcOo8iq1zPfyiOLqXjj7ExhlHtl4IW8QAdybeF_AaIcZtN2yae_vPxAPVBWLbHrsUGx8L8A3rZqI1RunYPmyAixUnutRAuop5MP1oWgtLQ8lreRMJfVdWhl0E8b4X",
                "q": "The electric field at the origin is along the +ve x-axis. A small circle is drawn with the centre at the origin cutting the axes at the points A, B, C and D having coordinates (a, 0), (0, a), (-a, 0), (0, -a) respectively. Out of points on the periphery of the circle, the potential is minimum at:",
                "options": ["A", "B", "C", "D"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The electric field points in the direction of decreasing electric potential.<br><b>Step 2:</b> The field is directed along the $+x$ axis.<br><b>Step 3:</b> Among the given points on the circle, point A with coordinates $(a, 0)$ is located furthest in the direction of the $+x$ axis.<br><b>Step 4:</b> Therefore, the potential is minimum at point A."
            },
            {
                "id": "ES-TEST-023",
                "topic": "Electric Dipole",
                "difficulty": 2,
                "tags": ["Work Done", "Electric Dipole in Uniform Field"],
                "q": "An electric dipole is along a uniform electric field. If it is deflected by $60^{\\circ}$, work done by an agent is $2 \\times 10^{-19}$ J. Then the work done by an agent if it is deflected by $30^{\\circ}$ further is:",
                "options": ["$2.5 \\times 10^{-19}$ J", "$2 \\times 10^{-19}$ J", "$4 \\times 10^{-19}$ J", "$2 \\times 10^{-16}$ J"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Work done to rotate a dipole from angle $\\theta_1$ to $\\theta_2$ is $W = pE(\\cos\\theta_1 - \\cos\\theta_2)$.<br><b>Step 2:</b> For the first rotation (from $0^{\\circ}$ to $60^{\\circ}$): $W_1 = pE(1 - \\cos 60^{\\circ}) = pE(1 - 0.5) = 0.5pE$.<br><b>Step 3:</b> Given $W_1 = 2 \\times 10^{-19}$ J, so $0.5pE = 2 \\times 10^{-19}$ J, which gives $pE = 4 \\times 10^{-19}$ J.<br><b>Step 4:</b> For a further $30^{\\circ}$ deflection (from $60^{\\circ}$ to $90^{\\circ}$): $W_2 = pE(\\cos 60^{\\circ} - \\cos 90^{\\circ}) = pE(0.5 - 0) = 0.5pE$.<br><b>Step 5:</b> Therefore, $W_2 = 0.5 \\times (4 \\times 10^{-19}) = 2 \\times 10^{-19}$ J."
            },
            {
                "id": "ES-TEST-024",
                "topic": "Electric Dipole",
                "difficulty": 3,
                "tags": ["Superposition Principle", "Vector Addition", "Dipole Moment"],
                "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEi86OqzcuyOAAcKU37Pn2gBrgBC72Jnln4AOk0pQa49PpRxddLMG5duxaLkbm1_mAQnY8Lqq-Aphps0noPSBCNTMpeJ_3CvGCj14JXfdXCA-y7e0t8S-sFlTILHjGSmARZB6ATdSlkcYlYUqxViRenN3GJvs73JflkZqaq9jcmrwfheRaP9rIVPeynaMrBc",
                "q": "The dipole moment of the given system is:<br>",
                "options": ["$\\sqrt{3}ql$ along perpendicular bisector of q-q line", "$2ql$ along perpendicular bisector of q-q line", "$\\frac{ql}{\\sqrt{2}}$ along perpendicular bisector of q-q line", "0"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The system can be modeled as two separate dipoles. The $-2q$ charge at the apex can be split into two $-q$ charges.<br><b>Step 2:</b> Each $-q$ pairs with one of the base $+q$ charges, forming two dipoles of moment $p = ql$.<br><b>Step 3:</b> The angle between these two dipole vectors is $60^{\\circ}$ (since it's an equilateral triangle).<br><b>Step 4:</b> The resultant dipole moment is $P_{net} = \\sqrt{p^2 + p^2 + 2p^2\\cos(60^{\\circ})} = \\sqrt{2p^2 + 2p^2(0.5)} = \\sqrt{3p^2} = \\sqrt{3}ql$.<br><b>Step 5:</b> By symmetry, the resultant vector bisects the $60^{\\circ}$ angle, directing it along the perpendicular bisector of the base joining the two $+q$ charges."
            },
            {
                "id": "ES-TEST-025",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Maxima and Minima", "Electric Force"],
                "q": "A charge Q is divided into two parts $q_{1}$ and $q_{2}$ such that they experience maximum force of repulsion when separated by certain distance. The ratio of Q, $q_{1}$ and $q_{2}$ is:",
                "options": ["1:1:2", "1:2:2", "2:2:1", "2:1:1"],
                "correct": 4,
                "sol": "<b>Step 1:</b> Let the two parts be $q$ and $(Q-q)$. The force between them is $F = k \\frac{q(Q-q)}{r^2}$.<br><b>Step 2:</b> For maximum force, differentiate $F$ with respect to $q$ and set it to zero: $\\frac{dF}{dq} = 0$.<br><b>Step 3:</b> $\\frac{k}{r^2} \\frac{d}{dq}(qQ - q^2) = 0 \\Rightarrow Q - 2q = 0 \\Rightarrow q = \\frac{Q}{2}$.<br><b>Step 4:</b> Therefore, $q_1 = \\frac{Q}{2}$ and $q_2 = \\frac{Q}{2}$.<br><b>Step 5:</b> The ratio is $Q : q_1 : q_2 = Q : \\frac{Q}{2} : \\frac{Q}{2} = 2:1:1$."
            },
            {
                "id": "ES-TEST-026",
                "topic": "Coulomb's Law",
                "difficulty": 3,
                "tags": ["Vector Form", "3D Coordinate Geometry"],
                "q": "Two charges each 1 µC are at $P(2\\hat{i}+3\\hat{j}+\\hat{k})$ m and $Q(\\hat{i}+\\hat{j}-\\hat{k})$ m. Then the force between them is:",
                "options": ["100 N", "10 N", "$10^{4}$ dyne", "100 dyne"],
                "correct": 4,
                "sol": "<b>Step 1:</b> Find the position vector $\\vec{PQ} = (1-2)\\hat{i} + (1-3)\\hat{j} + (-1-1)\\hat{k} = -\\hat{i} - 2\\hat{j} - 2\\hat{k}$.<br><b>Step 2:</b> Calculate the distance between the charges: $r = |\\vec{PQ}| = \\sqrt{(-1)^2 + (-2)^2 + (-2)^2} = \\sqrt{1+4+4} = \\sqrt{9} = 3$ m.<br><b>Step 3:</b> Apply Coulomb's law: $F = \\frac{9\\times10^9 \\times (10^{-6})^2}{3^2} = \\frac{9\\times10^{-3}}{9} = 10^{-3}$ N.<br><b>Step 4:</b> Convert Newtons to dynes ($1$ N = $10^5$ dyne): $F = 10^{-3} \\times 10^5 = 100$ dyne."
            },
            {
                "id": "ES-TEST-027",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Superposition Principle", "Vector Addition"],
                "q": "Two charges of +200 µC and -200 µC are placed at the corners B and C of an equilateral triangle ABC of side 0.1 m. The force on a charge of 5 µC placed A is:",
                "options": ["1800 N", "$1200\\sqrt{3}$ N", "$600\\sqrt{3}$ N", "900 N"],
                "correct": 4,
                "sol": "<b>Step 1:</b> Calculate the magnitude of force from each charge at B and C on A: $F_1 = F_2 = \\frac{9 \\times 10^9 \\times (200 \\times 10^{-6}) \\times (5 \\times 10^{-6})}{(0.1)^2}$.<br><b>Step 2:</b> $F_1 = F_2 = \\frac{9 \\times 10^9 \\times 1000 \\times 10^{-12}}{0.01} = \\frac{9}{0.01} = 900$ N.<br><b>Step 3:</b> Force from B (+ charge) is repulsive, force from C (- charge) is attractive. The angle between these two force vectors is $120^{\\circ}$.<br><b>Step 4:</b> Using vector addition, the resultant force $F = \\sqrt{F_1^2 + F_2^2 + 2F_1F_2\\cos(120^{\\circ})} = \\sqrt{F_1^2 + F_1^2 - F_1^2} = F_1 = 900$ N."
            },
            {
                "id": "ES-TEST-028",
                "topic": "Coulomb's Law",
                "difficulty": 1,
                "tags": ["Electric Force"],
                "q": "Two equally charged pith balls 3 cm apart repel each other with a force of $4 \\times 10^{-5}$ newton. The charge on each ball is:",
                "options": ["$2 \\times 10^{9}$ C", "$2 \\times 10^{-9}$ C", "$\\frac{2}{3} \\times 10^{9}$ C", "$\\frac{2}{3} \\times 10^{-9}$ C"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Apply Coulomb's law: $F = k \\frac{q_1q_2}{r^2}$. Since they are equally charged, $q_1 = q_2 = q$.<br><b>Step 2:</b> $4 \\times 10^{-5} = 9 \\times 10^9 \\frac{q^2}{(0.03)^2}$.<br><b>Step 3:</b> $4 \\times 10^{-5} = 9 \\times 10^9 \\frac{q^2}{9 \\times 10^{-4}} = 10^{13} q^2$.<br><b>Step 4:</b> $q^2 = \\frac{4 \\times 10^{-5}}{10^{13}} = 4 \\times 10^{-18}$.<br><b>Step 5:</b> Taking the square root gives $q = 2 \\times 10^{-9}$ C."
            },
            {
                "id": "ES-TEST-029",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Kinematics of Charged Particles", "Electric Force"],
                "q": "An electron (mass = $9.1 \\times 10^{-31}$ kg) is sent into an electric field of intensity $9.1 \\times 10^{6}$ newton/coulomb. The acceleration produced is:",
                "options": ["$1.6 \\times 10^{18}$ m/s$^{2}$", "$1.6 \\times 10^{6}$ m/s$^{2}$", "$1.6 \\times 10^{-18}$ m/s$^{2}$", "$1.6 \\times 10^{-6}$ m/s$^{2}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The force experienced by an electron in an electric field is $F = eE$.<br><b>Step 2:</b> By Newton's second law, $F = ma$, so $a = \\frac{eE}{m}$.<br><b>Step 3:</b> Substitute the values: $a = \\frac{1.6 \\times 10^{-19} \\times 9.1 \\times 10^{6}}{9.1 \\times 10^{-31}}$.<br><b>Step 4:</b> The $9.1$ cancels out: $a = 1.6 \\times 10^{-19 + 6 + 31} = 1.6 \\times 10^{18}$ m/s$^{2}$."
            },
            {
                "id": "ES-TEST-030",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Vector Form", "Electric Field Intensity"],
                "q": "The electric field at (30, 30) cm due to a charge of -8 nC at the origin in NC$^{-1}$ is:",
                "options": ["$-400(\\hat{i}+\\hat{j})$", "$400(\\hat{i}+\\hat{j})$", "$-200\\sqrt{2}(\\hat{i}+\\hat{j})$", "$200\\sqrt{2}(\\hat{i}+\\hat{j})$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Convert coordinates to meters. Position vector $\\vec{r} = 0.3\\hat{i} + 0.3\\hat{j}$ m. Magnitude $|\\vec{r}| = \\sqrt{0.3^2 + 0.3^2} = 0.3\\sqrt{2}$ m.<br><b>Step 2:</b> Use the vector formula for electric field: $\\vec{E} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{|\\vec{r}|^3} \\vec{r}$.<br><b>Step 3:</b> $\\vec{E} = 9 \\times 10^9 \\times \\frac{-8 \\times 10^{-9}}{(0.3\\sqrt{2})^3} (0.3\\hat{i} + 0.3\\hat{j})$.<br><b>Step 4:</b> Note that $(0.3\\sqrt{2})^3 = 0.027 \\times 2\\sqrt{2} = 0.054\\sqrt{2}$. The expression becomes $\\vec{E} = \\frac{-72}{0.054\\sqrt{2}} \\times 0.3(\\hat{i} + \\hat{j})$.<br><b>Step 5:</b> Simplify: $\\frac{-21.6}{0.054\\sqrt{2}} (\\hat{i} + \\hat{j}) = \\frac{-400}{\\sqrt{2}} (\\hat{i} + \\hat{j}) = -200\\sqrt{2}(\\hat{i} + \\hat{j})$ N/C."
            },
            {
                "id": "ES-TEST-031",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Null Point", "Equilibrium"],
                "q": "Two charges of 10 µC and -90 µC are separated by a distance of 24 cm. Electrostatic field strength from the smaller charge is zero at a distance of:",
                "options": ["12 cm", "24 cm", "36 cm", "48 cm"],
                "correct": 1,
                "sol": "<b>Step 1:</b> For opposite charges, the null point (zero electric field) lies outside the line joining the charges, closer to the charge with the smaller magnitude.<br><b>Step 2:</b> Let the distance from the 10 µC charge be $x$. The fields from both charges must be equal in magnitude at this point: $E_1 = E_2$.<br><b>Step 3:</b> $k\\frac{10}{x^2} = k\\frac{90}{(24 + x)^2}$.<br><b>Step 4:</b> Take the square root of both sides: $\\frac{1}{x} = \\frac{3}{24 + x}$.<br><b>Step 5:</b> Solve for $x$: $24 + x = 3x \\Rightarrow 2x = 24 \\Rightarrow x = 12$ cm."
            }
        ]
    }
};
