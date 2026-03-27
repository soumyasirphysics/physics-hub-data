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
                "correct": 1,
                "sol": "<b>Step 1:</b> Use the quantization of charge formula $Q = ne$.<br><b>Step 2:</b> Electrons have a negative charge, so $Q = 10^6 \\times (-1.6 \\times 10^{-19})$ C.<br><b>Step 3:</b> $Q = -1.6 \\times 10^{-13}$ C."
            },
            {
                "id": "ES-TEST-002",
                "topic": "Electric Charges and Fields",
                "difficulty": 1,
                "tags": ["Quantization of Charge", "Conceptual"],
                "q": "A body has a charge of $9.6 \\times 10^{-20}$ coulomb. It is:",
                "options": ["Possible", "Not possible", "May or may not be possible", "Data not sufficient"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Calculate the number of electrons using $n = \\frac{Q}{e}$.<br><b>Step 2:</b> $n = \\frac{9.6 \\times 10^{-20}}{1.6 \\times 10^{-19}} = 0.6$.<br><b>Step 3:</b> Since $n$ must be an integer and cannot be a fraction, this charge is not possible."
            },
            {
                "id": "ES-TEST-003",
                "topic": "Coulomb's Law",
                "difficulty": 1,
                "tags": ["Dielectric Constant", "Electric Force"],
                "q": "A force of 4 N is acting between two charges in air. If the space between them is completely filled with glass ($\\epsilon_{r}=8$), then the new force will be:",
                "options": ["2 N", "5 N", "0.2 N", "0.5 N"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The force in a medium is given by $F' = \\frac{F}{K}$, where $K$ is the dielectric constant.<br><b>Step 2:</b> Substitute the given values: $F' = \\frac{4}{8}$.<br><b>Step 3:</b> $F' = 0.5$ N."
            },
            {
                "id": "ES-TEST-004",
                "topic": "Coulomb's Law",
                "difficulty": 1,
                "tags": ["Newton's Third Law", "Conceptual"],
                "q": "There are two charges +1 µC and +2 µC kept at certain separation. The ratio of electrostatic forces acting on them will be in the ratio of:",
                "options": ["1:2", "2:1", "1:1", "1:4"],
                "correct": 2,
                "sol": "<b>Step 1:</b> According to Coulomb's Law, the mutual electrostatic force between two charges is equal and opposite.<br><b>Step 2:</b> This is an application of Newton's Third Law of Motion. Both charges experience the exact same magnitude of force.<br><b>Step 3:</b> Therefore, the ratio is 1:1."
            },
            {
                "id": "ES-TEST-005",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Conservation of Charge", "Electric Force"],
                "q": "Two identical metal spheres possess +60 C and -20 C of charges. They are brought in contact and then separated by 10 cm. The force between them is:",
                "options": ["$36 \\times 10^{13}$ N", "$36 \\times 10^{14}$ N", "$36 \\times 10^{12}$ N", "$3.6 \\times 10^{12}$ N"],
                "correct": 0,
                "sol": "<b>Step 1:</b> When identical spheres are brought into contact, charge is distributed equally. New charge $q = \\frac{60 + (-20)}{2} = 20$ C on each.<br><b>Step 2:</b> Use Coulomb's law $F = \\frac{1}{4\\pi\\epsilon_0}\\frac{q_{1}q_{2}}{r^2}$.<br><b>Step 3:</b> $F = \\frac{9 \\times 10^9 \\times 20 \\times 20}{(0.1)^2} = \\frac{3600 \\times 10^9}{0.01} = 36 \\times 10^{13}$ N."
            },
            {
                "id": "ES-TEST-008",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Equilibrium of Charges", "Null Point"],
                "q": "A charge of +2 µC is placed at $x=0$ and a charge of -32 µC at $x=60$ cm. A third charge -Q be placed on the x-axis such that it experiences no force. The distance of the point from +2 µC is (in cm):",
                "options": ["-20", "20", "15", "10"],
                "correct": 0,
                "sol": "<b>Step 1:</b> For opposite charges, the null point lies outside the charges, near the smaller magnitude charge.<br><b>Step 2:</b> Let the distance from the smaller charge ($q_1$) be $x$. Use the formula $x = \\frac{d}{\\sqrt{\\frac{|q_2|}{|q_1|}} - 1}$.<br><b>Step 3:</b> $x = \\frac{60}{\\sqrt{\\frac{32}{2}} - 1} = \\frac{60}{\\sqrt{16} - 1} = \\frac{60}{3} = 20$ cm.<br><b>Step 4:</b> Since it must be on the side opposite to the -32 µC charge relative to the +2 µC charge at the origin, the coordinate is -20 cm."
            },
            {
                "id": "ES-TEST-009",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Superposition Principle", "Electric Field Intensity"],
                "q": "Two charges of 50 µC and 100 µC are separated by a distance of 0.6 m. The intensity of electric field at a point midway between them is:",
                "options": ["$50 \\times 10^{6}$ V/m", "$5 \\times 10^{6}$ V/m", "$10 \\times 10^{6}$ V/m", "$10 \\times 10^{-6}$ V/m"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The distance from the midpoint to each charge is $r = 0.3$ m. The fields from the two positive charges will oppose each other.<br><b>Step 2:</b> Net Field $E = E_2 - E_1 = k\\frac{q_2}{r^2} - k\\frac{q_1}{r^2} = k\\frac{q_2 - q_1}{r^2}$.<br><b>Step 3:</b> $E = 9 \\times 10^9 \\times \\frac{(100 - 50) \\times 10^{-6}}{(0.3)^2} = 9 \\times 10^9 \\times \\frac{50 \\times 10^{-6}}{0.09}$.<br><b>Step 4:</b> $E = 5 \\times 10^6$ V/m."
            },
            {
                "id": "ES-TEST-010",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Electric Force", "Vector Relations"],
                "q": "Two point charges Q and -3Q are placed some distance apart. If the electric field at the location of Q is $\\vec{E}$, the field at the location of -3Q is:",
                "options": ["$\\vec{E}$", "$-\\vec{E}$", "$+\\frac{\\vec{E}}{3}$", "$-\\frac{\\vec{E}}{3}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The force experienced by charge Q is $\\vec{F}_Q = Q\\vec{E}$.<br><b>Step 2:</b> By Newton's Third Law, the force on -3Q is equal and opposite: $\\vec{F}_{-3Q} = -\\vec{F}_Q = -Q\\vec{E}$.<br><b>Step 3:</b> The electric field at the location of -3Q is $\\vec{E}' = \\frac{\\vec{F}_{-3Q}}{-3Q} = \\frac{-Q\\vec{E}}{-3Q} = +\\frac{\\vec{E}}{3}$."
            },
            {
                "id": "ES-TEST-011",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Equilibrium", "Mechanics and Electrostatics"],
                "q": "A mass m carrying a charge q is suspended from a string and placed in a uniform horizontal electric field of intensity E. The angle made by the string with the vertical in the equilibrium position is:",
                "options": ["$\\theta = \\tan^{-1}\\left(\\frac{mg}{Eq}\\right)$", "$\\theta = \\tan^{-1}\\left(\\frac{m}{Eq}\\right)$", "$\\theta = \\tan^{-1}\\left(\\frac{Eq}{m}\\right)$", "$\\theta = \\tan^{-1}\\left(\\frac{Eq}{mg}\\right)$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> In equilibrium, balance the horizontal and vertical forces.<br><b>Step 2:</b> Horizontal component of tension balances electric force: $T \\sin\\theta = qE$.<br><b>Step 3:</b> Vertical component of tension balances weight: $T \\cos\\theta = mg$.<br><b>Step 4:</b> Divide the two equations: $\\tan\\theta = \\frac{qE}{mg}$, which gives $\\theta = \\tan^{-1}\\left(\\frac{Eq}{mg}\\right)$."
            },
            {
                "id": "ES-TEST-012",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Kinematics of Charged Particles"],
                "q": "A proton of mass 'm' and charge 'e' is released from rest in a uniform electric field of strength 'E'. The time taken by it to travel a distance 'd' in the field is:",
                "options": ["$\\sqrt{\\frac{2de}{mE}}$", "$\\sqrt{\\frac{2dm}{Ee}}$", "$\\sqrt{\\frac{2dE}{me}}$", "$\\sqrt{\\frac{2Ee}{dm}}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Acceleration of the proton in the electric field is $a = \\frac{F}{m} = \\frac{eE}{m}$.<br><b>Step 2:</b> Use the kinematic equation $s = ut + \\frac{1}{2}at^2$. Since it starts from rest, $u=0$.<br><b>Step 3:</b> Substitute the values: $d = \\frac{1}{2}\\left(\\frac{eE}{m}\\right)t^2$.<br><b>Step 4:</b> Solve for time: $t^2 = \\frac{2dm}{eE}$, so $t = \\sqrt{\\frac{2dm}{Ee}}$."
            },
            {
                "id": "ES-TEST-013",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Superposition Principle", "Geometric Progression"],
                "q": "An infinite number of charges each of magnitude q are placed on the x-axis at distances of 1, 2, 4, 8, ... meter from the origin. The intensity of the electric field at the origin is:",
                "options": ["$\\frac{q}{3\\pi\\epsilon_{0}}$", "$\\frac{q}{6\\pi\\epsilon_{0}}$", "$\\frac{q}{2\\pi\\epsilon_{0}}$", "$\\frac{q}{4\\pi\\epsilon_{0}}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The total electric field at the origin is the sum of the fields from each charge: $E = \\frac{q}{4\\pi\\epsilon_0} \\left(\\frac{1}{1^2} + \\frac{1}{2^2} + \\frac{1}{4^2} + \\dots\\right)$.<br><b>Step 2:</b> This forms an infinite geometric progression: $E = \\frac{q}{4\\pi\\epsilon_0} \\left(1 + \\frac{1}{4} + \\frac{1}{16} + \\dots\\right)$.<br><b>Step 3:</b> The sum of an infinite GP is $S = \\frac{a}{1 - r}$. Here $a = 1$, $r = 1/4$. So, sum = $\\frac{1}{1 - 1/4} = \\frac{4}{3}$.<br><b>Step 4:</b> Therefore, $E = \\frac{q}{4\\pi\\epsilon_0} \\times \\frac{4}{3} = \\frac{q}{3\\pi\\epsilon_0}$."
            },
            {
                "id": "ES-TEST-014",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Electrostatic Pressure"],
                "q": "A uniformly charged thin spherical shell of radius R carries uniform surface charge density of $\\sigma$ per unit area. It is made of two hemispherical shells, held together by pressing them with force F. F is proportional to:",
                "options": ["$\\frac{1}{\\epsilon_{o}}\\sigma^{2}R^{2}$", "$\\frac{1}{\\epsilon_{o}}\\sigma^{2}R$", "$\\frac{1}{\\epsilon_{o}}\\frac{\\sigma^{2}}{R}$", "$\\frac{1}{\\epsilon_{o}}\\frac{\\sigma^{2}}{R^{2}}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The electrostatic pressure outward on the surface of a charged conductor is given by $P = \\frac{\\sigma^2}{2\\epsilon_o}$.<br><b>Step 2:</b> The force tending to separate the hemispheres is equal to the pressure multiplied by the projected area of the hemisphere, which is $\\pi R^2$.<br><b>Step 3:</b> $F = P \\times A = \\frac{\\sigma^2}{2\\epsilon_o} \\times \\pi R^2$.<br><b>Step 4:</b> Therefore, $F$ is directly proportional to $\\frac{1}{\\epsilon_{o}}\\sigma^{2}R^{2}$."
            },
            {
                "id": "ES-TEST-015",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 1,
                "tags": ["Relation between V and E", "Electric Force"],
                "q": "The p.d. between two plates separated by a distance of 1 mm is 100 V. The force on an electron placed in between the plates is:",
                "options": ["$10^{5}$ N", "$1.6 \\times 10^{-24}$ N", "$1.6 \\times 10^{-14}$ N", "$1.6 \\times 10^{-19}$ N"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Find the electric field between the plates using $E = \\frac{V}{d}$.<br><b>Step 2:</b> $E = \\frac{100}{1 \\times 10^{-3}} = 10^5$ V/m.<br><b>Step 3:</b> The force on an electron is $F = qE = eE$.<br><b>Step 4:</b> $F = 1.6 \\times 10^{-19} \\times 10^5 = 1.6 \\times 10^{-14}$ N."
            },
            {
                "id": "ES-TEST-016",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 3,
                "tags": ["Superposition Principle", "Infinite Series", "Electric Potential"],
                "q": "An infinite number of charges each equal to 'q' are placed along the X-axis at $x=1$, $x=2$, $x=4$, $x=8$ ..... The potential at the point $x=0$ due to this set of charges is:",
                "options": ["$\\frac{q}{4\\pi\\epsilon_{o}}$", "$\\frac{2q}{4\\pi\\epsilon_{o}}$", "$\\frac{3q}{4\\pi\\epsilon_{o}}$", "$\\frac{q}{\\pi\\epsilon_{o}}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The total potential at the origin is the algebraic sum of potentials due to each charge: $V = \\frac{q}{4\\pi\\epsilon_0} \\left(\\frac{1}{1} + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\dots\\right)$.<br><b>Step 2:</b> The terms in the bracket form an infinite geometric progression (GP) with first term $a = 1$ and common ratio $r = \\frac{1}{2}$.<br><b>Step 3:</b> The sum of an infinite GP is $S = \\frac{a}{1 - r} = \\frac{1}{1 - 0.5} = 2$.<br><b>Step 4:</b> Therefore, $V = \\frac{q}{4\\pi\\epsilon_0} \\times 2 = \\frac{2q}{4\\pi\\epsilon_{o}}$."
            },
            {
                "id": "ES-TEST-017",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Equipotential Surface", "Work Done"],
                "q": "A, B, C are three points on a circle of radius 1 cm. These points form the corners of an equilateral triangle. A charge 2C is placed at the centre of the circle. The work done in carrying a charge of $0.1 \\mu\\text{C}$ from A to B is:",
                "options": ["Zero", "$18 \\times 10^{11}$ J", "$1.8 \\times 10^{11}$ J", "$54 \\times 10^{11}$ J"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The points A and B lie on the circumference of a circle with the source charge (2C) at its center.<br><b>Step 2:</b> All points on this circular path are at the same distance from the center, making the circumference an equipotential surface.<br><b>Step 3:</b> The potential difference $\\Delta V$ between points A and B is zero.<br><b>Step 4:</b> Work done $W = q\\Delta V = q(0) = 0$."
            },
            {
                "id": "ES-TEST-019",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Conservation of Energy", "Kinetic Energy"],
                "q": "An electron of mass 'M' kg and charge 'e' coulomb travels from rest through a potential difference of 'V' volt. The final velocity of the electron is (in m/s):",
                "options": ["$\\frac{2eV}{M}$", "$\\frac{2MV}{e}$", "$\\sqrt{\\frac{2eV}{M}}$", "$\\sqrt{\\frac{2MV}{e}}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> When an electron is accelerated through a potential difference $V$, the work done on it is converted into kinetic energy.<br><b>Step 2:</b> Apply conservation of energy: $W = \\Delta K.E$.<br><b>Step 3:</b> $eV = \\frac{1}{2}Mv^2$.<br><b>Step 4:</b> Solve for velocity $v$: $v^2 = \\frac{2eV}{M} \\Rightarrow v = \\sqrt{\\frac{2eV}{M}}$."
            },
            {
                "id": "ES-TEST-020",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 3,
                "tags": ["Electric Potential", "Symmetry", "3D Geometry"],
                "q": "A charge 'Q' is placed at each corner of a cube of side 'a'. The potential at the centre of the cube is:",
                "options": ["$\\frac{8Q}{\\pi\\epsilon_{0}a}$", "$\\frac{4Q}{4\\pi\\epsilon_{0}a}$", "$\\frac{4Q}{\\sqrt{3}\\pi\\epsilon_{0}a}$", "$\\frac{2Q}{\\pi\\epsilon_{0}a}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The distance from the center of a cube of side $a$ to any of its corners is half the body diagonal: $r = \\frac{a\\sqrt{3}}{2}$.<br><b>Step 2:</b> Since potential is a scalar quantity, the total potential at the center is the sum of the potentials from all 8 identical charges at the corners.<br><b>Step 3:</b> $V = 8 \\times \\left(\\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{r}\\right)$.<br><b>Step 4:</b> Substitute $r$: $V = 8 \\times \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{\\frac{a\\sqrt{3}}{2}} = \\frac{16Q}{4\\pi\\epsilon_0 a\\sqrt{3}} = \\frac{4Q}{\\sqrt{3}\\pi\\epsilon_0 a}$."
            },
            {
                "id": "ES-TEST-021",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Relation between V and E", "Equipotential Surface"],
                "q": "A uniform electric field pointing in positive x-direction exists in a region. Let A be the origin, B be the point on the x-axis at $x=+1$ cm and C be the point on the y-axis at $y=+1$ cm. Then the potentials at the points A, B and C satisfy:",
                "options": ["$V_{A} < V_{B}$", "$V_{A} > V_{B}$", "$V_{A} < V_{C}$", "$V_{A} > V_{C}$"],
                "correct": 1,
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
                "correct": 0,
                "sol": "<b>Step 1:</b> The electric field points in the direction of decreasing electric potential.<br><b>Step 2:</b> The field is directed along the $+x$ axis.<br><b>Step 3:</b> Among the given points on the circle, point A with coordinates $(a, 0)$ is located furthest in the direction of the $+x$ axis.<br><b>Step 4:</b> Therefore, the potential is minimum at point A."
            },
            {
                "id": "ES-TEST-023",
                "topic": "Electric Dipole",
                "difficulty": 2,
                "tags": ["Work Done", "Electric Dipole in Uniform Field"],
                "q": "An electric dipole is along a uniform electric field. If it is deflected by $60^{\\circ}$, work done by an agent is $2 \\times 10^{-19}$ J. Then the work done by an agent if it is deflected by $30^{\\circ}$ further is:",
                "options": ["$2.5 \\times 10^{-19}$ J", "$2 \\times 10^{-19}$ J", "$4 \\times 10^{-19}$ J", "$2 \\times 10^{-16}$ J"],
                "correct": 1,
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
                "correct": 0,
                "sol": "<b>Step 1:</b> The system can be modeled as two separate dipoles. The $-2q$ charge at the apex can be split into two $-q$ charges.<br><b>Step 2:</b> Each $-q$ pairs with one of the base $+q$ charges, forming two dipoles of moment $p = ql$.<br><b>Step 3:</b> The angle between these two dipole vectors is $60^{\\circ}$ (since it's an equilateral triangle).<br><b>Step 4:</b> The resultant dipole moment is $P_{net} = \\sqrt{p^2 + p^2 + 2p^2\\cos(60^{\\circ})} = \\sqrt{2p^2 + 2p^2(0.5)} = \\sqrt{3p^2} = \\sqrt{3}ql$.<br><b>Step 5:</b> By symmetry, the resultant vector bisects the $60^{\\circ}$ angle, directing it along the perpendicular bisector of the base joining the two $+q$ charges."
            },
            {
                "id": "ES-TEST-025",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Maxima and Minima", "Electric Force"],
                "q": "A charge Q is divided into two parts $q_{1}$ and $q_{2}$ such that they experience maximum force of repulsion when separated by certain distance. The ratio of Q, $q_{1}$ and $q_{2}$ is:",
                "options": ["1:1:2", "1:2:2", "2:2:1", "2:1:1"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Let the two parts be $q$ and $(Q-q)$. The force between them is $F = k \\frac{q(Q-q)}{r^2}$.<br><b>Step 2:</b> For maximum force, differentiate $F$ with respect to $q$ and set it to zero: $\\frac{dF}{dq} = 0$.<br><b>Step 3:</b> $\\frac{k}{r^2} \\frac{d}{dq}(qQ - q^2) = 0 \\Rightarrow Q - 2q = 0 \\Rightarrow q = \\frac{Q}{2}$.<br><b>Step 4:</b> Therefore, $q_1 = \\frac{Q}{2}$ and $q_2 = \\frac{Q}{2}$.<br><b>Step 5:</b> The ratio is $Q : q_1 : q_2 = Q : \\frac{Q}{2} : \\frac{Q}{2} = 2:1:1$."
            },
            {
                "id": "ES-TEST-026",
                "topic": "Coulomb's Law",
                "difficulty": 3,
                "tags": ["Vector Form", "3D Coordinate Geometry"],
                "q": "Two charges each 1 µC are at $P(2\\hat{i}+3\\hat{j}+\\hat{k})$ m and $Q(\\hat{i}+\\hat{j}-\\hat{k})$ m. Then the force between them is:",
                "options": ["100 N", "10 N", "$10^{4}$ dyne", "100 dyne"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Find the position vector $\\vec{PQ} = (1-2)\\hat{i} + (1-3)\\hat{j} + (-1-1)\\hat{k} = -\\hat{i} - 2\\hat{j} - 2\\hat{k}$.<br><b>Step 2:</b> Calculate the distance between the charges: $r = |\\vec{PQ}| = \\sqrt{(-1)^2 + (-2)^2 + (-2)^2} = \\sqrt{1+4+4} = \\sqrt{9} = 3$ m.<br><b>Step 3:</b> Apply Coulomb's law: $F = \\frac{9\\times10^9 \\times (10^{-6})^2}{3^2} = \\frac{9\\times10^{-3}}{9} = 10^{-3}$ N.<br><b>Step 4:</b> Convert Newtons to dynes ($1$ N = $10^5$ dyne): $F = 10^{-3} \\times 10^5 = 100$ dyne."
            },
            {
                "id": "ES-TEST-027",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Superposition Principle", "Vector Addition"],
                "q": "Two charges of +200 µC and -200 µC are placed at the corners B and C of an equilateral triangle ABC of side 0.1 m. The force on a charge of 5 µC placed A is:",
                "options": ["1800 N", "$1200\\sqrt{3}$ N", "$600\\sqrt{3}$ N", "900 N"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Calculate the magnitude of force from each charge at B and C on A: $F_1 = F_2 = \\frac{9 \\times 10^9 \\times (200 \\times 10^{-6}) \\times (5 \\times 10^{-6})}{(0.1)^2}$.<br><b>Step 2:</b> $F_1 = F_2 = \\frac{9 \\times 10^9 \\times 1000 \\times 10^{-12}}{0.01} = \\frac{9}{0.01} = 900$ N.<br><b>Step 3:</b> Force from B (+ charge) is repulsive, force from C (- charge) is attractive. The angle between these two force vectors is $120^{\\circ}$.<br><b>Step 4:</b> Using vector addition, the resultant force $F = \\sqrt{F_1^2 + F_2^2 + 2F_1F_2\\cos(120^{\\circ})} = \\sqrt{F_1^2 + F_1^2 - F_1^2} = F_1 = 900$ N."
            },
            {
                "id": "ES-TEST-028",
                "topic": "Coulomb's Law",
                "difficulty": 1,
                "tags": ["Electric Force"],
                "q": "Two equally charged pith balls 3 cm apart repel each other with a force of $4 \\times 10^{-5}$ newton. The charge on each ball is:",
                "options": ["$2 \\times 10^{9}$ C", "$2 \\times 10^{-9}$ C", "$\\frac{2}{3} \\times 10^{9}$ C", "$\\frac{2}{3} \\times 10^{-9}$ C"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Apply Coulomb's law: $F = k \\frac{q_1q_2}{r^2}$. Since they are equally charged, $q_1 = q_2 = q$.<br><b>Step 2:</b> $4 \\times 10^{-5} = 9 \\times 10^9 \\frac{q^2}{(0.03)^2}$.<br><b>Step 3:</b> $4 \\times 10^{-5} = 9 \\times 10^9 \\frac{q^2}{9 \\times 10^{-4}} = 10^{13} q^2$.<br><b>Step 4:</b> $q^2 = \\frac{4 \\times 10^{-5}}{10^{13}} = 4 \\times 10^{-18}$.<br><b>Step 5:</b> Taking the square root gives $q = 2 \\times 10^{-9}$ C."
            },
            {
                "id": "ES-TEST-029",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Kinematics of Charged Particles", "Electric Force"],
                "q": "An electron (mass = $9.1 \\times 10^{-31}$ kg) is sent into an electric field of intensity $9.1 \\times 10^{6}$ newton/coulomb. The acceleration produced is:",
                "options": ["$1.6 \\times 10^{18}$ m/s$^{2}$", "$1.6 \\times 10^{6}$ m/s$^{2}$", "$1.6 \\times 10^{-18}$ m/s$^{2}$", "$1.6 \\times 10^{-6}$ m/s$^{2}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The force experienced by an electron in an electric field is $F = eE$.<br><b>Step 2:</b> By Newton's second law, $F = ma$, so $a = \\frac{eE}{m}$.<br><b>Step 3:</b> Substitute the values: $a = \\frac{1.6 \\times 10^{-19} \\times 9.1 \\times 10^{6}}{9.1 \\times 10^{-31}}$.<br><b>Step 4:</b> The $9.1$ cancels out: $a = 1.6 \\times 10^{-19 + 6 + 31} = 1.6 \\times 10^{18}$ m/s$^{2}$."
            },
            {
                "id": "ES-TEST-030",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Vector Form", "Electric Field Intensity"],
                "q": "The electric field at (30, 30) cm due to a charge of -8 nC at the origin in NC$^{-1}$ is:",
                "options": ["$-400(\\hat{i}+\\hat{j})$", "$400(\\hat{i}+\\hat{j})$", "$-200\\sqrt{2}(\\hat{i}+\\hat{j})$", "$200\\sqrt{2}(\\hat{i}+\\hat{j})$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Convert coordinates to meters. Position vector $\\vec{r} = 0.3\\hat{i} + 0.3\\hat{j}$ m. Magnitude $|\\vec{r}| = \\sqrt{0.3^2 + 0.3^2} = 0.3\\sqrt{2}$ m.<br><b>Step 2:</b> Use the vector formula for electric field: $\\vec{E} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{|\\vec{r}|^3} \\vec{r}$.<br><b>Step 3:</b> $\\vec{E} = 9 \\times 10^9 \\times \\frac{-8 \\times 10^{-9}}{(0.3\\sqrt{2})^3} (0.3\\hat{i} + 0.3\\hat{j})$.<br><b>Step 4:</b> Note that $(0.3\\sqrt{2})^3 = 0.027 \\times 2\\sqrt{2} = 0.054\\sqrt{2}$. The expression becomes $\\vec{E} = \\frac{-72}{0.054\\sqrt{2}} \\times 0.3(\\hat{i} + \\hat{j})$.<br><b>Step 5:</b> Simplify: $\\frac{-21.6}{0.054\\sqrt{2}} (\\hat{i} + \\hat{j}) = \\frac{-400}{\\sqrt{2}} (\\hat{i} + \\hat{j}) = -200\\sqrt{2}(\\hat{i} + \\hat{j})$ N/C."
            },
            {
                "id": "ES-TEST-031",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Null Point", "Equilibrium"],
                "q": "Two charges of 10 µC and -90 µC are separated by a distance of 24 cm. Electrostatic field strength from the smaller charge is zero at a distance of:",
                "options": ["12 cm", "24 cm", "36 cm", "48 cm"],
                "correct": 0,
                "sol": "<b>Step 1:</b> For opposite charges, the null point (zero electric field) lies outside the line joining the charges, closer to the charge with the smaller magnitude.<br><b>Step 2:</b> Let the distance from the 10 µC charge be $x$. The fields from both charges must be equal in magnitude at this point: $E_1 = E_2$.<br><b>Step 3:</b> $k\\frac{10}{x^2} = k\\frac{90}{(24 + x)^2}$.<br><b>Step 4:</b> Take the square root of both sides: $\\frac{1}{x} = \\frac{3}{24 + x}$.<br><b>Step 5:</b> Solve for $x$: $24 + x = 3x \\Rightarrow 2x = 24 \\Rightarrow x = 12$ cm."
            },
            {
                "id": "ES-TEST-032",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Superposition Principle", "Electric Field Intensity"],
                "q": "Two electric charges of $+10^{-9}$ C and $-10^{-9}$ C are placed at the corners A and B of an equilateral triangle ABC side 5cm. The electric intensity at C is:",
                "options": ["1800 N/C", "3600 N/C", "900 N/C", "2700 N/C"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Calculate the magnitude of the electric field at C due to each charge: $E_1 = E_2 = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2}$.<br><b>Step 2:</b> Substitute values: $E_1 = 9 \\times 10^9 \\times \\frac{10^{-9}}{(0.05)^2} = \\frac{9}{0.0025} = 3600$ N/C.<br><b>Step 3:</b> The electric field vector from the positive charge points away from A, and from the negative charge points towards B. The angle between them at C is $120^{\\circ}$.<br><b>Step 4:</b> Resultant field $E = \\sqrt{E_1^2 + E_2^2 + 2E_1E_2\\cos(120^{\\circ})}$.<br><b>Step 5:</b> Since $E_1 = E_2$ and $\\cos(120^{\\circ}) = -0.5$, the resultant is $E = E_1 = 3600$ N/C."
            },
            {
                "id": "ES-TEST-033",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Superposition Principle", "Electric Potential"],
                "q": "Two electric charges of $9 \\mu\\text{C}$ and $-3 \\mu\\text{C}$ placed 0.16m apart in air. There are two points A and B on the line joining the two charges at distances of (i) 0.04m from $-3 \\mu\\text{C}$ and in between the charges and (ii) 0.08m from $-3 \\mu\\text{C}$ and out side the two charges. The potentials at A and B are:",
                "options": ["0V, 5V", "0V, 0V", "5V, 0V", "5V, 10V"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Point A is 0.04m from $-3 \\mu\\text{C}$. Its distance from $9 \\mu\\text{C}$ is $0.16 - 0.04 = 0.12$ m.<br><b>Step 2:</b> Potential at A: $V_A = k \\left(\\frac{9 \\times 10^{-6}}{0.12} - \\frac{3 \\times 10^{-6}}{0.04}\\right) = k(75 \\times 10^{-6} - 75 \\times 10^{-6}) = 0$ V.<br><b>Step 3:</b> Point B is outside, 0.08m from $-3 \\mu\\text{C}$. Its distance from $9 \\mu\\text{C}$ is $0.16 + 0.08 = 0.24$ m.<br><b>Step 4:</b> Potential at B: $V_B = k \\left(\\frac{9 \\times 10^{-6}}{0.24} - \\frac{3 \\times 10^{-6}}{0.08}\\right) = k(37.5 \\times 10^{-6} - 37.5 \\times 10^{-6}) = 0$ V."
            },
            {
                "id": "ES-TEST-034",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 1,
                "tags": ["Superposition Principle", "Symmetry"],
                "q": "Four charges $+3 \\mu\\text{C}$, $-1 \\mu\\text{C}$, $+5 \\mu\\text{C}$ and $-7 \\mu\\text{C}$ are arranged on the circumference of a circle of radius 0.5 m. The potential at the centre is:",
                "options": ["Zero", "$18 \\times 10^{4}$ V", "$-18 \\times 10^{4}$ V", "$288 \\times 10^{3}$ V"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Potential is a scalar quantity. The total potential at the center is $V = \\sum \\frac{kq}{r}$.<br><b>Step 2:</b> Since all charges are on the circumference, $r$ is constant (0.5 m) for all charges.<br><b>Step 3:</b> $V = \\frac{k}{r} (q_1 + q_2 + q_3 + q_4) = \\frac{k}{r} (3 - 1 + 5 - 7) \\mu\\text{C}$.<br><b>Step 4:</b> Sum of charges $= 0$. Therefore, $V = 0$."
            },
            {
                "id": "ES-TEST-035",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Work Done", "Electric Potential"],
                "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEgUua_7sR2_jAatHmqwetutVj2uhsOjmeE4NSX_djxGhDSjAX3eiL5V7CYvZNtdIfHba3NOIzzp-pBQ4wjT1M-v_SsEeJynYUcVXxG30jOeTDnVImWUO4taJ6tZJdvq__6UORGLat6i-FXyn5nNRpc6a3xyCxC1C9fyoWhKUZS9mzJfsyr4Yuw5VaHdFceF",
                "q": "A positive point charge 'q' is carried from a point 'B' to a point 'A' in the electric field of a point charge +Q. If the permittivity of free space is $\\epsilon_{0}$, the work done in the process is given by:",
                "options": ["$\\frac{qQ}{4\\pi\\epsilon_{0}}[\\frac{1}{a}-\\frac{1}{b}]$", "$\\frac{qQ}{4\\pi\\epsilon_{0}}[\\frac{1}{a}+\\frac{1}{b}]$", "$\\frac{qQ}{4\\pi\\epsilon_{0}}[\\frac{1}{a^{2}}-\\frac{1}{b^{2}}]$", "$\\frac{qQ}{4\\pi\\epsilon_{0}}[\\frac{1}{a^{2}}+\\frac{1}{b^{2}}]$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Work done by an external agent in moving a charge $q$ is $W = q(V_{final} - V_{initial})$.<br><b>Step 2:</b> The charge is moved from B to A, so $W = q(V_A - V_B)$.<br><b>Step 3:</b> The potential at distance $a$ is $V_A = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{a}$. The potential at distance $b$ is $V_B = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{b}$.<br><b>Step 4:</b> Substitute these into the work equation: $W = q\\left(\\frac{Q}{4\\pi\\epsilon_0 a} - \\frac{Q}{4\\pi\\epsilon_0 b}\\right)$.<br><b>Step 5:</b> Factor out the constants to get $W = \\frac{qQ}{4\\pi\\epsilon_{0}}\\left[\\frac{1}{a}-\\frac{1}{b}\\right]$."
            },
            {
                "id": "ES-TEST-036",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 1,
                "tags": ["EMF", "Work and Energy"],
                "q": "An electric cell does 5 joules of work in carrying 10 Coulombs of charge around a closed circuit. The emf of the cell is:",
                "options": ["2 V", "0.5 V", "4 V", "1 V"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Electromotive force (emf) is defined as the work done by the source per unit charge.<br><b>Step 2:</b> $\\text{emf} = \\frac{W}{q}$.<br><b>Step 3:</b> Substitute the values: $\\text{emf} = \\frac{5}{10} = 0.5$ V."
            },
            {
                "id": "ES-TEST-037",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 1,
                "tags": ["Properties of Conductors", "Equipotential Volume"],
                "q": "An insulated charged conducting sphere of radius 5 cms has a potential of 10V at the surface. What is the potential at centre?",
                "options": ["10V", "zero", "same as that at 5 cms from the surface", "same as that at 25 cms from the surface"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The electric field inside a charged conducting sphere is zero.<br><b>Step 2:</b> Since $E = -\\frac{dV}{dr} = 0$, the potential $V$ must be constant throughout the volume of the conductor.<br><b>Step 3:</b> Therefore, the potential at the center is equal to the potential at the surface, which is 10V."
            },
            {
                "id": "ES-TEST-038",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 3,
                "tags": ["Superposition Principle", "Geometric Arrangement"],
                "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEjzDIslr7jGUxyyJ2Fy40c3fU0Fm4sbHkR1vCyHaj8pM1ci0Lj-axUH2iJt-FSHTJYiq_bx3faeUMkAMOp974lxMyZD58HNGPzLMkHhuzZ8XQBDheLLMLk320WRXt1Hynp2uwN9bvpXvqpb_OHSdl-oV9D0F9zSjs1jzYe-SjjlTiCaiWS6GLgF01-TH2RG",
                "q": "Figure shows a square array of charged particles, with distance d between adjacent particles. What is the electric potential at point P at the centre of the square if the electric potential is zero at infinity?",
                "options": ["Zero", "$\\frac{-2q}{4\\pi\\epsilon_{0}d}$", "$\\frac{-4q}{4\\pi\\epsilon_{0}d}$", "$\\frac{q}{4\\pi\\epsilon_{0}d}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Let's sum the potentials from the corners and the midpoints separately. The distance between adjacent particles is $d$, so the full side of the square is $2d$.<br><b>Step 2:</b> The distance from center P to the corners is $d\\sqrt{2}$. The sum of the charges at the corners is $-4q + q + 4q - q = 0$. Thus, $V_{corners} = 0$.<br><b>Step 3:</b> The distance from center P to the midpoints of the sides is $d$. The sum of the charges at the midpoints is $-2q - 5q - 2q + 5q = -4q$.<br><b>Step 4:</b> The potential from the midpoints is $V_{mid} = \\frac{1}{4\\pi\\epsilon_0} \\frac{\\sum q_{mid}}{d} = \\frac{-4q}{4\\pi\\epsilon_0 d}$.<br><b>Step 5:</b> Total potential $V_P = V_{corners} + V_{mid} = \\frac{-4q}{4\\pi\\epsilon_{0}d}$."
            },
            {
                "id": "ES-TEST-039",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Charge Sharing", "Capacitance of Spheres"],
                "q": "The radii of two charged metal spheres are 5cm and 10cm both having the same charge 60mC. If they are connected by a wire:",
                "options": ["A charge of 20mC flows through the wire from larger to smaller sphere", "A charge of 20mC flows through the wire from smaller to larger sphere", "A charge of 40mC flows through the wire from smaller to larger sphere", "No charge flows through the wire because both spheres have same charge"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Total charge $Q_{tot} = 60 + 60 = 120$ mC. Capacitance of a sphere is proportional to its radius ($C = 4\\pi\\epsilon_0 R$).<br><b>Step 2:</b> When connected, they reach a common potential, and charge distributes in the ratio of their capacitances (radii). $Q_1 : Q_2 = R_1 : R_2 = 5 : 10 = 1 : 2$.<br><b>Step 3:</b> Final charge on the smaller sphere $Q_1' = \\frac{1}{3} \\times 120 = 40$ mC.<br><b>Step 4:</b> The smaller sphere initially had 60 mC and ends up with 40 mC. Therefore, $60 - 40 = 20$ mC of charge flowed from the smaller sphere to the larger one."
            },
            {
                "id": "ES-TEST-040",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Potential Gradient", "Calculus"],
                "q": "The electric potential at a point (x, 0, 0) is given by $V = \\left[\\frac{1000}{x} + \\frac{1500}{x^{2}} + \\frac{500}{x^{3}}\\right]$. Then the electric field at $x=1$ m is (in volt/m):",
                "options": ["$-5500\\hat{i}$", "5500", "$\\sqrt{5500}\\hat{i}$", "zero"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The electric field $E$ is the negative gradient of potential: $E_x = -\\frac{dV}{dx}$.<br><b>Step 2:</b> Differentiate $V$ with respect to $x$: $\\frac{dV}{dx} = -\\frac{1000}{x^2} - \\frac{3000}{x^3} - \\frac{1500}{x^4}$.<br><b>Step 3:</b> Evaluate at $x = 1$: $\\frac{dV}{dx} = -1000 - 3000 - 1500 = -5500$.<br><b>Step 4:</b> $E_x = -(-5500) = 5500$ V/m. The magnitude is 5500."
            },
            {
                "id": "ES-TEST-041",
                "topic": "Electric Dipole",
                "difficulty": 1,
                "tags": ["Dipole Potential Energy", "Equilibrium"],
                "q": "An electric dipole of moment p is placed in the position of stable equilibrium in uniform electric field of intensity E. It is rotated through an angle $\\theta$ from the initial position. The potential energy of electric dipole in the position is:",
                "options": ["$pE \\cos \\theta$", "$pE \\sin \\theta$", "$pE(1-\\cos)\\theta$", "$-pE \\cos \\theta$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The potential energy of a dipole in a uniform electric field is given by $U = -\\vec{p} \\cdot \\vec{E}$.<br><b>Step 2:</b> The dot product expands to $U = -pE \\cos \\theta$, where $\\theta$ is the angle between the dipole moment vector and the electric field."
            },
            {
                "id": "ES-TEST-042",
                "topic": "Electric Dipole",
                "difficulty": 2,
                "tags": ["Work Done on Dipole"],
                "q": "An electric dipole of moment $\\vec{p}$ placed normal to the lines of force of electric intensity $\\vec{E}$. Then the work done in deflecting it through an angle of $180^{\\circ}$ is:",
                "options": ["$pE$", "$+2 pE$", "$-2pE$", "zero"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The work done in rotating a dipole is $W = pE(\\cos \\theta_1 - \\cos \\theta_2)$.<br><b>Step 2:</b> \"Normal to the lines of force\" means the initial angle $\\theta_1 = 90^{\\circ}$.<br><b>Step 3:</b> Deflecting it through $180^{\\circ}$ from that position means the final angle is $\\theta_2 = 90^{\\circ} + 180^{\\circ} = 270^{\\circ}$.<br><b>Step 4:</b> $W = pE(\\cos 90^{\\circ} - \\cos 270^{\\circ}) = pE(0 - 0) = 0$."
            },
            {
                "id": "ES-TEST-043",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Dielectrics", "Electric Force"],
                "q": "Two charges when kept at a distance of 1m apart in vacuum have some force of repulsion. If the force of repulsion between these two charges be same, when placed in an oil of dielectric constant 4, the distance of separation is:",
                "options": ["0.25m", "0.4m", "0.5m", "0.6m"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Force in vacuum $F = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_1 q_2}{r_1^2}$. Here $r_1 = 1$ m.<br><b>Step 2:</b> Force in a dielectric medium $F' = \\frac{1}{4\\pi\\epsilon_0 K} \\frac{q_1 q_2}{r_2^2}$.<br><b>Step 3:</b> Given $F = F'$, so $\\frac{1}{r_1^2} = \\frac{1}{K r_2^2}$.<br><b>Step 4:</b> $\\frac{1}{1^2} = \\frac{1}{4 \\times r_2^2} \\implies 4r_2^2 = 1 \\implies r_2^2 = 0.25$.<br><b>Step 5:</b> $r_2 = \\sqrt{0.25} = 0.5$ m."
            },
            {
                "id": "ES-TEST-044",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Quantization of Charge", "Electric Force"],
                "q": "The excess (equal in number) number of electrons that must be placed on each of two small spheres spaced 3 cm apart with force of repulsion between the spheres to be $10^{-19}$ N is:",
                "options": ["25", "225", "625", "1250"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Use Coulomb's law to find the required charge: $F = k \\frac{q^2}{r^2}$.<br><b>Step 2:</b> $10^{-19} = 9 \\times 10^9 \\times \\frac{q^2}{(0.03)^2}$.<br><b>Step 3:</b> $q^2 = \\frac{10^{-19} \\times 9 \\times 10^{-4}}{9 \\times 10^9} = 10^{-32}$. Therefore, $q = 10^{-16}$ C.<br><b>Step 4:</b> Use quantization of charge $q = ne$ to find the number of electrons.<br><b>Step 5:</b> $n = \\frac{10^{-16}}{1.6 \\times 10^{-19}} = \\frac{1000}{1.6} = 625$."
            },
            {
                "id": "ES-TEST-045",
                "topic": "Coulomb's Law",
                "difficulty": 3,
                "tags": ["Equilibrium of Suspended Charges", "Mechanics and Electrostatics"],
                "q": "Two small conducting spheres each of mass $9 \\times 10^{-4}$ kg are suspended from the same point by non conducting strings of length 100 cm. They are given equal and similar charges until the strings are equally inclined at $45^{\\circ}$ each to the vertical. The charge on each sphere is (in Coulomb):",
                "options": ["$1.4 \\times 10^{-6}$", "$1.6 \\times 10^{-6}$", "$2 \\times 10^{-6}$", "$1.96 \\times 10^{-6}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> For a suspended charge in equilibrium, $\\tan \\theta = \\frac{F_e}{mg}$. Since $\\theta = 45^{\\circ}$, $\\tan 45^{\\circ} = 1$, so $F_e = mg$.<br><b>Step 2:</b> Calculate weight (using $g = 9.8$ m/s$^2$): $mg = 9 \\times 10^{-4} \\times 9.8 = 8.82 \\times 10^{-3}$ N.<br><b>Step 3:</b> Find the distance between spheres: $r = 2L \\sin 45^{\\circ} = 2(1)\\left(\\frac{1}{\\sqrt{2}}\\right) = \\sqrt{2}$ m.<br><b>Step 4:</b> Set $F_e = k \\frac{q^2}{r^2} = mg \\implies 9 \\times 10^9 \\frac{q^2}{(\\sqrt{2})^2} = 8.82 \\times 10^{-3}$.<br><b>Step 5:</b> $4.5 \\times 10^9 q^2 = 8.82 \\times 10^{-3} \\implies q^2 = 1.96 \\times 10^{-12} \\implies q = 1.4 \\times 10^{-6}$ C."
            },
            {
                "id": "ES-TEST-046",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Null Point", "Superposition Principle"],
                "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEiiz8KadtupmwWm6Uy7NwL5vuLPBUsAMP92yWmU1NTrFHnuWoAhqP_UU8FghqFNVKhfH7LqIyd_Jh_zVnqN2bXhq3spXzs-zKVlHija8hMS6commLFAU62h5QLMH_QDLYRfL_9GOAmKEQGSjjkfCvsTvoa3YK5B7j_WwLPsE1XWJUXxDDFTLmhD_73-4sl6",
                "q": "Two point charges of magnitude 4 $\\mu$C and -9 $\\mu$C are 0.5m apart. The electric intensity is zero at a distance 'x' m from 'A' and 'y' m from 'B'. 'x' and 'y' are respectively:",
                "options": ["0.5m, 1.0m", "1.0m, 1.5m", "2.0m, 1.5m", "1.5m, 2.0m"],
                "correct": 1,
                "sol": "<b>Step 1:</b> For opposite charges, the null point (zero electric field) lies outside the line joining them, closer to the charge with the smaller magnitude (4 $\\mu$C).<br><b>Step 2:</b> Let $x$ be the distance from the 4 $\\mu$C charge (A). The distance from the -9 $\\mu$C charge (B) is $y = x + 0.5$.<br><b>Step 3:</b> Equate the magnitudes of the electric fields: $k\\frac{4}{x^2} = k\\frac{9}{(x + 0.5)^2}$.<br><b>Step 4:</b> Take the square root of both sides: $\\frac{2}{x} = \\frac{3}{x + 0.5}$.<br><b>Step 5:</b> Cross-multiply and solve: $2(x + 0.5) = 3x \\implies 2x + 1 = 3x \\implies x = 1.0$ m.<br><b>Step 6:</b> Calculate $y$: $y = 1.0 + 0.5 = 1.5$ m."
            },
            {
                "id": "ES-TEST-047",
                "topic": "Coulomb's Law",
                "difficulty": 3,
                "tags": ["Equilibrium of Charges", "Vector Addition"],
                "q": "A charge +q is fixed to each of three corners of a square. On the empty corner a charge Q is placed such that there is no net electrostatic force acting on the diagonally opposite charge. Then:",
                "options": ["$Q=-2q$", "$Q=-2\\sqrt{2}q$", "$Q=-\\sqrt{2}q$", "$Q=-4q$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Let the square have side length $a$. Consider the $+q$ charge at the corner diagonally opposite to $Q$.<br><b>Step 2:</b> The force from the two adjacent $+q$ charges is $F_{adj} = k\\frac{q^2}{a^2}$. Since they are at $90^\\circ$ to each other, their resultant is $F_R = \\sqrt{2}F_{adj} = \\sqrt{2}k\\frac{q^2}{a^2}$, directed outward along the diagonal.<br><b>Step 3:</b> For net force to be zero, the force from $Q$ must completely cancel $F_R$. Therefore, $Q$ must be negative (to attract) and act along the same diagonal.<br><b>Step 4:</b> The distance across the diagonal is $a\\sqrt{2}$. The force from $Q$ is $F_Q = k\\frac{|Q|q}{(a\\sqrt{2})^2} = k\\frac{|Q|q}{2a^2}$.<br><b>Step 5:</b> Equate the magnitudes: $k\\frac{|Q|q}{2a^2} = \\sqrt{2}k\\frac{q^2}{a^2} \\implies \\frac{|Q|}{2} = \\sqrt{2}q \\implies |Q| = 2\\sqrt{2}q$. Since it must be negative, $Q = -2\\sqrt{2}q$."
            },
            {
                "id": "ES-TEST-048",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Percentage Change", "Electric Force"],
                "q": "Electrical force between two point charges is 200N. If we increase 10% charge on one of the charges and decrease 10% charge on the other, then electrical force between them for the same distance becomes:",
                "options": ["198 N", "100 N", "200 N", "99 N"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Initial force $F = k\\frac{q_1 q_2}{r^2} = 200$ N.<br><b>Step 2:</b> New charges are $q_1' = q_1 + 0.10q_1 = 1.1q_1$ and $q_2' = q_2 - 0.10q_2 = 0.9q_2$.<br><b>Step 3:</b> New force $F' = k\\frac{(1.1q_1)(0.9q_2)}{r^2} = 0.99 \\left(k\\frac{q_1 q_2}{r^2}\\right)$.<br><b>Step 4:</b> Substitute the initial force: $F' = 0.99 \\times 200 = 198$ N."
            },
            {
                "id": "ES-TEST-049",
                "topic": "Coulomb's Law",
                "difficulty": 3,
                "tags": ["Maxima and Minima", "Charge Distribution"],
                "q": "N fundamental charges each of charge 'q' are to be distributed as two point charges separated by a fixed distance, then the maximum to minimum force bears a ratio (N is even and greater than 2):",
                "options": ["$\\frac{(N-1)^{2}}{4N^{2}}$", "$\\frac{4N^{2}}{(N-1)}$", "$\\frac{N^{2}}{4(N-1)}$", "$\\frac{2N^{2}}{(N-1)}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Total charge is $Nq$. Let it be split into $n_1 q$ and $n_2 q$ such that $n_1 + n_2 = N$.<br><b>Step 2:</b> The electrostatic force is $F \\propto n_1 n_2$.<br><b>Step 3:</b> Force is maximum when the charges are divided equally (since N is even): $n_1 = n_2 = \\frac{N}{2}$. So, $F_{max} \\propto \\left(\\frac{N}{2}\\right)^2 = \\frac{N^2}{4}$.<br><b>Step 4:</b> Force is minimum when the charge distribution is most unequal. Because charges are quantized, the most unequal split is $1q$ and $(N-1)q$. So, $F_{min} \\propto 1 \\times (N-1) = N-1$.<br><b>Step 5:</b> The ratio is $\\frac{F_{max}}{F_{min}} = \\frac{N^2 / 4}{N - 1} = \\frac{N^2}{4(N-1)}$."
            },
            {
                "id": "ES-TEST-050",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Equilibrium on Incline", "Mechanics and Electrostatics"],
                "q": "A particle A having a charge of $2\\times10^{-6}$C and a mass of 100g is placed at the bottom of a smooth inclined plane of inclination $30^{\\circ}$. The distance of another particle of same mass and charge, be placed on the incline so that it may remain in equilibrium is:",
                "options": ["27 cm", "16 cm", "30 cm", "45 cm"],
                "correct": 0,
                "sol": "<b>Step 1:</b> For the particle on the incline to be in equilibrium, the component of gravitational force down the incline must balance the electrostatic repulsive force up the incline.<br><b>Step 2:</b> $mg \\sin\\theta = k\\frac{q^2}{r^2}$.<br><b>Step 3:</b> Rearrange to solve for $r^2$: $r^2 = \\frac{kq^2}{mg \\sin\\theta}$.<br><b>Step 4:</b> Substitute values ($m = 0.1$ kg, $g = 9.8$ m/s$^2$, $\\theta = 30^{\\circ}$): $r^2 = \\frac{9\\times10^9 \\times (2\\times10^{-6})^2}{0.1 \\times 9.8 \\times 0.5}$.<br><b>Step 5:</b> $r^2 = \\frac{36 \\times 10^{-3}}{0.49} \\approx 0.0734$ m$^2$.<br><b>Step 6:</b> $r = \\sqrt{0.0734} \\approx 0.27$ m $= 27$ cm."
            },
            {
                "id": "ES-TEST-051",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Potential Gradient", "Graphical Analysis"],
                "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEitUBedCThuNdCxW-MTlrPhuKOvNnribbYLQZJE8NmWM_ku8oqFQVno1F7k3g4WRBMidxWlpZ8IcMxqXJzv0v39f59KS8i1OS6Ku0bx-dlFltteQxVsvn7uSv93VRdiGVKSXLvdrvHWTeUb-zGBCrZhYvPq-OAndn-f-dHr3Z0WGON_Om5EnLww4-rKj_MK",
                "q": "In the figure shown, the electric field intensity at $r=1$m, $r=6$m, $r=9$m in $Vm^{-1}$ is:",
                "options": ["-5, -1.67, +5", "-5, 0, +5", "0, 1.67, 0", "+5, 1.67, -5"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Electric field is the negative gradient of the potential-distance graph: $E = -\\frac{dV}{dr}$ (negative slope).<br><b>Step 2:</b> At $r=1$m, the graph is a straight line from (0,0) to (2,10). Slope $= \\frac{10-0}{2-0} = 5$. Thus, $E = -5$ V/m.<br><b>Step 3:</b> At $r=6$m, the graph is a flat horizontal line from $r=2$ to $r=8$. Slope $= 0$. Thus, $E = 0$ V/m.<br><b>Step 4:</b> At $r=9$m, the graph is a straight line from (8,10) to (10,0). Slope $= \\frac{0-10}{10-8} = -5$. Thus, $E = -(-5) = +5$ V/m."
            },
            {
                "id": "ES-TEST-052",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Vector Addition", "Superposition Principle"],
                "q": "Point charges of $3\\times10^{-9}$C are situated at each of three corners of a square whose side is 15 cm. The magnitude and direction of electric field at the vacant corner of the square is:",
                "options": ["2296 V/m along the diagonal", "9622 V/m along the diagonal", "22.0 V/m along the diagonal", "zero"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The two charges at the adjacent corners (distance $a = 0.15$ m) produce fields $E_1 = E_2 = k\\frac{q}{a^2}$. Their resultant points along the diagonal and has magnitude $\\sqrt{2}E_1 = \\sqrt{2}k\\frac{q}{a^2}$.<br><b>Step 2:</b> The charge at the opposite corner (distance $a\\sqrt{2}$) produces a field $E_3 = k\\frac{q}{(a\\sqrt{2})^2} = \\frac{kq}{2a^2}$ which also points along the same diagonal.<br><b>Step 3:</b> Total field $E = \\sqrt{2}k\\frac{q}{a^2} + k\\frac{q}{2a^2} = \\frac{kq}{a^2}(\\sqrt{2} + 0.5)$.<br><b>Step 4:</b> Substitute the values: $E = \\frac{9\\times10^9 \\times 3\\times10^{-9}}{(0.15)^2} \\times (1.414 + 0.5) = \\frac{27}{0.0225} \\times 1.914$.<br><b>Step 5:</b> $E = 1200 \\times 1.914 = 2296.8$ V/m, directed along the diagonal away from the center."
            },
            {
                "id": "ES-TEST-053",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Projectile Motion in Electric Field", "Kinematics Mix"],
                "q": "A large flat metal surface has uniform charge density $+\\sigma$. An electron of mass m and charge e leaves the surface at an angle $\\alpha$ at point A with speed v, and return to it at point B. The maximum value of AB is:",
                "options": ["$\\frac{vm~\\epsilon_{0}}{\\sigma e}$", "$\\frac{v^{2}m~\\epsilon_{0}}{e\\sigma}$", "$\\frac{v^{2}e}{\\epsilon_{0}\\sigma m}$", "$\\frac{v^{2}\\sigma e}{\\epsilon_{0}m}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The electric field near a large metal surface is $E = \\frac{\\sigma}{\\epsilon_0}$. The downward acceleration of the electron is $a = \\frac{eE}{m} = \\frac{e\\sigma}{m\\epsilon_0}$.<br><b>Step 2:</b> The motion is identical to projectile motion. The range $R = AB = \\frac{v^2 \\sin(2\\alpha)}{a}$.<br><b>Step 3:</b> The range is maximum when $\\sin(2\\alpha) = 1$ (i.e., angle of projection $\\alpha = 45^{\\circ}$).<br><b>Step 4:</b> $R_{max} = \\frac{v^2}{a} = \\frac{v^2}{\\left(\\frac{e\\sigma}{m\\epsilon_0}\\right)} = \\frac{v^2 m\\epsilon_0}{e\\sigma}$."
            },
            {
                "id": "ES-TEST-054",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Infinite Series", "Superposition Principle"],
                "q": "'n' charges Q, 4Q, 9Q, 16Q ..... are placed at distances of 1, 2, 3 ..... metre from a point '0' on the same straight line. The electric intensity at '0' is:",
                "options": ["$\\frac{Q}{4\\pi\\epsilon_{0}}$", "$\\frac{Q}{4\\pi\\epsilon_{0}n}$", "Infinity", "$\\frac{nQ}{4\\pi\\epsilon_{0}}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The total electric field is the algebraic sum of the fields from each individual charge.<br><b>Step 2:</b> $E = k\\left(\\frac{Q}{1^2} + \\frac{4Q}{2^2} + \\frac{9Q}{3^2} + \\dots \\text{to } n \\text{ terms}\\right)$.<br><b>Step 3:</b> Simplify each term: $E = k\\left(\\frac{Q}{1} + \\frac{4Q}{4} + \\frac{9Q}{9} + \\dots\\right)$.<br><b>Step 4:</b> $E = k(Q + Q + Q + \\dots \\text{repeated } n \\text{ times})$.<br><b>Step 5:</b> $E = k(nQ) = \\frac{nQ}{4\\pi\\epsilon_0}$."
            },
            {
                "id": "ES-TEST-055",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Line Integral", "Electric Potential"],
                "q": "A non-conducting ring of radius 0.5 m carries a total charge of $1.11\\times10^{-10}$ C distributed non-uniformly on its circumference producing an electric field E everywhere in space. The value of the integral $\\int_{l=\\infty}^{l=0} -\\vec{E}\\cdot d\\vec{l}$ ($l=0$ being centre of the ring) in volts is:",
                "options": ["+2", "-1", "-2", "zero"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The integral definition $\\int_{\\infty}^{0} -\\vec{E}\\cdot d\\vec{l}$ represents the electric potential at the origin ($l=0$) relative to infinity. So we need to calculate $V_{center}$.<br><b>Step 2:</b> For any ring (uniformly or non-uniformly charged), the potential at the center depends only on the total charge $Q$ and distance $R$, since all elemental charges $dq$ are at the exact same distance $R$. $V = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{R}$.<br><b>Step 3:</b> Substitute values: $V = 9\\times10^9 \\times \\frac{1.11\\times10^{-10}}{0.5}$.<br><b>Step 4:</b> $V = 9\\times10^9 \\times 2.22\\times10^{-10} = 19.98 \\times 10^{-1} = 1.998$ V.<br><b>Step 5:</b> Rounding to the nearest whole number gives +2 V."
            },
            {
                "id": "ES-TEST-056",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 3,
                "tags": ["Superposition Principle", "Geometry"],
                "q": "Three charges +q, -q and -q are kept at the vertices of an equilateral triangle of 10cm side. The potential at the mid point in between -q, -q, if $q=5 \\mu C$ is:",
                "options": ["$-6.4\\times10^{5}$ V", "$-12.8\\times10^{4}$ V", "$-6.4\\times10^{4}$ V", "$-12.8\\times10^{5}$ V"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Identify the distances from the midpoint to each charge. The side $a = 0.1$ m. Distance to each $-q$ charge is $r_1 = r_2 = \\frac{a}{2} = 0.05$ m.<br><b>Step 2:</b> The distance to the $+q$ charge is the altitude of the equilateral triangle: $h = \\frac{\\sqrt{3}}{2}a = \\frac{\\sqrt{3}}{2}(0.1) = 0.05\\sqrt{3}$ m.<br><b>Step 3:</b> Calculate net potential: $V = \\frac{k(+q)}{0.05\\sqrt{3}} + \\frac{k(-q)}{0.05} + \\frac{k(-q)}{0.05} = \\frac{kq}{0.05} \\left( \\frac{1}{\\sqrt{3}} - 2 \\right)$.<br><b>Step 4:</b> Evaluate the constants: $\\frac{kq}{0.05} = \\frac{9\\times10^9 \\times 5\\times10^{-6}}{0.05} = 9\\times10^5$.<br><b>Step 5:</b> Using $1/\\sqrt{3} \\approx 0.577$, we get $V = 9\\times10^5 \\times (0.577 - 2) = 9\\times10^5 \\times (-1.423) = -12.8 \\times 10^5$ V."
            },
            {
                "id": "ES-TEST-057",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 3,
                "tags": ["Conservation of Energy", "Kinematics of Charged Particles"],
                "q": "Two charges each 'Q' are released when the distance between is 'd'. Then the velocity of each charge of mass 'm' each when the distance between them is '2d' is:",
                "options": ["$\\frac{Q}{\\sqrt{8\\pi\\epsilon_{0}dm}}$", "$\\frac{Q}{\\sqrt{4\\pi\\epsilon_{0}dm}}$", "$\\frac{Q}{4\\sqrt{\\pi\\epsilon_{0}dm}}$", "$\\frac{Q}{\\sqrt{2\\pi\\epsilon_{0}dm}}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Apply the principle of conservation of mechanical energy: Initial Potential Energy = Final Potential Energy + Total Kinetic Energy.<br><b>Step 2:</b> $\\frac{1}{4\\pi\\epsilon_0} \\frac{Q^2}{d} = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q^2}{2d} + \\frac{1}{2}mv^2 + \\frac{1}{2}mv^2$. (By symmetry, both acquire identical velocities).<br><b>Step 3:</b> $\\frac{Q^2}{4\\pi\\epsilon_0} \\left( \\frac{1}{d} - \\frac{1}{2d} \\right) = mv^2$.<br><b>Step 4:</b> $\\frac{Q^2}{4\\pi\\epsilon_0 (2d)} = mv^2 \\implies v^2 = \\frac{Q^2}{8\\pi\\epsilon_0 dm}$.<br><b>Step 5:</b> Take the square root: $v = \\frac{Q}{\\sqrt{8\\pi\\epsilon_0 dm}}$."
            },
            {
                "id": "ES-TEST-058",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Equilibrium of Suspended Charges", "Fluid Mechanics"],
                "q": "An oil drop carrying charge 'Q' is held in equilibrium by a potential difference of 600V between the horizontal plates. In order to hold another drop of twice the radius in equilibrium a potential drop of 1600V had to be maintained. The charge on the second drop is:",
                "options": ["$Q/2$", "$2Q$", "$3Q/2$", "$3Q$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> For equilibrium, electrostatic force equals weight: $qE = mg$. Using $E = \\frac{V}{d}$ and $m = \\text{Volume} \\times \\text{density} = \\frac{4}{3}\\pi r^3 \\rho$, we get $q\\frac{V}{d} = \\frac{4}{3}\\pi r^3 \\rho g$.<br><b>Step 2:</b> From this relationship, charge $q \\propto \\frac{r^3}{V}$.<br><b>Step 3:</b> Set up a ratio for the two drops: $\\frac{q_2}{q_1} = \\left(\\frac{r_2}{r_1}\\right)^3 \\times \\frac{V_1}{V_2}$.<br><b>Step 4:</b> Substitute the given values ($r_2 = 2r_1$, $V_1 = 600$, $V_2 = 1600$, $q_1 = Q$): $\\frac{q_2}{Q} = (2)^3 \\times \\frac{600}{1600}$.<br><b>Step 5:</b> $\\frac{q_2}{Q} = 8 \\times \\frac{3}{8} = 3$. Therefore, $q_2 = 3Q$."
            },
            {
                "id": "ES-TEST-059",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 3,
                "tags": ["Conservation of Energy", "Work-Energy Theorem"],
                "q": "A body of mass one gram and carrying a charge $10^{-8}$ C passes through two points P and Q. The electrostatic potential at Q is 0V. The velocity of the body at Q is $0.2~m/s$ and at P is $\\sqrt{0.028}~m/s$. The potential at P is:",
                "options": ["150 V", "300 V", "600 V", "900 V"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Use conservation of energy: Total Energy at P = Total Energy at Q.<br><b>Step 2:</b> $U_P + K_P = U_Q + K_Q \\implies qV_P + \\frac{1}{2}mv_P^2 = qV_Q + \\frac{1}{2}mv_Q^2$.<br><b>Step 3:</b> Since $V_Q = 0$, rearrange to solve for $V_P$: $qV_P = \\frac{1}{2}m(v_Q^2 - v_P^2) \\implies V_P = \\frac{m}{2q}(v_Q^2 - v_P^2)$.<br><b>Step 4:</b> Insert values ($m = 10^{-3}$ kg, $q = 10^{-8}$ C, $v_Q^2 = 0.04$, $v_P^2 = 0.028$): $V_P = \\frac{10^{-3}}{2 \\times 10^{-8}} (0.04 - 0.028)$.<br><b>Step 5:</b> $V_P = \\frac{10^5}{2} (0.012) = 50000 \\times 0.012 = 600$ V."
            },
            {
                "id": "ES-TEST-060",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["System Potential Energy"],
                "q": "Three charges each $20\\mu C$ are placed at the corners of an equilateral triangle of side 0.4m. The potential energy of the system is:",
                "options": ["$18\\times10^{-6}$ J", "9 J", "$9\\times10^{-6}$ J", "27 J"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The potential energy of a system of 3 charges is $U = k \\left( \\frac{q_1 q_2}{r_{12}} + \\frac{q_2 q_3}{r_{23}} + \\frac{q_3 q_1}{r_{13}} \\right)$.<br><b>Step 2:</b> Since all charges are equal ($q$) and all distances are equal ($a$), this simplifies to $U = 3k\\frac{q^2}{a}$.<br><b>Step 3:</b> Substitute values: $U = 3 \\times 9\\times10^9 \\times \\frac{(20\\times10^{-6})^2}{0.4}$.<br><b>Step 4:</b> $U = 27\\times10^9 \\times \\frac{400\\times10^{-12}}{0.4} = 27\\times10^9 \\times 1000\\times10^{-12}$.<br><b>Step 5:</b> $U = 27 \\times 10^{-3} \\times 10^3 = 27$ J."
            },
            {
                "id": "ES-TEST-061",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 3,
                "tags": ["Line Integral", "Vector Calculus", "Uniform Field"],
                "q": "An electric field is expressed as $\\vec{E}=2\\hat{i}+3\\hat{j}$. The potential difference $(V_A-V_B)$ between two points A and B whose position vectors are given by $\\vec{r}_A=\\hat{i}+2\\hat{j}$ and $\\vec{r}_B=2\\hat{i}+\\hat{j}+3\\hat{k}$ is:",
                "options": ["-1 V", "1 V", "2 V", "3 V"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The relationship between potential difference and a uniform electric field is $V_A - V_B = -\\vec{E} \\cdot (\\vec{r}_A - \\vec{r}_B)$.<br><b>Step 2:</b> Calculate the displacement vector $\\vec{r}_A - \\vec{r}_B = (1-2)\\hat{i} + (2-1)\\hat{j} + (0-3)\\hat{k} = -\\hat{i} + \\hat{j} - 3\\hat{k}$.<br><b>Step 3:</b> Calculate the dot product: $- [ (2\\hat{i} + 3\\hat{j}) \\cdot (-\\hat{i} + \\hat{j} - 3\\hat{k}) ]$.<br><b>Step 4:</b> $V_A - V_B = - [ (2)(-1) + (3)(1) + (0)(-3) ] = - [ -2 + 3 ] = -[1] = -1$ V."
            },
            {
                "id": "ES-TEST-062",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Superposition Principle", "Electric Potential"],
                "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEiwz9lEXX8Jm1dmvVbslFSBIvb1jtF0R5JRpUwzM3a2jPWXRJJwFdlPkTtm_9ZXgAXlJzFN3P6w6VtsU3Y46iIw4HallVNSfzZ722r3lITRuomrkW-M31WxGywQHKOiv6W8z085GVMsQc6r9AhkiwkPnpfqOJa2F8NFnl6LBTkp_MlhavFz6HHXm_6JJT2t",
                "q": "Figure shows three circular arcs, each of radius R and total charge as indicated. The net electric potential at the centre of the curvature is:",
                "options": ["$\\frac{Q}{2\\pi\\epsilon_o R}$", "$\\frac{Q}{4\\pi\\epsilon_o R}$", "$\\frac{2Q}{\\pi\\epsilon_0 R}$", "$\\frac{Q}{\\pi\\epsilon_o R}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Electric potential is a scalar quantity. The total potential at the center is the algebraic sum of the potentials due to each charged arc.<br><b>Step 2:</b> Since all charge is distributed at the exact same distance $R$ from the center, $V_{net} = V_1 + V_2 + V_3 = \\frac{1}{4\\pi\\epsilon_0 R} (Q_1 + Q_2 + Q_3)$.<br><b>Step 3:</b> Substitute the given charges: $V_{net} = \\frac{1}{4\\pi\\epsilon_0 R} (+Q - 2Q + 3Q) = \\frac{1}{4\\pi\\epsilon_0 R} (2Q)$.<br><b>Step 4:</b> Simplify the fraction: $V_{net} = \\frac{Q}{2\\pi\\epsilon_0 R}$."
            },
            {
                "id": "ES-TEST-063",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 3,
                "tags": ["Parallel Plates", "Potential Difference"],
                "q": "Two identical conducting very large plates $P_{1}$ and $P_{2}$ having charges $+4Q$ and $+6Q$ are placed very closed to each other at separation d. The plate area of either face of the plate is A. The potential difference between plates $V_{P_{1}}-V_{P_{2}}$ is:",
                "options": ["$\\frac{Qd}{A\\epsilon_o}$", "$\\frac{-Qd}{A\\epsilon_o}$", "$\\frac{5Qd}{A\\epsilon_o}$", "$\\frac{-5Qd}{A\\epsilon_o}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The electric field $E$ between two large parallel conducting plates is determined by the difference in their charges: $E = \\frac{Q_1 - Q_2}{2A\\epsilon_0}$.<br><b>Step 2:</b> Substitute the charges: $E = \\frac{4Q - 6Q}{2A\\epsilon_0} = \\frac{-2Q}{2A\\epsilon_0} = \\frac{-Q}{A\\epsilon_0}$.<br><b>Step 3:</b> The potential difference is related to the uniform electric field by $\\Delta V = E \\times d$.<br><b>Step 4:</b> Therefore, $V_{P_{1}} - V_{P_{2}} = \\left(\\frac{-Q}{A\\epsilon_0}\\right)d = \\frac{-Qd}{A\\epsilon_o}$."
            },
            {
                "id": "ES-TEST-064",
                "topic": "Electric Dipole",
                "difficulty": 2,
                "tags": ["Torque on Dipole"],
                "q": "An electric dipole consists of two opposite charges of magnitude $1\\mu C$ separated by a distance of 2cm. The dipole is placed in an electric field $10^{-5}Vm^{-1}$. The maximum torque that the field exert on the dipole is:",
                "options": ["$10^{-3}$ Nm", "$2\\times10^{-13}$ Nm", "$3\\times10^{-3}$ Nm", "$4\\times10^{-3}$ Nm"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The maximum torque on a dipole in a uniform electric field occurs when it is perpendicular to the field, given by $\\tau_{max} = pE$.<br><b>Step 2:</b> The dipole moment is $p = q \\times 2a$, where $2a$ is the total separation.<br><b>Step 3:</b> $p = 10^{-6} \\text{ C} \\times 0.02 \\text{ m} = 2 \\times 10^{-8}$ C$\\cdot$m.<br><b>Step 4:</b> Calculate torque: $\\tau_{max} = (2 \\times 10^{-8}) \\times 10^{-5} = 2 \\times 10^{-13}$ Nm."
            },
            {
                "id": "ES-TEST-065",
                "topic": "Electric Dipole",
                "difficulty": 3,
                "tags": ["SHM of Dipole", "Rotational Mechanics"],
                "q": "An electric dipole is formed two particles fixed at the ends of a light rigid rod of length l. The mass of each particle is m and charges are -q and +q. The system is suspended by a torsionless thread in an electric field of intensity E such that the dipole axis is parallel to the field. If it is slightly displaced, the period of angular motion is:",
                "options": ["$\\frac{1}{2\\pi}\\sqrt{\\frac{2qE}{ml}}$", "$2\\pi\\sqrt{\\frac{ml}{qE}}$", "$2\\pi\\sqrt{\\frac{ml}{2qE}}$", "$\\frac{1}{2\\pi}\\sqrt{\\frac{ml}{4qE}}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Restoring torque for a small angular displacement $\\theta$ is $\\tau = -pE \\sin\\theta \\approx -pE\\theta$.<br><b>Step 2:</b> By Newton's second law for rotation, $\\tau = I\\alpha$, so $I\\alpha = -pE\\theta \\implies \\alpha = -\\left(\\frac{pE}{I}\\right)\\theta$. This is SHM with $\\omega = \\sqrt{\\frac{pE}{I}}$.<br><b>Step 3:</b> Dipole moment $p = ql$. The moment of inertia $I$ about the center of mass is $m(l/2)^2 + m(l/2)^2 = \\frac{ml^2}{2}$.<br><b>Step 4:</b> Substitute $p$ and $I$ into $\\omega$: $\\omega = \\sqrt{\\frac{qlE}{ml^2/2}} = \\sqrt{\\frac{2qE}{ml}}$.<br><b>Step 5:</b> Time period $T = \\frac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\frac{ml}{2qE}}$."
            },
            {
                "id": "ES-TEST-066",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Axial Potential", "Dipole"],
                "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEhYzualjkwlO405hUmvWDIJ6RmryJxuweUrAhMeBg0Q_6OZLqlSPUOGGRmYoXKWvtkCtLQ4tNT_ItYJJ3oQRPVxrPX5MSxhCuuq0_ULqevm832KplNzQsbkOAJLHniaEVYs07NdOM8baxVpo6jCM7lqHN5UoKSyNAKI9bufqcxCcaOR_HEuMVHZFO0H3oVD",
                "q": "Two point charges -q and +q are located at points (0,0,-a) and (0,0,a) respectively. The electric potential at point (0,0,z) is (where $z > a$):",
                "options": ["$\\frac{qa}{4\\pi\\epsilon_{0}z^{2}}$", "$\\frac{q}{4\\pi\\epsilon_{0}a}$", "$\\frac{2qa}{4\\pi\\epsilon_{0}(z^{2}-a^{2})}$", "$\\frac{2qa}{4\\pi\\epsilon_{0}(z^{2}+a^{2})}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The point (0,0,z) lies on the axis of the dipole formed by the charges.<br><b>Step 2:</b> Distance from $+q$ (at $z=a$) to the point is $(z - a)$. Distance from $-q$ (at $z=-a$) to the point is $(z + a)$.<br><b>Step 3:</b> Total potential $V = \\frac{1}{4\\pi\\epsilon_0} \\left( \\frac{q}{z - a} + \\frac{-q}{z + a} \\right)$.<br><b>Step 4:</b> Combine the fractions: $V = \\frac{q}{4\\pi\\epsilon_0} \\left( \\frac{(z + a) - (z - a)}{z^2 - a^2} \\right) = \\frac{q}{4\\pi\\epsilon_0} \\left( \\frac{2a}{z^2 - a^2} \\right)$.<br><b>Step 5:</b> Result: $V = \\frac{2qa}{4\\pi\\epsilon_{0}(z^{2}-a^{2})}$."
            },
            {
                "id": "ES-TEST-067",
                "topic": "Electric Dipole",
                "difficulty": 1,
                "tags": ["Equatorial Field"],
                "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEhjSpLTbIxQ1gV2xCnqDysMsoJro9sADH04tQs-G7zz3TEvP7ClDZTcU8arFSq4VDqGQimcbfodFbZ-xNiUnKIZI3ICIc9jvvC8XUxSSkT4jV3pZzxCw89TITp1Td4ulzguLXzQ4FXrDO2g91uS3nGKlHtTOrniJln_ARlr-0t_GThosqfJPeuQZAd-5yjb",
                "q": "Two equal charges 'q' of opposite sign are separated by a small distance '2a'. The electric intensity 'E' at a point on the perpendicular bisector of the line joining the two charges at a very large distance 'r' from the line is:",
                "options": ["$\\frac{1}{4\\pi\\epsilon_{0}}\\frac{qa}{r^{2}}$", "$\\frac{1}{4\\pi\\epsilon_{0}}\\frac{2qa}{r^{3}}$", "$\\frac{1}{4\\pi\\epsilon_{0}}\\frac{2qa}{r^{2}}$", "$\\frac{1}{4\\pi\\epsilon_{0}}\\frac{qa}{r^{3}}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> This defines an electric dipole of moment $p = q(2a)$.<br><b>Step 2:</b> The point lies on the equatorial line of the dipole.<br><b>Step 3:</b> The electric field on the equatorial line at a large distance $r$ ($r \\gg a$) is given by standard formula $E = \\frac{1}{4\\pi\\epsilon_0} \\frac{p}{r^3}$.<br><b>Step 4:</b> Substitute $p = 2qa$ into the formula: $E = \\frac{1}{4\\pi\\epsilon_{0}}\\frac{2qa}{r^{3}}$."
            },
            {
                "id": "ES-TEST-068",
                "topic": "Coulomb's Law",
                "difficulty": 3,
                "tags": ["Charge Sharing", "Superposition Principle"],
                "q": "Two equally charged identical metal spheres A and B repel each other with a force F. Another identical uncharged sphere C is touched to A and then placed midway between A and B. The net force on C is in the direction:",
                "options": ["F towards A", "F towards B", "2F towards A", "2F towards B"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Initially, spheres A and B have charge $q$. Force $F = k\\frac{q^2}{d^2}$, where $d$ is their separation.<br><b>Step 2:</b> Uncharged sphere C touches A. Charge is shared equally: $q_A = \\frac{q}{2}$, $q_C = \\frac{q}{2}$. Sphere B remains $q_B = q$.<br><b>Step 3:</b> C is placed midway, distance $d/2$ from both A and B.<br><b>Step 4:</b> Force on C due to A (repulsive, pushes C towards B): $F_{CA} = k\\frac{(q/2)(q/2)}{(d/2)^2} = k\\frac{q^2/4}{d^2/4} = k\\frac{q^2}{d^2} = F$.<br><b>Step 5:</b> Force on C due to B (repulsive, pushes C towards A): $F_{CB} = k\\frac{(q/2)(q)}{(d/2)^2} = k\\frac{q^2/2}{d^2/4} = 2k\\frac{q^2}{d^2} = 2F$.<br><b>Step 6:</b> Net force on C $= F_{CB} - F_{CA} = 2F - F = F$. Since $F_{CB}$ is stronger, the net force is directed towards A."
            },
            {
                "id": "ES-TEST-069",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Electric Force", "Algebraic Manipulation"],
                "q": "Two unlike charges separated by a distance of 1m attract each other with a force of 0.108N. If the charges are in the ratio 1:3, the weak charge is:",
                "options": ["2 $\\mu$C", "4 $\\mu$C", "6 $\\mu$C", "5 $\\mu$C"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Let the charges be $q$ and $3q$. The distance is $r = 1$ m. The force is $F = 0.108$ N.<br><b>Step 2:</b> Use Coulomb's law: $F = k \\frac{|q_1 q_2|}{r^2}$.<br><b>Step 3:</b> $0.108 = 9\\times10^9 \\times \\frac{q(3q)}{1^2} = 27\\times10^9 q^2$.<br><b>Step 4:</b> Solve for $q^2$: $q^2 = \\frac{0.108}{27\\times10^9} = \\frac{108\\times10^{-3}}{27\\times10^9} = 4\\times10^{-12}$.<br><b>Step 5:</b> Taking the square root gives the weak charge: $q = 2\\times10^{-6}$ C = 2 $\\mu$C."
            },
            {
                "id": "ES-TEST-070",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Vector Addition", "Symmetry"],
                "q": "Three charges each equal to $10^{-9}$C are placed at the corners of an equilateral triangle of side 1m. The force on one of the charges is:",
                "options": ["$9\\times10^{-9}$ N", "$9\\sqrt{3}\\times10^{-9}$ N", "$27\\times10^{-9}$ N", "$18\\times10^{-9}$ N"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Focus on one charge. The forces from the other two charges are purely repulsive.<br><b>Step 2:</b> Calculate the magnitude of each force: $F_1 = F_2 = k\\frac{q^2}{a^2} = 9\\times10^9 \\times \\frac{(10^{-9})^2}{1^2} = 9\\times10^{-9}$ N.<br><b>Step 3:</b> Because it's an equilateral triangle, the angle between the two force vectors is $60^{\\circ}$.<br><b>Step 4:</b> The resultant force is $F_{net} = \\sqrt{F_1^2 + F_2^2 + 2F_1 F_2 \\cos 60^{\\circ}} = \\sqrt{F_1^2 + F_1^2 + 2F_1^2(0.5)} = \\sqrt{3F_1^2} = F_1\\sqrt{3}$.<br><b>Step 5:</b> Therefore, $F_{net} = 9\\sqrt{3}\\times10^{-9}$ N."
            },
            {
                "id": "ES-TEST-071",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Gravitational Force vs Electrostatic Force"],
                "q": "Two particles each of mass 'm' and carrying charge 'Q' are separated by some distance. If they are in equilibrium under mutual gravitational and electro static forces, then Q/m (in C/Kg) is of the order of:",
                "options": ["$10^{-5}$", "$10^{-10}$", "$10^{-15}$", "$10^{-20}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> For equilibrium, the attractive gravitational force must balance the repulsive electrostatic force.<br><b>Step 2:</b> $F_g = F_e \\implies G\\frac{m^2}{r^2} = \\frac{1}{4\\pi\\epsilon_0}\\frac{Q^2}{r^2}$.<br><b>Step 3:</b> Rearrange to find $Q/m$: $\\frac{Q^2}{m^2} = G(4\\pi\\epsilon_0)$.<br><b>Step 4:</b> Substitute known values ($G \\approx 6.67\\times10^{-11}$, and $4\\pi\\epsilon_0 = \\frac{1}{9\\times10^9} \\approx 10^{-10}$).<br><b>Step 5:</b> $\\frac{Q^2}{m^2} \\approx 10^{-11} \\times 10^{-10} = 10^{-21}$. Taking the square root, $Q/m \\approx 10^{-10.5}$, which is on the order of $10^{-10}$."
            },
            {
                "id": "ES-TEST-072",
                "topic": "Coulomb's Law",
                "difficulty": 3,
                "tags": ["Vector Addition", "Geometric Arrangement"],
                "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEghpC3WgozYEAMYyI0T8wfB6nHV8cz6xFGu12ykMIDhK_UDk3p3Er6Wp-BPN7YtAocqteKp-dOnJ-reEkJjyrCkcPX5JxJwebeYv8YEXSbZfcfMtF_FtNcnmLQf29nX4oBn9t-2jI3GI-9K_EYruSTkPTK18LhdcUj7A8ba-NkKHrKZcpjTItsz6dH0GooQ",
                "q": "Three point charges +q, -q and +q are placed at the vertices P, Q and R of an equilateral triangle as shown. If $F = \\frac{1}{4\\pi\\epsilon_0}\\frac{q^2}{r^2}$ where 'r' is the side of the triangle, the force on charge at 'P' due to charges at Q and R is:",
                "options": ["F along positive x-direction", "F along negative x-direction", "$\\sqrt{2}F$ along positive x-direction", "$\\sqrt{2}F$ along negative x-direction"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The charge at P is $+q$. The charge at Q (bottom left) is $-q$, and at R (bottom right) is $+q$.<br><b>Step 2:</b> The force on P from Q ($F_{PQ}$) is attractive, directed along the line PQ (downwards and left). Its magnitude is F.<br><b>Step 3:</b> The force on P from R ($F_{PR}$) is repulsive, directed away from R along the extension of RP (upwards and left). Its magnitude is also F.<br><b>Step 4:</b> Since the triangle is equilateral, the angle between the vector $F_{PQ}$ and $F_{PR}$ is $120^{\\circ}$.<br><b>Step 5:</b> The resultant of two vectors of equal magnitude F at $120^{\\circ}$ is exactly F. <br><b>Step 6:</b> The horizontal components add up, pointing to the left (negative x-direction), while vertical components cancel out. Therefore, resultant is F along negative x-direction."
            },
            {
                "id": "ES-TEST-073",
                "topic": "Coulomb's Law",
                "difficulty": 3,
                "tags": ["Superposition Principle", "Centroid Physics"],
                "q": "Three point charges +q, +q and -q are placed at the corners of an equilateral triangle of side 'a'. Another charge +Q is kept at the centroid. Force exerted on Q is:",
                "options": ["$\\frac{1}{4\\pi\\epsilon_0}\\frac{2qQ}{a^2}$", "$\\frac{1}{4\\pi\\epsilon_0}\\frac{6qQ}{a^2}$", "$\\frac{1}{4\\pi\\epsilon_0}\\frac{8qQ}{a^2}$", "$\\frac{1}{4\\pi\\epsilon_0}\\frac{14qQ}{a^2}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The distance from any corner to the centroid of an equilateral triangle of side $a$ is $r = \\frac{a}{\\sqrt{3}}$.<br><b>Step 2:</b> The force magnitude from any corner charge on the centroid charge is $F' = k\\frac{Qq}{r^2} = k\\frac{Qq}{(a/\\sqrt{3})^2} = 3k\\frac{Qq}{a^2}$.<br><b>Step 3:</b> The two $+q$ charges push $+Q$ away with force $F'$. The angle between their lines of action is $120^{\\circ}$. Their resultant is $F'$ pointing directly towards the $-q$ charge.<br><b>Step 4:</b> The $-q$ charge pulls $+Q$ with force $F'$ along that exact same line.<br><b>Step 5:</b> The total net force is $F_{net} = F' + F' = 2F' = 2 \\times \\left(3k\\frac{Qq}{a^2}\\right) = 6k\\frac{Qq}{a^2} = \\frac{1}{4\\pi\\epsilon_0}\\frac{6qQ}{a^2}$."
            },
            {
                "id": "ES-TEST-074",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Dielectric Breakdown", "Spherical Conductor"],
                "q": "The breakdown electric intensity for air is $3 \\times 10^6$ V/m. The maximum charge that can be held by a sphere of radius 1 mm is:",
                "options": ["0.33 C", "0.33 nC", "3.3 C", "3.3 $\\mu$C"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The electric field at the surface of a charged sphere is maximum and is given by $E = \\frac{1}{4\\pi\\epsilon_0}\\frac{Q}{r^2}$.<br><b>Step 2:</b> To avoid breakdown, $E$ must not exceed $3 \\times 10^6$ V/m.<br><b>Step 3:</b> Rearrange to solve for maximum charge: $Q_{max} = \\frac{E_{max} r^2}{k}$.<br><b>Step 4:</b> Substitute values ($r = 10^{-3}$ m, $k = 9 \\times 10^9$): $Q_{max} = \\frac{3 \\times 10^6 \\times (10^{-3})^2}{9 \\times 10^9} = \\frac{3 \\times 10^6 \\times 10^{-6}}{9 \\times 10^9} = \\frac{3}{9 \\times 10^9}$.<br><b>Step 5:</b> $Q_{max} = \\frac{1}{3} \\times 10^{-9}$ C $\\approx 0.33 \\times 10^{-9}$ C = 0.33 nC."
            },
            {
                "id": "ES-TEST-075",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["2D Kinematics of Charged Particle"],
                "q": "There is a uniform electric field of strength $10^3$ V/m along y-axis. A body of mass 1 g and charge $10^{-6}$ C is projected into the field from origin along the positive x-axis with a velocity $10$ m/s. Its speed in m/s after 10s is (neglect gravitation):",
                "options": ["10", "$5\\sqrt{2}$", "$10\\sqrt{2}$", "20"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Analyze motion in the x-direction. There is no force in the x-direction, so acceleration $a_x = 0$. Velocity remains constant: $v_x = u_x = 10$ m/s.<br><b>Step 2:</b> Analyze motion in the y-direction. The electric force causes acceleration: $a_y = \\frac{qE}{m}$.<br><b>Step 3:</b> Calculate $a_y = \\frac{10^{-6} \\times 10^3}{10^{-3}} = \\frac{10^{-3}}{10^{-3}} = 1$ m/s$^2$.<br><b>Step 4:</b> Find final y-velocity using $v = u + at$. Initially, $u_y = 0$, so $v_y = 0 + (1)(10) = 10$ m/s.<br><b>Step 5:</b> The final speed is the magnitude of the velocity vector: $v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{10^2 + 10^2} = \\sqrt{200} = 10\\sqrt{2}$ m/s."
            },
            {
                "id": "ES-TEST-076",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Superposition Principle", "Logic"],
                "q": "The point charges +1C, +1C and -1C are placed at the vertices A, B and C of an equilateral triangle of side 1m. Then:<br>(A) The force acting on the charge at A is $9 \\times 10^9$ N<br>(B) The electric field strength at A is $9 \\times 10^9$ NC$^{-1}$",
                "options": ["A is correct but B is wrong", "B is correct but A is wrong", "Both A and B are wrong", "Both A and B are correct"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Let's check statement (A). The charge at A is +1C. It feels a repulsive force from B (+1C) of magnitude $F_B = k\\frac{(1)(1)}{1^2} = 9\\times10^9$ N. It feels an attractive force from C (-1C) of magnitude $F_C = 9\\times10^9$ N.<br><b>Step 2:</b> The angle between these forces is $120^{\\circ}$. The resultant force is $F = \\sqrt{F_B^2 + F_C^2 + 2F_BF_C\\cos120^{\\circ}} = F_B = 9\\times10^9$ N. So, (A) is correct.<br><b>Step 3:</b> Let's check statement (B). The electric field at A is the force experienced per unit test charge placed at A. Since the charge at A happens to be exactly 1 Coulomb, the magnitude of the electric field $E = \\frac{F}{q} = \\frac{9\\times10^9}{1} = 9\\times10^9$ N/C. So, (B) is also correct."
            },
            {
                "id": "ES-TEST-077",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Equilibrium", "Mechanics and Electrostatics"],
                "q": "A pendulum bob of mass m carrying a charge q is at rest in a uniform horizontal electric field of intensity E. The tension in the thread is:<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["$\\sqrt{(Eq)^{2}+(mg)^{2}}$", "$\\sqrt{(\\frac{E}{q})^{2}+(\\frac{m}{g})^{2}}$", "$(Eq)^{2}+(mg)^{2}$", "$mg+Eq$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The pendulum bob is in equilibrium under the action of three forces: Tension ($T$) along the string, Weight ($mg$) acting vertically downward, and Electric force ($F_e = Eq$) acting horizontally.<br><b>Step 2:</b> The horizontal and vertical forces form a right-angled triangle with the tension acting as the balancing resultant force.<br><b>Step 3:</b> By vector addition (or Pythagorean theorem for perpendicular vectors), $T^2 = (F_e)^2 + (mg)^2$.<br><b>Step 4:</b> Therefore, $T = \\sqrt{(Eq)^2 + (mg)^2}$."
            },
            {
                "id": "ES-TEST-078",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Superposition Principle", "Geometric Arrangement"],
                "q": "Four charges $10^{-8}$ C, $-2\\times10^{-8}$ C, $+3\\times10^{-8}$ C and $2\\times10^{-8}$ C are placed at the four corners of a square of side 1m. The potential at the centre of the square is:<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["zero", "360 V", "180 V", "$360\\sqrt{2}$ V"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Electric potential is a scalar quantity. The total potential at the center is the algebraic sum of the potentials from each corner.<br><b>Step 2:</b> The distance from the center to any corner of a square of side $a=1$m is half the diagonal: $r = \\frac{a}{\\sqrt{2}} = \\frac{1}{\\sqrt{2}}$ m.<br><b>Step 3:</b> $V_{net} = \\frac{1}{4\\pi\\epsilon_0 r} \\sum q = \\frac{k}{r} (q_1 + q_2 + q_3 + q_4)$.<br><b>Step 4:</b> $\\sum q = (1 - 2 + 3 + 2) \\times 10^{-8} = 4 \\times 10^{-8}$ C.<br><b>Step 5:</b> $V_{net} = \\frac{9\\times10^9}{1/\\sqrt{2}} \\times (4\\times10^{-8}) = 9\\times10^9 \\times \\sqrt{2} \\times 4\\times10^{-8} = 360\\sqrt{2}$ V."
            },
            {
                "id": "ES-TEST-079",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 1,
                "tags": ["Properties of Conductors", "Charge Sharing"],
                "q": "Two metal spheres of radii $R_{1}$ and $R_{2}$ are charged to the same potential. The ratio of the charge on the two spheres is:<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["1", "1/2", "$R_{1}-R_{2}$", "$\\frac{R_{1}}{R_{2}}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The potential on the surface of a charged conducting sphere is $V = \\frac{1}{4\\pi\\epsilon_0}\\frac{Q}{R}$.<br><b>Step 2:</b> We are given that $V_1 = V_2$.<br><b>Step 3:</b> Therefore, $\\frac{k Q_1}{R_1} = \\frac{k Q_2}{R_2}$.<br><b>Step 4:</b> Rearranging for the ratio of charges gives $\\frac{Q_1}{Q_2} = \\frac{R_1}{R_2}$."
            },
            {
                "id": "ES-TEST-080",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 3,
                "tags": ["Concentric Shells", "Superposition Principle"],
                "q": "Two concentric, thin metallic spherical shells of radii $R_{1}$ and $R_{2}$ ($R_{1}>R_{2}$) bear charges $Q_{1}$ and $Q_{2}$ respectively. Then the potential at radius 'r' between $R_{1}$ and $R_{2}$ will be $\\frac{1}{4\\pi \\epsilon_{0}}$ times:<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["$\\frac{Q_{1}+Q_{2}}{r}$", "$\\frac{Q_{1}}{R_{1}}+\\frac{Q_{2}}{r}$", "$\\frac{Q_{1}}{R_{1}}+\\frac{Q_{2}}{R_{2}}$", "$\\frac{Q_{1}}{R_{2}}+\\frac{Q_{2}}{R_{2}}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The total potential at a distance $r$ (where $R_2 < r < R_1$) is the sum of the potentials from both shells: $V = V_{\\text{inner}} + V_{\\text{outer}}$.<br><b>Step 2:</b> The point $r$ is outside the inner shell ($R_2$). The potential behaves as if all its charge $Q_2$ is at the center: $V_{\\text{inner}} = \\frac{1}{4\\pi\\epsilon_0}\\frac{Q_2}{r}$.<br><b>Step 3:</b> The point $r$ is inside the outer shell ($R_1$). The potential anywhere inside a conducting shell is equal to its surface potential: $V_{\\text{outer}} = \\frac{1}{4\\pi\\epsilon_0}\\frac{Q_1}{R_1}$.<br><b>Step 4:</b> Adding them gives $V = \\frac{1}{4\\pi\\epsilon_0} \\left( \\frac{Q_1}{R_1} + \\frac{Q_2}{r} \\right)$."
            },
            {
                "id": "ES-TEST-081",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Equipotential Surface", "Coordinate Geometry"],
                "q": "An electric charge $10^{-3}\\mu C$ is placed at the origin (0, 0) of X-Y coordinate system. Two points A and B are situated at $(\\sqrt{2},\\sqrt{2})$ and (2, 0) respectively. The potential difference between the points A and B will be:<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["9 V", "zero", "2 V", "4.5 V"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Find the distance of point A from the origin: $r_A = \\sqrt{(\\sqrt{2})^2 + (\\sqrt{2})^2} = \\sqrt{2 + 2} = \\sqrt{4} = 2$ units.<br><b>Step 2:</b> Find the distance of point B from the origin: $r_B = \\sqrt{2^2 + 0^2} = \\sqrt{4} = 2$ units.<br><b>Step 3:</b> Since $r_A = r_B$, both points lie on the same circular equipotential surface centered around the origin.<br><b>Step 4:</b> The potential depends only on the distance from the source charge ($V = k\\frac{q}{r}$). Therefore, $V_A = V_B$, and the potential difference is zero."
            },
            {
                "id": "ES-TEST-082",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["System Potential Energy", "Collinear Charges"],
                "q": "A charge $-2\\mu C$ at the origin, $-1\\mu C$ at +7cm and $1\\mu C$ at -7cm are placed on x - axis. The mutual potential energy of the system is:<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["-0.051 J", "-0.045 J", "0.045 J", "-0.064 J"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The mutual potential energy of a 3-charge system is $U = k \\left( \\frac{q_1 q_2}{r_{12}} + \\frac{q_1 q_3}{r_{13}} + \\frac{q_2 q_3}{r_{23}} \\right)$.<br><b>Step 2:</b> Let $q_1 = -2\\mu C$ (at $x=0$), $q_2 = -1\\mu C$ (at $x=0.07$), $q_3 = 1\\mu C$ (at $x=-0.07$).<br><b>Step 3:</b> Distances are $r_{12} = 0.07$ m, $r_{13} = 0.07$ m, and $r_{23} = 0.14$ m.<br><b>Step 4:</b> $U = 9\\times10^9 \\times 10^{-12} \\left( \\frac{(-2)(-1)}{0.07} + \\frac{(-2)(1)}{0.07} + \\frac{(-1)(1)}{0.14} \\right)$.<br><b>Step 5:</b> $U = 9\\times10^{-3} \\left( \\frac{2}{0.07} - \\frac{2}{0.07} - \\frac{1}{0.14} \\right) = 9\\times10^{-3} \\left( 0 - \\frac{1}{0.14} \\right) = -\\frac{0.009}{0.14} = -0.06428$ J."
            },
            {
                "id": "ES-TEST-083",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 3,
                "tags": ["Work Done", "Electric Potential"],
                "q": "Four equal charges Q are placed at the four corners of a square of side 'a' each. Work done in removing a charge -Q from its centre to infinity is:<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["zero", "$\\frac{\\sqrt{2}Q^{2}}{4\\pi\\epsilon_{0}a}$", "$\\frac{\\sqrt{2}Q^{2}}{\\pi\\epsilon_{0}a}$", "$\\frac{Q^{2}}{2\\pi\\epsilon_{0}a}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The work done by an external agent is equal to the change in potential energy: $W = U_{\\text{final}} - U_{\\text{initial}}$.<br><b>Step 2:</b> At infinity, the potential energy $U_{\\text{final}} = 0$.<br><b>Step 3:</b> The initial potential energy of the -Q charge at the center is $U_{\\text{initial}} = (-Q)V_{\\text{center}}$.<br><b>Step 4:</b> The potential at the center due to the 4 corners is $V_{\\text{center}} = 4 \\times \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{a/\\sqrt{2}} = \\frac{4\\sqrt{2}Q}{4\\pi\\epsilon_0 a} = \\frac{\\sqrt{2}Q}{\\pi\\epsilon_0 a}$.<br><b>Step 5:</b> $U_{\\text{initial}} = -Q \\left( \\frac{\\sqrt{2}Q}{\\pi\\epsilon_0 a} \\right) = -\\frac{\\sqrt{2}Q^2}{\\pi\\epsilon_0 a}$.<br><b>Step 6:</b> $W = 0 - \\left( -\\frac{\\sqrt{2}Q^2}{\\pi\\epsilon_0 a} \\right) = \\frac{\\sqrt{2}Q^{2}}{\\pi\\epsilon_{0}a}$."
            },
            {
                "id": "ES-TEST-084",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Potential Gradient", "Partial Derivatives"],
                "q": "The electrostatic potential V at any point (x,y,z) in space is given by $V=4x^{2}$. Which of the following statements is true?<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["The y and z components of the electrostatic field at any point are not zero", "The x-component of electric field intensity at any point is given by $(-8x\\hat{i})$", "The x-component of electric field intensity at a point (2, 0, 2) is $(-8\\hat{i})$", "The y and z components of the field are non-constant in magnitude"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The electric field is the negative gradient of the potential: $\\vec{E} = -\\nabla V = -\\left( \\frac{\\partial V}{\\partial x}\\hat{i} + \\frac{\\partial V}{\\partial y}\\hat{j} + \\frac{\\partial V}{\\partial z}\\hat{k} \\right)$.<br><b>Step 2:</b> Evaluate the partial derivatives. $\\frac{\\partial V}{\\partial x} = \\frac{d}{dx}(4x^2) = 8x$.<br><b>Step 3:</b> Since $V$ does not depend on $y$ or $z$, $\\frac{\\partial V}{\\partial y} = 0$ and $\\frac{\\partial V}{\\partial z} = 0$.<br><b>Step 4:</b> Therefore, the electric field is $\\vec{E} = -8x\\hat{i}$. The x-component is $(-8x\\hat{i})$, making the second option correct."
            },
            {
                "id": "ES-TEST-085",
                "topic": "Electric Dipole",
                "difficulty": 3,
                "tags": ["Dipole Moment", "System Potential Energy"],
                "q": "The self potential energy of hydrogen chloride whose dipole moment is $3.44\\times10^{-30}$ C-m and separation between hydrogen and chlorine atoms is $1.01\\times10^{-10}$ m is:<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["$1.036\\times10^{-19}$ J", "$3.2\\times10^{5}$ J", "$4.5\\times10^{7}$ J", "$1.65\\times10^{6}$ J"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The magnitude of the potential energy (work required to separate the dipole components) is $U = k\\frac{q^2}{r}$.<br><b>Step 2:</b> Find the charge $q$ using the dipole moment formula $p = q \\times r$.<br><b>Step 3:</b> $q = \\frac{p}{r} = \\frac{3.44\\times10^{-30}}{1.01\\times10^{-10}} \\approx 3.41\\times10^{-20}$ C.<br><b>Step 4:</b> Substitute $q$ into the energy equation: $U = (9\\times10^9) \\frac{(3.41\\times10^{-20})^2}{1.01\\times10^{-10}}$.<br><b>Step 5:</b> $U = \\frac{9\\times10^9 \\times 11.6\\times10^{-40}}{1.01\\times10^{-10}} = \\frac{104.4\\times10^{-31}}{1.01\\times10^{-10}} \\approx 1.036\\times10^{-19}$ J."
            },
            {
                "id": "ES-TEST-086",
                "topic": "Coulomb's Law",
                "difficulty": 3,
                "tags": ["Equilibrium of Suspended Charges", "Tension"],
                "q": "A ball of mass $m=0.5$ kg is suspended by a thread and a charge $q=0.1$ $\\mu\\text{C}$ is supplied. When a ball with diameter 5 cm and a like charge of same magnitude is brought close to the first ball, but below it, the tension decreases to $1/3$ of its initial value. The distance between centres of the balls is:<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["$0.12\\times10^{-2}$ m", "$0.51\\times10^{-4}$ m", "$0.2\\times10^{-5}$ m", "$0.52\\times10^{-2}$ m"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Initial tension $T_1 = mg = 0.5 \\times 9.8 = 4.9$ N.<br><b>Step 2:</b> New tension $T_2 = T_1 / 3 = 1.633$ N.<br><b>Step 3:</b> The decrease in tension is due to the upward electrostatic repulsive force: $F_e = T_1 - T_2 = 4.9 - 1.633 = 3.267$ N.<br><b>Step 4:</b> Use Coulomb's law $F_e = k \\frac{q^2}{r^2} \\implies 3.267 = 9 \\times 10^9 \\frac{(0.1 \\times 10^{-6})^2}{r^2}$.<br><b>Step 5:</b> $r^2 = \\frac{9 \\times 10^{-5}}{3.267} \\approx 27.5 \\times 10^{-6}$ m$^2 \\implies r \\approx 5.24 \\times 10^{-3}$ m $= 0.52 \\times 10^{-2}$ m."
            },
            {
                "id": "ES-TEST-087",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Superposition Principle", "Symmetry"],
                "q": "Five point charges each +q, are placed on five vertices of a regular hexagon of side L. The magnitude of the force on a point charge of value -q placed at the centre of the hexagon (in newton) is:<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["Zero", "$\\frac{\\sqrt{3}q^{2}}{4\\pi\\epsilon_{0}L^{2}}$", "$\\frac{q^{2}}{4\\pi\\epsilon_{0}L^{2}}$", "$\\frac{q^{2}}{4\\sqrt{3}\\pi\\epsilon_{0}L^{2}}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> If all six vertices had +q charges, the net force on a charge at the center would be exactly zero due to symmetry.<br><b>Step 2:</b> Having five +q charges is equivalent to having all six +q charges plus a single -q charge at the missing vertex.<br><b>Step 3:</b> The center is at a distance L from all vertices.<br><b>Step 4:</b> The net force is solely due to the equivalent single uncancelled charge, so $F = \\frac{1}{4\\pi\\epsilon_{0}}\\frac{q^{2}}{L^{2}}$."
            },
            {
                "id": "ES-TEST-088",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Oscillation of Charge", "Restoring Force"],
                "q": "Two equal negative charges -q each are fixed at points (0, -a) and (0,a) on y-axis. A positive charge Q is released from rest at the point (2a, 0) on the x-axis. The charge Q will:<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["execute simple harmonic motion about the origin", "move to the origin and remain at rest", "move to infinity", "execute oscillatory but not simple harmonic motion"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The force on the positive charge Q is always directed towards the origin along the x-axis. As it crosses the origin, its inertia carries it to the negative x-axis, and the force reverses, causing oscillation.<br><b>Step 2:</b> The magnitude of the restoring force is $F = \\frac{2kQqx}{(a^2 + x^2)^{3/2}}$.<br><b>Step 3:</b> For Simple Harmonic Motion (SHM), $F$ must be strictly proportional to $x$, which is only mathematically true if the displacement is very small ($x \\ll a$).<br><b>Step 4:</b> Since Q is released from a large distance $x = 2a$, this condition is not met. Therefore, it will execute oscillatory motion, but not SHM."
            },
            {
                "id": "ES-TEST-089",
                "topic": "Coulomb's Law",
                "difficulty": 3,
                "tags": ["Dielectrics", "Electric Force"],
                "q": "The force of attraction between two charges separated by certain distance in air is $F_{1}$. If the space between the charges is completely filled with dielectric of constant 4 the force becomes $F_{2}$. If half of the distance between the charges is filled with same dielectric the force between the charges is $F_{3}$. Then $F_{1}:F_{2}:F_{3}$ is:<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["16:9:4", "9:36:16", "4:1:2", "36:9:16"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Force in air is $F_1 = k\\frac{q_1q_2}{d^2}$.<br><b>Step 2:</b> Force in full dielectric is $F_2 = \\frac{F_1}{K} = \\frac{F_1}{4}$. Thus, $F_1:F_2 = 4:1$.<br><b>Step 3:</b> For a partial dielectric, the equivalent effective distance in air is $d' = d_{air} + d_{medium}\\sqrt{K} = \\frac{d}{2} + \\frac{d}{2}\\sqrt{4} = \\frac{d}{2} + d = \\frac{3d}{2}$.<br><b>Step 4:</b> The new force is $F_3 = k\\frac{q_1q_2}{(3d/2)^2} = \\frac{4}{9} k\\frac{q_1q_2}{d^2} = \\frac{4}{9}F_1$.<br><b>Step 5:</b> Combining the ratios gives $F_1 : F_1/4 : 4F_1/9$. Multiply by 36 to clear fractions: $36 : 9 : 16$."
            },
            {
                "id": "ES-TEST-090",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Pendulum in Electric Field", "Time Period"],
                "q": "A bob of a simple pendulum of mass 40gm with a positive charge $4\\times10^{-6}$ C is oscillating with a time period $T_{1}$. An electric field of intensity $3.6\\times10^{4}$ N/C is applied vertically upwards. Now the time period is $T_{2}$. The value of $\\frac{T_{2}}{T_{1}}$ is $(g=10\\text{m/s}^{2})$:<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["0.16", "0.64", "1.25", "0.8"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Initial time period $T_1 = 2\\pi\\sqrt{\\frac{L}{g}}$.<br><b>Step 2:</b> The electric force acts upwards: $F_e = qE = 4\\times10^{-6} \\times 3.6\\times10^4 = 0.144$ N.<br><b>Step 3:</b> The upward acceleration provided by the field is $a_e = \\frac{F_e}{m} = \\frac{0.144}{0.04} = 3.6$ m/s$^2$.<br><b>Step 4:</b> The effective gravity pulling the bob down is reduced: $g' = g - a_e = 10 - 3.6 = 6.4$ m/s$^2$.<br><b>Step 5:</b> Ratio $\\frac{T_2}{T_1} = \\sqrt{\\frac{g}{g'}} = \\sqrt{\\frac{10}{6.4}} = \\sqrt{\\frac{100}{64}} = \\frac{10}{8} = 1.25$."
            },
            {
                "id": "ES-TEST-091",
                "topic": "Electric Field",
                "difficulty": 1,
                "tags": ["Work and Energy", "Kinematics of Particles"],
                "q": "A particle of mass m and charge q is placed at rest in a uniform electric field E and then released. The kinetic energy attained by the particle after moving a distance y is:<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["$qEy^{2}$", "$qE^{2}y$", "$qEy$", "$q^{2}Ey$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The electrostatic force acting on the particle is $F = qE$.<br><b>Step 2:</b> By the work-energy theorem, the kinetic energy attained from rest is equal to the work done by the field.<br><b>Step 3:</b> Work $W = F \\times \\text{displacement} = (qE) \\times y$.<br><b>Step 4:</b> Therefore, Kinetic Energy $= qEy$."
            },
            {
                "id": "ES-TEST-092",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Equilibrium on Incline", "Friction"],
                "q": "A particle of mass 1kg and carrying 0.01C is at rest on an inclined plane of angle $30^{\\circ}$ with horizontal when an electric field of $\\frac{490}{\\sqrt{3}}$ NC$^{-1}$ is applied parallel to horizontal. The coefficient of friction is:<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["0.5", "$\\frac{1}{\\sqrt{3}}$", "$\\frac{\\sqrt{3}}{2}$", "$\\frac{\\sqrt{3}}{7}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Resolve forces along the incline. Downward weight component $= mg\\sin 30^{\\circ} = 1 \\times 9.8 \\times 0.5 = 4.9$ N.<br><b>Step 2:</b> Upward electrostatic component $= qE\\cos 30^{\\circ} = (0.01 \\times \\frac{490}{\\sqrt{3}}) \\times \\frac{\\sqrt{3}}{2} = 2.45$ N.<br><b>Step 3:</b> Net sliding force is $4.9 - 2.45 = 2.45$ N down the incline. Static friction $f$ must balance this.<br><b>Step 4:</b> Normal reaction $N = mg\\cos 30^{\\circ} + qE\\sin 30^{\\circ} = (9.8 \\times \\frac{\\sqrt{3}}{2}) + (\\frac{4.9}{\\sqrt{3}} \\times 0.5) = 4.9\\sqrt{3} + \\frac{2.45}{\\sqrt{3}} = \\frac{17.15}{\\sqrt{3}}$ N.<br><b>Step 5:</b> For limiting equilibrium, coefficient of friction $\\mu = \\frac{f}{N} = \\frac{2.45}{17.15/\\sqrt{3}} = \\frac{2.45\\sqrt{3}}{17.15} = \\frac{\\sqrt{3}}{7}$."
            },
            {
                "id": "ES-TEST-093",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Equilibrium", "Friction"],
                "q": "A sphere carrying charge 0.01 C is kept at rest without falling down, touching a vertical wall by applying a horizontal electric field 100 N/C. If the coefficient of friction between the sphere and the wall is 0.2, the weight of the sphere is:<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["4 N", "2 N", "20 N", "0.2 N"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The horizontal electric force pushes the sphere against the wall, providing the normal reaction: $N = qE = 0.01 \\times 100 = 1$ N.<br><b>Step 2:</b> The maximum static frictional force pointing vertically upwards is $f = \\mu N = 0.2 \\times 1 = 0.2$ N.<br><b>Step 3:</b> For the sphere to remain suspended at rest, its downward weight must be perfectly balanced by this upward frictional force.<br><b>Step 4:</b> Therefore, Weight $= f = 0.2$ N."
            },
            {
                "id": "ES-TEST-094",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 3,
                "tags": ["Concentric Shells", "Potential Difference"],
                "q": "A solid conducting sphere having a charge Q is surrounded by an uncharged concentric conducting spherical shell. The potential difference between the surface of solid sphere and the shell is V. The shell is now given a charge -3Q. The new potential difference between the same surfaces will be:<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["2V", "4V", "V", "2V"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The potential of the inner solid sphere is $V_{in} = \\frac{kQ}{r_{in}} + \\frac{kQ_{shell}}{r_{out}}$.<br><b>Step 2:</b> The potential of the outer shell is $V_{out} = \\frac{kQ}{r_{out}} + \\frac{kQ_{shell}}{r_{out}}$.<br><b>Step 3:</b> The potential difference is $\\Delta V = V_{in} - V_{out} = kQ\\left(\\frac{1}{r_{in}} - \\frac{1}{r_{out}}\\right)$.<br><b>Step 4:</b> Notice that the charge on the outer shell ($Q_{shell}$) mathematically cancels out in the difference equation. Therefore, adding -3Q to the outer shell does not change the potential difference. It remains V."
            },
            {
                "id": "ES-TEST-095",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 3,
                "tags": ["Conservation of Energy", "Kinematics of Particles"],
                "q": "An electron travelling from infinity with velocity 'v' into an electric field due to two stationary electrons separated by a distance of 2m. If it comes to rest when it reaches the mid point of the line joining the stationary electrons. The initial velocity 'v' of the electron is:<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["$16$ m/s", "$32$ m/s", "$16\\sqrt{2}$ m/s", "$32\\sqrt{2}$ m/s"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The midpoint is 1m from each stationary electron. The electrostatic potential at the midpoint is $V = \\frac{k(-e)}{1} + \\frac{k(-e)}{1} = -2ke$.<br><b>Step 2:</b> The potential energy of the incoming electron (-e) exactly at the midpoint is $U = qV = (-e)(-2ke) = 2ke^2$.<br><b>Step 3:</b> Apply conservation of energy: Initial K.E. = Final P.E. $\\implies \\frac{1}{2}mv^2 = 2ke^2$.<br><b>Step 4:</b> Solve for velocity squared: $v^2 = \\frac{4ke^2}{m} = \\frac{4 \\times 9\\times10^9 \\times (1.6\\times10^{-19})^2}{9.1\\times10^{-31}} = \\frac{36 \\times 2.56 \\times 10^{-29}}{9.1\\times10^{-31}} \\approx 1012$.<br><b>Step 5:</b> $v = \\sqrt{1012} \\approx 31.8$ m/s, which is closest to $32$ m/s."
            },
            {
                "id": "ES-TEST-096",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Potential Gradient", "Differentiation"],
                "q": "The electric potential at a point (x, 0, 0) is given by $V=\\left[\\frac{1000}{x}+\\frac{1500}{x^{2}}+\\frac{500}{x^{3}}\\right]$, then the electric field at x = 1 m is (in volt/m):<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["$-5500$", "$5500$", "$\\sqrt{5500}\\hat{i}$", "zero"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The electric field is the negative gradient of potential: $E_x = -\\frac{dV}{dx}$.<br><b>Step 2:</b> Differentiate the given potential function: $\\frac{dV}{dx} = -\\frac{1000}{x^2} - \\frac{3000}{x^3} - \\frac{1500}{x^4}$.<br><b>Step 3:</b> Evaluate the derivative at $x = 1$ m: $\\frac{dV}{dx} = -1000 - 3000 - 1500 = -5500$.<br><b>Step 4:</b> Calculate the field magnitude: $E_x = -(-5500) = 5500$ V/m."
            },
            {
                "id": "ES-TEST-097",
                "topic": "Electric Dipole",
                "difficulty": 3,
                "tags": ["General Point Field", "Vectors"],
                "q": "A small electric dipole is placed at origin with its dipole moment directed along positive x-axis. The direction of electric field at point $(2,2\\sqrt{2},0)$ is:<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["along z-axis", "along y-axis", "along negative y-axis", "along negative z-axis"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The position vector of the point is $\\vec{r} = 2\\hat{i} + 2\\sqrt{2}\\hat{j}$. The distance squared is $r^2 = 2^2 + (2\\sqrt{2})^2 = 4 + 8 = 12$.<br><b>Step 2:</b> The dipole moment is along the x-axis: $\\vec{p} = p\\hat{i}$.<br><b>Step 3:</b> The general electric field formula is $\\vec{E} = \\frac{k}{r^3} [3(\\vec{p} \\cdot \\hat{r})\\hat{r} - \\vec{p}]$.<br><b>Step 4:</b> Calculate the dot product: $\\vec{p} \\cdot \\vec{r} = (p\\hat{i}) \\cdot (2\\hat{i} + 2\\sqrt{2}\\hat{j}) = 2p$.<br><b>Step 5:</b> Substitute into the proportional field equation: $\\vec{E} \\propto 3\\frac{2p}{12}(2\\hat{i} + 2\\sqrt{2}\\hat{j}) - p\\hat{i} = \\frac{p}{2}(2\\hat{i} + 2\\sqrt{2}\\hat{j}) - p\\hat{i} = p\\hat{i} + p\\sqrt{2}\\hat{j} - p\\hat{i} = p\\sqrt{2}\\hat{j}$.<br><b>Step 6:</b> The resultant vector is purely in the positive $\\hat{j}$ direction, which means it points precisely along the y-axis."
            },
            {
                "id": "ES-TEST-098",
                "topic": "Electric Dipole",
                "difficulty": 2,
                "tags": ["Work Done", "Torque"],
                "q": "Two charges $+3.2\\times10^{-19}$ C and $-3.2\\times10^{-19}$ C placed $2.4 \\text{ \\AA}$ apart form an electric dipole. It is placed in a uniform electric field of intensity $4\\times10^{5}$ V/m. The work done to rotate the electric dipole from the equilibrium position by $180^{\\circ}$ is:<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["$3\\times10^{-23}$ J", "$6\\times10^{-23}$ J", "$12\\times10^{-23}$ J", "Zero"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Calculate the dipole moment $p = q \\times d = 3.2\\times10^{-19} \\times 2.4\\times10^{-10} = 7.68\\times10^{-29}$ C$\\cdot$m.<br><b>Step 2:</b> The work done to rotate a dipole from stable equilibrium ($0^{\\circ}$) to $180^{\\circ}$ is $W = pE(1 - \\cos 180^{\\circ}) = 2pE$.<br><b>Step 3:</b> Substitute the known values: $W = 2 \\times 7.68\\times10^{-29} \\times 4\\times10^5 = 61.44\\times10^{-24}$ J.<br><b>Step 4:</b> Converting to proper scientific notation gives $6.144\\times10^{-23}$ J, which matches approximately with option $6\\times10^{-23}$ J."
            },
            {
                "id": "ES-TEST-099",
                "topic": "Electric Dipole",
                "difficulty": 3,
                "tags": ["SHM of Dipole", "Time Period"],
                "q": "An electric dipole is made up of two particles having charges $+1\\mu\\text{C}$ mass 1 kg and other with charge $-1\\mu\\text{C}$ and mass 1 kg separated by distance 1m. It is in equilibrium in a uniform electric field of $20\\times10^{3}$ V/m. If the dipole is deflected through angle $2^{\\circ}$, time taken by it to come again in equilibrium is:<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["$2.5\\pi$ s", "$2.5$ s", "$5\\pi$ s", "$4\\pi$ s"],
                "correct": 0,
                "sol": "<b>Step 1:</b> A dipole displaced by a small angle executes SHM with a time period of $T = 2\\pi\\sqrt{\\frac{I}{pE}}$.<br><b>Step 2:</b> Calculate the moment of inertia about its center: $I = m_1\\left(\\frac{d}{2}\\right)^2 + m_2\\left(\\frac{d}{2}\\right)^2 = 1(0.5)^2 + 1(0.5)^2 = 0.25 + 0.25 = 0.5$ kg$\\cdot$m$^2$.<br><b>Step 3:</b> Calculate dipole moment: $p = q \\times d = 10^{-6} \\times 1 = 10^{-6}$ C$\\cdot$m.<br><b>Step 4:</b> Find the full time period: $T = 2\\pi\\sqrt{\\frac{0.5}{10^{-6} \\times 20\\times10^3}} = 2\\pi\\sqrt{\\frac{0.5}{0.02}} = 2\\pi\\sqrt{25} = 10\\pi$ s.<br><b>Step 5:</b> The time taken to \"come again in equilibrium\" from its extreme released position is exactly one-fourth of the total period: $t = \\frac{T}{4} = \\frac{10\\pi}{4} = 2.5\\pi$ s."
            },
            {
                "id": "ES-TEST-100",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Equipotential Surface", "Potential Gradient", "2D Geometry"],
                "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEiEDDv8KqFTdf4uJVcczeVclFbMYgaTdLCqxzm1sGNzqSRbhQrizReyXPuwDG0CQ6igOtclrN8xTIhNh2FHca_sP4TFkxWyTDTSWTK0SKakLH6TdxLwmK1AcE4-xYbBGcmcSTFGAQkhLyxJhkfzVVl0ZELLcmcLb42skLk5nUOqxZb4s6ePhVmotUe6ap_2",
                "q": "Some equipotential surfaces are shown in figure. The electric field strength is:<br><br><i>Prepared by Soumya Sir</i>",
                "options": ["100 V/m along x-axis", "100 V/m along y-axis", "400 V/m at an angle 120&ordm; with x-axis", "$\\frac{400}{\\sqrt{3}}$ V/m at an angle 120&ordm; with x-axis"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The electric field $\\vec{E}$ is always perpendicular to equipotential surfaces and points in the direction of decreasing potential (from 30V towards 10V).<br><b>Step 2:</b> Find the perpendicular distance ($\\Delta r$) between two adjacent surfaces, such as the 10V and 20V lines. The distance along the x-axis is $\\Delta x = 10\\text{ cm} - 5\\text{ cm} = 5\\text{ cm} = 0.05\\text{ m}$.<br><b>Step 3:</b> From the right-angled triangle formed by $\\Delta x$ and the perpendicular distance, $\\Delta r = \\Delta x \\sin(30^{\\circ})$.<br><b>Step 4:</b> $\\Delta r = 0.05 \\times 0.5 = 0.025\\text{ m}$.<br><b>Step 5:</b> Calculate the magnitude of the electric field: $E = \\frac{|\\Delta V|}{\\Delta r} = \\frac{20 - 10}{0.025} = \\frac{10}{0.025} = 400\\text{ V/m}$.<br><b>Step 6:</b> The equipotential lines are tilted at $30^{\\circ}$ to the x-axis. The perpendicular direction pointing towards the lower potential (leftwards and upwards) makes an angle of $30^{\\circ} + 90^{\\circ} = 120^{\\circ}$ with the positive x-axis."
            }
        ]
    },

    "Units and Measurements": {
        "classTarget": "Class 11",
        "topics": ["ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS", "SIGNIFICANT FIGURES & ROUNDING OFF", "UNITS AND DIMENSIONAL FORMULAE", "PRINCIPLE OF HOMOGENEITY", "CONVERSION OF UNITS", "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS"],
        "questions": [
            {
                "id": "UM-TEST-001",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 2,
                "tags": ["Relative Error", "Least Count"],
                "q": "The accuracy in the measurement of the diameter of hydrogen atom as $1.06\\times 10^{-10}$ m is:",
                "options": ["0.01", "$106\\times 10^{-10}$", "$\\frac{1}{106}$", "$0.01\\times 10^{-10}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The measured value is $1.06 \\times 10^{-10}$ m.<br><b>Step 2:</b> The least count (absolute error) based on the significant figures given (two decimal places) is $0.01 \\times 10^{-10}$ m.<br><b>Step 3:</b> The accuracy or relative error is $\\frac{\\Delta d}{d} = \\frac{0.01 \\times 10^{-10}}{1.06 \\times 10^{-10}} = \\frac{1}{106}$."
            },
            {
                "id": "UM-TEST-002",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 1,
                "tags": ["Least Count", "Precision"],
                "q": "The length of a rod is measured as 31.52 cm. Graduations on the scale are up to:",
                "options": ["1 mm", "0.01 mm", "0.1 mm", "0.02 cm"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The measurement 31.52 cm has two decimal places, meaning the instrument measures precisely up to 0.01 cm.<br><b>Step 2:</b> This minimum measurable value is the least count or graduation of the scale.<br><b>Step 3:</b> Convert 0.01 cm to mm: $0.01 \\text{ cm} = 0.1 \\text{ mm}$."
            },
            {
                "id": "UM-TEST-003",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 2,
                "tags": ["Combination of Errors", "Division"],
                "q": "If $L=(20\\pm 0.01)$ m and $B=(10\\pm 0.02)$ m then $L/B$ is:",
                "options": ["$(2\\pm 0.03)$ m", "$(2\\pm 0.015)$ m", "$(2\\pm 0.01)$ m", "$(2\\pm 0.005)$ m"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Calculate the central value: $x = \\frac{L}{B} = \\frac{20}{10} = 2$.<br><b>Step 2:</b> For division, relative errors add up: $\\frac{\\Delta x}{x} = \\frac{\\Delta L}{L} + \\frac{\\Delta B}{B}$.<br><b>Step 3:</b> Substitute the values: $\\frac{\\Delta x}{2} = \\frac{0.01}{20} + \\frac{0.02}{10} = 0.0005 + 0.002 = 0.0025$.<br><b>Step 4:</b> Absolute error $\\Delta x = 2 \\times 0.0025 = 0.005$.<br><b>Step 5:</b> The result is $(2\\pm 0.005)$ m."
            },
            {
                "id": "UM-TEST-004",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 2,
                "tags": ["Combination of Errors", "Powers"],
                "q": "The radius of a sphere is measured as $(10\\pm 0.02\\%)$ cm. The error in the measurement of its volume is:",
                "options": ["25.1 cc", "25.12 cc", "2.51 cc", "251.2 cc"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.<br><b>Step 2:</b> The percentage error in volume is $3 \\times (\\text{percentage error in } r) = 3 \\times 0.02\\% = 0.06\\%$.<br><b>Step 3:</b> Calculate the actual volume: $V = \\frac{4}{3} \\times 3.14 \\times (10)^3 = \\frac{4000 \\times 3.14}{3} \\approx 4186.67$ cc.<br><b>Step 4:</b> Absolute error $\\Delta V = V \\times \\frac{0.06}{100} = 4186.67 \\times 0.0006 \\approx 2.51$ cc."
            },
            {
                "id": "UM-TEST-005",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 2,
                "tags": ["Combination of Errors", "Multiplication"],
                "q": "If length and breadth of a plate are $(40\\pm 0.2)$ cm and $(30\\pm 0.1)$ cm the absolute error in measurement of area is:",
                "options": ["$10\\text{ cm}^{2}$", "$8\\text{ cm}^{2}$", "$9\\text{ cm}^{2}$", "$7\\text{ cm}^{2}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The area is $A = L \\times B = 40 \\times 30 = 1200\\text{ cm}^2$.<br><b>Step 2:</b> For multiplication, $\\frac{\\Delta A}{A} = \\frac{\\Delta L}{L} + \\frac{\\Delta B}{B}$.<br><b>Step 3:</b> $\\Delta A = A \\left(\\frac{0.2}{40} + \\frac{0.1}{30}\\right) = 1200 \\left(\\frac{0.6 + 0.4}{120}\\right)$.<br><b>Step 4:</b> $\\Delta A = 1200 \\times \\frac{1}{120} = 10\\text{ cm}^2$."
            },
            {
                "id": "UM-TEST-006",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 1,
                "tags": ["Percentage Error"],
                "q": "If the length of a cylinder is measured to be 4.28 cm with an error of 0.01 cm, the percentage error in the measured length is nearly:",
                "options": ["0.4%", "0.5%", "0.2%", "0.1%"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Percentage error is given by $\\frac{\\Delta L}{L} \\times 100$.<br><b>Step 2:</b> Substitute the given values: $\\frac{0.01}{4.28} \\times 100$.<br><b>Step 3:</b> This equals $\\frac{1}{4.28} \\approx 0.233\\%$.<br><b>Step 4:</b> The closest option is $0.2\\%$."
            },
            {
                "id": "UM-TEST-007",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 2,
                "tags": ["Random Error", "Statistical Error"],
                "q": "When 10 observations are taken, the random error is x. When 100 observations are taken, the random error becomes:",
                "options": ["$x/10$", "$x^{2}$", "10 x", "$\\sqrt{x}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Random error is inversely proportional to the number of observations ($N$). Thus, $E \\propto \\frac{1}{N}$.<br><b>Step 2:</b> Therefore, $\\frac{E_2}{E_1} = \\frac{N_1}{N_2}$.<br><b>Step 3:</b> $\\frac{E_2}{x} = \\frac{10}{100} = \\frac{1}{10}$.<br><b>Step 4:</b> $E_2 = \\frac{x}{10}$."
            },
            {
                "id": "UM-TEST-008",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 2,
                "tags": ["Combination of Errors", "Addition"],
                "q": "If $L_{1}=(2.02\\pm 0.01)$ m and $L_{2}=(1.02\\pm 0.01)$ m then $L_{1}+2L_{2}$ is (in m):",
                "options": ["$4.06\\pm 0.02$", "$4.06\\pm 0.03$", "$4.06\\pm 0.005$", "$4.06\\pm 0.01$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Calculate the central value: $x = L_1 + 2L_2 = 2.02 + 2(1.02) = 2.02 + 2.04 = 4.06$ m.<br><b>Step 2:</b> For addition and scalar multiplication, the absolute errors add up: $\\Delta x = \\Delta L_1 + 2\\Delta L_2$.<br><b>Step 3:</b> $\\Delta x = 0.01 + 2(0.01) = 0.01 + 0.02 = 0.03$ m.<br><b>Step 4:</b> The final result is $(4.06\\pm 0.03)$ m."
            },
            {
                "id": "UM-TEST-009",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 2,
                "tags": ["Combination of Errors", "Division"],
                "q": "A body travels uniformly a distance of $(20.0\\pm 0.2)$ m in time $(4.0\\pm 0.04)$ s. The velocity of the body is:",
                "options": ["$(5.0\\pm 0.4)\\text{ ms}^{-1}$", "$(5.0\\pm 0.2)\\text{ ms}^{-1}$", "$(5.0\\pm 0.6)\\text{ ms}^{-1}$", "$(5.0\\pm 0.1)\\text{ ms}^{-1}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Velocity is $v = \\frac{s}{t} = \\frac{20.0}{4.0} = 5.0\\text{ ms}^{-1}$.<br><b>Step 2:</b> The relative error in velocity is $\\frac{\\Delta v}{v} = \\frac{\\Delta s}{s} + \\frac{\\Delta t}{t}$.<br><b>Step 3:</b> $\\frac{\\Delta v}{5.0} = \\frac{0.2}{20.0} + \\frac{0.04}{4.0} = 0.01 + 0.01 = 0.02$.<br><b>Step 4:</b> The absolute error $\\Delta v = 5.0 \\times 0.02 = 0.1\\text{ ms}^{-1}$.<br><b>Step 5:</b> The velocity is $(5.0\\pm 0.1)\\text{ ms}^{-1}$."
            },
            {
                "id": "UM-TEST-010",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 1,
                "tags": ["Rounding Off"],
                "q": "If the value of 103.5 kg is rounded off to three significant figures, then the value is:",
                "options": ["103", "103.0", "104", "10.3"],
                "correct": 2,
                "sol": "<b>Step 1:</b> We need to round 103.5 to three significant figures, which means dropping the 5.<br><b>Step 2:</b> According to rounding rules, if the digit to be dropped is exactly 5 and the preceding digit is odd, the preceding digit is increased by 1.<br><b>Step 3:</b> The preceding digit is 3 (odd), so it becomes 4.<br><b>Step 4:</b> The rounded value is 104 kg."
            },
            {
                "id": "UM-TEST-011",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 1,
                "tags": ["Scientific Notation", "Significant Figures"],
                "q": "The number of significant figures in $6.023\\times 10^{23}\\text{ mole}^{-1}$ is:",
                "options": ["4", "3", "2", "23"],
                "correct": 0,
                "sol": "<b>Step 1:</b> In scientific notation $A \\times 10^B$, the number of significant figures is determined solely by the coefficient $A$.<br><b>Step 2:</b> The coefficient here is 6.023.<br><b>Step 3:</b> All non-zero digits and zeros between them are significant. Thus, 6, 0, 2, and 3 are all significant.<br><b>Step 4:</b> There are 4 significant figures."
            },
            {
                "id": "UM-TEST-012",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 2,
                "tags": ["Propagation of Precision", "Powers"],
                "q": "The side of a cube is 2.5 metre. The volume of the cube to the significant figures is:",
                "options": ["15", "16", "1.5", "1.6"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The volume of a cube is $V = L^3 = (2.5)^3 = 15.625\\text{ m}^3$.<br><b>Step 2:</b> The measured length (2.5 m) has two significant figures.<br><b>Step 3:</b> The final result must be rounded to the same number of significant figures as the least precise measurement, which is two significant figures.<br><b>Step 4:</b> Rounding 15.625 to two significant figures gives 16."
            },
            {
                "id": "UM-TEST-013",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 1,
                "tags": ["Unit Conversion", "Significant Figures"],
                "q": "When a force is expressed in dyne, the number of significant figures is four. If it is expressed in newton, the number of significant figures will become $(10^{5}\\text{ dyne}=1\\text{ N})$:",
                "options": ["9", "5", "1", "4"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Changing the units of a physical quantity does not alter its precision or the number of significant figures.<br><b>Step 2:</b> A unit conversion is merely multiplying by an exact conversion factor (like $10^{-5}$), which has infinite significant figures.<br><b>Step 3:</b> Therefore, the number of significant figures remains 4."
            },
            {
                "id": "UM-TEST-014",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 2,
                "tags": ["Mathematical Operations", "Roots"],
                "q": "$\\sqrt{2.0}$ is:",
                "options": ["1.414", "1.4", "1.0", "1"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The number 2.0 has two significant figures.<br><b>Step 2:</b> The mathematical square root of 2 is approximately 1.41421...<br><b>Step 3:</b> Following the rules of significant figures, the result must be rounded to match the number of significant figures in the original value (two).<br><b>Step 4:</b> Rounding 1.414... to two significant figures gives 1.4."
            },
            {
                "id": "UM-TEST-015",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 1,
                "tags": ["Rules for Zeros", "Significant Figures"],
                "q": "The number of significant figures in 0.010200 is:",
                "options": ["6", "5", "3", "2"],
                "correct": 1,
                "sol": "<b>Step 1:</b> According to the rules of significant figures, leading zeros (zeros before the first non-zero digit) are not significant. So, '0.0' are not significant.<br><b>Step 2:</b> All non-zero digits are significant (1, 2).<br><b>Step 3:</b> Zeros between non-zero digits are significant (the 0 between 1 and 2).<br><b>Step 4:</b> Trailing zeros in a number with a decimal point are significant (the two 0s at the end).<br><b>Step 5:</b> Thus, 1, 0, 2, 0, 0 are significant, giving a total of 5 significant figures."
            },
            {
                "id": "UM-TEST-016",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 1,
                "tags": ["Rounding Off", "Significant Figures"],
                "q": "When the number 0.046508 is reduced to 4 significant figures, then it becomes:",
                "options": ["0.0465", "$4650.8 \\times 10^{-5}$", "$4.651 \\times 10^{-2}$", "$4.650 \\times 10^{-2}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The original number is 0.046508. Leading zeros are not significant.<br><b>Step 2:</b> The first four significant digits are 4, 6, 5, and 0.<br><b>Step 3:</b> The next digit is 8, which is greater than 5, so we round up the 0 to 1.<br><b>Step 4:</b> The number becomes 0.04651.<br><b>Step 5:</b> In scientific notation, this is written as $4.651 \\times 10^{-2}$."
            },
            {
                "id": "UM-TEST-017",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 2,
                "tags": ["Mathematical Operations", "Significant Figures"],
                "q": "With due regard to significant figures, the value of (46.7 - 10.04) is:",
                "options": ["36.7", "36.00", "36.66", "30.6"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Perform the standard subtraction: $46.7 - 10.04 = 36.66$.<br><b>Step 2:</b> In addition and subtraction, the final result must have the same number of decimal places as the number with the fewest decimal places in the problem.<br><b>Step 3:</b> 46.7 has one decimal place, while 10.04 has two decimal places. Thus, the result must be rounded to one decimal place.<br><b>Step 4:</b> Rounding 36.66 to one decimal place gives 36.7."
            },
            {
                "id": "UM-TEST-018",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 2,
                "tags": ["Rounding Off"],
                "q": "By rounding off, a) 20.96 and b) 0.0003125 to 3 significant figures, we get:",
                "options": ["21.0; $312 \\times 10^{-4}$", "21.0; $3.12 \\times 10^{-4}$", "2.10; $3.12 \\times 10^{-4}$", "210; $3.12 \\times 10^{-4}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> For 20.96, to keep 3 significant figures, we look at the 4th digit (6). Since $6 > 5$, round up the 9, which carries over to make the number 21.0.<br><b>Step 2:</b> For 0.0003125, the significant digits start at 3. The 4th significant digit is 5. According to rounding rules, if the digit to be dropped is 5 and the preceding digit is even (2 is even), it remains unchanged.<br><b>Step 3:</b> Thus, 0.0003125 becomes 0.000312.<br><b>Step 4:</b> Expressing 0.000312 in standard scientific form gives $3.12 \\times 10^{-4}$."
            },
            {
                "id": "UM-TEST-019",
                "topic": "UNITS AND DIMENSIONAL FORMULAE",
                "difficulty": 2,
                "tags": ["Dimensional Analysis", "Unit Conversion"],
                "q": "If the unit of length is doubled and that of mass and time is halved, the unit of energy will be:",
                "options": ["doubled", "4 times", "8 times", "same"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The dimensional formula for energy is $E = [ML^2T^{-2}]$.<br><b>Step 2:</b> Let the new units be $M' = \\frac{M}{2}$, $L' = 2L$, and $T' = \\frac{T}{2}$.<br><b>Step 3:</b> The new unit of energy $E' = [M'(L')^2(T')^{-2}]$.<br><b>Step 4:</b> Substitute the new units: $E' = \\left(\\frac{M}{2}\\right)(2L)^2\\left(\\frac{T}{2}\\right)^{-2} = \\left(\\frac{M}{2}\\right)(4L^2)\\left(\\frac{4}{T^2}\\right)$.<br><b>Step 5:</b> Simplify: $E' = 8 [ML^2T^{-2}] = 8E$. The unit of energy becomes 8 times."
            },
            {
                "id": "UM-TEST-020",
                "topic": "UNITS AND DIMENSIONAL FORMULAE",
                "difficulty": 2,
                "tags": ["Dimensional Analysis", "Spring System"],
                "q": "Given M is the mass suspended from a spring of force constant k. The dimensional formula for $[M/k]^{1/2}$ is same as that for:",
                "options": ["frequency", "time period", "velocity", "wavelength"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Force constant $k$ is defined as force per unit length, so its dimensional formula is $[MLT^{-2}] / [L] = [MT^{-2}]$.<br><b>Step 2:</b> Mass $M$ has the dimension $[M]$.<br><b>Step 3:</b> Calculate the dimension of $M/k$: $[M] / [MT^{-2}] = [T^2]$.<br><b>Step 4:</b> The dimension of $[M/k]^{1/2}$ is the square root of $[T^2]$, which is $[T]$.<br><b>Step 5:</b> This is the dimensional formula for time period. (Alternatively, recall the formula for a spring pendulum: $T = 2\\pi\\sqrt{M/k}$)."
            },
            {
                "id": "UM-TEST-021",
                "topic": "UNITS AND DIMENSIONAL FORMULAE",
                "difficulty": 3,
                "tags": ["Dimensional Analysis", "Algebraic Manipulation"],
                "q": "The dimensional formula for the product of two physical quantities P and Q is $[ML^{2}T^{-2}]$. The dimensional formula of $P/Q$ is $[MT^{-2}]$. Then P and Q respectively are:",
                "options": ["Force and velocity", "Momentum and displacement", "Force and displacement", "Work and velocity"],
                "correct": 2,
                "sol": "<b>Step 1:</b> We are given $P \\cdot Q = [ML^2T^{-2}]$ (Equation 1) and $\\frac{P}{Q} = [MT^{-2}]$ (Equation 2).<br><b>Step 2:</b> Multiply Eq 1 and Eq 2: $(P \\cdot Q) \\times \\left(\\frac{P}{Q}\\right) = [ML^2T^{-2}] \\times [MT^{-2}]$.<br><b>Step 3:</b> $P^2 = [M^2L^2T^{-4}]$. Taking the square root gives $P = [MLT^{-2}]$, which is the dimensional formula for Force.<br><b>Step 4:</b> Divide Eq 1 by Eq 2: $\\frac{P \\cdot Q}{P/Q} = \\frac{[ML^2T^{-2}]}{[MT^{-2}]}$.<br><b>Step 5:</b> $Q^2 = [L^2]$. Taking the square root gives $Q = [L]$, which is the dimensional formula for displacement."
            },
            {
                "id": "UM-TEST-022",
                "topic": "UNITS AND DIMENSIONAL FORMULAE",
                "difficulty": 2,
                "tags": ["Dimensional Analysis", "Rotational Mechanics"],
                "q": "The fundamental physical quantities that have same dimension in the dimensional formula of Torque and Angular Momentum are:",
                "options": ["mass, time", "time, length", "mass, length", "time, mole"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The dimensional formula for Torque ($\\tau$) is $[ML^2T^{-2}]$.<br><b>Step 2:</b> The dimensional formula for Angular Momentum ($L$) is $[ML^2T^{-1}]$.<br><b>Step 3:</b> Comparing the two formulas, mass has a dimension of 1 in both, and length has a dimension of 2 in both.<br><b>Step 4:</b> Time has a dimension of -2 in torque and -1 in angular momentum. Thus, mass and length have the same dimensions in both."
            },
            {
                "id": "UM-TEST-023",
                "topic": "UNITS AND DIMENSIONAL FORMULAE",
                "difficulty": 1,
                "tags": ["Dimensional Formulae"],
                "q": "The physical quantity which has the dimensional formula as that of $\\frac{\\text{energy}}{\\text{mass} \\times \\text{length}}$ is:",
                "options": ["Force", "Power", "Pressure", "Acceleration"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Write the dimensional formulae for the given quantities: Energy $= [ML^2T^{-2}]$, Mass $= [M]$, Length $= [L]$.<br><b>Step 2:</b> Substitute these into the given expression: $\\frac{[ML^2T^{-2}]}{[M][L]}$.<br><b>Step 3:</b> Simplify the expression: $\\frac{ML^2T^{-2}}{ML} = [LT^{-2}]$.<br><b>Step 4:</b> $[LT^{-2}]$ is the dimensional formula for acceleration."
            },
            {
                "id": "UM-TEST-024",
                "topic": "UNITS AND DIMENSIONAL FORMULAE",
                "difficulty": 2,
                "tags": ["Rotational Mechanics", "Dimensional Formulae"],
                "q": "If J and E represent the angular momentum and rotational kinetic energy of a body, $\\frac{J^{2}}{2E}$ represents the following physical quantity.",
                "options": ["Moment of couple", "Moment of force", "Moment of inertia", "Force"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The relationship between rotational kinetic energy ($E$), angular momentum ($J$), and moment of inertia ($I$) is $E = \\frac{J^2}{2I}$.<br><b>Step 2:</b> Rearranging this standard formula gives $I = \\frac{J^2}{2E}$.<br><b>Step 3:</b> Therefore, the quantity $\\frac{J^2}{2E}$ represents the moment of inertia."
            },
            {
                "id": "UM-TEST-025",
                "topic": "UNITS AND DIMENSIONAL FORMULAE",
                "difficulty": 2,
                "tags": ["Unit Conversion", "Dimensional Analysis"],
                "q": "If the fundamental units of length, mass and time are doubled, the unit of force will:",
                "options": ["doubled", "halved", "remain same", "four times"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The dimensional formula for force is $F = [MLT^{-2}]$.<br><b>Step 2:</b> Let the new units be $M' = 2M$, $L' = 2L$, and $T' = 2T$.<br><b>Step 3:</b> The new unit of force is $F' = [M'L'(T')^{-2}]$.<br><b>Step 4:</b> Substitute the new values: $F' = (2M)(2L)(2T)^{-2} = (4ML) \\times \\frac{1}{4T^2}$.<br><b>Step 5:</b> Simplify: $F' = [MLT^{-2}] = F$. The unit of force remains the same."
            },
            {
                "id": "UM-TEST-026",
                "topic": "PRINCIPLE OF HOMOGENEITY",
                "difficulty": 2,
                "tags": ["Principle of Homogeneity", "Constants"],
                "q": "$\\mu=A+\\frac{B}{\\lambda}+\\frac{C}{\\lambda^{2}}$ is dimensionally correct. The dimensions of A, B and C respectively are ($\\mu$, A, B, C are constants) where $\\lambda$ is wave length of wave:",
                "options": ["No dimensions, L, $L^{2}$", "$L^{2}$, No dimensions, L", "L, $L^{2}$, No dimensions", "L, No dimensions, $L^{2}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> According to the principle of homogeneity, each term in an equation must have the same dimensions. Here, $\\mu$ represents refractive index, which is a dimensionless quantity $[M^0L^0T^0]$.<br><b>Step 2:</b> Therefore, $A$ must also be dimensionless.<br><b>Step 3:</b> The term $\\frac{B}{\\lambda}$ must be dimensionless. Since $\\lambda$ has the dimension of length $[L]$, $B$ must have the dimension $[L]$ so they cancel out.<br><b>Step 4:</b> The term $\\frac{C}{\\lambda^2}$ must be dimensionless. Since $\\lambda^2$ has the dimension $[L^2]$, $C$ must have the dimension $[L^2]$.<br><b>Step 5:</b> Thus, the dimensions are: No dimensions, L, $L^2$."
            },
            {
                "id": "UM-TEST-027",
                "topic": "PRINCIPLE OF HOMOGENEITY",
                "difficulty": 2,
                "tags": ["Dimensional Formulae", "Fluid Mechanics"],
                "q": "According to Bernoulli's theorem $\\frac{p}{d}+\\frac{v^{2}}{2}+gh=\\text{constant}$. The dimensional formula of the constant is (P is pressure, d is density, h is height, v is velocity and g is acceleration due to gravity):",
                "options": ["$[M^{0}L^{0}T^{0}]$", "$[M^{0}LT^{0}]$", "$[M^{0}L^{2}T^{-2}]$", "$[M^{0}L^{2}T^{-4}]$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> By the principle of homogeneity, the constant must have the same dimensions as any of the individual terms in the equation.<br><b>Step 2:</b> Let's check the middle term, $\\frac{v^2}{2}$. The number 2 is dimensionless.<br><b>Step 3:</b> Velocity $v$ has dimensions $[LT^{-1}]$.<br><b>Step 4:</b> Therefore, $v^2$ has dimensions $([LT^{-1}])^2 = [L^2T^{-2}]$.<br><b>Step 5:</b> Since mass $[M]$ is not present, the dimensional formula is $[M^0L^2T^{-2}]$."
            },
            {
                "id": "UM-TEST-028",
                "topic": "CONVERSION OF UNITS",
                "difficulty": 2,
                "tags": ["Unit Conversion", "Surface Tension"],
                "q": "The surface tension of a liquid in CGS system is 45 dyne $cm^{-1}$. Its value in SI system is:",
                "options": ["$4.5\\text{ Nm}^{-1}$", "$0.045\\text{ Nm}^{-1}$", "$0.0045\\text{ Nm}^{-1}$", "$0.45\\text{ Nm}^{-1}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The value is given as $45\\text{ dyne/cm}$. We need to convert dynes to Newtons and cm to meters.<br><b>Step 2:</b> We know that $1\\text{ N} = 10^5\\text{ dyne}$, so $1\\text{ dyne} = 10^{-5}\\text{ N}$.<br><b>Step 3:</b> We know that $1\\text{ m} = 10^2\\text{ cm}$, so $1\\text{ cm} = 10^{-2}\\text{ m}$.<br><b>Step 4:</b> Substitute the conversions: $45 \\times \\frac{10^{-5}\\text{ N}}{10^{-2}\\text{ m}} = 45 \\times 10^{-3}\\text{ N/m}$.<br><b>Step 5:</b> Simplify to decimal form: $0.045\\text{ Nm}^{-1}$."
            },
            {
                "id": "UM-TEST-029",
                "topic": "CONVERSION OF UNITS",
                "difficulty": 3,
                "tags": ["Unit Conversion", "Derived Units"],
                "q": "If minute is the unit of time, $10\\text{ ms}^{-2}$ is the unit of acceleration and 100 kg is the unit of mass, the new unit of work in joule is:",
                "options": ["$10^{5}$", "$10^{6}$", "$6\\times 10^{6}$", "$36\\times 10^{6}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The dimensional formula for work is $[ML^2T^{-2}]$. This can also be written as Mass $\\times$ Acceleration $\\times$ Length ($M \\cdot a \\cdot L$).<br><b>Step 2:</b> We are given new units: $M' = 100\\text{ kg}$, $T' = 1\\text{ min} = 60\\text{ s}$, and $a' = 10\\text{ m/s}^2$.<br><b>Step 3:</b> First, find the new unit of length $L'$. Since $a' = L' / (T')^2$, we have $10 = L' / (60)^2$. Thus, $L' = 10 \\times 3600 = 36000\\text{ m}$.<br><b>Step 4:</b> Now, calculate the new unit of work: $W' = M' \\cdot a' \\cdot L'$.<br><b>Step 5:</b> $W' = (100\\text{ kg}) \\times (10\\text{ m/s}^2) \\times (36000\\text{ m}) = 36,000,000\\text{ Joules} = 36 \\times 10^6\\text{ J}$."
            },
            {
                "id": "UM-TEST-030",
                "topic": "CONVERSION OF UNITS",
                "difficulty": 2,
                "tags": ["Derived Units", "Fluid Mechanics"],
                "q": "A motor pumps water at the rate of V $m^{3}$ per second, against a pressure $P\\text{ Nm}^{-2}$. The power of the motor in watt is:",
                "options": ["PV", "(P/V)", "(V/P)", "(V-P)"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Power is defined as work done per unit time ($Power = \\frac{W}{t}$).<br><b>Step 2:</b> Work done by a fluid is given by Force $\\times$ displacement ($F \\times x$). So, $Power = F \\times \\frac{x}{t} = F \\times v$ (where $v$ is velocity).<br><b>Step 3:</b> Pressure $P = \\frac{F}{A}$, so $F = P \\times A$. Substituting this gives $Power = P \\times A \\times v$.<br><b>Step 4:</b> The term $(A \\times v)$ represents the volume flow rate (volume per unit time), which is given as $V$.<br><b>Step 5:</b> Therefore, $Power = P \\times V$."
            },
            {
                "id": "UM-TEST-031",
                "topic": "CONVERSION OF UNITS",
                "difficulty": 3,
                "tags": ["Percentage Change", "Derived Units"],
                "q": "If the units of length and force are increased by four times the unit of energy will be increased by:",
                "options": ["16%", "1600%", "1500%", "400%"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The dimensional formula for energy in terms of force and length is $E = F \\times L$.<br><b>Step 2:</b> Let the new units be $F' = 4F$ and $L' = 4L$.<br><b>Step 3:</b> The new unit of energy is $E' = F' \\times L' = (4F) \\times (4L) = 16FL = 16E$.<br><b>Step 4:</b> The increase in the unit of energy is $\\Delta E = E' - E = 16E - E = 15E$.<br><b>Step 5:</b> The percentage increase is $\\left(\\frac{\\Delta E}{E}\\right) \\times 100 = \\left(\\frac{15E}{E}\\right) \\times 100 = 1500\\%$."
            },
            {
                "id": "UM-TEST-032",
                "topic": "CONVERSION OF UNITS",
                "difficulty": 2,
                "tags": ["SI and CGS Units", "Constants"],
                "q": "SI unit and CGS unit of a quantity vary by $10^3$ times, it is:",
                "options": ["Boltzmann constant", "Gravitational constant", "Planck's constant", "Angular Momentum"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Analyze the Gravitational Constant (G). Its SI unit is $\\text{N}\\cdot\\text{m}^2/\\text{kg}^2$.<br><b>Step 2:</b> Convert the SI unit to CGS: $1\\text{ N} = 10^5\\text{ dyne}$, $1\\text{ m}^2 = 10^4\\text{ cm}^2$, and $1\\text{ kg}^2 = 10^6\\text{ g}^2$.<br><b>Step 3:</b> Substitute these conversions: $1\\text{ SI unit of G} = \\frac{(10^5\\text{ dyne}) \\times (10^4\\text{ cm}^2)}{10^6\\text{ g}^2}$.<br><b>Step 4:</b> Simplify the expression: $\\frac{10^9}{10^6} = 10^3\\text{ dyne}\\cdot\\text{cm}^2/\\text{g}^2$.<br><b>Step 5:</b> Thus, the SI unit of the Gravitational constant is $10^3$ times its CGS unit."
            },
            {
                "id": "UM-TEST-033",
                "topic": "CONVERSION OF UNITS",
                "difficulty": 2,
                "tags": ["Gravitational Constant", "Unit Conversion"],
                "q": "The value of universal gravitational constant G in CGS system is $6.67\\times 10^{-8}\\text{ dyne cm}^{2}\\text{g}^{-2}$. Its value in SI system is:",
                "options": ["$6.67\\times 10^{-11}\\text{ Nm}^{2}\\text{kg}^{-2}$", "$6.67\\times 10^{-5}\\text{ Nm}^{2}\\text{kg}^{-2}$", "$6.67\\times 10^{-10}\\text{ Nm}^{2}\\text{kg}^{-2}$", "$6.67\\times 10^{-9}\\text{ Nm}^{2}\\text{kg}^{-2}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The conversion factor between the CGS and SI unit for G is $1\\text{ SI unit} = 10^3\\text{ CGS units}$.<br><b>Step 2:</b> Therefore, $1\\text{ CGS unit} = 10^{-3}\\text{ SI units}$.<br><b>Step 3:</b> Multiply the given CGS value by this factor: $G = 6.67 \\times 10^{-8} \\times 10^{-3}\\text{ SI units}$.<br><b>Step 4:</b> $G = 6.67 \\times 10^{-11}\\text{ Nm}^{2}\\text{kg}^{-2}$."
            },
            {
                "id": "UM-TEST-034",
                "topic": "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS",
                "difficulty": 2,
                "tags": ["Kinematics", "System of Units"],
                "q": "The final velocity of a particle falling freely under gravity is given by $V^2-u^2=2gx$ where x is the distance covered. If $v=18\\text{ kmph}$, $g=1000\\text{ cm s}^{-2}$, and $x=120\\text{ cm}$, then $u = \\_\\_\\_\\_ \\text{ ms}^{-1}$.",
                "options": ["2.4", "1.2", "1", "0.1"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Convert all values to SI units (meters and seconds).<br><b>Step 2:</b> $v = 18\\text{ kmph} = 18 \\times \\frac{5}{18}\\text{ m/s} = 5\\text{ m/s}$.<br><b>Step 3:</b> $g = 1000\\text{ cm/s}^2 = 10\\text{ m/s}^2$.<br><b>Step 4:</b> $x = 120\\text{ cm} = 1.2\\text{ m}$.<br><b>Step 5:</b> Substitute into the equation: $(5)^2 - u^2 = 2(10)(1.2)$.<br><b>Step 6:</b> $25 - u^2 = 24 \\implies u^2 = 1 \\implies u = 1\\text{ m/s}$."
            },
            {
                "id": "UM-TEST-035",
                "topic": "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS",
                "difficulty": 2,
                "tags": ["Dimensional Analysis", "Principle of Homogeneity"],
                "q": "The equation which is dimensionally correct among the following is:",
                "options": ["$v=u+at^2$", "$s=ut+at^3$", "$s=ut+at^2$", "$t=s+av$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> According to the principle of homogeneity, an equation is dimensionally correct if all added/equated terms have the exact same dimensions.<br><b>Step 2:</b> Let's check the third option: $s = ut + at^2$.<br><b>Step 3:</b> Dimension of LHS ($s$) is $[L]$.<br><b>Step 4:</b> Dimension of $ut$ is $[LT^{-1}] \\times [T] = [L]$.<br><b>Step 5:</b> Dimension of $at^2$ is $[LT^{-2}] \\times [T^2] = [L]$.<br><b>Step 6:</b> Since $[L] = [L] + [L]$, this equation is dimensionally consistent."
            },
            {
                "id": "UM-TEST-036",
                "topic": "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS",
                "difficulty": 2,
                "tags": ["Dimensional Constants", "Fluid Mechanics"],
                "q": "The dimensions of 'k' in the relation $V=k a v t$ (where V is the volume of a liquid passing through any point in time t, 'a' is area of cross section, v is the velocity of the liquid) is:",
                "options": ["$[M^{1}L^{2}T^{-1}]$", "$[M^{1}L^{1}T^{-1}]$", "$[M^{0}L^{0}T^{-1}]$", "$[M^{0}L^{0}T^{0}]$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Write the dimensional formulas for all known quantities: Volume $V = [L^3]$, Area $a = [L^2]$, Velocity $v = [LT^{-1}]$, Time $t = [T]$.<br><b>Step 2:</b> Substitute these into the given equation: $[L^3] = [k] \\times [L^2] \\times [LT^{-1}] \\times [T]$.<br><b>Step 3:</b> Simplify the RHS: $[k] \\times [L^3T^0] = [k][L^3]$.<br><b>Step 4:</b> Equate LHS and RHS: $[L^3] = [k][L^3] \\implies [k] = 1$.<br><b>Step 5:</b> Therefore, $k$ is a dimensionless constant with dimensions $[M^0L^0T^0]$."
            },
            {
                "id": "UM-TEST-037",
                "topic": "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS",
                "difficulty": 2,
                "tags": ["Fundamental Quantities", "Algebraic Manipulation"],
                "q": "If force (F), work (W) and velocity (V) are taken as fundamental quantities then the dimensional formula of Time (T) is:",
                "options": ["$[W^{1}F^{1}V^{1}]$", "$[W^{1}F^{1}V^{-1}]$", "$[W^{-1}F^{-1}V^{-1}]$", "$[W^{1}F^{-1}V^{-1}]$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Write the formula connecting Work, Force, and displacement ($s$): $W = F \\times s$.<br><b>Step 2:</b> We know that displacement $s = \\text{Velocity} (V) \\times \\text{Time} (T)$.<br><b>Step 3:</b> Substitute $s$ into the work equation: $W = F \\times (V \\times T)$.<br><b>Step 4:</b> Rearrange the equation to solve for Time (T): $T = \\frac{W}{F \\times V}$.<br><b>Step 5:</b> Express this in dimensional format: $[T] = [W^1 F^{-1} V^{-1}]$."
            },
            {
                "id": "UM-TEST-038",
                "topic": "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS",
                "difficulty": 2,
                "tags": ["Fundamental Quantities"],
                "q": "If force F, Length L and time T are chosen as fundamental quantities, the dimensional formula for Mass is:",
                "options": ["$[FLT]$", "$[F^{-1}L^{-1}T^{-2}]$", "$[F^{-2}L^{-2}T^{-2}]$", "$[F^{1}L^{-1}T^{2}]$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Write the standard dimensional formula for Force: $F = [MLT^{-2}]$.<br><b>Step 2:</b> We need to isolate Mass ($M$) on one side of the equation.<br><b>Step 3:</b> Divide both sides by $[LT^{-2}]$: $M = \\frac{F}{[LT^{-2}]}$.<br><b>Step 4:</b> Bring the terms to the numerator: $M = [F^1 L^{-1} T^2]$."
            },
            {
                "id": "UM-TEST-039",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 1,
                "tags": ["Combination of Errors", "Addition"],
                "q": "If $L=2.06\\text{ cm}\\pm 0.02\\text{ cm},$ $B=1.11\\text{ cm}\\pm 0.03\\text{ cm}$, then L+B equals to:",
                "options": ["$3.17\\text{ cm}\\pm 0.05\\text{ cm}$", "$2.06\\text{ cm}\\pm 0.05\\text{ cm}$", "$3.17\\text{ cm}\\pm 0.02\\text{ cm}$", "$3.17\\text{ cm}\\pm 0.03\\text{ cm}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> To add two measured quantities, simply add their central values: $X = L + B = 2.06 + 1.11 = 3.17\\text{ cm}$.<br><b>Step 2:</b> When adding quantities, their absolute errors are always added together to find the maximum possible error: $\\Delta X = \\Delta L + \\Delta B$.<br><b>Step 3:</b> $\\Delta X = 0.02 + 0.03 = 0.05\\text{ cm}$.<br><b>Step 4:</b> The final sum is $3.17\\text{ cm}\\pm 0.05\\text{ cm}$."
            },
            {
                "id": "UM-TEST-040",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 2,
                "tags": ["Percentage Error", "Powers"],
                "q": "The radius of sphere is measured as $(5.2\\pm 0.2)$ cm then the percentage error in volume of the ball is:",
                "options": ["11%", "4%", "7%", "9%"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The formula for the volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.<br><b>Step 2:</b> The relative error in volume is given by $\\frac{\\Delta V}{V} = 3 \\times \\frac{\\Delta r}{r}$.<br><b>Step 3:</b> The percentage error in radius $r$ is $\\frac{0.2}{5.2} \\times 100$.<br><b>Step 4:</b> Therefore, the percentage error in volume is $3 \\times \\left(\\frac{0.2}{5.2} \\times 100\\right) = \\frac{60}{5.2} \\approx 11.53\\%$.<br><b>Step 5:</b> 11% is the closest approximation among the given options."
            },
            {
                "id": "UM-TEST-041",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 1,
                "tags": ["Percentage Error"],
                "q": "If the length of a cylinder is measured to be 8.28 cm with an error of 0.01 cm then the percentage error in measured length is nearly:",
                "options": ["0.4%", "0.2%", "0.1%", "0.5%"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Percentage error is calculated using the formula: $\\left(\\frac{\\text{Absolute Error}}{\\text{True Value}}\\right) \\times 100$.<br><b>Step 2:</b> Substitute the given values: $\\frac{0.01}{8.28} \\times 100$.<br><b>Step 3:</b> This equals $\\frac{1}{8.28} \\approx 0.12\\%$.<br><b>Step 4:</b> The closest option is 0.1%."
            },
            {
                "id": "UM-TEST-042",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 2,
                "tags": ["Random Error", "Statistical Analysis"],
                "q": "A student performs experiment with simple pendulum and measures time for 10 vibrations. If he measures the time for 100 vibrations, the error in measurement of time period will be reduced by a factor of:",
                "options": ["10", "90", "100", "1000"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Random error in a measurement is inversely proportional to the number of observations ($N$) taken.<br><b>Step 2:</b> Therefore, Error $\\propto \\frac{1}{N}$.<br><b>Step 3:</b> If the number of observations increases from 10 to 100, the observations have increased by a factor of 10.<br><b>Step 4:</b> Consequently, the random error is reduced by the same factor of 10."
            },
            {
                "id": "UM-TEST-043",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 2,
                "tags": ["Combination of Errors", "Addition and Multiplication"],
                "q": "If $L_{1}=(3.03\\pm 0.02)$ m and $L_{2}=(2.01\\pm 0.02)$ m then $L_{1}+2L_{2}$ is (in m):",
                "options": ["$7.05\\pm 0.06$", "$6.05\\pm 0.06$", "$6.05\\pm 0.02$", "$7.05\\pm 0.02$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Calculate the central value for the expression $x = L_1 + 2L_2$.<br><b>Step 2:</b> $x = 3.03 + 2(2.01) = 3.03 + 4.02 = 7.05\\text{ m}$.<br><b>Step 3:</b> Calculate the absolute error. When multiplying by a constant, the absolute error is multiplied by that constant. Thus, $\\Delta x = \\Delta L_1 + 2\\Delta L_2$.<br><b>Step 4:</b> $\\Delta x = 0.02 + 2(0.02) = 0.02 + 0.04 = 0.06\\text{ m}$.<br><b>Step 5:</b> The final result is $7.05\\pm 0.06\\text{ m}$."
            },
            {
                "id": "UM-TEST-044",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 2,
                "tags": ["Combination of Errors", "Division"],
                "q": "A body travels uniformly a distance of $(13.8\\pm 0.2)$ m in a time $(4.0\\pm 0.3)$ s then the velocity of the body is:",
                "options": ["$(3.45\\pm 0.2)\\text{ ms}^{-1}$", "$(3.45\\pm 0.3)\\text{ ms}^{-1}$", "$(3.45\\pm 0.4)\\text{ ms}^{-1}$", "$(3.45\\pm 0.5)\\text{ ms}^{-1}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Calculate the central value for velocity: $v = \\frac{s}{t} = \\frac{13.8}{4.0} = 3.45\\text{ ms}^{-1}$.<br><b>Step 2:</b> For division, the relative errors add up: $\\frac{\\Delta v}{v} = \\frac{\\Delta s}{s} + \\frac{\\Delta t}{t}$.<br><b>Step 3:</b> $\\frac{\\Delta v}{3.45} = \\frac{0.2}{13.8} + \\frac{0.3}{4.0} \\approx 0.0145 + 0.075 = 0.0895$.<br><b>Step 4:</b> Calculate the absolute error: $\\Delta v = 3.45 \\times 0.0895 \\approx 0.308\\text{ ms}^{-1}$.<br><b>Step 5:</b> Rounding the error to one significant figure gives $0.3$. Therefore, velocity is $(3.45\\pm 0.3)\\text{ ms}^{-1}$."
            },
            {
                "id": "UM-TEST-045",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 2,
                "tags": ["Combination of Errors", "Division and Powers"],
                "q": "The pressure on a square plate is measured by measuring the force on the plate and the length of the sides of the plate. If the maximum error in measurement of force and length are respectively 4% and 2% then the maximum error in Measurement of pressure is:",
                "options": ["1%", "2%", "6%", "8%"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The formula for pressure is $P = \\frac{F}{A}$.<br><b>Step 2:</b> Since it is a square plate, Area $A = L^2$. Therefore, $P = \\frac{F}{L^2}$.<br><b>Step 3:</b> The percentage error formula for this expression is $\\frac{\\Delta P}{P}\\% = \\frac{\\Delta F}{F}\\% + 2 \\times \\frac{\\Delta L}{L}\\%$.<br><b>Step 4:</b> Substitute the given percentage errors: $\\%P = 4\\% + 2(2\\%)$.<br><b>Step 5:</b> $\\%P = 4\\% + 4\\% = 8\\%$."
            },
            {
                "id": "UM-TEST-046",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 2,
                "tags": ["Rounding Off"],
                "q": "2.34 is obtained by rounding off the number:",
                "options": ["2.346", "2.355", "2.335", "2.334"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Analyze the rounding rules for each option to see which results in 2.34.<br><b>Step 2:</b> Option 1: 2.346 rounds up to 2.35 (since $6 > 5$).<br><b>Step 3:</b> Option 2: 2.355 rounds up to 2.36 (since preceding digit 5 is odd).<br><b>Step 4:</b> Option 3: 2.335 ends in 5. The preceding digit is 3 (odd), so we round it up by 1. It becomes 2.34. This is the correct answer.<br><b>Step 5:</b> Option 4: 2.334 rounds down to 2.33 (since $4 < 5$)."
            },
            {
                "id": "UM-TEST-047",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 1,
                "tags": ["Rules for Zeros", "Significant Figures"],
                "q": "The number of significant figures in 0.0006032 is:",
                "options": ["7", "4", "5", "2"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Apply the rules of significant figures. Leading zeros (zeros to the left of the first non-zero digit) are never significant.<br><b>Step 2:</b> The leading zeros in '0.000' are placeholders.<br><b>Step 3:</b> The significant digits start from the first non-zero digit: 6, 0, 3, 2.<br><b>Step 4:</b> Zeros between non-zero digits (like the 0 between 6 and 3) are significant.<br><b>Step 5:</b> Therefore, there are exactly 4 significant figures."
            },
            {
                "id": "UM-TEST-048",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 2,
                "tags": ["Propagation of Precision", "Multiplication"],
                "q": "The radius of disc is 1.2 cm, its area according to idea of significant figures is:",
                "options": ["$4.5216\\text{ cm}^{2}$", "$4.521\\text{ cm}^{2}$", "$4.52\\text{ cm}^{2}$", "$4.5\\text{ cm}^{2}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The area of a disc (circle) is $A = \\pi r^2$.<br><b>Step 2:</b> Substitute the radius: $A = 3.14159... \\times (1.2)^2 = 3.14159... \\times 1.44 \\approx 4.5238...\\text{ cm}^2$.<br><b>Step 3:</b> In multiplication, the final result must be rounded to the same number of significant figures as the measurement with the least number of significant figures.<br><b>Step 4:</b> The measured radius (1.2) has exactly 2 significant figures.<br><b>Step 5:</b> Rounding 4.5238... to 2 significant figures yields $4.5\\text{ cm}^2$."
            },
            {
                "id": "UM-TEST-049",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 1,
                "tags": ["Unit Conversion", "Significant Figures"],
                "q": "When Energy is expressed in erg the no of significant figure is four. If it is expressed in joule the no of significant figures will become:",
                "options": ["9", "5", "1", "4"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The conversion between ergs and joules is a fixed exact constant ($1\\text{ Joule} = 10^7\\text{ ergs}$).<br><b>Step 2:</b> Multiplying or dividing by an exact mathematical constant does not change the precision or the number of significant figures of a measured physical quantity.<br><b>Step 3:</b> Therefore, the number of significant figures remains 4."
            },
            {
                "id": "UM-TEST-050",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 2,
                "tags": ["Roots", "Significant Figures"],
                "q": "$\\sqrt{58.97}$ is:",
                "options": ["7.679", "7.68", "7.6", "7.7"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Identify the number of significant figures in the given value. 58.97 has exactly 4 significant figures.<br><b>Step 2:</b> Calculate the mathematical square root: $\\sqrt{58.97} \\approx 7.679192...$<br><b>Step 3:</b> For roots, the result must be rounded to retain the same number of significant figures as the original number (which is 4).<br><b>Step 4:</b> Rounding 7.679192... to 4 significant figures gives 7.679."
            },
            {
                "id": "UM-TEST-051",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 2,
                "tags": ["Addition", "Propagation of Precision"],
                "q": "A stick has a length of 12.132 cm and another stick has a length of 12.4 cm then the total length of the stick is:",
                "options": ["24.53 cm", "24.5 cm", "2.45 cm", "2.453 cm"],
                "correct": 1,
                "sol": "<b>Step 1:</b> First, perform standard addition: $12.132 + 12.4 = 24.532\\text{ cm}$.<br><b>Step 2:</b> Apply the rule for addition: The final result must have the same number of decimal places as the number with the least decimal places.<br><b>Step 3:</b> 12.132 has three decimal places, while 12.4 has only one decimal place. Therefore, the result must be rounded to one decimal place.<br><b>Step 4:</b> Rounding 24.532 to one decimal place yields 24.5 cm."
            },
            {
                "id": "UM-TEST-052",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 1,
                "tags": ["Rules for Zeros", "Scientific Notation"],
                "q": "The respective number of significant figures for the number 23.023, 0.0003 and $21\\times 10^{3}$ are:",
                "options": ["5, 1, 2", "5, 1, 5", "5, 5, 2", "4, 4, 2"],
                "correct": 0,
                "sol": "<b>Step 1:</b> For 23.023: All non-zero digits and trapped zeros are significant. So, there are 5 significant figures.<br><b>Step 2:</b> For 0.0003: Leading zeros are not significant. Only the digit 3 is significant. So, there is 1 significant figure.<br><b>Step 3:</b> For $21\\times 10^3$: In scientific notation, only the coefficient dictates the significant figures. 21 has 2 significant figures.<br><b>Step 4:</b> The sequence is 5, 1, 2."
            },
            {
                "id": "UM-TEST-053",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 1,
                "tags": ["Scientific Notation"],
                "q": "The Number of significant figures in $5.69\\times 10^{15}$ kg is:",
                "options": ["1", "2", "3", "4"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The given number is in standard scientific notation $A \\times 10^B$.<br><b>Step 2:</b> The power of 10 ($10^{15}$) is an order of magnitude and does not affect the number of significant figures.<br><b>Step 3:</b> The significant figures are determined entirely by the coefficient 5.69.<br><b>Step 4:</b> 5, 6, and 9 are all non-zero digits, resulting in 3 significant figures."
            },
            {
                "id": "UM-TEST-054",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 2,
                "tags": ["Addition", "Propagation of Precision"],
                "q": "The value of 124.2 + 52.487 with due regard to significant places is:",
                "options": ["176.69", "176.7", "176", "177"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Perform the standard addition: $124.2 + 52.487 = 176.687$.<br><b>Step 2:</b> The rule for addition states that the result cannot have more decimal places than the measurement with the fewest decimal places.<br><b>Step 3:</b> 124.2 has one decimal place, while 52.487 has three. The answer must be rounded to one decimal place.<br><b>Step 4:</b> The digit after the first decimal place is 8, so round up the 6 to a 7. The result is 176.7."
            },
            {
                "id": "UM-TEST-055",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 2,
                "tags": ["Division", "Propagation of Precision"],
                "q": "The value of $\\frac{9.27}{41}$ with due regard to significant figures is:",
                "options": ["0.226", "0.23", "0.2", "0.2261"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Perform the standard division: $\\frac{9.27}{41} = 0.226097...$<br><b>Step 2:</b> The rule for division states that the result must have the same number of significant figures as the measurement with the fewest significant figures.<br><b>Step 3:</b> 9.27 has 3 significant figures. 41 has 2 significant figures. The final answer must be limited to 2 significant figures.<br><b>Step 4:</b> Rounding 0.226097... to 2 significant figures gives 0.23 (since $6 > 5$, round up the 2)."
            },
            {
                "id": "UM-TEST-056",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 2,
                "tags": ["Rounding Off"],
                "q": "When 57.986 is rounded off to 4 significant figures, then it becomes:",
                "options": ["58", "57.00", "57.90", "57.99"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The original number is 57.986. We need to keep only the first 4 significant digits.<br><b>Step 2:</b> The first four digits are 5, 7, 9, 8.<br><b>Step 3:</b> Look at the 5th digit to decide how to round. The 5th digit is 6.<br><b>Step 4:</b> Since $6 > 5$, we must round up the previous digit (8) by 1.<br><b>Step 5:</b> 8 becomes 9, making the rounded number 57.99."
            },
            {
                "id": "UM-TEST-057",
                "topic": "UNITS AND DIMENSIONAL FORMULAE",
                "difficulty": 2,
                "tags": ["Dimensional Formulae", "Pendulum"],
                "q": "If 'L' is length of simple pendulum and 'g' is acceleration due to gravity then the dimensional formula for $(l/g)^{1/2}$ is same as that for:",
                "options": ["Frequency", "Velocity", "Time period", "Wavelength"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Let's substitute the dimensional formulas for each quantity.<br><b>Step 2:</b> Length $l = [L]$ and acceleration due to gravity $g = [LT^{-2}]$.<br><b>Step 3:</b> $\\frac{l}{g} = \\frac{[L]}{[LT^{-2}]} = [T^2]$.<br><b>Step 4:</b> Taking the square root gives $\\left(\\frac{l}{g}\\right)^{1/2} = ([T^2])^{1/2} = [T]$.<br><b>Step 5:</b> $[T]$ is the dimensional formula for Time Period."
            },
            {
                "id": "UM-TEST-058",
                "topic": "UNITS AND DIMENSIONAL FORMULAE",
                "difficulty": 3,
                "tags": ["Algebraic Manipulation", "Dimensional Formulae"],
                "q": "The dimensional formula for the product of two physical quantities P and Q is $[L^{2}T^{-2}]$. The dimensional formula of $P/Q$ is $[T^{2}]$. The P and Q respectively are:",
                "options": ["distance and velocity", "distance and acceleration", "displacement and velocity", "displacement and force"],
                "correct": 1,
                "sol": "<b>Step 1:</b> We have two equations: $P \\cdot Q = [L^2T^{-2}]$ and $\\frac{P}{Q} = [T^2]$.<br><b>Step 2:</b> Multiply the two equations to isolate $P$: $(P \\cdot Q) \\times \\left(\\frac{P}{Q}\\right) = P^2 = [L^2T^{-2}] \\times [T^2] = [L^2]$.<br><b>Step 3:</b> Taking the square root gives $P = [L]$, which represents distance or displacement.<br><b>Step 4:</b> Divide the first equation by the second to isolate $Q$: $\\frac{P \\cdot Q}{P/Q} = Q^2 = \\frac{[L^2T^{-2}]}{[T^2]} = [L^2T^{-4}]$.<br><b>Step 5:</b> Taking the square root gives $Q = [LT^{-2}]$, which represents acceleration.<br><b>Step 6:</b> Therefore, P and Q are distance and acceleration, respectively."
            },
            {
                "id": "UM-TEST-059",
                "topic": "UNITS AND DIMENSIONAL FORMULAE",
                "difficulty": 2,
                "tags": ["Fundamental Quantities"],
                "q": "The fundamental physical quantities that have same dimensions in the dimensional formula of force and Energy are:",
                "options": ["mass, time", "time, length", "mass, length", "time, mole"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Write the standard dimensional formula for Force: $F = [M^1 L^1 T^{-2}]$.<br><b>Step 2:</b> Write the standard dimensional formula for Energy: $E = [M^1 L^2 T^{-2}]$.<br><b>Step 3:</b> Compare the powers of the fundamental quantities in both formulas.<br><b>Step 4:</b> Mass has a power of 1 in both. Time has a power of -2 in both. Length has a power of 1 in Force and 2 in Energy.<br><b>Step 5:</b> Therefore, mass and time share the exact same dimensions in both physical quantities."
            },
            {
                "id": "UM-TEST-060",
                "topic": "UNITS AND DIMENSIONAL FORMULAE",
                "difficulty": 3,
                "tags": ["Rigidity Modulus", "Moment of Couple", "Dimensional Formulae"],
                "q": "If $\\eta$ is rigidity modulus, r is the radius, l is the length and C is the moment of the couple then $\\frac{2lc}{\\pi \\eta r^{4}}$ has the dimensions of:",
                "options": ["Angle", "Mass", "Length", "Frequency"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Find the dimensions of each variable. Modulus of rigidity $\\eta = \\frac{\\text{Force}}{\\text{Area}} = [ML^{-1}T^{-2}]$.<br><b>Step 2:</b> Moment of a couple $C = \\text{Force} \\times \\text{distance} = [ML^2T^{-2}]$.<br><b>Step 3:</b> Length $l = [L]$ and Radius $r = [L]$. Constants 2 and $\\pi$ are dimensionless.<br><b>Step 4:</b> Substitute these into the given expression: $\\frac{[L] \\times [ML^2T^{-2}]}{[ML^{-1}T^{-2}] \\times [L]^4}$.<br><b>Step 5:</b> Simplify the numerator: $[ML^3T^{-2}]$. Simplify the denominator: $[ML^3T^{-2}]$.<br><b>Step 6:</b> The ratio is $1$, meaning it is a dimensionless quantity $[M^0L^0T^0]$. Angle is a dimensionless physical quantity."
            },
            {
                "id": "UM-TEST-061",
                "topic": "PRINCIPLE OF HOMOGENEITY",
                "difficulty": 2,
                "tags": ["Dimensional Analysis", "Kinematics"],
                "q": "The acceleration of an object varies with time as $a=AT^2+BT+C$. Taking the unit of time as 1 sec and acceleration as $ms^{-2}$, then the units of A, B, C respectively are:",
                "options": ["$ms^{-3}$, $ms^{-2}$, $ms^{-1}$", "$ms^{-2}$, $ms^{-1}$, ms", "$ms^{-1}$, $ms^{-2}$, $ms^{-3}$", "$ms^{-4}$, $ms^{-3}$, $ms^{-2}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> According to the principle of homogeneity, each term in the equation must have the dimensions of acceleration $[LT^{-2}]$.<br><b>Step 2:</b> For the first term: $A \\times T^2 = [LT^{-2}] \\implies A = [LT^{-4}]$, which has units $ms^{-4}$.<br><b>Step 3:</b> For the second term: $B \\times T = [LT^{-2}] \\implies B = [LT^{-3}]$, which has units $ms^{-3}$.<br><b>Step 4:</b> For the third term: $C = [LT^{-2}]$, which has units $ms^{-2}$.<br><b>Step 5:</b> The units are respectively $ms^{-4}$, $ms^{-3}$, $ms^{-2}$."
            },
            {
                "id": "UM-TEST-062",
                "topic": "PRINCIPLE OF HOMOGENEITY",
                "difficulty": 3,
                "tags": ["Dimensional Formulae", "Logarithmic Functions"],
                "q": "If $\\eta=\\frac{A}{B}\\log(Bx+C)$ is dimensionally true, then (here $\\eta$ is the coefficient of viscosity and x is the distance):",
                "options": ["C is dimensionless constant", "B has dimensions of -1 in length", "The dimensional formula of A is $ML^{-2}T^{-1}$", "All are true"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The argument of any logarithmic function must be dimensionless. Thus, both $Bx$ and $C$ must be dimensionless.<br><b>Step 2:</b> Since $C$ is dimensionless, the first option is true.<br><b>Step 3:</b> Since $Bx$ is dimensionless and $x$ is length $[L]$, $B$ must have dimensions $[L^{-1}]$. The second option is true.<br><b>Step 4:</b> The logarithm itself is dimensionless, so $\\frac{A}{B}$ must have the same dimensions as $\\eta$ $[ML^{-1}T^{-1}]$.<br><b>Step 5:</b> $A = \\eta \\times B = [ML^{-1}T^{-1}] \\times [L^{-1}] = [ML^{-2}T^{-1}]$. The third option is true. Therefore, all statements are true."
            },
            {
                "id": "UM-TEST-063",
                "topic": "PRINCIPLE OF HOMOGENEITY",
                "difficulty": 2,
                "tags": ["Dimensional Analysis", "Velocity"],
                "q": "If the velocity (V) of a body in time 't' is given by $V=AT^3+BT^2+CT+D$ then the dimensions of C are:",
                "options": ["$[LT^{-1}]$", "$[LT^{-2}]$", "$[LT^{-3}]$", "$[LT^{-4}]$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> By the principle of dimensional homogeneity, every added term must share the exact dimensions of the LHS.<br><b>Step 2:</b> The LHS is velocity, which has the dimensional formula $V = [LT^{-1}]$.<br><b>Step 3:</b> Therefore, the term $CT$ must also have dimensions $[LT^{-1}]$.<br><b>Step 4:</b> $C \\times [T] = [LT^{-1}] \\implies C = \\frac{[LT^{-1}]}{[T]} = [LT^{-2}]$."
            },
            {
                "id": "UM-TEST-064",
                "topic": "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS",
                "difficulty": 3,
                "tags": ["Poiseuille's Formula", "Dimensional Analysis"],
                "q": "In the relation $V=\\frac{\\pi p r^4}{8\\eta l}$ where the letters have their usual meanings, the dimensions of V are:",
                "options": ["$M^{0}L^{3}T^{0}$", "$M^{0}L^{3}T^{-1}$", "$M^{0}L^{-3}T^{-1}$", "$M^{1}L^{3}T^{0}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Identify the dimensions of the known variables: Pressure $p = [ML^{-1}T^{-2}]$, radius $r = [L]$, viscosity $\\eta = [ML^{-1}T^{-1}]$, and length $l = [L]$. Constants $\\pi$ and 8 are dimensionless.<br><b>Step 2:</b> Substitute these into the right side of the equation: $\\frac{[ML^{-1}T^{-2}] \\times [L^4]}{[ML^{-1}T^{-1}] \\times [L]}$.<br><b>Step 3:</b> Simplify the numerator to $[ML^3T^{-2}]$ and the denominator to $[MT^{-1}]$.<br><b>Step 4:</b> Divide to get the final dimension: $\\frac{[ML^3T^{-2}]}{[MT^{-1}]} = [L^3T^{-1}]$.<br><b>Step 5:</b> Adding $M^0$ gives the final format: $M^{0}L^{3}T^{-1}$ (which represents volume flow rate)."
            },
            {
                "id": "UM-TEST-065",
                "topic": "CONVERSION OF UNITS",
                "difficulty": 2,
                "tags": ["Acceleration", "Unit Conversion"],
                "q": "If the acceleration due to gravity is $10\\text{ ms}^{-2}$ and the units of length and time are changed to kilometre and hour respectively, the numerical value of acceleration is:",
                "options": ["36000", "72000", "36000", "129600"],
                "correct": 3,
                "sol": "<b>Step 1:</b> We need to convert $10\\text{ m/s}^2$ into $\\text{km/hr}^2$.<br><b>Step 2:</b> Convert meters to kilometers: $1\\text{ m} = 10^{-3}\\text{ km}$.<br><b>Step 3:</b> Convert seconds squared to hours squared: $1\\text{ s} = \\frac{1}{3600}\\text{ hr}$, so $1\\text{ s}^2 = \\left(\\frac{1}{3600}\\right)^2\\text{ hr}^2$.<br><b>Step 4:</b> Substitute into the original value: $10 \\times \\frac{10^{-3}}{\\left(\\frac{1}{3600}\\right)^2}$.<br><b>Step 5:</b> Simplify: $10 \\times 10^{-3} \\times (3600)^2 = 0.01 \\times 12,960,000 = 129,600\\text{ km/hr}^2$."
            },
            {
                "id": "UM-TEST-066",
                "topic": "CONVERSION OF UNITS",
                "difficulty": 3,
                "tags": ["Unit Conversion", "Energy"],
                "q": "The magnitude of Energy is 100J. What will be its value if the units of mass and time are doubled and that of length is halved?",
                "options": ["100 J", "200 J", "400 J", "800 J"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The dimensional formula for energy is $E = [ML^2T^{-2}]$.<br><b>Step 2:</b> Using the conversion formula $n_2 = n_1 \\left(\\frac{M_1}{M_2}\\right)^a \\left(\\frac{L_1}{L_2}\\right)^b \\left(\\frac{T_1}{T_2}\\right)^c$.<br><b>Step 3:</b> Substitute the new unit relationships: $M_2 = 2M_1$, $L_2 = L_1/2$, and $T_2 = 2T_1$.<br><b>Step 4:</b> $n_2 = 100 \\times \\left(\\frac{M_1}{2M_1}\\right)^1 \\times \\left(\\frac{L_1}{L_1/2}\\right)^2 \\times \\left(\\frac{T_1}{2T_1}\\right)^{-2}$.<br><b>Step 5:</b> $n_2 = 100 \\times \\left(\\frac{1}{2}\\right) \\times (2)^2 \\times \\left(\\frac{1}{2}\\right)^{-2} = 100 \\times \\frac{1}{2} \\times 4 \\times 4 = 100 \\times 8 = 800$."
            },
            {
                "id": "UM-TEST-067",
                "topic": "CONVERSION OF UNITS",
                "difficulty": 2,
                "tags": ["Momentum", "Percentage Change"],
                "q": "If the units of mass and velocity are increased by two times then the unit of momentum will be increased by:",
                "options": ["400%", "200%", "300%", "100%"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The dimensional formula for momentum is $P = M \\times v$.<br><b>Step 2:</b> If the new units are $M' = 2M$ and $v' = 2v$, the new unit of momentum is $P' = (2M)(2v) = 4Mv = 4P$.<br><b>Step 3:</b> The absolute increase in the unit is $\\Delta P = P' - P = 4P - P = 3P$.<br><b>Step 4:</b> The percentage increase is $\\left(\\frac{\\Delta P}{P}\\right) \\times 100 = \\left(\\frac{3P}{P}\\right) \\times 100 = 300\\%$."
            },
            {
                "id": "UM-TEST-068",
                "topic": "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS",
                "difficulty": 2,
                "tags": ["Kinematics", "Equation Substitution"],
                "q": "The initial velocity of a particle is given by $u^2=v^2-2gx$ where x is the distance covered. If $u=18\\text{ km h}^{-1}$, $g=1000\\text{ cm/s}^2$ and $x =150\\text{ cm}$ then $v=\\_\\_\\_\\_\\text{ m/s}$:",
                "options": ["$\\sqrt{45}$", "$\\sqrt{55}$", "$\\sqrt{35}$", "$\\sqrt{65}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Rearrange the equation to solve for final velocity: $v^2 = u^2 + 2gx$.<br><b>Step 2:</b> Convert all given values to standard SI units (meters and seconds).<br><b>Step 3:</b> $u = 18\\text{ km/h} = 18 \\times \\frac{5}{18} = 5\\text{ m/s}$.<br><b>Step 4:</b> $g = 1000\\text{ cm/s}^2 = 10\\text{ m/s}^2$. Distance $x = 150\\text{ cm} = 1.5\\text{ m}$.<br><b>Step 5:</b> Substitute into the equation: $v^2 = 5^2 + 2(10)(1.5) = 25 + 30 = 55$.<br><b>Step 6:</b> Therefore, $v = \\sqrt{55}\\text{ m/s}$."
            },
            {
                "id": "UM-TEST-069",
                "topic": "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS",
                "difficulty": 1,
                "tags": ["Principle of Homogeneity", "Kinematics"],
                "q": "The equation which is dimensionally correct among the following is:",
                "options": ["$v=u+\\frac{1}{2}at$", "$v=ut+at$", "$s=ut+at^3$", "$t=s+av$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Check the first option: $v = u + \\frac{1}{2}at$.<br><b>Step 2:</b> The dimension of LHS ($v$) is $[LT^{-1}]$.<br><b>Step 3:</b> The dimension of the first RHS term ($u$) is $[LT^{-1}]$.<br><b>Step 4:</b> The dimension of the second RHS term ($\\frac{1}{2}at$) is $[LT^{-2}] \\times [T] = [LT^{-1}]$. The constant $\\frac{1}{2}$ is dimensionless.<br><b>Step 5:</b> Since all terms share the exact same dimensional formula $[LT^{-1}]$, the equation is dimensionally correct."
            },
            {
                "id": "UM-TEST-070",
                "topic": "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS",
                "difficulty": 2,
                "tags": ["Dimensional Analysis", "Fluid Velocity"],
                "q": "The dimensions of $\\gamma$ in the relation $v=\\sqrt{\\frac{\\gamma p}{\\rho}}$ (where v is velocity, p is pressure, $\\rho$ is density):",
                "options": ["Dimensionless", "$[LT^{-1}]$", "$[ML^{-1}T^{-2}]$", "$[ML^3]$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Square both sides of the equation to isolate $\\gamma$: $v^2 = \\frac{\\gamma p}{\\rho}$.<br><b>Step 2:</b> Rearrange for $\\gamma$: $\\gamma = \\frac{v^2 \\rho}{p}$.<br><b>Step 3:</b> Substitute the dimensional formulas for velocity ($[LT^{-1}]$), density ($[ML^{-3}]$), and pressure ($[ML^{-1}T^{-2}]$).<br><b>Step 4:</b> $\\gamma = \\frac{[L^2T^{-2}] \\times [ML^{-3}]}{[ML^{-1}T^{-2}]}$.<br><b>Step 5:</b> Simplify the numerator to $[ML^{-1}T^{-2}]$.<br><b>Step 6:</b> $\\gamma = \\frac{[ML^{-1}T^{-2}]}{[ML^{-1}T^{-2}]} = 1$. Thus, $\\gamma$ is a dimensionless constant."
            },
            {
                "id": "UM-TEST-071",
                "topic": "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS",
                "difficulty": 3,
                "tags": ["Fundamental Quantities", "Momentum"],
                "q": "Taking frequency f, velocity (v) and Density ($\\rho$) to be the fundamental quantities then the Dimensional formula for momentum will be:",
                "options": ["$(\\rho v^4 f^{-3})$", "$(\\rho v^3 f^{-1})$", "$(\\rho v f^2)$", "$(\\rho^2 v^2 f^2)$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The standard dimensional formula for momentum is $p = [MLT^{-1}]$. We need to express this as $p \\propto \\rho^a v^b f^c$.<br><b>Step 2:</b> Substitute the standard dimensions for the new base quantities: $\\rho = [ML^{-3}]$, $v = [LT^{-1}]$, $f = [T^{-1}]$.<br><b>Step 3:</b> $[MLT^{-1}] = [ML^{-3}]^a \\times [LT^{-1}]^b \\times [T^{-1}]^c = [M^a L^{-3a+b} T^{-b-c}]$.<br><b>Step 4:</b> Equate the powers of M: $a = 1$.<br><b>Step 5:</b> Equate the powers of L: $-3a + b = 1 \\implies -3(1) + b = 1 \\implies b = 4$.<br><b>Step 6:</b> Equate the powers of T: $-b - c = -1 \\implies -4 - c = -1 \\implies c = -3$.<br><b>Step 7:</b> The formula is $\\rho^1 v^4 f^{-3}$."
            },
            {
                "id": "UM-TEST-072",
                "topic": "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS",
                "difficulty": 2,
                "tags": ["Fundamental Quantities", "Length"],
                "q": "If momentum (p), Mass (M), Time (T) are chosen as fundamental quantities then the dimensional formula for length is:",
                "options": ["$(P^1T^1M^1)$", "$(P^1T^1M^2)$", "$(P^1T^1M^{-1})$", "$(P^2T^2M^1)$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The standard formula connecting these quantities is momentum $p = \\text{Mass} (M) \\times \\text{velocity} (v)$.<br><b>Step 2:</b> Velocity is defined as $\\text{Length} (L) / \\text{Time} (T)$.<br><b>Step 3:</b> Substitute velocity into the momentum equation: $p = M \\times \\frac{L}{T}$.<br><b>Step 4:</b> Rearrange the equation to solve for Length (L): $L = \\frac{p \\times T}{M}$.<br><b>Step 5:</b> Express this in standard dimensional format: $L = [P^1 T^1 M^{-1}]$."
            },
            {
                "id": "UM-TEST-073",
                "topic": "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS",
                "difficulty": 2,
                "tags": ["Fundamental Quantities", "Force"],
                "q": "If pressure (P), velocity (V) and time (T) are taken as the fundamental quantities, then the dimensional formula of force is:",
                "options": ["$[P^1 V^1 T^1]$", "$[P^1 V^2 T^1]$", "$[P^1 V^1 T^2]$", "$[P^1 V^2 T^2]$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Write the standard relationship between Force, Pressure, and Area: $F = P \\times A$.<br><b>Step 2:</b> Area is $L^2$. We must express Length (L) in terms of the given fundamental quantities.<br><b>Step 3:</b> Since Velocity $V = L / T$, we know $L = V \\times T$.<br><b>Step 4:</b> Substitute $L$ into the Area formula: $A = (V \\times T)^2 = V^2 T^2$.<br><b>Step 5:</b> Substitute Area back into the Force equation: $F = P \\times V^2 T^2$.<br><b>Step 6:</b> The dimensional formula is $[P^1 V^2 T^2]$."
            },
            {
                "id": "UM-TEST-074",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 2,
                "tags": ["Combination of Errors", "Simple Pendulum"],
                "q": "The error in the measurement of the length of the simple pendulum is 0.2% and the error in time period 4%. The maximum possible error in measurement of $\\frac{L}{T^2}$ is:",
                "options": ["4.2%", "3.8%", "7.8%", "8.2%"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Let the physical quantity be $x = \\frac{L}{T^2}$.<br><b>Step 2:</b> The formula for maximum percentage error in a quotient with powers is $\\frac{\\Delta x}{x}\\% = \\frac{\\Delta L}{L}\\% + 2 \\times \\frac{\\Delta T}{T}\\%$.<br><b>Step 3:</b> Substitute the given percentage errors: $\\%x = 0.2\\% + 2(4\\%)$.<br><b>Step 4:</b> $\\%x = 0.2\\% + 8\\% = 8.2\\%$."
            },
            {
                "id": "UM-TEST-075",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 1,
                "tags": ["Scientific Notation", "Significant Figures"],
                "q": "The velocity of light in vacuum is 30 crore m/s. This is expressed in standard form up to 3 significant figures as:",
                "options": ["$0.003 \\times 10^{11}\\text{ m/s}$", "$300 \\times 10^6\\text{ m/s}$", "$3.00 \\times 10^8\\text{ m/s}$", "$0.030 \\times 10^{10}\\text{ m/s}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Write the numerical value of 30 crore in standard numbers: $30,000,0000$ m/s, which is $3 \\times 10^8$ m/s.<br><b>Step 2:</b> Standard scientific notation requires a single non-zero digit before the decimal point ($A \\times 10^B$ where $1 \\le A < 10$).<br><b>Step 3:</b> To express this value with exactly 3 significant figures, we must add two trailing zeros after the decimal point.<br><b>Step 4:</b> The correct standard form is $3.00 \\times 10^8\\text{ m/s}$."
            },
            {
                "id": "UM-TEST-076",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 2,
                "tags": ["Percentage Error", "Time Period"],
                "q": "The least count of a stop watch is $(1/5)$ s. The time of 20 oscillations of a pendulum is measured to be 25 s. The maximum percentage error in this measurement is:",
                "options": ["8%", "1%", "0.8%", "16%"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The least count is the absolute error in the measurement. So, $\\Delta t = 1/5 = 0.2$ s.<br><b>Step 2:</b> The measured time is $t = 25$ s.<br><b>Step 3:</b> The formula for percentage error is $\\left(\\frac{\\Delta t}{t}\\right) \\times 100$.<br><b>Step 4:</b> Substitute the values: $\\left(\\frac{0.2}{25}\\right) \\times 100$.<br><b>Step 5:</b> Simplify: $0.2 \\times 4 = 0.8\\%$."
            },
            {
                "id": "UM-TEST-077",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 1,
                "tags": ["Absolute Error", "Mean Value"],
                "q": "The diameter of a wire as measured by a screw gauge was found to be 1.002 cm, 1.004 cm and 1.006 cm. The absolute error in the third reading is:",
                "options": ["0.002 cm", "0.004 cm", "1.002 cm", "zero"],
                "correct": 0,
                "sol": "<b>Step 1:</b> First, find the true value by calculating the mean of all readings.<br><b>Step 2:</b> Mean $d_{m} = \\frac{1.002 + 1.004 + 1.006}{3} = \\frac{3.012}{3} = 1.004$ cm.<br><b>Step 3:</b> The absolute error in any reading is the magnitude of the difference between the true value and that specific reading: $\\Delta d_3 = |d_m - d_3|$.<br><b>Step 4:</b> $\\Delta d_3 = |1.004 - 1.006| = |-0.002| = 0.002$ cm."
            },
            {
                "id": "UM-TEST-078",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 3,
                "tags": ["Combination of Errors", "Division"],
                "q": "Force and area are measured as 20 N and $5\\text{ m}^{2}$ with errors 0.05 N and $0.0125\\text{ m}^{2}$. The maximum error in pressure is (SI unit):",
                "options": ["$4\\pm 0.0625$", "$4\\pm 0.05$", "$4\\pm 0.125$", "$4\\pm 0.02$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Calculate the central value of pressure: $P = \\frac{F}{A} = \\frac{20}{5} = 4\\text{ N/m}^2$.<br><b>Step 2:</b> The relative error for division is $\\frac{\\Delta P}{P} = \\frac{\\Delta F}{F} + \\frac{\\Delta A}{A}$.<br><b>Step 3:</b> Substitute the values: $\\frac{\\Delta P}{4} = \\frac{0.05}{20} + \\frac{0.0125}{5}$.<br><b>Step 4:</b> $\\frac{\\Delta P}{4} = 0.0025 + 0.0025 = 0.005$.<br><b>Step 5:</b> Absolute error $\\Delta P = 4 \\times 0.005 = 0.02$. Thus, $P = 4\\pm 0.02$."
            },
            {
                "id": "UM-TEST-079",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 2,
                "tags": ["Relative Error", "Percentage Error", "Multiplication"],
                "q": "The length and breadth of a rectangular object are 25.2cm and 16.8cm respectively and have been measured to an accuracy of 0.1cm. Relative error and percentage error in the area of the object are:",
                "options": ["0.01 & 1%", "0.02 & 2%", "0.03 & 3%", "0.04 & 4%"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The area is $A = L \\times B$. Relative error is $\\frac{\\Delta A}{A} = \\frac{\\Delta L}{L} + \\frac{\\Delta B}{B}$.<br><b>Step 2:</b> The accuracy of 0.1 cm is the absolute error for both ($\\Delta L = 0.1$, $\\Delta B = 0.1$).<br><b>Step 3:</b> $\\frac{\\Delta A}{A} = \\frac{0.1}{25.2} + \\frac{0.1}{16.8} \\approx 0.003968 + 0.005952 = 0.00992$.<br><b>Step 4:</b> Rounding to the appropriate significant figures gives a relative error of approximately $0.01$.<br><b>Step 5:</b> Percentage error is Relative Error $\\times 100 = 0.01 \\times 100 = 1\\%$."
            },
            {
                "id": "UM-TEST-080",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 2,
                "tags": ["Multiplication", "Volume", "Significant Figures"],
                "q": "The length, breadth and thickness of a rectangular lamina are 1.024 m, 0.56 m, and 0.0031 m. The volume is:",
                "options": ["$1.8\\times 10^{-3}\\text{ m}^3$", "$1.80\\times 10^{-3}\\text{ m}^3$", "$0.180\\times 10^{-4}\\text{ m}^3$", "$0.00177\\text{ m}^3$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Calculate the mathematical volume: $V = L \\times B \\times H = 1.024 \\times 0.56 \\times 0.0031 = 0.00177779...\\text{ m}^3$.<br><b>Step 2:</b> In multiplication, the final result must have the same number of significant figures as the measurement with the fewest significant figures.<br><b>Step 3:</b> 1.024 has 4 sig figs, 0.56 has 2 sig figs, and 0.0031 has 2 sig figs. The result must be rounded to 2 significant figures.<br><b>Step 4:</b> Rounding 0.001777... to two significant figures yields 0.0018.<br><b>Step 5:</b> In scientific notation, this is $1.8\\times 10^{-3}\\text{ m}^3$."
            },
            {
                "id": "UM-TEST-081",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 1,
                "tags": ["Combination of Errors", "Subtraction"],
                "q": "The initial and final temperatures of a liquid are measured to be $(67.7\\pm 0.2)^{\\circ}\\text{C}$ and $(76.3\\pm 0.3)^{\\circ}\\text{C}$. The rise in temperature with error limit is:",
                "options": ["$(8.6\\pm 0.2)^{\\circ}\\text{C}$", "$(8.6\\pm 0.3)^{\\circ}\\text{C}$", "$(8.6\\pm 0.5)^{\\circ}\\text{C}$", "$(8.6\\pm 0.6)^{\\circ}\\text{C}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The rise in temperature is the difference: $\\Delta T = T_{final} - T_{initial} = 76.3 - 67.7 = 8.6^{\\circ}\\text{C}$.<br><b>Step 2:</b> The rule for errors in addition and subtraction is that absolute errors always add up to give the maximum possible error.<br><b>Step 3:</b> Total error $= 0.2 + 0.3 = 0.5^{\\circ}\\text{C}$.<br><b>Step 4:</b> The result is $(8.6\\pm 0.5)^{\\circ}\\text{C}$."
            },
            {
                "id": "UM-TEST-082",
                "topic": "UNITS AND DIMENSIONAL FORMULAE",
                "difficulty": 2,
                "tags": ["Fundamental Units", "Momentum Ratio"],
                "q": "If the ratio of fundamental units in two systems is 1:3, then the ratio of momenta in the two systems is:",
                "options": ["1:3", "1:9", "1:27", "3:1"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The dimensional formula for momentum is $P = [MLT^{-1}]$.<br><b>Step 2:</b> We are given the ratio of all fundamental units: $\\frac{M_1}{M_2} = \\frac{1}{3}$, $\\frac{L_1}{L_2} = \\frac{1}{3}$, and $\\frac{T_1}{T_2} = \\frac{1}{3}$.<br><b>Step 3:</b> The ratio of momenta is $\\frac{P_1}{P_2} = \\left(\\frac{M_1}{M_2}\\right)^1 \\left(\\frac{L_1}{L_2}\\right)^1 \\left(\\frac{T_1}{T_2}\\right)^{-1}$.<br><b>Step 4:</b> Substitute the ratios: $\\frac{P_1}{P_2} = \\left(\\frac{1}{3}\\right) \\times \\left(\\frac{1}{3}\\right) \\times \\left(\\frac{1}{3}\\right)^{-1}$.<br><b>Step 5:</b> Simplify: $\\frac{P_1}{P_2} = \\left(\\frac{1}{9}\\right) \\times 3 = \\frac{3}{9} = \\frac{1}{3}$."
            },
            {
                "id": "UM-TEST-083",
                "topic": "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS",
                "difficulty": 3,
                "tags": ["Dimensional Analysis", "Fluid Mechanics"],
                "q": "The velocity of the waves on the surface of water is proportional to $\\lambda^{\\alpha}\\rho^{\\beta}g^{\\gamma}$ where $\\lambda$ = wave length, $\\rho$ = density and g = acceleration due to gravity. Which of the following relation is correct?",
                "options": ["$\\alpha=\\beta\\ne\\gamma$", "$\\beta=\\gamma\\ne\\alpha$", "$\\gamma=\\alpha\\ne\\beta$", "$\\alpha\\ne\\beta\\ne\\gamma$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Write the dimensional formulas for each quantity. Velocity $v = [LT^{-1}]$, Wavelength $\\lambda = [L]$, Density $\\rho = [ML^{-3}]$, Gravity $g = [LT^{-2}]$.<br><b>Step 2:</b> Apply the principle of homogeneity: $[LT^{-1}] = [L]^{\\alpha} [ML^{-3}]^{\\beta} [LT^{-2}]^{\\gamma}$.<br><b>Step 3:</b> Combine the right side: $[M^0 L^1 T^{-1}] = [M^{\\beta} L^{\\alpha - 3\\beta + \\gamma} T^{-2\\gamma}]$.<br><b>Step 4:</b> Equate powers of M: $\\beta = 0$.<br><b>Step 5:</b> Equate powers of T: $-2\\gamma = -1 \\implies \\gamma = 1/2$.<br><b>Step 6:</b> Equate powers of L: $\\alpha - 3\\beta + \\gamma = 1 \\implies \\alpha - 0 + 1/2 = 1 \\implies \\alpha = 1/2$.<br><b>Step 7:</b> Since $\\alpha = 1/2$, $\\gamma = 1/2$, and $\\beta = 0$, we conclude that $\\gamma = \\alpha \\ne \\beta$."
            },
            {
                "id": "UM-TEST-084",
                "topic": "PRINCIPLE OF HOMOGENEITY",
                "difficulty": 3,
                "tags": ["Dimensional Analysis", "Work"],
                "q": "The work done 'w' by a body varies with displacement 'x' as $w=Ax+\\frac{B}{(C-x)^{2}}$. The dimensional formula for 'B' is:",
                "options": ["$[MLT^{-2}]$", "$[ML^4T^{-2}]$", "$[ML^2T^{-2}]$", "$[ML^2T^{-4}]$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> According to the principle of homogeneity, only quantities with the same dimensions can be added or subtracted. Thus, $C$ must have the same dimension as $x$, which is $[L]$.<br><b>Step 2:</b> The denominator $(C-x)^2$ therefore has the dimensions $[L]^2 = [L^2]$.<br><b>Step 3:</b> By homogeneity, the entire term $\\frac{B}{(C-x)^2}$ must have the same dimensions as work $w$, which is $[ML^2T^{-2}]$.<br><b>Step 4:</b> Therefore, $\\frac{B}{[L^2]} = [ML^2T^{-2}]$.<br><b>Step 5:</b> Cross-multiply to find B: $B = [ML^2T^{-2}] \\times [L^2] = [ML^4T^{-2}]$."
            },
            {
                "id": "UM-TEST-085",
                "topic": "CONVERSION OF UNITS",
                "difficulty": 3,
                "tags": ["Unit Conversion", "Energy"],
                "q": "If the units of mass, time and length are 100 g, 20 cm and 1 minute respectively, the equivalent energy for 1000 erg in the new system will be:",
                "options": ["90", "900", "$2\\times 10^6$", "300"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Energy has the dimensional formula $E = [ML^2T^{-2}]$.<br><b>Step 2:</b> 1000 ergs implies the initial CGS values: $M_1 = 1\\text{ g}$, $L_1 = 1\\text{ cm}$, $T_1 = 1\\text{ s}$, and $n_1 = 1000$.<br><b>Step 3:</b> The new units are $M_2 = 100\\text{ g}$, $L_2 = 20\\text{ cm}$, $T_2 = 60\\text{ s}$ (1 minute).<br><b>Step 4:</b> Use the formula $n_2 = n_1 \\left(\\frac{M_1}{M_2}\\right) \\left(\\frac{L_1}{L_2}\\right)^2 \\left(\\frac{T_1}{T_2}\\right)^{-2}$.<br><b>Step 5:</b> $n_2 = 1000 \\times \\left(\\frac{1}{100}\\right) \\times \\left(\\frac{1}{20}\\right)^2 \\times \\left(\\frac{1}{60}\\right)^{-2} = 10 \\times \\left(\\frac{1}{400}\\right) \\times 3600$.<br><b>Step 6:</b> $n_2 = \\frac{36000}{400} = 90$."
            },
            {
                "id": "UM-TEST-086",
                "topic": "CONVERSION OF UNITS",
                "difficulty": 2,
                "tags": ["Planck's Constant", "Unit Conversion"],
                "q": "The ratio of SI unit to the CGS unit of planck's constant is:",
                "options": ["$10^{7}:1$", "$10^{4}:1$", "$10^{6}:1$", "1:1"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The dimensional formula for Planck's constant ($h$) is $[ML^2T^{-1}]$.<br><b>Step 2:</b> The SI unit is $\\text{kg}\\cdot\\text{m}^2/\\text{s}$ (or Joule-seconds), and the CGS unit is $\\text{g}\\cdot\\text{cm}^2/\\text{s}$ (or erg-seconds).<br><b>Step 3:</b> Convert the SI unit to CGS: $1\\text{ kg} = 10^3\\text{ g}$ and $1\\text{ m} = 10^2\\text{ cm}$.<br><b>Step 4:</b> Substitute into the dimensional formula: $(10^3\\text{ g}) \\times (10^2\\text{ cm})^2 \\times (1\\text{ s})^{-1} = 10^3 \\times 10^4 = 10^7\\text{ g}\\cdot\\text{cm}^2/\\text{s}$.<br><b>Step 5:</b> Thus, 1 SI unit $= 10^7$ CGS units, making the ratio $10^7:1$."
            },
            {
                "id": "UM-TEST-087",
                "topic": "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS",
                "difficulty": 3,
                "tags": ["Dimensional Analysis", "Viscosity"],
                "q": "The velocity of a spherical ball through a viscous liquid is given by $v=v_{0}(1-e^{kt})$, where v is the initial velocity and t represents time. If k depends on radius of ball (r), coefficient of viscosity ($\\eta$) and mass of the ball (m), then:",
                "options": ["$k=mr/\\eta$", "$k=\\eta m/r$", "$k=r\\eta/m$", "$k=mr\\eta$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The exponent of the natural exponential function ($e^{kt}$) must be dimensionless. Thus, the dimension of $k$ must be $[T^{-1}]$.<br><b>Step 2:</b> We assume $k = C \\cdot r^a \\eta^b m^c$. Substitute dimensional formulas: Radius $r = [L]$, Viscosity $\\eta = [ML^{-1}T^{-1}]$, Mass $m = [M]$.<br><b>Step 3:</b> $[T^{-1}] = [L]^a [ML^{-1}T^{-1}]^b [M]^c = M^{b+c} L^{a-b} T^{-b}$.<br><b>Step 4:</b> Equate powers of T: $-b = -1 \\implies b = 1$.<br><b>Step 5:</b> Equate powers of M: $b + c = 0 \\implies 1 + c = 0 \\implies c = -1$.<br><b>Step 6:</b> Equate powers of L: $a - b = 0 \\implies a - 1 = 0 \\implies a = 1$.<br><b>Step 7:</b> Therefore, $k \\propto r^1 \\eta^1 m^{-1} = \\frac{r\\eta}{m}$."
            },
            {
                "id": "UM-TEST-088",
                "topic": "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS",
                "difficulty": 3,
                "tags": ["Dimensional Analysis", "Algebraic Exponents"],
                "q": "For the equation $F=A^{a}v^{b}d^{c}$ where F is force, A is area, v is velocity and d is density, the dimensional analysis gives the following values for the exponents:",
                "options": ["$a=1, b=2, c=1$", "$a=2, b=1, c=1$", "$a=1, b=1, c=2$", "$a=0, b=1, c=1$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Write the dimensional formula for each quantity: $F = [MLT^{-2}]$, $A = [L^2]$, $v = [LT^{-1}]$, $d = [ML^{-3}]$.<br><b>Step 2:</b> Substitute these into the given relation: $[MLT^{-2}] = ([L^2])^a ([LT^{-1}])^b ([ML^{-3}])^c$.<br><b>Step 3:</b> Group the powers on the right side: $[MLT^{-2}] = [M^c L^{2a+b-3c} T^{-b}]$.<br><b>Step 4:</b> Equate powers of M: $c = 1$.<br><b>Step 5:</b> Equate powers of T: $-b = -2 \\implies b = 2$.<br><b>Step 6:</b> Equate powers of L: $2a + b - 3c = 1$. Substitute $b$ and $c$: $2a + 2 - 3(1) = 1 \\implies 2a - 1 = 1 \\implies 2a = 2 \\implies a = 1$.<br><b>Step 7:</b> The exponents are $a=1$, $b=2$, $c=1$."
            },
            {
                "id": "UM-TEST-089",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 3,
                "tags": ["Pendulum", "Percentage Error"],
                "q": "The length of pendulum is measured as 1.01m and time for 30 oscillations is measured as one minute 3 seconds. Error in length is 0.01 m and error in time is 3 secs. The percentage error in the measurement of acceleration due to gravity is:",
                "options": ["1%", "5%", "10%", "15%"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The formula for acceleration due to gravity is $g = \\frac{4\\pi^2 L}{T^2}$. The maximum percentage error is $\\%g = \\%L + 2(\\%T)$.<br><b>Step 2:</b> Calculate $\%L = \\left(\\frac{\\Delta L}{L}\\right) \\times 100 = \\left(\\frac{0.01}{1.01}\\right) \\times 100 \\approx 1\\%$.<br><b>Step 3:</b> The total time $t = 1\\text{ min } 3\\text{ s} = 63\\text{ s}$. Error in time $\\Delta t = 3\\text{ s}$.<br><b>Step 4:</b> The percentage error in Time Period (T) is identical to the percentage error in total time (t). So, $\\%T = \\left(\\frac{3}{63}\\right) \\times 100 \\approx 4.76\\%$.<br><b>Step 5:</b> $\\%g = 1\\% + 2(4.76\\%) = 1\\% + 9.52\\% = 10.52\\%$.<br><b>Step 6:</b> The closest matching option is 10%."
            },
            {
                "id": "UM-TEST-090",
                "topic": "UNITS AND DIMENSIONAL FORMULAE",
                "difficulty": 3,
                "tags": ["Magnetic Energy Density", "Dimensional Formulae"],
                "q": "The dimensional formula of $\\frac{1}{2}\\mu_{0}H^{2}$ ($\\mu_{0}$ is permeability of free space and H is magnetic field intensity) is:",
                "options": ["$MLT^{-1}$", "$ML^2T^{-2}$", "$ML^{-1}T^{-2}$", "$ML^2T^{-1}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The expression $\\frac{1}{2}\\mu_{0}H^{2}$ represents the magnetic energy density, which is energy per unit volume.<br><b>Step 2:</b> The dimensional formula for Energy is $[ML^2T^{-2}]$.<br><b>Step 3:</b> The dimensional formula for Volume is $[L^3]$.<br><b>Step 4:</b> Energy density = $\\frac{[ML^2T^{-2}]}{[L^3]}$.<br><b>Step 5:</b> Simplifying the fraction gives $[ML^{-1}T^{-2}]$."
            },
            {
                "id": "UM-TEST-091",
                "topic": "PRINCIPLE OF HOMOGENEITY",
                "difficulty": 2,
                "tags": ["Dimensional Analysis", "Kinematics"],
                "q": "If the force is given by $F=at+bt^{2}$ with t as time. The dimensions of a and b are:",
                "options": ["$MLT^{-4}$, $MLT^{-2}$", "$MLT^{-3}$, $MLT^{-4}$", "$ML^2T^{-3}$, $ML^2T^{-2}$", "$ML^2T^{-3}$, $ML^3T^{-4}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> By the principle of homogeneity, each added term must have the same dimensions as the physical quantity on the left side (Force).<br><b>Step 2:</b> The dimensional formula for force is $F = [MLT^{-2}]$.<br><b>Step 3:</b> For the first term: $a \\times t = [MLT^{-2}] \\implies a \\times [T] = [MLT^{-2}]$.<br><b>Step 4:</b> Solving for $a$: $a = [MLT^{-3}]$.<br><b>Step 5:</b> For the second term: $b \\times t^2 = [MLT^{-2}] \\implies b \\times [T^2] = [MLT^{-2}]$.<br><b>Step 6:</b> Solving for $b$: $b = [MLT^{-4}]$."
            },
            {
                "id": "UM-TEST-092",
                "topic": "UNITS AND DIMENSIONAL FORMULAE",
                "difficulty": 2,
                "tags": ["Trigonometry", "Wave Equation"],
                "q": "When a wave traverses a medium, the displacement of a particle located at x at a time 't' is given by $y=a \\sin(bt-cx)$, where a, b and c are constants of the wave, which of the following is a quantity with dimensions?",
                "options": ["$y/a$", "$bt$", "$cx$", "$b/c$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The argument of a trigonometric function must be an angle, which is a dimensionless quantity. Therefore, the terms $bt$ and $cx$ are both dimensionless.<br><b>Step 2:</b> Since the sine function returns a dimensionless ratio, $y$ and $a$ must have the same dimensions (length). Thus, $y/a$ is dimensionless.<br><b>Step 3:</b> Because $bt$ is dimensionless, $b \\times [T] = 1 \\implies b = [T^{-1}]$.<br><b>Step 4:</b> Because $cx$ is dimensionless, $c \\times [L] = 1 \\implies c = [L^{-1}]$.<br><b>Step 5:</b> Analyze the term $b/c$: $\\frac{[T^{-1}]}{[L^{-1}]} = [LT^{-1}]$. This is the dimensional formula for velocity, meaning it is a quantity with dimensions."
            },
            {
                "id": "UM-TEST-093",
                "topic": "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS",
                "difficulty": 3,
                "tags": ["Fundamental Quantities", "Planck's Constant"],
                "q": "The Energy (E), angular momentum (L) and universal gravitational constant (G) are chosen as fundamental quantities. The dimensions of universal gravitational constant in the dimensional formula of Planck's constant (h) is:",
                "options": ["0", "-1", "5/3", "1"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Express Planck's constant $h$ in terms of the given quantities: $h \\propto E^a L^b G^c$. We need to find the value of $c$.<br><b>Step 2:</b> Write the standard dimensions: $h = [ML^2T^{-1}]$, $E = [ML^2T^{-2}]$, $L = [ML^2T^{-1}]$, $G = [M^{-1}L^3T^{-2}]$.<br><b>Step 3:</b> Substitute these into the equation: $[ML^2T^{-1}] = [ML^2T^{-2}]^a [ML^2T^{-1}]^b [M^{-1}L^3T^{-2}]^c$.<br><b>Step 4:</b> Group the powers: $[M^1L^2T^{-1}] = [M^{a+b-c} L^{2a+2b+3c} T^{-2a-b-2c}]$.<br><b>Step 5:</b> Equate the powers of M: $a + b - c = 1$.<br><b>Step 6:</b> Equate the powers of L: $2a + 2b + 3c = 2$.<br><b>Step 7:</b> Multiply the first equation by 2: $2a + 2b - 2c = 2$.<br><b>Step 8:</b> Subtract this from the second equation: $(2a+2b+3c) - (2a+2b-2c) = 2 - 2 \\implies 5c = 0 \\implies c = 0$."
            },
            {
                "id": "UM-TEST-094",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 1,
                "tags": ["Absolute Error", "Subtraction"],
                "q": "If the absolute errors in two physical quantities A and B are a and b respectively, then the absolute error in the value of A-B is:",
                "options": ["a-b", "b-a", "$a\\pm b$", "a+b"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Let $Z = A - B$. The measured values are $A \\pm a$ and $B \\pm b$.<br><b>Step 2:</b> When two physical quantities are added or subtracted, their absolute errors always add up to account for the maximum possible error.<br><b>Step 3:</b> Therefore, the absolute error in $Z$ is $\\Delta Z = \\Delta A + \\Delta B$.<br><b>Step 4:</b> Substituting the given variables, the absolute error is $a + b$."
            },
            {
                "id": "UM-TEST-095",
                "topic": "PRINCIPLE OF HOMOGENEITY",
                "difficulty": 2,
                "tags": ["Dimensional Analysis", "Velocity"],
                "q": "If the velocity v (in cm/s) of a particle is given in terms of time t (in sec) by the equation $v=at+\\frac{b}{t+c}$, then the dimensions of a, b and c are:",
                "options": ["$[L^2], [T], [LT^2]$", "$[LT^2], [LT], [L]$", "$[LT^{-2}], [L], [T]$", "$[L], [LT], [T^2]$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> According to the principle of homogeneity, only quantities with identical dimensions can be added together.<br><b>Step 2:</b> In the denominator $(t+c)$, $c$ is added to time $t$. Therefore, $c$ must have the dimension of time: $[T]$.<br><b>Step 3:</b> The entire term $\\frac{b}{t+c}$ must have the same dimension as velocity $v$, which is $[LT^{-1}]$.<br><b>Step 4:</b> $\\frac{b}{[T]} = [LT^{-1}] \\implies b = [L]$.<br><b>Step 5:</b> The term $at$ must also have the dimension of velocity $[LT^{-1}]$.<br><b>Step 6:</b> $a[T] = [LT^{-1}] \\implies a = [LT^{-2}]$.<br><b>Step 7:</b> The dimensions for a, b, and c are $[LT^{-2}], [L], [T]$ respectively."
            },
            {
                "id": "UM-TEST-096",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 2,
                "tags": ["Percentage Error", "Density"],
                "q": "A body weighs 22.42 g and has a measured volume of 4.7 cc. The possible errors in the measurement of mass and volume are 0.01 g and 0.1 cc. Then the maximum percentage error in the density will be:",
                "options": ["22%", "2.2%", "0.22%", "0.022%"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The formula for density is $d = \\frac{m}{V}$.<br><b>Step 2:</b> The maximum percentage error in density is the sum of the percentage errors of mass and volume: $\\frac{\\Delta d}{d} \\times 100 = \\left(\\frac{\\Delta m}{m} \\times 100\\right) + \\left(\\frac{\\Delta V}{V} \\times 100\\right)$.<br><b>Step 3:</b> Calculate the percentage error for mass: $\\frac{0.01}{22.42} \\times 100 \\approx 0.0446\\%$.<br><b>Step 4:</b> Calculate the percentage error for volume: $\\frac{0.1}{4.7} \\times 100 \\approx 2.127\\%$.<br><b>Step 5:</b> Total percentage error $= 0.0446\\% + 2.127\\% = 2.1716\\%$.<br><b>Step 6:</b> Rounding to the nearest significant decimal gives 2.2%."
            },
            {
                "id": "UM-TEST-097",
                "topic": "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS",
                "difficulty": 3,
                "tags": ["Surface Tension", "Fundamental Quantities"],
                "q": "If energy E, velocity v and time T are taken as fundamental quantities, the dimensional formula for surface tension is:",
                "options": ["$[Ev^{-2}T^{-2}]$", "$[E^2vT^{-2}]$", "$[Ev^{-2}T^{-1}]$", "$[E^{-2}v^{-2}T^{-1}]$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Surface tension $S$ is defined as force per unit length. Its standard dimensional formula is $S = [ML^0T^{-2}]$.<br><b>Step 2:</b> We want to express $S$ as $E^a v^b T^c$. Substitute the standard dimensions for these quantities: $E = [ML^2T^{-2}]$, $v = [LT^{-1}]$, $T = [T]$.<br><b>Step 3:</b> $[M^1L^0T^{-2}] = [ML^2T^{-2}]^a [LT^{-1}]^b [T]^c = [M^a L^{2a+b} T^{-2a-b+c}]$.<br><b>Step 4:</b> Equate powers of M: $a = 1$.<br><b>Step 5:</b> Equate powers of L: $2a + b = 0 \\implies 2(1) + b = 0 \\implies b = -2$.<br><b>Step 6:</b> Equate powers of T: $-2a - b + c = -2 \\implies -2(1) - (-2) + c = -2 \\implies -2 + 2 + c = -2 \\implies c = -2$.<br><b>Step 7:</b> The formula is $E^1 v^{-2} T^{-2}$, which is $[Ev^{-2}T^{-2}]$."
            },
            {
                "id": "UM-TEST-098",
                "topic": "UNITS AND DIMENSIONAL FORMULAE",
                "difficulty": 2,
                "tags": ["Dimensional Comparison"],
                "q": "If power (P), surface tension (T) and Planck's constant (h) are arranged, so that the dimensions of time in their dimensional formulae are in ascending order, then which of the following is correct?",
                "options": ["P, T, h", "P, h, T", "T, P, h", "T, h, P"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Determine the dimensional formula for Power (P): Work/Time = $[ML^2T^{-3}]$. The dimension of time is -3.<br><b>Step 2:</b> Determine the dimensional formula for Surface Tension (T): Force/Length = $[ML^0T^{-2}]$. The dimension of time is -2.<br><b>Step 3:</b> Determine the dimensional formula for Planck's constant (h): Energy $\\times$ Time = $[ML^2T^{-1}]$. The dimension of time is -1.<br><b>Step 4:</b> Arrange these dimensions in ascending order (from smallest/most negative to largest): -3, -2, -1.<br><b>Step 5:</b> The corresponding order of quantities is P, T, h."
            },
            {
                "id": "UM-TEST-099",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 2,
                "tags": ["Percentage Error", "Pendulum"],
                "q": "The error in the measurement of length of a simple pendulum is 0.1% and error in the time period is 2%. The possible maximum error in the quantity having dimensional formula $LT^{-2}$ is:",
                "options": ["1.1%", "2.1%", "4.1%", "6.1%"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The quantity with dimensional formula $[LT^{-2}]$ represents acceleration due to gravity ($g$). For a simple pendulum, $g = \\frac{4\\pi^2 L}{T^2}$.<br><b>Step 2:</b> The formula for maximum percentage error in a quotient with powers is $\\%g = \\%L + 2(\\%T)$.<br><b>Step 3:</b> Substitute the given percentage errors: $\\%L = 0.1\\%$ and $\\%T = 2\\%$.<br><b>Step 4:</b> $\\%g = 0.1\\% + 2(2\\%) = 0.1\\% + 4\\% = 4.1\\%$."
            },
            {
                "id": "UM-TEST-100",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 2,
                "tags": ["Least Count", "Percentage Error"],
                "q": "The length of a cylinder is measured as 5cm using a vernier calipers of least count 0.1mm. The percentage error in the measured length is nearly:",
                "options": ["0.5%", "2%", "20%", "0.2%"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The least count of the instrument represents the absolute error ($\\Delta L$) in a single measurement.<br><b>Step 2:</b> Convert the least count to match the unit of the measurement: $\\Delta L = 0.1\\text{ mm} = 0.01\\text{ cm}$.<br><b>Step 3:</b> The measured length is $L = 5\\text{ cm}$.<br><b>Step 4:</b> The percentage error is $\\left(\\frac{\\Delta L}{L}\\right) \\times 100$.<br><b>Step 5:</b> Substitute the values: $\\left(\\frac{0.01}{5}\\right) \\times 100 = \\frac{1}{5} = 0.2\\%$."
            },
            {
                "id": "UM-TEST-101",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 2,
                "tags": ["Absolute Error", "Mean Value"],
                "q": "The diameter of a wire as measured by a screw gauge was found to be 1.002 cm, 1.000cm, 1.006cm, the absolute error in the first reading:",
                "options": ["0.001cm", "0.004 cm", "0.006cm", "0.003cm"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Find the true value by calculating the mean of the three readings.<br><b>Step 2:</b> Mean $d_m = \\frac{1.002 + 1.000 + 1.006}{3} = \\frac{3.008}{3} = 1.00266...\\text{ cm}$.<br><b>Step 3:</b> Round the mean to the same number of decimal places as the original readings (3 decimal places): $d_m = 1.003\\text{ cm}$.<br><b>Step 4:</b> The absolute error in the first reading is the magnitude of the difference between the mean value and the first reading: $\\Delta d_1 = |d_m - d_1|$.<br><b>Step 5:</b> $\\Delta d_1 = |1.003 - 1.002| = 0.001\\text{ cm}$."
            },
            {
                "id": "UM-TEST-102",
                "topic": "UNITS AND DIMENSIONAL FORMULAE",
                "difficulty": 3,
                "tags": ["Diffusion Constant", "Dimensional Analysis"],
                "q": "The number of particles crossing per unit area perpendicular to x-axis in unit time is $N=-D\\left(\\frac{n_{2}-n_{1}}{x_{2}-x_{1}}\\right)$ where $n_{1}$ and $n_{2}$ are number of particles per unit volume for the value of $x_{1}$ and $x_{2}$ respectively. The dimension of diffusion constant D is:",
                "options": ["$M^0L^1T^2$", "$M^0L^2T^{-4}$", "$M^0L^1T^{-3}$", "$M^0L^2T^{-1}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Determine the dimensions of each variable in the equation.<br><b>Step 2:</b> $N$ is particles per unit area per unit time, so its dimension is $[L^{-2}T^{-1}]$.<br><b>Step 3:</b> $(n_2 - n_1)$ represents a difference in particles per unit volume, so its dimension is $[L^{-3}]$.<br><b>Step 4:</b> $(x_2 - x_1)$ represents distance, so its dimension is $[L]$.<br><b>Step 5:</b> Rearrange the equation to isolate the dimensions of D: $[D] = \\frac{[N] \\times [x]}{[n]}$.<br><b>Step 6:</b> Substitute the dimensional formulas: $[D] = \\frac{[L^{-2}T^{-1}] \\times [L]}{[L^{-3}]} = \\frac{[L^{-1}T^{-1}]}{[L^{-3}]} = [L^2T^{-1}]$.<br><b>Step 7:</b> In M, L, T format, this is $M^0 L^2 T^{-1}$."
            },
            {
                "id": "UM-TEST-103",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 2,
                "tags": ["Subtraction", "Propagation of Precision"],
                "q": "The external and internal diameters of a hollow cylinder are determined with vernier calipers and the results are recorded as $(4.23\\pm 0.001)\\text{cm}$ and $(3.89\\pm 0.01)\\text{cm}$. The thickness of the cylinder wall within the limits of error is:",
                "options": ["$0.34\\pm 0.01\\text{ cm}$", "$0.34\\pm 0.02\\text{ cm}$", "$0.34\\pm 0.04\\text{ cm}$", "$0.17\\pm 0.01\\text{ cm}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The thickness of a hollow cylinder is given by $t = \\frac{D_{ext} - D_{int}}{2}$.<br><b>Step 2:</b> Calculate the central value for thickness: $t = \\frac{4.23 - 3.89}{2} = \\frac{0.34}{2} = 0.17\\text{ cm}$.<br><b>Step 3:</b> Calculate the absolute error in the difference $(D_{ext} - D_{int})$. For subtraction, errors add up: $\\Delta(D_{ext} - D_{int}) = 0.001 + 0.01 = 0.011\\text{ cm}$.<br><b>Step 4:</b> Since thickness is divided by exactly 2, the absolute error is also divided by 2: $\\Delta t = \\frac{0.011}{2} = 0.0055\\text{ cm}$.<br><b>Step 5:</b> Round the error to match the precision (decimal places) of the least precise measurement (0.01 cm). $0.0055$ rounds to $0.01\\text{ cm}$.<br><b>Step 6:</b> The final result is $0.17\\pm 0.01\\text{ cm}$."
            },
            {
                "id": "UM-TEST-104",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 2,
                "tags": ["Density", "Percentage Error"],
                "q": "The density of a cube can be measured by measuring its mass and the length of its side. If the maximum errors in the measurement of mass and length are 3% and 2% respectively, the maximum error in the measurement of the density of the cube is:",
                "options": ["9%", "19%", "10%", "90%"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The formula for the density of a cube is $d = \\frac{m}{V} = \\frac{m}{L^3}$.<br><b>Step 2:</b> Using the rule for percentage errors with powers, the maximum percentage error in density is $\\%d = \\%m + 3(\\%L)$.<br><b>Step 3:</b> Substitute the given values: $\\%d = 3\\% + 3(2\\%)$.<br><b>Step 4:</b> $\\%d = 3\\% + 6\\% = 9\\%$."
            },
            {
                "id": "UM-TEST-105",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 2,
                "tags": ["Volume", "Significant Figures"],
                "q": "The diameter of a sphere is 3.34m Calculate its volume with due regard to significant figures (in $m^{3}$).",
                "options": ["19.5169", "9.516", "19.5", "19.51"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The formula for the volume of a sphere is $V = \\frac{4}{3}\\pi r^3$ or $V = \\frac{1}{6}\\pi d^3$.<br><b>Step 2:</b> Calculate the mathematical value: $V = \\frac{3.14159...}{6} \\times (3.34)^3 = 0.523598... \\times 37.2597... = 19.509...\\text{ m}^3$.<br><b>Step 3:</b> Identify the number of significant figures in the given data. The diameter '3.34' has 3 significant figures.<br><b>Step 4:</b> The rule for multiplication/division requires the final answer to be rounded to the same number of significant figures as the least precise input value.<br><b>Step 5:</b> Rounding 19.509... to 3 significant figures gives 19.5."
            },
            {
                "id": "UM-TEST-106",
                "topic": "SIGNIFICANT FIGURES & ROUNDING OFF",
                "difficulty": 2,
                "tags": ["Volume", "Significant Figures"],
                "q": "The length, breadth and thickness of a metal sheet are 4.234 m, 1.005m, and 2.01 cm respectively then the volume of the sheet is:",
                "options": ["$0.08~m^{3}$", "$0.0855~m^{3}$", "$0.085~m^{3}$", "$0.087~m^{3}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Calculate the volume mathematically: $V = L \\times B \\times H$.<br><b>Step 2:</b> Convert all units to meters: $L = 4.234$ m, $B = 1.005$ m, $H = 2.01$ cm = $0.0201$ m.<br><b>Step 3:</b> $V = 4.234 \\times 1.005 \\times 0.0201 = 0.0855289...\\text{ m}^3$.<br><b>Step 4:</b> The least number of significant figures in the given measurements is 3 (from 2.01 cm).<br><b>Step 5:</b> Round the final answer to 3 significant figures: $0.0855\\text{ m}^3$."
            },
            {
                "id": "UM-TEST-107",
                "topic": "ACCURACY, PRECISION, TYPES OF ERRORS AND COMBINATION OF ERRORS",
                "difficulty": 1,
                "tags": ["Addition", "Propagation of Precision"],
                "q": "The sides of rectangle are $(10.5\\pm 0.2)$ cm and $(5.2\\pm 0.1)$ cm then its perimeter with error limit.",
                "options": ["$(31.4\\pm 0.6)\\text{ cm}$", "$(31.4\\pm 0.2)\\text{ cm}$", "$(31.4\\pm 0.1)\\text{ cm}$", "$(31.4\\pm 0.9)\\text{ cm}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The formula for the perimeter of a rectangle is $P = 2(L + B)$.<br><b>Step 2:</b> Calculate the central value: $P = 2(10.5 + 5.2) = 2(15.7) = 31.4\\text{ cm}$.<br><b>Step 3:</b> For addition, absolute errors sum up. Since perimeter involves $2L + 2B$, the absolute error is $\\Delta P = 2(\\Delta L) + 2(\\Delta B)$.<br><b>Step 4:</b> $\\Delta P = 2(0.2) + 2(0.1) = 0.4 + 0.2 = 0.6\\text{ cm}$.<br><b>Step 5:</b> The perimeter with error limit is $(31.4\\pm 0.6)\\text{ cm}$."
            },
            {
                "id": "UM-TEST-108",
                "topic": "CONVERSION OF UNITS",
                "difficulty": 2,
                "tags": ["Unit Conversion", "Dimensional Analysis"],
                "q": "If the ratio of fundamental units in two systems are 2:3 the ratio of force in these two systems is:",
                "options": ["1:3", "1:1", "3:1", "1:27"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The dimensional formula for force is $F = [MLT^{-2}]$.<br><b>Step 2:</b> The ratio of force in two systems is $\\frac{F_1}{F_2} = \\left(\\frac{M_1}{M_2}\\right) \\left(\\frac{L_1}{L_2}\\right) \\left(\\frac{T_1}{T_2}\\right)^{-2}$.<br><b>Step 3:</b> We are given that the ratio of all fundamental units is $\\frac{2}{3}$.<br><b>Step 4:</b> Substitute the ratios: $\\frac{F_1}{F_2} = \\left(\\frac{2}{3}\\right) \\times \\left(\\frac{2}{3}\\right) \\times \\left(\\frac{2}{3}\\right)^{-2}$.<br><b>Step 5:</b> Simplify the expression: $\\left(\\frac{2}{3}\\right)^2 \\times \\left(\\frac{3}{2}\\right)^2 = 1$. The ratio is 1:1."
            },
            {
                "id": "UM-TEST-109",
                "topic": "UNITS AND DIMENSIONAL FORMULAE",
                "difficulty": 3,
                "tags": ["Dimensional Formulae", "Electromagnetism"],
                "q": "If L, R, C, and V, respectively, represent inductance, resistance, capacitance and potential difference, then the dimensions of L/RCV are the same as those of:",
                "options": ["Charge", "1/Charge", "Current", "1/Current"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Analyze the dimensional formulas of standard electromagnetic time constants: $\\frac{L}{R}$ has the dimension of Time ($T$), and $RC$ has the dimension of Time ($T$).<br><b>Step 2:</b> The given expression is $\\frac{L}{RCV}$. This can be rewritten as $\\frac{(L/R)}{CV}$.<br><b>Step 3:</b> The term $CV$ represents Charge ($Q$).<br><b>Step 4:</b> Substitute the dimensions: $\\frac{T}{Q}$.<br><b>Step 5:</b> Since Current $I = \\frac{Q}{T}$, the reciprocal $\\frac{T}{Q} = \\frac{1}{I}$. Thus, the dimensions are the same as 1/Current."
            },
            {
                "id": "UM-TEST-110",
                "topic": "PRINCIPLE OF HOMOGENEITY",
                "difficulty": 3,
                "tags": ["Dimensional Formulae", "Logarithmic Functions"],
                "q": "Hydrostatic pressure 'P' varies with displacement '$x$' as $P=\\frac{A}{B}\\log(Bx^{2}+C)$ where A, B and C are constants. The dimensional formula for 'A' is:",
                "options": ["$[M^{1}L^{-1}T^{-2}]$", "$[MLT^{-2}]$", "$[ML^{-2}T^{-2}]$", "$[ML^{-3}T^{-2}]$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The argument of a logarithmic function must be dimensionless. Therefore, $Bx^2$ is dimensionless.<br><b>Step 2:</b> $[B] \\times [L^2] = 1 \\implies [B] = [L^{-2}]$.<br><b>Step 3:</b> The logarithm itself is dimensionless, so the entire right side has the dimensions of $\\frac{A}{B}$.<br><b>Step 4:</b> By the principle of homogeneity, $[P] = \\frac{[A]}{[B]}$.<br><b>Step 5:</b> Pressure $P$ has dimensions $[ML^{-1}T^{-2}]$.<br><b>Step 6:</b> Solve for A: $[A] = [P] \\times [B] = [ML^{-1}T^{-2}] \\times [L^{-2}] = [ML^{-3}T^{-2}]$."
            },
            {
                "id": "UM-TEST-111",
                "topic": "CONVERSION OF UNITS",
                "difficulty": 3,
                "tags": ["Unit Conversion", "Derived Units"],
                "q": "The units of force, velocity and energy are 100 dyne, $10\\text{ cm s}^{-1}$ and 500 erg respectively. The units of mass, length and time are:",
                "options": ["5 g, 5 cm, 5 s", "5 g, 5 cm, 0.5 s", "0.5 g, 5 cm, 5 s", "5 g, 0.5cm, 5 s"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Write the formulas connecting these quantities: $E = F \\times L$.<br><b>Step 2:</b> Solve for the unit of Length ($L$): $L = \\frac{E}{F} = \\frac{500}{100} = 5\\text{ cm}$.<br><b>Step 3:</b> Velocity is $v = \\frac{L}{T}$. Solve for the unit of Time ($T$): $T = \\frac{L}{v} = \\frac{5}{10} = 0.5\\text{ s}$.<br><b>Step 4:</b> Force is $F = \\frac{ML}{T^2}$. Solve for the unit of Mass ($M$): $M = \\frac{F \\times T^2}{L}$.<br><b>Step 5:</b> Substitute the values: $M = \\frac{100 \\times (0.5)^2}{5} = \\frac{100 \\times 0.25}{5} = \\frac{25}{5} = 5\\text{ g}$.<br><b>Step 6:</b> The units are 5 g, 5 cm, and 0.5 s."
            },
            {
                "id": "UM-TEST-112",
                "topic": "CONVERSION OF UNITS",
                "difficulty": 2,
                "tags": ["Gravitational Constant", "Unit Conversion"],
                "q": "The ratio of SI unit to CGS unit of gravitational constant is:",
                "options": ["$1:10^{3}$", "$10^{3}:1$", "1:1", "$1:10^{7}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The dimensional formula for the universal gravitational constant $G$ is $[M^{-1}L^3T^{-2}]$.<br><b>Step 2:</b> The SI unit is $\\text{kg}^{-1}\\cdot\\text{m}^3\\cdot\\text{s}^{-2}$, and the CGS unit is $\\text{g}^{-1}\\cdot\\text{cm}^3\\cdot\\text{s}^{-2}$.<br><b>Step 3:</b> Convert the SI unit to CGS: $1\\text{ kg} = 10^3\\text{ g}$ and $1\\text{ m} = 10^2\\text{ cm}$.<br><b>Step 4:</b> Substitute the conversions: $(10^3\\text{ g})^{-1} \\times (10^2\\text{ cm})^3 \\times (1\\text{ s})^{-2}$.<br><b>Step 5:</b> Simplify: $10^{-3} \\times 10^6 = 10^3\\text{ CGS units}$.<br><b>Step 6:</b> Since 1 SI unit = $10^3$ CGS units, the ratio is $10^3:1$."
            },
            {
                "id": "UM-TEST-113",
                "topic": "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS",
                "difficulty": 2,
                "tags": ["Dimensional Analysis", "Oscillations"],
                "q": "The frequency f of vibrations of a mass m suspended from a spring of spring constant k is given by $f=Cm^{x}K^{y}$, where C is a dimensionless constant. The values of x and y are, respectively:",
                "options": ["$\\frac{1}{2},\\frac{1}{2}$", "$-\\frac{1}{2},-\\frac{1}{2}$", "$\\frac{1}{2},-\\frac{1}{2}$", "$-\\frac{1}{2},\\frac{1}{2}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Write the dimensional formulas: Frequency $f = [T^{-1}]$, Mass $m = [M]$, and Spring constant $K = \\text{Force/Length} = [MLT^{-2}]/[L] = [MT^{-2}]$.<br><b>Step 2:</b> Apply the principle of dimensional homogeneity: $[T^{-1}] = [M]^x [MT^{-2}]^y$.<br><b>Step 3:</b> Combine the right side: $[M^0L^0T^{-1}] = [M^{x+y} T^{-2y}]$.<br><b>Step 4:</b> Equate powers of T: $-2y = -1 \\implies y = 1/2$.<br><b>Step 5:</b> Equate powers of M: $x + y = 0 \\implies x = -y = -1/2$.<br><b>Step 6:</b> The values of x and y are $-1/2$ and $1/2$ respectively."
            },
            {
                "id": "UM-TEST-114",
                "topic": "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS",
                "difficulty": 3,
                "tags": ["Dimensional Analysis", "Surface Tension"],
                "q": "If the time period 'T' of a drop under surface tension 's' is given by $T=\\sqrt{d^{a}r^{b}s^{c}}$ where d is the density, r is the radius of the drop. If $a=1$, $c=-1$ then the value of b is:",
                "options": ["1", "2", "3", "-1"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Square both sides to remove the root: $T^2 = d^a r^b s^c$. Given $a=1$ and $c=-1$, the equation is $T^2 = d \\cdot r^b \\cdot s^{-1}$.<br><b>Step 2:</b> Substitute the dimensional formulas: Time $T = [T]$, Density $d = [ML^{-3}]$, Radius $r = [L]$, Surface tension $s = [MT^{-2}]$.<br><b>Step 3:</b> $[T^2] = [ML^{-3}]^1 \\times [L]^b \\times [MT^{-2}]^{-1}$.<br><b>Step 4:</b> Expand the right side: $[T^2] = [ML^{-3}] \\times [L^b] \\times [M^{-1}T^2] = [M^0 L^{b-3} T^2]$.<br><b>Step 5:</b> Equate the powers of L: $b - 3 = 0 \\implies b = 3$."
            },
            {
                "id": "UM-TEST-115",
                "topic": "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS",
                "difficulty": 3,
                "tags": ["Fundamental Quantities", "Young's Modulus"],
                "q": "If the velocity (V), acceleration (A), and force (F) are taken as fundamental quantities instead of mass (M), length (L), and time (T), the dimensions of Young's modulus (Y) would be:",
                "options": ["$FA^{2}V^{-4}$", "$FA^{2}V^{-5}$", "$FA^{2}V^{-3}$", "$FA^{2}V^{-2}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Young's Modulus $Y = \\text{Force/Area} = [ML^{-1}T^{-2}]$.<br><b>Step 2:</b> Let $Y = F^x A^y V^z$. We know $F = [MLT^{-2}]$, $A = [LT^{-2}]$, $V = [LT^{-1}]$.<br><b>Step 3:</b> $[ML^{-1}T^{-2}] = [MLT^{-2}]^x [LT^{-2}]^y [LT^{-1}]^z = [M^x L^{x+y+z} T^{-2x-2y-z}]$.<br><b>Step 4:</b> Equate M powers: $x = 1$.<br><b>Step 5:</b> Equate L powers: $x + y + z = -1 \\implies 1 + y + z = -1 \\implies y + z = -2$.<br><b>Step 6:</b> Equate T powers: $-2x - 2y - z = -2 \\implies -2(1) - 2y - z = -2 \\implies -2y - z = 0 \\implies z = -2y$.<br><b>Step 7:</b> Substitute $z$: $y + (-2y) = -2 \\implies -y = -2 \\implies y = 2$.<br><b>Step 8:</b> Find $z$: $z = -2(2) = -4$. The dimensional formula is $F^1 A^2 V^{-4}$."
            },
            {
                "id": "UM-TEST-116",
                "topic": "PRINCIPLE OF HOMOGENEITY",
                "difficulty": 2,
                "tags": ["Dimensional Constants", "Exponential Functions"],
                "q": "The time dependence of a physical quantity P is given by $P=P_{0}e^{-\\alpha t^{2}}$, where $\\alpha$ is a constant and t is time. Then constant $\\alpha$:",
                "options": ["is dimensionless", "has dimensions of $T^{-2}$", "has dimensions of P", "has dimensions of $T^{2}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> According to the rules of dimensional analysis, the exponent of an exponential function ($e^x$) must be a dimensionless quantity.<br><b>Step 2:</b> Therefore, the term $\\alpha t^2$ must be dimensionless: $[\\alpha t^2] = [M^0L^0T^0]$.<br><b>Step 3:</b> Since time $t$ has the dimension $[T]$, $t^2$ has the dimension $[T^2]$.<br><b>Step 4:</b> $[\\alpha] \\times [T^2] = 1 \\implies [\\alpha] = \\frac{1}{[T^2]} = [T^{-2}]$."
            },
            {
                "id": "UM-TEST-117",
                "topic": "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS",
                "difficulty": 3,
                "tags": ["Dimensional Analysis", "Young's Modulus"],
                "q": "The value of x in the formula $Y=\\frac{2mgl^{x}}{5bt^{3}e}$ where m is the mass, 'g' is acceleration due to gravity, l is the length, 'b' is the breadth, 't' is the thickness and e is the extension and Y is Young's Modulus, is:",
                "options": ["3", "2", "1", "4"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The dimensional formula for Young's Modulus is $Y = [ML^{-1}T^{-2}]$.<br><b>Step 2:</b> Write the dimensions for the RHS variables: mass $m = [M]$, gravity $g = [LT^{-2}]$, length $l = [L]$, breadth $b = [L]$, thickness $t = [L]$, extension $e = [L]$. Constants 2 and 5 are dimensionless.<br><b>Step 3:</b> Substitute into the equation: $[ML^{-1}T^{-2}] = \\frac{[M] \\times [LT^{-2}] \\times [L]^x}{[L] \\times [L]^3 \\times [L]}$.<br><b>Step 4:</b> Simplify the RHS: $\\frac{[ML^{x+1}T^{-2}]}{[L^5]} = [ML^{x-4}T^{-2}]$.<br><b>Step 5:</b> Equate the powers of L from both sides: $-1 = x - 4$.<br><b>Step 6:</b> Solve for x: $x = 3$."
            },
            {
                "id": "UM-TEST-118",
                "topic": "TO CHECK THE CORRECTNESS OF PHYSICAL RELATION AND DERIVING THE EQUATIONS",
                "difficulty": 2,
                "tags": ["Dimensional Formulae", "Sound Velocity"],
                "q": "The velocity of sound in air (V) pressure (P) and density of air (d) are related as $V\\propto P^{x}d^{y}$. The values of x and y respectively are:",
                "options": ["$1,\\frac{1}{2}$", "$-\\frac{1}{2},-\\frac{1}{2}$", "$\\frac{1}{2},\\frac{1}{2}$", "$\\frac{1}{2},-\\frac{1}{2}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Write the dimensional formulas for the quantities: Velocity $V = [LT^{-1}]$, Pressure $P = [ML^{-1}T^{-2}]$, Density $d = [ML^{-3}]$.<br><b>Step 2:</b> Substitute into the proportional relation: $[LT^{-1}] = [ML^{-1}T^{-2}]^x [ML^{-3}]^y$.<br><b>Step 3:</b> Expand the right side: $[M^0L^1T^{-1}] = [M^{x+y} L^{-x-3y} T^{-2x}]$.<br><b>Step 4:</b> Equate powers of T: $-2x = -1 \\implies x = 1/2$.<br><b>Step 5:</b> Equate powers of M: $x + y = 0 \\implies 1/2 + y = 0 \\implies y = -1/2$.<br><b>Step 6:</b> The values are $x = 1/2$ and $y = -1/2$."
            }
        ]
    },

    "Vectors": {
        "classTarget": "Class 11",
        "topics": ["Addition, Subtraction and Resolution of Vectors", "Multiplication of a Vector by a Scalar", "Scalar Product (or) Dot Product", "Vector Product (or) Cross Product"],
        "questions": [
            {
                "id": "VEC-TEST-001",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Vector Addition", "Direction of Vectors"],
                "q": "If $\\vec{A}=3\\hat{i}-4\\hat{j}$ and $\\vec{B}=-\\hat{i}-4\\hat{j}$, calculate the direction of $\\vec{A}+\\vec{B}$:",
                "options": ["$\\tan^{-1}(4)$ with positive x-axis in clock wise", "$\\tan^{-1}(4)$ with negative x-axis in clock wise", "$\\tan^{-1}(4)$ with positive x-axis in anticlock wise", "$\\tan^{-1}(4)$ with negative x-axis in anticlock wise"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Find the resultant vector $\\vec{R} = \\vec{A} + \\vec{B}$.<br><b>Step 2:</b> $\\vec{R} = (3\\hat{i}-4\\hat{j}) + (-\\hat{i}-4\\hat{j}) = 2\\hat{i}-8\\hat{j}$.<br><b>Step 3:</b> The angle $\\theta$ with the x-axis is given by $\\tan\\theta = \\frac{|R_y|}{|R_x|} = \\frac{8}{2} = 4$.<br><b>Step 4:</b> Since the x-component is positive and y-component is negative, the vector lies in the fourth quadrant.<br><b>Step 5:</b> Therefore, the direction is $\\tan^{-1}(4)$ with the positive x-axis in the clockwise direction."
            },
            {
                "id": "VEC-TEST-002",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Vector Algebra", "3D Vectors"],
                "q": "Two vectors are given by $\\vec{a}=-2\\hat{i}+\\hat{j}-3\\hat{k}$ and $\\vec{b}=5\\hat{i}+3\\hat{j}-2\\hat{k}$. If $3\\vec{a}+2\\vec{b}-\\vec{c}=0$ then third vector $\\vec{c}$ is:",
                "options": ["$4\\hat{i}+9\\hat{j}-13\\hat{k}$", "$-4\\hat{i}-9\\hat{j}+13\\hat{k}$", "$4\\hat{i}-9\\hat{j}-13\\hat{k}$", "$2\\hat{i}-3\\hat{j}+13\\hat{k}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Rearrange the given equation to solve for $\\vec{c}$: $\\vec{c} = 3\\vec{a} + 2\\vec{b}$.<br><b>Step 2:</b> Substitute the given vectors: $\\vec{c} = 3(-2\\hat{i}+\\hat{j}-3\\hat{k}) + 2(5\\hat{i}+3\\hat{j}-2\\hat{k})$.<br><b>Step 3:</b> Distribute the scalars: $\\vec{c} = (-6\\hat{i}+3\\hat{j}-9\\hat{k}) + (10\\hat{i}+6\\hat{j}-4\\hat{k})$.<br><b>Step 4:</b> Add the corresponding components: $\\vec{c} = (-6+10)\\hat{i} + (3+6)\\hat{j} + (-9-4)\\hat{k} = 4\\hat{i}+9\\hat{j}-13\\hat{k}$."
            },
            {
                "id": "VEC-TEST-003",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 1,
                "tags": ["Resultant Magnitude", "Vector Properties"],
                "q": "The vector sum of two vectors of magnitudes 10 units and 15 units can never be:",
                "options": ["28 units", "22 units", "18 units", "8 units"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The magnitude of the resultant $\\vec{R}$ of two vectors $\\vec{A}$ and $\\vec{B}$ lies in the range $|\\vec{A} - \\vec{B}| \\le |\\vec{R}| \\le |\\vec{A} + \\vec{B}|$.<br><b>Step 2:</b> Minimum possible magnitude = $|15 - 10| = 5$ units.<br><b>Step 3:</b> Maximum possible magnitude = $15 + 10 = 25$ units.<br><b>Step 4:</b> The resultant must be strictly between 5 and 25 units. Therefore, it can never be 28 units."
            },
            {
                "id": "VEC-TEST-004",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["2D Vectors", "Displacement"],
                "q": "The car makes a displacement of 100 m towards east and then 200 m towards north. Find the magnitude and direction of the resultant.",
                "options": ["223.7m, $\\tan^{-1}(2)$, N of E", "223.7m, $\\tan^{-1}(2)$ E of N", "300m, $\\tan^{-1}(2)$ N of E", "100m, $\\tan^{-1}(2)$, N of E"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Represent the displacements as vectors: $\\vec{S_1} = 100\\hat{i}$ (East) and $\\vec{S_2} = 200\\hat{j}$ (North).<br><b>Step 2:</b> The resultant displacement is $\\vec{S} = 100\\hat{i} + 200\\hat{j}$.<br><b>Step 3:</b> Magnitude $|\\vec{S}| = \\sqrt{100^2 + 200^2} = \\sqrt{10000 + 40000} = \\sqrt{50000} = 100\\sqrt{5} \\approx 223.6$ m.<br><b>Step 4:</b> Direction is given by $\\tan\\theta = \\frac{y}{x} = \\frac{200}{100} = 2$.<br><b>Step 5:</b> Thus, $\\theta = \\tan^{-1}(2)$ North of East."
            },
            {
                "id": "VEC-TEST-005",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Vector Components", "Direction Cosines"],
                "q": "If a vector has an x-component of -25.0 units and a y-component of 40.0 units, then the magnitude and direction of this vector is:",
                "options": ["$5\\sqrt{89}$ units; $\\sin^{-1}\\left(\\frac{5}{\\sqrt{89}}\\right)$ with -ve x-axis", "$5\\sqrt{89}$ units; $\\cos^{-1}\\left(\\frac{5}{\\sqrt{89}}\\right)$ with -ve x-axis", "45 units; $\\cos^{-1}\\left(\\frac{-5}{9}\\right)$ with x-axis", "45 units; $\\sin^{-1}\\left(\\frac{-5}{9}\\right)$ with x-axis"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The vector is $\\vec{A} = -25\\hat{i} + 40\\hat{j}$.<br><b>Step 2:</b> Magnitude $|\\vec{A}| = \\sqrt{(-25)^2 + 40^2} = \\sqrt{625 + 1600} = \\sqrt{2225} = 5\\sqrt{89}$ units.<br><b>Step 3:</b> Let $\\alpha$ be the angle made with the negative x-axis. The magnitude of the x-component on that axis is 25, and hypotenuse is $5\\sqrt{89}$.<br><b>Step 4:</b> $\\cos\\alpha = \\frac{25}{5\\sqrt{89}} = \\frac{5}{\\sqrt{89}}$.<br><b>Step 5:</b> Therefore, the direction is $\\cos^{-1}\\left(\\frac{5}{\\sqrt{89}}\\right)$ with the negative x-axis."
            },
            {
                "id": "VEC-TEST-006",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 1,
                "tags": ["Resolution of Vectors"],
                "q": "A force of 10N is resolved into two perpendicular components. If the first component makes $30^{\\circ}$ with the force, the magnitudes of the components are:",
                "options": ["5N, 5N", "$5\\sqrt{2}$N, 5N", "$5\\sqrt{3}$N, 5N", "10N, $10\\sqrt{3}$N"],
                "correct": 2,
                "sol": "<b>Step 1:</b> A force $F = 10$ N is resolved into two mutually perpendicular components.<br><b>Step 2:</b> The component adjacent to the $30^{\\circ}$ angle is $F_1 = F\\cos 30^{\\circ}$.<br><b>Step 3:</b> $F_1 = 10 \\times \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}$ N.<br><b>Step 4:</b> The perpendicular component is $F_2 = F\\sin 30^{\\circ}$.<br><b>Step 5:</b> $F_2 = 10 \\times \\frac{1}{2} = 5$ N.<br><b>Step 6:</b> The magnitudes are $5\\sqrt{3}$ N and 5 N."
            },
            {
                "id": "VEC-TEST-007",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 3,
                "tags": ["Equilibrium", "Vector Addition"],
                "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEjb1jpYbN_-YYS3EG20YHjHxqRQU9Yf29Aurh6wXyBYjtQDbrc6jbHKZCjX0GTT6T86OZ1r-kLcBRY7OHPhplxarpJ82zqY3096FZvqr3sSmWlVPPpcrZnvV2lOeqe25hazQMYDwUZFf68yoAeIvhZQR8u2ZtOKSorwXNykZhvmkApXqfy8TTmeHIENYnPi",
                "q": "If the system is in equilibrium ($\\cos 53^{\\circ}=3/5$), then the value of 'P' is:",
                "options": ["16N", "4N", "$\\sqrt{208}$N", "$\\sqrt{232}$N"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The system is in equilibrium, so the vector sum of all forces is zero: $\\vec{P} + \\vec{A} + \\vec{B} = \\vec{0}$.<br><b>Step 2:</b> From the diagram, force B is $6$ N along the y-axis ($\\vec{B} = 6\\hat{j}$).<br><b>Step 3:</b> Force A is $10$ N making an angle of $53^{\\circ}$ with the y-axis. Its x-component is $10\\sin 53^{\\circ} = 10(4/5) = 8\\hat{i}$. Its y-component is $10\\cos 53^{\\circ} = 10(3/5) = 6\\hat{j}$. So, $\\vec{A} = 8\\hat{i} + 6\\hat{j}$.<br><b>Step 4:</b> Substitute into the equilibrium equation: $\\vec{P} + (8\\hat{i} + 6\\hat{j}) + 6\\hat{j} = 0 \\implies \\vec{P} = -8\\hat{i} - 12\\hat{j}$.<br><b>Step 5:</b> Magnitude of P is $|\\vec{P}| = \\sqrt{(-8)^2 + (-12)^2} = \\sqrt{64 + 144} = \\sqrt{208}$ N."
            },
            {
                "id": "VEC-TEST-008",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Relative Angle", "2D Vectors"],
                "q": "Two billiard balls are moving on a table and their component velocities along the length and breadth are 5, 5 $\\text{ms}^{-1}$ for one ball and $2\\sqrt{3}$, 2 $\\text{ms}^{-1}$ for the other ball. The angle between the motion of balls is:",
                "options": ["$30^{\\circ}$", "$60^{\\circ}$", "$40^{\\circ}$", "$15^{\\circ}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Express the velocities as vectors: $\\vec{v_1} = 5\\hat{i} + 5\\hat{j}$ and $\\vec{v_2} = 2\\sqrt{3}\\hat{i} + 2\\hat{j}$.<br><b>Step 2:</b> Find the angle $\\theta_1$ of the first ball with the x-axis: $\\tan\\theta_1 = \\frac{5}{5} = 1 \\implies \\theta_1 = 45^{\\circ}$.<br><b>Step 3:</b> Find the angle $\\theta_2$ of the second ball with the x-axis: $\\tan\\theta_2 = \\frac{2}{2\\sqrt{3}} = \\frac{1}{\\sqrt{3}} \\implies \\theta_2 = 30^{\\circ}$.<br><b>Step 4:</b> The angle between their paths is the difference between these angles: $\\theta = \\theta_1 - \\theta_2 = 45^{\\circ} - 30^{\\circ} = 15^{\\circ}$."
            },
            {
                "id": "VEC-TEST-009",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["3D Vectors", "Planar Components"],
                "q": "If $\\vec{A}=2\\hat{i}-3\\hat{j}+4\\hat{k}$, its components in YZ-plane and ZX-plane are respectively:",
                "options": ["$\\sqrt{13}$ and 5", "5 and $2\\sqrt{5}$", "$2\\sqrt{5}$ and $\\sqrt{13}$", "$\\sqrt{13}$ and $\\sqrt{29}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The component of a vector $\\vec{A} = A_x\\hat{i} + A_y\\hat{j} + A_z\\hat{k}$ in the YZ-plane is determined by its y and z components. Magnitude = $\\sqrt{A_y^2 + A_z^2}$.<br><b>Step 2:</b> Component in YZ-plane = $\\sqrt{(-3)^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.<br><b>Step 3:</b> The component in the ZX-plane is determined by its z and x components. Magnitude = $\\sqrt{A_z^2 + A_x^2}$.<br><b>Step 4:</b> Component in ZX-plane = $\\sqrt{4^2 + 2^2} = \\sqrt{16 + 4} = \\sqrt{20} = 2\\sqrt{5}$.<br><b>Step 5:</b> The values are 5 and $2\\sqrt{5}$ respectively."
            },
            {
                "id": "VEC-TEST-010",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 1,
                "tags": ["Inclined Plane", "Resolution of Forces"],
                "q": "A car weighing 100kg is on a slope that makes an angle $30^{\\circ}$ with the horizontal. The component of car's weight parallel to the slope is ($g=10\\text{ms}^{-2}$):",
                "options": ["500N", "1000N", "15000N", "20000N"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The weight of the car acts vertically downwards: $W = mg = 100 \\times 10 = 1000$ N.<br><b>Step 2:</b> The component of the weight parallel to the inclined plane is given by $W_{parallel} = mg \\sin\\theta$.<br><b>Step 3:</b> Substitute the values: $W_{parallel} = 1000 \\times \\sin 30^{\\circ}$.<br><b>Step 4:</b> Since $\\sin 30^{\\circ} = 0.5$, the parallel component is $1000 \\times 0.5 = 500$ N."
            },
            {
                "id": "VEC-TEST-011",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 1,
                "tags": ["3D Vectors", "Magnitude"],
                "q": "A room has dimensions $3\\text{m}\\times 4\\text{m}\\times 5\\text{m}$. A fly starting at one corner ends up at the diametrically opposite corner. The magnitude of the displacement of the fly is:",
                "options": ["12m", "60 m", "$2\\sqrt{5}$m", "$5\\sqrt{2}$m"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The displacement from one corner of a cuboid to the diametrically opposite corner represents the body diagonal.<br><b>Step 2:</b> The length of the body diagonal is given by $S = \\sqrt{l^2 + b^2 + h^2}$.<br><b>Step 3:</b> Substitute the room dimensions: $S = \\sqrt{3^2 + 4^2 + 5^2}$.<br><b>Step 4:</b> $S = \\sqrt{9 + 16 + 25} = \\sqrt{50}$.<br><b>Step 5:</b> Simplify the surd: $\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$ m."
            },
            {
                "id": "VEC-TEST-012",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Direction Cosines", "3D Vectors"],
                "q": "If $\\vec{P}=\\hat{i}+2\\hat{j}+6\\hat{k}$, its direction cosines are:",
                "options": ["$\\frac{1}{41},\\frac{2}{41}$ and $\\frac{6}{41}$", "$\\frac{1}{\\sqrt{41}},\\frac{2}{\\sqrt{41}}$ and $\\frac{6}{\\sqrt{41}}$", "$\\frac{3}{\\sqrt{41}},\\frac{8}{\\sqrt{41}}$ and $\\frac{7}{\\sqrt{41}}$", "1, 2 and 6"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Direction cosines are the components of the unit vector in the direction of $\\vec{P}$. First, find the magnitude $|\\vec{P}|$.<br><b>Step 2:</b> $|\\vec{P}| = \\sqrt{1^2 + 2^2 + 6^2} = \\sqrt{1 + 4 + 36} = \\sqrt{41}$.<br><b>Step 3:</b> The direction cosines $\\cos\\alpha, \\cos\\beta, \\cos\\gamma$ are given by $\\frac{P_x}{|\\vec{P}|}, \\frac{P_y}{|\\vec{P}|}, \\frac{P_z}{|\\vec{P}|}$.<br><b>Step 4:</b> Substituting the values, we get $\\frac{1}{\\sqrt{41}}, \\frac{2}{\\sqrt{41}}, \\frac{6}{\\sqrt{41}}$."
            },
            {
                "id": "VEC-TEST-013",
                "topic": "Multiplication of a Vector by a Scalar",
                "difficulty": 2,
                "tags": ["Parallel Vectors", "Vector Algebra"],
                "q": "The value of 'm', if $\\hat{i}+2\\hat{j}-3\\hat{k}$ is parallel to $3\\hat{i}+m\\hat{j}-9\\hat{k}$ is:",
                "options": ["12", "9", "6", "3"],
                "correct": 2,
                "sol": "<b>Step 1:</b> For two vectors $\\vec{A}$ and $\\vec{B}$ to be parallel, their corresponding components must be proportional: $\\frac{A_x}{B_x} = \\frac{A_y}{B_y} = \\frac{A_z}{B_z}$.<br><b>Step 2:</b> Substitute the components: $\\frac{1}{3} = \\frac{2}{m} = \\frac{-3}{-9}$.<br><b>Step 3:</b> Since $\\frac{-3}{-9}$ simplifies to $\\frac{1}{3}$, the proportionality holds.<br><b>Step 4:</b> Solve for m using $\\frac{1}{3} = \\frac{2}{m} \\implies m = 2 \\times 3 = 6$."
            },
            {
                "id": "VEC-TEST-014",
                "topic": "Multiplication of a Vector by a Scalar",
                "difficulty": 2,
                "tags": ["Newton's Second Law", "Kinematics with Vectors"],
                "q": "A force $2\\hat{i}+\\hat{j}-\\hat{k}$ newton acts on a body which is initially at rest. If the velocity of the body at the end of 20 seconds is $4\\hat{i}+2\\hat{j}-2\\hat{k}\\text{ ms}^{-1}$, the mass of the body is:",
                "options": ["20kg", "15kg", "10kg", "5kg"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Calculate the acceleration vector using $\\vec{v} = \\vec{u} + \\vec{a}t$. Since it starts from rest, $\\vec{u} = 0$.<br><b>Step 2:</b> $\\vec{a} = \\frac{\\vec{v}}{t} = \\frac{4\\hat{i}+2\\hat{j}-2\\hat{k}}{20} = 0.2\\hat{i} + 0.1\\hat{j} - 0.1\\hat{k}\\text{ m/s}^2$.<br><b>Step 3:</b> According to Newton's Second Law, $\\vec{F} = m\\vec{a}$.<br><b>Step 4:</b> $2\\hat{i}+\\hat{j}-\\hat{k} = m(0.2\\hat{i} + 0.1\\hat{j} - 0.1\\hat{k})$.<br><b>Step 5:</b> Compare the x-components to solve for m: $2 = 0.2m \\implies m = \\frac{2}{0.2} = 10\\text{ kg}$."
            },
            {
                "id": "VEC-TEST-015",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 1,
                "tags": ["Dot Product", "Work Done"],
                "q": "When a force vector $\\vec{F}=(\\hat{i}+2\\hat{j}+\\hat{k})\\text{N}$ acts on a body and produces a displacement of $\\vec{S}=(4\\hat{i}+\\hat{j}+7\\hat{k})\\text{m}$ then the work done is:",
                "options": ["9J", "13J", "5J", "1J"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Work done is the dot product of the force and displacement vectors: $W = \\vec{F} \\cdot \\vec{S}$.<br><b>Step 2:</b> Substitute the vectors: $W = (\\hat{i}+2\\hat{j}+\\hat{k}) \\cdot (4\\hat{i}+\\hat{j}+7\\hat{k})$.<br><b>Step 3:</b> Perform the dot product by multiplying corresponding components: $W = (1 \\times 4) + (2 \\times 1) + (1 \\times 7)$.<br><b>Step 4:</b> $W = 4 + 2 + 7 = 13\\text{ J}$."
            },
            {
                "id": "VEC-TEST-016",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 2,
                "tags": ["Dot Product", "Angle Between Vectors"],
                "q": "The angle between the two vectors $\\vec{A}=\\hat{i}+2\\hat{j}-\\hat{k}$ and $\\vec{B}=-\\hat{i}+\\hat{j}-2\\hat{k}$ is:",
                "options": ["$90^{\\circ}$", "$30^{\\circ}$", "$45^{\\circ}$", "$60^{\\circ}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The angle $\\theta$ between two vectors is given by $\\cos\\theta = \\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{A}| |\\vec{B}|}$.<br><b>Step 2:</b> Calculate the dot product: $\\vec{A} \\cdot \\vec{B} = (1)(-1) + (2)(1) + (-1)(-2) = -1 + 2 + 2 = 3$.<br><b>Step 3:</b> Calculate the magnitude of $\\vec{A}$: $|\\vec{A}| = \\sqrt{1^2 + 2^2 + (-1)^2} = \\sqrt{1 + 4 + 1} = \\sqrt{6}$.<br><b>Step 4:</b> Calculate the magnitude of $\\vec{B}$: $|\\vec{B}| = \\sqrt{(-1)^2 + 1^2 + (-2)^2} = \\sqrt{1 + 1 + 4} = \\sqrt{6}$.<br><b>Step 5:</b> Substitute into the formula: $\\cos\\theta = \\frac{3}{\\sqrt{6} \\times \\sqrt{6}} = \\frac{3}{6} = \\frac{1}{2}$.<br><b>Step 6:</b> Therefore, $\\theta = 60^{\\circ}$."
            },
            {
                "id": "VEC-TEST-017",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 2,
                "tags": ["Dot Product", "Perpendicular Vectors"],
                "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEimhNKq0A4EpGKMRD1B9ox-uxPuMv6C3zKq1LdpIsqajy04zPwuGcngtvH8Xa_nkG0evL9j1t3AtKagpOQ_Vd6HwL0lIALb_oNNK4LLXVdCTia-VgQOP5yPxJlEGa4Nrfljz1i0dT8ABi1e7UvmXv6LkAXCYG1PDj7-u89PWX0B2tq71uqBjxELVMVy9vhd",
                "q": "In a right angled triangle the three vectors $\\vec{a},$ $\\vec{b}$ and $\\vec{c}$ add to zero. Then $\\vec{a}\\cdot\\vec{b}$ is:",
                "options": ["-9", "+9", "0", "-3"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The problem states that the three vectors form a right-angled triangle and their vector sum is zero ($\\vec{a} + \\vec{b} + \\vec{c} = 0$).<br><b>Step 2:</b> Based on the provided diagram of the right-angled triangle, vectors $\\vec{a}$ and $\\vec{b}$ represent the base and height (the perpendicular sides).<br><b>Step 3:</b> The dot product of two perpendicular vectors is always zero because $\\cos 90^{\\circ} = 0$.<br><b>Step 4:</b> Therefore, $\\vec{a} \\cdot \\vec{b} = a b \\cos 90^{\\circ} = 0$."
            },
            {
                "id": "VEC-TEST-018",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 2,
                "tags": ["Perpendicular Vectors", "Vector Algebra"],
                "q": "A vector perpendicular to the vector $(\\hat{i}+2\\hat{j})$ and having magnitude $3\\sqrt{5}$ units is:",
                "options": ["$3\\hat{i}+6\\hat{j}$", "$6\\hat{i}-3\\hat{j}$", "$4\\hat{i}-2\\hat{j}$", "$\\hat{i}-2\\hat{j}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Let the required vector be $\\vec{v} = x\\hat{i} + y\\hat{j}$.<br><b>Step 2:</b> Since it is perpendicular to $(\\hat{i}+2\\hat{j})$, their dot product must be zero: $x(1) + y(2) = 0 \\implies x = -2y$.<br><b>Step 3:</b> The magnitude is $3\\sqrt{5}$: $\\sqrt{x^2 + y^2} = 3\\sqrt{5}$.<br><b>Step 4:</b> Substitute $x = -2y$: $\\sqrt{(-2y)^2 + y^2} = \\sqrt{5y^2} = |y|\\sqrt{5}$.<br><b>Step 5:</b> Equate magnitudes: $|y|\\sqrt{5} = 3\\sqrt{5} \\implies y = \\pm 3$.<br><b>Step 6:</b> If $y = -3$, then $x = -2(-3) = 6$. The vector is $6\\hat{i}-3\\hat{j}$, which matches option 2."
            },
            {
                "id": "VEC-TEST-019",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 2,
                "tags": ["Vector Projection", "Component of Vector"],
                "q": "If $\\vec{A}=2\\hat{i}+3\\hat{j}$ and $\\vec{B}=2\\hat{j}+3\\hat{k}$ the component of $\\vec{B}$ along $\\vec{A}$ is:",
                "options": ["6", "$\\frac{1}{6}$", "$\\frac{6}{13}$", "$\\frac{6}{\\sqrt{13}}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The scalar component of vector $\\vec{B}$ along vector $\\vec{A}$ is given by the formula $\\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{A}|}$.<br><b>Step 2:</b> Calculate the dot product: $\\vec{A} \\cdot \\vec{B} = (2)(0) + (3)(2) + (0)(3) = 6$.<br><b>Step 3:</b> Calculate the magnitude of $\\vec{A}$: $|\\vec{A}| = \\sqrt{2^2 + 3^2} = \\sqrt{4 + 9} = \\sqrt{13}$.<br><b>Step 4:</b> Substitute these values into the formula: Component $= \\frac{6}{\\sqrt{13}}$."
            },
            {
                "id": "VEC-TEST-020",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 2,
                "tags": ["Orthogonal Vectors", "Dot Product"],
                "q": "If the vectors $\\vec{A}=a\\hat{i}+a\\hat{j}+3\\hat{k}$ and $\\vec{B}=a\\hat{i}-2\\hat{j}-\\hat{k}$ are perpendicular to each other then the positive value of 'a' is:",
                "options": ["Zero", "1", "2", "3"],
                "correct": 3,
                "sol": "<b>Step 1:</b> For two vectors to be perpendicular, their dot product must be equal to zero.<br><b>Step 2:</b> Calculate $\\vec{A} \\cdot \\vec{B} = (a)(a) + (a)(-2) + (3)(-1) = 0$.<br><b>Step 3:</b> This gives the quadratic equation: $a^2 - 2a - 3 = 0$.<br><b>Step 4:</b> Factor the equation: $(a - 3)(a + 1) = 0$.<br><b>Step 5:</b> The possible values for 'a' are 3 and -1. The positive value is 3."
            },
            {
                "id": "VEC-TEST-021",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 2,
                "tags": ["Work and Power", "Dot Product"],
                "q": "A force of $2\\hat{i}+3\\hat{j}+2\\hat{k}$ N acts on a body for 4 s and produces a displacement of $3\\hat{i}+4\\hat{j}+5\\hat{k}$ m. Calculate the power:",
                "options": ["5 W", "6 W", "7 W", "9 W"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Work done ($W$) is the dot product of Force ($\\vec{F}$) and Displacement ($\\vec{S}$).<br><b>Step 2:</b> $W = \\vec{F} \\cdot \\vec{S} = (2)(3) + (3)(4) + (2)(5)$.<br><b>Step 3:</b> $W = 6 + 12 + 10 = 28$ Joules.<br><b>Step 4:</b> Power ($P$) is the rate of doing work: $P = \\frac{W}{t}$.<br><b>Step 5:</b> $P = \\frac{28}{4} = 7$ Watts."
            },
            {
                "id": "VEC-TEST-022",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 3,
                "tags": ["Vector Identities", "Unit Vectors"],
                "q": "If $\\theta$ is the angle between unit vectors $\\vec{A}$ and $\\vec{B}$, then $\\frac{(1-\\vec{A}\\cdot\\vec{B})}{(1+\\vec{A}\\cdot\\vec{B})}$ is equal to:",
                "options": ["$\\tan^{2}(\\theta/2)$", "$\\sin^{2}(\\theta/2)$", "$\\cot^{2}(\\theta/2)$", "$\\cos^{2}(\\theta/2)$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> For unit vectors, $|\\vec{A}| = 1$ and $|\\vec{B}| = 1$. The dot product is $\\vec{A} \\cdot \\vec{B} = |\\vec{A}||\\vec{B}|\\cos\\theta = (1)(1)\\cos\\theta = \\cos\\theta$.<br><b>Step 2:</b> Substitute this into the given expression: $\\frac{1 - \\cos\\theta}{1 + \\cos\\theta}$.<br><b>Step 3:</b> Use the half-angle trigonometric identities: $1 - \\cos\\theta = 2\\sin^2(\\theta/2)$ and $1 + \\cos\\theta = 2\\cos^2(\\theta/2)$.<br><b>Step 4:</b> The expression becomes $\\frac{2\\sin^2(\\theta/2)}{2\\cos^2(\\theta/2)} = \\frac{\\sin^2(\\theta/2)}{\\cos^2(\\theta/2)}$.<br><b>Step 5:</b> This simplifies to $\\tan^2(\\theta/2)$."
            },
            {
                "id": "VEC-TEST-023",
                "topic": "Vector Product (or) Cross Product",
                "difficulty": 2,
                "tags": ["Torque", "Cross Product"],
                "q": "Find the torque of a force $\\vec{F}=-3\\hat{i}+2\\hat{j}+\\hat{k}$ acting at the point $\\vec{r}=8\\hat{i}+2\\hat{j}+3\\hat{k}$ about origin:",
                "options": ["$14\\hat{i}-38\\hat{j}+3\\hat{k}$", "$4\\hat{i}+4\\hat{j}+6\\hat{k}$", "$-14\\hat{i}+38\\hat{j}-16\\hat{k}$", "$-4\\hat{i}-17\\hat{j}+22\\hat{k}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Torque $\\vec{\\tau}$ about the origin is given by the cross product $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$.<br><b>Step 2:</b> Set up the determinant: $\\vec{\\tau} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 8 & 2 & 3 \\\\ -3 & 2 & 1 \\end{vmatrix}$.<br><b>Step 3:</b> Expand along the first row: $\\hat{i}((2)(1) - (3)(2)) - \\hat{j}((8)(1) - (3)(-3)) + \\hat{k}((8)(2) - (2)(-3))$.<br><b>Step 4:</b> Simplify: $\\hat{i}(2 - 6) - \\hat{j}(8 + 9) + \\hat{k}(16 + 6)$.<br><b>Step 5:</b> $\\vec{\\tau} = -4\\hat{i} - 17\\hat{j} + 22\\hat{k}$."
            },
            {
                "id": "VEC-TEST-024",
                "topic": "Vector Product (or) Cross Product",
                "difficulty": 2,
                "tags": ["Area of Triangle", "Cross Product"],
                "q": "The area of the triangle whose adjacent sides are represented by the vectors $(4\\hat{i}+3\\hat{j}+4\\hat{k})$ and $5\\hat{i}$ in sq. units is:",
                "options": ["25", "12.5", "50", "45"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The area of a triangle formed by two vectors $\\vec{A}$ and $\\vec{B}$ is given by $\\frac{1}{2} |\\vec{A} \\times \\vec{B}|$.<br><b>Step 2:</b> Find the cross product: $\\vec{A} \\times \\vec{B} = (4\\hat{i}+3\\hat{j}+4\\hat{k}) \\times 5\\hat{i}$.<br><b>Step 3:</b> Using distributive property: $(4\\hat{i} \\times 5\\hat{i}) + (3\\hat{j} \\times 5\\hat{i}) + (4\\hat{k} \\times 5\\hat{i})$.<br><b>Step 4:</b> Since $\\hat{i}\\times\\hat{i}=0$, $\\hat{j}\\times\\hat{i}=-\\hat{k}$, and $\\hat{k}\\times\\hat{i}=\\hat{j}$, we get $0 - 15\\hat{k} + 20\\hat{j}$.<br><b>Step 5:</b> The magnitude is $\\sqrt{20^2 + (-15)^2} = \\sqrt{400 + 225} = \\sqrt{625} = 25$.<br><b>Step 6:</b> Area $= \\frac{25}{2} = 12.5$ sq. units."
            },
            {
                "id": "VEC-TEST-025",
                "topic": "Vector Product (or) Cross Product",
                "difficulty": 2,
                "tags": ["Dot and Cross Product", "Angle"],
                "q": "The magnitude of scalar and vector products of two vectors are $48\\sqrt{3}$ and 144 respectively. What is the angle between the two vectors?",
                "options": ["$30^{\\circ}$", "$45^{\\circ}$", "$60^{\\circ}$", "$90^{\\circ}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The magnitude of the scalar (dot) product is $\\vec{A} \\cdot \\vec{B} = AB\\cos\\theta = 48\\sqrt{3}$.<br><b>Step 2:</b> The magnitude of the vector (cross) product is $|\\vec{A} \\times \\vec{B}| = AB\\sin\\theta = 144$.<br><b>Step 3:</b> Divide the cross product magnitude by the dot product to find $\\tan\\theta$: $\\frac{AB\\sin\\theta}{AB\\cos\\theta} = \\frac{144}{48\\sqrt{3}}$.<br><b>Step 4:</b> Simplify: $\\tan\\theta = \\frac{3}{\\sqrt{3}} = \\sqrt{3}$.<br><b>Step 5:</b> Therefore, the angle $\\theta$ is $60^{\\circ}$."
            },
            {
                "id": "VEC-TEST-026",
                "topic": "Vector Product (or) Cross Product",
                "difficulty": 2,
                "tags": ["Area of Parallelogram", "Cross Product"],
                "q": "The adjacent sides of a parallelogram are $\\vec{A}=2\\hat{i}-3\\hat{j}+\\hat{k}$ and $\\vec{B}=-2\\hat{i}+4\\hat{j}-\\hat{k}$. What is the area of the parallelogram?",
                "options": ["4 units", "7 units", "$\\sqrt{5}$ units", "$\\sqrt{8}$ units"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The area of a parallelogram defined by adjacent vectors $\\vec{A}$ and $\\vec{B}$ is given by $|\\vec{A} \\times \\vec{B}|$.<br><b>Step 2:</b> Calculate the cross product: $\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 2 & -3 & 1 \\\\ -2 & 4 & -1 \\end{vmatrix}$.<br><b>Step 3:</b> $\\vec{A} \\times \\vec{B} = \\hat{i}(3 - 4) - \\hat{j}(-2 - (-2)) + \\hat{k}(8 - 6)$.<br><b>Step 4:</b> $\\vec{A} \\times \\vec{B} = -1\\hat{i} + 0\\hat{j} + 2\\hat{k}$.<br><b>Step 5:</b> Find the magnitude: $\\text{Area} = \\sqrt{(-1)^2 + 0^2 + 2^2} = \\sqrt{1 + 4} = \\sqrt{5}$ units."
            },
            {
                "id": "VEC-TEST-027",
                "topic": "Vector Product (or) Cross Product",
                "difficulty": 2,
                "tags": ["Parallel Vectors", "Cross Product"],
                "q": "What is the condition for the vectors $2\\hat{i}+3\\hat{j}-4\\hat{k}$ and $3\\hat{i}-a\\hat{j}+b\\hat{k}$ to be parallel?",
                "options": ["$a=-9/2, b=-6$", "$a=-6, b=-9/2$", "$a=4, b=5$", "$a=8, b=2$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> For two vectors to be parallel, their corresponding components must be strictly proportional.<br><b>Step 2:</b> Set up the ratios: $\\frac{2}{3} = \\frac{3}{-a} = \\frac{-4}{b}$.<br><b>Step 3:</b> Solve for a: $\\frac{2}{3} = \\frac{3}{-a} \\implies -2a = 9 \\implies a = -\\frac{9}{2}$.<br><b>Step 4:</b> Solve for b: $\\frac{2}{3} = \\frac{-4}{b} \\implies 2b = -12 \\implies b = -6$."
            },
            {
                "id": "VEC-TEST-028",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 1,
                "tags": ["Vector Subtraction", "Direction"],
                "q": "If $\\vec{A}=3\\hat{i}-4\\hat{j}$ and $\\vec{B}=-\\hat{i}-4\\hat{j}$ calculate the direction of $\\vec{A}-\\vec{B}$.",
                "options": ["along positive x-axis", "along negative x-axis", "along positive y-axis", "along negative y-axis"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Calculate the difference vector $\\vec{R} = \\vec{A} - \\vec{B}$.<br><b>Step 2:</b> $\\vec{R} = (3\\hat{i}-4\\hat{j}) - (-\\hat{i}-4\\hat{j})$.<br><b>Step 3:</b> $\\vec{R} = (3 - (-1))\\hat{i} + (-4 - (-4))\\hat{j}$.<br><b>Step 4:</b> $\\vec{R} = 4\\hat{i} + 0\\hat{j}$.<br><b>Step 5:</b> Since the vector has only a positive x-component, its direction is directly along the positive x-axis."
            },
            {
                "id": "VEC-TEST-029",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 1,
                "tags": ["Vector Addition", "Resultant Magnitude"],
                "q": "The resultant of the forces $\\vec{F_{1}}=4\\hat{i}-3\\hat{j}$ and $\\vec{F_{2}}=6\\hat{i}+8\\hat{j}$ is:",
                "options": ["$5\\sqrt{5}$", "$10\\hat{i}-5\\hat{j}$", "125", "$-2\\hat{i}-3\\hat{j}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Find the resultant vector by adding the forces: $\\vec{R} = \\vec{F_1} + \\vec{F_2}$.<br><b>Step 2:</b> $\\vec{R} = (4\\hat{i}-3\\hat{j}) + (6\\hat{i}+8\\hat{j}) = 10\\hat{i} + 5\\hat{j}$.<br><b>Step 3:</b> Calculate the magnitude of the resultant: $|\\vec{R}| = \\sqrt{10^2 + 5^2}$.<br><b>Step 4:</b> $|\\vec{R}| = \\sqrt{100 + 25} = \\sqrt{125}$.<br><b>Step 5:</b> Simplify the square root: $\\sqrt{125} = \\sqrt{25 \\times 5} = 5\\sqrt{5}$."
            },
            {
                "id": "VEC-TEST-030",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 1,
                "tags": ["Vector Sum Range", "Inequalities"],
                "q": "The vector sum of two vectors of magnitudes 10 units and 15 units can never be:",
                "options": ["20 units", "22 units", "18 units", "3 units"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The magnitude of the resultant $\\vec{R}$ of two vectors $\\vec{A}$ and $\\vec{B}$ must lie within a specific range: $|\\vec{A} - \\vec{B}| \\le |\\vec{R}| \\le |\\vec{A} + \\vec{B}|$.<br><b>Step 2:</b> Calculate the minimum possible value: $|15 - 10| = 5$ units.<br><b>Step 3:</b> Calculate the maximum possible value: $15 + 10 = 25$ units.<br><b>Step 4:</b> The resultant magnitude must be between 5 and 25. Therefore, it can never be 3 units."
            },
            {
                "id": "VEC-TEST-031",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 3,
                "tags": ["2D Vectors", "Displacement", "Vector Addition"],
                "q": "A car moves 40m due east and turns towards north and moves 30m then turns $45^{\\circ}$ east of north and moves $20\\sqrt{2}\\text{m}$. The net displacement of car is (east is taken positive x-axis, North as positive y-axis):",
                "options": ["$50\\hat{i}+60\\hat{j}$", "$60\\hat{i}+50\\hat{j}$", "$30\\hat{i}+40\\hat{j}$", "$40\\hat{i}+30\\hat{j}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Represent each leg of the journey as a displacement vector.<br><b>Step 2:</b> First leg (East): $\\vec{S_1} = 40\\hat{i}$.<br><b>Step 3:</b> Second leg (North): $\\vec{S_2} = 30\\hat{j}$.<br><b>Step 4:</b> Third leg ($45^{\\circ}$ East of North): $\\vec{S_3} = 20\\sqrt{2}(\\sin 45^{\\circ}\\hat{i} + \\cos 45^{\\circ}\\hat{j}) = 20\\sqrt{2}\\left(\\frac{1}{\\sqrt{2}}\\hat{i} + \\frac{1}{\\sqrt{2}}\\hat{j}\\right) = 20\\hat{i} + 20\\hat{j}$.<br><b>Step 5:</b> The net displacement is the vector sum: $\\vec{S} = \\vec{S_1} + \\vec{S_2} + \\vec{S_3}$.<br><b>Step 6:</b> $\\vec{S} = (40\\hat{i}) + (30\\hat{j}) + (20\\hat{i} + 20\\hat{j}) = 60\\hat{i} + 50\\hat{j}$."
            },
            {
                "id": "VEC-TEST-032",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["3D Vectors", "Magnitude"],
                "q": "A bird moves in such a way that it has a displacement of 12 m towards east, 5 m towards north and 9 m vertically upwards. Find the magnitude of its displacement:",
                "options": ["$5\\sqrt{2}\\text{ m}$", "$5\\sqrt{10}\\text{ m}$", "$5\\sqrt{5}\\text{ m}$", "5 m"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Express the displacement as a 3D vector. Let East be $\\hat{i}$, North be $\\hat{j}$, and Upwards be $\\hat{k}$.<br><b>Step 2:</b> The displacement vector is $\\vec{S} = 12\\hat{i} + 5\\hat{j} + 9\\hat{k}$.<br><b>Step 3:</b> The magnitude of the displacement is $|\\vec{S}| = \\sqrt{12^2 + 5^2 + 9^2}$.<br><b>Step 4:</b> $|\\vec{S}| = \\sqrt{144 + 25 + 81} = \\sqrt{250}$.<br><b>Step 5:</b> Simplify the square root: $\\sqrt{250} = \\sqrt{25 \\times 10} = 5\\sqrt{10}\\text{ m}$."
            },
            {
                "id": "VEC-TEST-033",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 1,
                "tags": ["Resolution of Vectors", "Velocity Components"],
                "q": "An aeroplane is heading north east at a speed of 141.4 $\\text{ms}^{-1}$. The northward component of its velocity is:",
                "options": ["141.4 $\\text{ms}^{-1}$", "100 $\\text{ms}^{-1}$", "zero", "50 $\\text{ms}^{-1}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> \"North East\" means the velocity vector makes an angle of $45^{\\circ}$ with the North axis.<br><b>Step 2:</b> The northward component of the velocity is $v_{north} = v \\cos 45^{\\circ}$.<br><b>Step 3:</b> Substitute the given values: $v_{north} = 141.4 \\times \\frac{1}{\\sqrt{2}}$.<br><b>Step 4:</b> Since $\\sqrt{2} \\approx 1.414$, the value 141.4 can be approximated as $100\\sqrt{2}$.<br><b>Step 5:</b> $v_{north} = 100\\sqrt{2} \\times \\frac{1}{\\sqrt{2}} = 100\\text{ ms}^{-1}$."
            },
            {
                "id": "VEC-TEST-034",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Unit Vectors", "Vector Addition"],
                "q": "The unit vector parallel to the resultant of the vectors $\\vec{A}=4\\hat{i}+3\\hat{j}+6\\hat{k}$ and $\\vec{B}=-\\hat{i}+3\\hat{j}-8\\hat{k}$ is:",
                "options": ["$\\frac{1}{7}(3\\hat{i}+6\\hat{j}-2\\hat{k})$", "$\\frac{1}{7}(3\\hat{i}+6\\hat{j}+2\\hat{k})$", "$\\frac{1}{49}(3\\hat{i}+6\\hat{j}-2\\hat{k})$", "$\\frac{1}{49}(3\\hat{i}-6\\hat{j}+2\\hat{k})$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Find the resultant vector $\\vec{R} = \\vec{A} + \\vec{B}$.<br><b>Step 2:</b> $\\vec{R} = (4\\hat{i}+3\\hat{j}+6\\hat{k}) + (-\\hat{i}+3\\hat{j}-8\\hat{k}) = 3\\hat{i} + 6\\hat{j} - 2\\hat{k}$.<br><b>Step 3:</b> Find the magnitude of the resultant: $|\\vec{R}| = \\sqrt{3^2 + 6^2 + (-2)^2}$.<br><b>Step 4:</b> $|\\vec{R}| = \\sqrt{9 + 36 + 4} = \\sqrt{49} = 7$.<br><b>Step 5:</b> The unit vector is $\\hat{R} = \\frac{\\vec{R}}{|\\vec{R}|} = \\frac{1}{7}(3\\hat{i}+6\\hat{j}-2\\hat{k})$."
            },
            {
                "id": "VEC-TEST-035",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 3,
                "tags": ["Vector Magnitude", "Parallel Vectors"],
                "q": "The vector parallel to $4\\hat{i}-3\\hat{j}+5\\hat{k}$ and whose length is the arithmetic mean of lengths of two vectors $2\\hat{i}-4\\hat{j}+4\\hat{k}$ and $\\hat{i}+\\sqrt{6}\\hat{j}+3\\hat{k}$ is:",
                "options": ["$4\\hat{i}-3\\hat{j}+5\\hat{k}$", "$(4\\hat{i}-3\\hat{j}+5\\hat{k})/\\sqrt{3}$", "$(4\\hat{i}-3\\hat{j}+5\\hat{k})/\\sqrt{2}$", "$(4\\hat{i}-3\\hat{j}+5\\hat{k})/\\sqrt{5}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Calculate the length of the first vector: $L_1 = \\sqrt{2^2 + (-4)^2 + 4^2} = \\sqrt{4 + 16 + 16} = \\sqrt{36} = 6$.<br><b>Step 2:</b> Calculate the length of the second vector: $L_2 = \\sqrt{1^2 + (\\sqrt{6})^2 + 3^2} = \\sqrt{1 + 6 + 9} = \\sqrt{16} = 4$.<br><b>Step 3:</b> The arithmetic mean of their lengths is $L = \\frac{6 + 4}{2} = 5$.<br><b>Step 4:</b> Let the reference vector be $\\vec{V} = 4\\hat{i}-3\\hat{j}+5\\hat{k}$. Its magnitude is $|\\vec{V}| = \\sqrt{16 + 9 + 25} = \\sqrt{50} = 5\\sqrt{2}$.<br><b>Step 5:</b> The required vector must be parallel to $\\vec{V}$ and have a length of 5. The unit vector of $\\vec{V}$ is $\\hat{V} = \\frac{\\vec{V}}{5\\sqrt{2}}$.<br><b>Step 6:</b> The required vector is $5 \\times \\hat{V} = 5 \\times \\frac{4\\hat{i}-3\\hat{j}+5\\hat{k}}{5\\sqrt{2}} = \\frac{4\\hat{i}-3\\hat{j}+5\\hat{k}}{\\sqrt{2}}$."
            },
            {
                "id": "VEC-TEST-036",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Direction Cosines", "3D Vectors"],
                "q": "The direction cosines of a vector $\\vec{A}$ are $\\cos\\alpha=\\frac{4}{5\\sqrt{2}}$, $\\cos\\beta=\\frac{1}{\\sqrt{2}}$, $\\cos\\gamma=\\frac{3}{5\\sqrt{2}}$ then the vector $\\vec{A}$ is:",
                "options": ["$4\\hat{i}+\\hat{j}+3\\hat{k}$", "$4\\hat{i}+5\\hat{j}+3\\hat{k}$", "$4\\hat{i}-5\\hat{j}-3\\hat{k}$", "$\\hat{i}+5\\hat{j}-\\hat{k}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Direction cosines represent the components of a unit vector. To make comparison easier, let's establish a common denominator.<br><b>Step 2:</b> Multiply numerator and denominator of $\\cos\\beta$ by 5: $\\cos\\beta = \\frac{5}{5\\sqrt{2}}$.<br><b>Step 3:</b> Now the direction cosines are proportional to the components 4, 5, and 3.<br><b>Step 4:</b> The vector must be of the form $\\vec{A} = k(4\\hat{i} + 5\\hat{j} + 3\\hat{k})$. Let's check the base vector $4\\hat{i} + 5\\hat{j} + 3\\hat{k}$.<br><b>Step 5:</b> The magnitude of this base vector is $\\sqrt{4^2 + 5^2 + 3^2} = \\sqrt{16 + 25 + 9} = \\sqrt{50} = 5\\sqrt{2}$.<br><b>Step 6:</b> Since the magnitude matches the denominator perfectly, the vector is $4\\hat{i}+5\\hat{j}+3\\hat{k}$."
            },
            {
                "id": "VEC-TEST-037",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Vector Addition", "Angle with Axis"],
                "q": "Given two vectors $\\vec{A}=\\hat{i}-2\\hat{j}-3\\hat{k}$ and $\\vec{B}=4\\hat{i}-2\\hat{j}+6\\hat{k}$. The angle made by $(\\vec{A}+\\vec{B})$ with the X-axis is:",
                "options": ["$30^{\\circ}$", "$45^{\\circ}$", "$60^{\\circ}$", "$90^{\\circ}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> First, find the resultant vector $\\vec{R} = \\vec{A} + \\vec{B}$.<br><b>Step 2:</b> $\\vec{R} = (1+4)\\hat{i} + (-2-2)\\hat{j} + (-3+6)\\hat{k} = 5\\hat{i} - 4\\hat{j} + 3\\hat{k}$.<br><b>Step 3:</b> The angle $\\alpha$ made by a vector with the X-axis is given by $\\cos\\alpha = \\frac{R_x}{|\\vec{R}|}$.<br><b>Step 4:</b> Find the magnitude of $\\vec{R}$: $|\\vec{R}| = \\sqrt{5^2 + (-4)^2 + 3^2} = \\sqrt{25 + 16 + 9} = \\sqrt{50} = 5\\sqrt{2}$.<br><b>Step 5:</b> Calculate $\\cos\\alpha = \\frac{5}{5\\sqrt{2}} = \\frac{1}{\\sqrt{2}}$.<br><b>Step 6:</b> Therefore, the angle $\\alpha = 45^{\\circ}$."
            },
            {
                "id": "VEC-TEST-038",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 1,
                "tags": ["Vector Resolution", "Compass Directions"],
                "q": "To go from town A to town B a plane must fly about 1780 km at an angle of $30^{\\circ}$ West of north. How far West of A is B?",
                "options": ["1542 km", "1452 km", "1254 km", "890 km"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The displacement vector is 1780 km at $30^{\\circ}$ West of North.<br><b>Step 2:</b> This means the angle with the North axis (y-axis) is $30^{\\circ}$.<br><b>Step 3:</b> The component in the West direction (x-axis) is given by $D_{west} = D \\sin\\theta$.<br><b>Step 4:</b> $D_{west} = 1780 \\times \\sin 30^{\\circ} = 1780 \\times 0.5$.<br><b>Step 5:</b> Therefore, B is 890 km West of A."
            },
            {
                "id": "VEC-TEST-039",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Vector Rotation", "2D Vectors"],
                "q": "A vector $\\hat{i}+\\sqrt{3}\\hat{j}$ rotates about its tail through an angle $60^{\\circ}$ in clockwise direction then the new vector is:",
                "options": ["$\\hat{i}+\\sqrt{3}\\hat{j}$", "$3\\hat{i}-4\\hat{j}$", "$2\\hat{j}$", "$2\\hat{i}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Identify the initial magnitude and direction of the vector $\\vec{v} = \\hat{i} + \\sqrt{3}\\hat{j}$.<br><b>Step 2:</b> Magnitude $|\\vec{v}| = \\sqrt{1^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = 2$.<br><b>Step 3:</b> Initial angle with the positive x-axis is $\\tan\\theta = \\frac{y}{x} = \\frac{\\sqrt{3}}{1} \\implies \\theta = 60^{\\circ}$.<br><b>Step 4:</b> Rotating $60^{\\circ}$ clockwise means subtracting $60^{\\circ}$ from the current angle. New angle $= 60^{\\circ} - 60^{\\circ} = 0^{\\circ}$.<br><b>Step 5:</b> The new vector lies entirely along the positive x-axis with the same magnitude (2).<br><b>Step 6:</b> Therefore, the new vector is $2\\hat{i}$."
            },
            {
                "id": "VEC-TEST-040",
                "topic": "Multiplication of a Vector by a Scalar",
                "difficulty": 2,
                "tags": ["Parallel Vectors"],
                "q": "If $\\vec{a}=2\\hat{i}+6\\hat{j}+m\\hat{k}$ and $\\vec{b}=n\\hat{i}+18\\hat{j}+3\\hat{k}$ are parallel to each other then values of m, n are:",
                "options": ["1, 6", "6, 1", "-1, 6", "-1, -6"],
                "correct": 0,
                "sol": "<b>Step 1:</b> For two vectors to be parallel, their corresponding scalar components must be proportional.<br><b>Step 2:</b> Establish the ratios: $\\frac{2}{n} = \\frac{6}{18} = \\frac{m}{3}$.<br><b>Step 3:</b> Simplify the known ratio: $\\frac{6}{18} = \\frac{1}{3}$.<br><b>Step 4:</b> Solve for n: $\\frac{2}{n} = \\frac{1}{3} \\implies n = 6$.<br><b>Step 5:</b> Solve for m: $\\frac{m}{3} = \\frac{1}{3} \\implies m = 1$.<br><b>Step 6:</b> The values of m and n are 1 and 6 respectively."
            },
            {
                "id": "VEC-TEST-041",
                "topic": "Multiplication of a Vector by a Scalar",
                "difficulty": 2,
                "tags": ["Kinematics with Vectors", "Velocity and Acceleration"],
                "q": "A particle has an initial velocity $(6\\hat{i}+8\\hat{j})\\text{ ms}^{-1}$ and an acceleration of $(0.8\\hat{i}+0.6\\hat{j})\\text{ ms}^{-2}$. Its speed after 10s is:",
                "options": ["$20\\text{ ms}^{-1}$", "$7\\sqrt{2}\\text{ ms}^{-1}$", "$10\\text{ ms}^{-1}$", "$14\\sqrt{2}\\text{ ms}^{-1}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Use the vector kinematic equation for velocity: $\\vec{v} = \\vec{u} + \\vec{a}t$.<br><b>Step 2:</b> Substitute the given vectors and time: $\\vec{v} = (6\\hat{i}+8\\hat{j}) + (0.8\\hat{i}+0.6\\hat{j}) \\times 10$.<br><b>Step 3:</b> Distribute the scalar: $\\vec{v} = (6\\hat{i}+8\\hat{j}) + (8\\hat{i}+6\\hat{j})$.<br><b>Step 4:</b> Add the components: $\\vec{v} = (6+8)\\hat{i} + (8+6)\\hat{j} = 14\\hat{i} + 14\\hat{j}$.<br><b>Step 5:</b> The speed is the magnitude of the final velocity vector: $|\\vec{v}| = \\sqrt{14^2 + 14^2}$.<br><b>Step 6:</b> $|\\vec{v}| = \\sqrt{196 + 196} = \\sqrt{392} = 14\\sqrt{2}\\text{ ms}^{-1}$."
            },
            {
                "id": "VEC-TEST-042",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 2,
                "tags": ["Dot Product", "Power Calculation"],
                "q": "A motor boat is going in a river with velocity $\\vec{V}=4\\hat{i}-2\\hat{j}+\\hat{k}\\text{ ms}^{-1}$. If the resisting force due to stream is $\\vec{F}=(5\\hat{i}-10\\hat{j}+6\\hat{k})\\text{N}$. Then the power of the motor boat is:",
                "options": ["100 W", "50 W", "46 W", "23 W"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Power ($P$) is defined as the dot product of Force ($\\vec{F}$) and Velocity ($\\vec{V}$).<br><b>Step 2:</b> $P = \\vec{F} \\cdot \\vec{V} = (5\\hat{i}-10\\hat{j}+6\\hat{k}) \\cdot (4\\hat{i}-2\\hat{j}+\\hat{k})$.<br><b>Step 3:</b> Multiply the corresponding components: $P = (5)(4) + (-10)(-2) + (6)(1)$.<br><b>Step 4:</b> Calculate the sum: $P = 20 + 20 + 6$.<br><b>Step 5:</b> Therefore, the power is 46 W."
            },
            {
                "id": "VEC-TEST-043",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 1,
                "tags": ["Angle Between Vectors", "Dot Product"],
                "q": "The angle between the two vectors $-2\\hat{i}+3\\hat{j}-\\hat{k}$ and $\\hat{i}+2\\hat{j}+4\\hat{k}$ is:",
                "options": ["$0^{\\circ}$", "$90^{\\circ}$", "$180^{\\circ}$", "$45^{\\circ}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The easiest way to check for special angles is to calculate the dot product.<br><b>Step 2:</b> $\\vec{A} \\cdot \\vec{B} = (-2)(1) + (3)(2) + (-1)(4)$.<br><b>Step 3:</b> $\\vec{A} \\cdot \\vec{B} = -2 + 6 - 4 = 0$.<br><b>Step 4:</b> Since the dot product of the two vectors is exactly zero, they are perpendicular to each other.<br><b>Step 5:</b> Therefore, the angle between them is $90^{\\circ}$."
            },
            {
                "id": "VEC-TEST-044",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 2,
                "tags": ["Perpendicular Vectors", "Algebraic Vectors"],
                "q": "If a vector $\\vec{A}=2\\hat{i}+2\\hat{j}+3\\hat{k}$ and $\\vec{B}=3\\hat{i}+6\\hat{j}+n\\hat{k}$ are perpendicular to each other then the value of 'n' is:",
                "options": ["4", "12", "6", "-6"],
                "correct": 3,
                "sol": "<b>Step 1:</b> If two vectors are mutually perpendicular, their dot product must be zero.<br><b>Step 2:</b> Setup the equation: $\\vec{A} \\cdot \\vec{B} = 0$.<br><b>Step 3:</b> Substitute the components: $(2)(3) + (2)(6) + (3)(n) = 0$.<br><b>Step 4:</b> Simplify: $6 + 12 + 3n = 0$.<br><b>Step 5:</b> Solve for n: $18 + 3n = 0 \\implies 3n = -18 \\implies n = -6$."
            },
            {
                "id": "VEC-TEST-045",
                "topic": "Multiplication of a Vector by a Scalar",
                "difficulty": 2,
                "tags": ["Parallel Vectors", "Vector Magnitude"],
                "q": "A vector parallel to the vector $(\\hat{i}+2\\hat{j})$ and having magnitude $3\\sqrt{5}$ units is:",
                "options": ["$3\\hat{i}+6\\hat{j}$", "$6\\hat{i}-3\\hat{j}$", "$4\\hat{i}-2\\hat{j}$", "$\\hat{i}-2\\hat{j}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> A vector parallel to $\\vec{v} = \\hat{i}+2\\hat{j}$ will be a scalar multiple of it, i.e., $k(\\hat{i}+2\\hat{j}) = k\\hat{i} + 2k\\hat{j}$.<br><b>Step 2:</b> The magnitude of this required vector is $\\sqrt{k^2 + (2k)^2} = \\sqrt{5k^2} = k\\sqrt{5}$.<br><b>Step 3:</b> We are given that the magnitude is $3\\sqrt{5}$, so $k\\sqrt{5} = 3\\sqrt{5}$.<br><b>Step 4:</b> Therefore, $k = 3$.<br><b>Step 5:</b> Substitute $k$ back into the parallel vector format: $3(\\hat{i}+2\\hat{j}) = 3\\hat{i} + 6\\hat{j}$."
            },
            {
                "id": "VEC-TEST-046",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 2,
                "tags": ["Vector Component", "Dot Product"],
                "q": "If $\\vec{A}=5\\hat{i}-2\\hat{j}+3\\hat{k}$ and $\\vec{B}=2\\hat{i}+\\hat{j}+2\\hat{k}$, component of $\\vec{B}$ along $\\vec{A}$ is:",
                "options": ["$\\frac{\\sqrt{14}}{38}$", "$\\frac{28}{\\sqrt{38}}$", "$\\frac{\\sqrt{28}}{38}$", "$\\frac{14}{\\sqrt{38}}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The component of a vector $\\vec{B}$ along vector $\\vec{A}$ is given by the formula $\\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{A}|}$.<br><b>Step 2:</b> Calculate the dot product: $\\vec{A} \\cdot \\vec{B} = (5)(2) + (-2)(1) + (3)(2) = 10 - 2 + 6 = 14$.<br><b>Step 3:</b> Calculate the magnitude of $\\vec{A}$: $|\\vec{A}| = \\sqrt{5^2 + (-2)^2 + 3^2} = \\sqrt{25 + 4 + 9} = \\sqrt{38}$.<br><b>Step 4:</b> Substitute these values into the formula: Component $= \\frac{14}{\\sqrt{38}}$."
            },
            {
                "id": "VEC-TEST-047",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 2,
                "tags": ["Perpendicular Vectors", "Quadratic Equation"],
                "q": "If the vectors $\\vec{A}=a\\hat{i}+\\hat{j}-2\\hat{k}$ and $\\vec{B}=a\\hat{i}-a\\hat{j}+\\hat{k}$ are perpendicular to each other then the positive value of 'a' is:",
                "options": ["Zero", "1", "2", "3"],
                "correct": 2,
                "sol": "<b>Step 1:</b> If two vectors are perpendicular, their dot product is zero: $\\vec{A} \\cdot \\vec{B} = 0$.<br><b>Step 2:</b> Calculate the dot product: $(a)(a) + (1)(-a) + (-2)(1) = 0$.<br><b>Step 3:</b> This simplifies to the quadratic equation: $a^2 - a - 2 = 0$.<br><b>Step 4:</b> Factor the equation: $(a - 2)(a + 1) = 0$.<br><b>Step 5:</b> The possible values are $a = 2$ and $a = -1$. The positive value is $2$."
            },
            {
                "id": "VEC-TEST-048",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 2,
                "tags": ["Work and Power", "Kinematics with Vectors"],
                "q": "When a force $(8\\hat{i}+4\\hat{j})$ newton displaces a particle through $(3\\hat{i}-3\\hat{j})$ metre, the power is 0.6W. The time of action of the force is:",
                "options": ["20s", "7.2s", "72s", "2s"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Work done ($W$) is the dot product of Force ($\\vec{F}$) and Displacement ($\\vec{S}$).<br><b>Step 2:</b> $W = \\vec{F} \\cdot \\vec{S} = (8)(3) + (4)(-3) = 24 - 12 = 12\\text{ J}$.<br><b>Step 3:</b> Power ($P$) is defined as Work done per unit time: $P = \\frac{W}{t}$.<br><b>Step 4:</b> Rearrange to solve for time: $t = \\frac{W}{P}$.<br><b>Step 5:</b> Substitute the values: $t = \\frac{12}{0.6} = 20\\text{ s}$."
            },
            {
                "id": "VEC-TEST-049",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 3,
                "tags": ["Vector Identities", "Unit Vectors"],
                "q": "If $\\vec{a}$ and $\\vec{b}$ are two unit vectors and the angle between them is $60^{\\circ}$ then $\\frac{(1+\\vec{a}\\cdot\\vec{b})}{(1-\\vec{a}\\cdot\\vec{b})}$ is:",
                "options": ["2", "3", "0", "1/2"],
                "correct": 1,
                "sol": "<b>Step 1:</b> For unit vectors, $|\\vec{a}| = 1$ and $|\\vec{b}| = 1$. The dot product is $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta$.<br><b>Step 2:</b> Calculate the dot product: $\\vec{a} \\cdot \\vec{b} = (1)(1)\\cos 60^{\\circ} = \\frac{1}{2}$.<br><b>Step 3:</b> Substitute this value into the given expression: $\\frac{1 + 1/2}{1 - 1/2}$.<br><b>Step 4:</b> Simplify the numerator and denominator: $\\frac{3/2}{1/2}$.<br><b>Step 5:</b> The result is $3$."
            },
            {
                "id": "VEC-TEST-050",
                "topic": "Vector Product (or) Cross Product",
                "difficulty": 2,
                "tags": ["Torque", "Cross Product"],
                "q": "If $\\vec{F}=2\\hat{i}+3\\hat{j}-\\hat{k}$ and $\\vec{r}=\\hat{i}-\\hat{j}+6\\hat{k}$ find $\\vec{r}\\times\\vec{F}$:",
                "options": ["$-17\\hat{i}+13\\hat{j}+5\\hat{k}$", "$-17\\hat{i}-13\\hat{j}-5\\hat{k}$", "$3\\hat{i}+4\\hat{j}-5\\hat{k}$", "$-3\\hat{i}-4\\hat{j}+5\\hat{k}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The cross product $\\vec{r} \\times \\vec{F}$ is calculated using a determinant: $\\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & -1 & 6 \\\\ 2 & 3 & -1 \\end{vmatrix}$.<br><b>Step 2:</b> Expand along the first row: $\\hat{i}((-1)(-1) - (6)(3)) - \\hat{j}((1)(-1) - (6)(2)) + \\hat{k}((1)(3) - (-1)(2))$.<br><b>Step 3:</b> Simplify the terms: $\\hat{i}(1 - 18) - \\hat{j}(-1 - 12) + \\hat{k}(3 - (-2))$.<br><b>Step 4:</b> The result is $-17\\hat{i} + 13\\hat{j} + 5\\hat{k}$."
            },
            {
                "id": "VEC-TEST-051",
                "topic": "Vector Product (or) Cross Product",
                "difficulty": 2,
                "tags": ["Area of Triangle", "Cross Product"],
                "q": "Two sides of a triangle are given by $\\hat{i}+\\hat{j}+\\hat{k}$ and $-\\hat{i}+2\\hat{j}+3\\hat{k}$, then area of triangle is:",
                "options": ["$\\sqrt{26}$", "$\\sqrt{26}/2$", "$\\sqrt{46}$", "26"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Let the side vectors be $\\vec{A} = \\hat{i}+\\hat{j}+\\hat{k}$ and $\\vec{B} = -\\hat{i}+2\\hat{j}+3\\hat{k}$. Area $= \\frac{1}{2} |\\vec{A} \\times \\vec{B}|$.<br><b>Step 2:</b> Calculate the cross product: $\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 1 & 1 \\\\ -1 & 2 & 3 \\end{vmatrix}$.<br><b>Step 3:</b> $\\vec{A} \\times \\vec{B} = \\hat{i}(3-2) - \\hat{j}(3 - (-1)) + \\hat{k}(2 - (-1)) = \\hat{i} - 4\\hat{j} + 3\\hat{k}$.<br><b>Step 4:</b> Find the magnitude: $|\\vec{A} \\times \\vec{B}| = \\sqrt{1^2 + (-4)^2 + 3^2} = \\sqrt{1 + 16 + 9} = \\sqrt{26}$.<br><b>Step 5:</b> Area $= \\frac{\\sqrt{26}}{2}$ sq. units."
            },
            {
                "id": "VEC-TEST-052",
                "topic": "Vector Product (or) Cross Product",
                "difficulty": 2,
                "tags": ["Dot and Cross Product", "Angle Between Vectors"],
                "q": "The magnitude of scalar and vector products of two vectors are 144 and $48\\sqrt{3}$ respectively. What is the angle between the two vectors?",
                "options": ["$30^{\\circ}$", "$45^{\\circ}$", "$60^{\\circ}$", "$90^{\\circ}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The magnitude of the scalar (dot) product is $AB\\cos\\theta = 144$.<br><b>Step 2:</b> The magnitude of the vector (cross) product is $AB\\sin\\theta = 48\\sqrt{3}$.<br><b>Step 3:</b> Divide the cross product magnitude by the dot product magnitude: $\\frac{AB\\sin\\theta}{AB\\cos\\theta} = \\frac{48\\sqrt{3}}{144}$.<br><b>Step 4:</b> $\\tan\\theta = \\frac{48\\sqrt{3}}{48 \\times 3} = \\frac{\\sqrt{3}}{3} = \\frac{1}{\\sqrt{3}}$.<br><b>Step 5:</b> Therefore, the angle $\\theta = 30^{\\circ}$."
            },
            {
                "id": "VEC-TEST-053",
                "topic": "Vector Product (or) Cross Product",
                "difficulty": 2,
                "tags": ["Area of Parallelogram", "Cross Product"],
                "q": "Area of a parallelogram formed by vectors $(3\\hat{i}-2\\hat{j}+\\hat{k})\\text{m}$ and $(\\hat{i}+2\\hat{j}+3\\hat{k})\\text{m}$ as adjacent sides is:",
                "options": ["$3\\sqrt{8}\\text{ m}^2$", "$24\\text{ m}^2$", "$8\\sqrt{3}\\text{ m}^2$", "$4\\sqrt{3}\\text{ m}^2$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The area of a parallelogram defined by adjacent vectors $\\vec{A}$ and $\\vec{B}$ is given by $|\\vec{A} \\times \\vec{B}|$.<br><b>Step 2:</b> Calculate the cross product: $\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 3 & -2 & 1 \\\\ 1 & 2 & 3 \\end{vmatrix}$.<br><b>Step 3:</b> $\\vec{A} \\times \\vec{B} = \\hat{i}(-6 - 2) - \\hat{j}(9 - 1) + \\hat{k}(6 - (-2))$.<br><b>Step 4:</b> $\\vec{A} \\times \\vec{B} = -8\\hat{i} - 8\\hat{j} + 8\\hat{k}$.<br><b>Step 5:</b> Find the magnitude: $\\text{Area} = \\sqrt{(-8)^2 + (-8)^2 + 8^2} = \\sqrt{64 + 64 + 64} = \\sqrt{192} = \\sqrt{64 \\times 3} = 8\\sqrt{3}\\text{ m}^2$."
            },
            {
                "id": "VEC-TEST-054",
                "topic": "Vector Product (or) Cross Product",
                "difficulty": 2,
                "tags": ["Parallel Vectors", "Cross Product"],
                "q": "Find the values of x and y for which vectors $\\vec{A}=6\\hat{i}+x\\hat{j}-2\\hat{k}$ and $\\vec{B}=5\\hat{i}-6\\hat{j}-y\\hat{k}$ may be parallel:",
                "options": ["$x=0, y=2/3$", "$x=-36/5, y=5/3$", "$x=-15/3, y=23/5$", "$x=36/3, y=15/14$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> For two vectors to be parallel, their corresponding components must be proportional.<br><b>Step 2:</b> Setup the ratios: $\\frac{6}{5} = \\frac{x}{-6} = \\frac{-2}{-y}$.<br><b>Step 3:</b> Solve for x: $\\frac{6}{5} = \\frac{x}{-6} \\implies 5x = -36 \\implies x = -\\frac{36}{5}$.<br><b>Step 4:</b> Solve for y: $\\frac{6}{5} = \\frac{2}{y} \\implies 6y = 10 \\implies y = \\frac{10}{6} = \\frac{5}{3}$."
            },
            {
                "id": "VEC-TEST-055",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["2D Vectors", "Displacement"],
                "q": "A man travels 1 mile due east, then 5 miles due south, then 2 miles due east and finally 9 miles due north. His displacement is:",
                "options": ["3 miles", "5 miles", "4 miles", "between 5 and 9 miles"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Represent each movement as a vector. Let East be $\\hat{i}$ and North be $\\hat{j}$.<br><b>Step 2:</b> $\\vec{s_1} = 1\\hat{i}$, $\\vec{s_2} = -5\\hat{j}$, $\\vec{s_3} = 2\\hat{i}$, $\\vec{s_4} = 9\\hat{j}$.<br><b>Step 3:</b> Total displacement $\\vec{S} = \\vec{s_1} + \\vec{s_2} + \\vec{s_3} + \\vec{s_4}$.<br><b>Step 4:</b> $\\vec{S} = (1+2)\\hat{i} + (-5+9)\\hat{j} = 3\\hat{i} + 4\\hat{j}$.<br><b>Step 5:</b> The magnitude of displacement is $|\\vec{S}| = \\sqrt{3^2 + 4^2} = \\sqrt{9+16} = \\sqrt{25} = 5$ miles."
            },
            {
                "id": "VEC-TEST-056",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Equilibrium", "Vector Addition"],
                "q": "Three forces $\\vec{F_{1}}=a(\\hat{i}-\\hat{j}+\\hat{k})$, $\\vec{F}_{2}=2\\hat{i}-3\\hat{j}+4\\hat{k}$ and $\\vec{F_{3}}=8\\hat{i}-7\\hat{j}+6\\hat{k}$ act simultaneously on a particle. If the particle is in equilibrium, the value of a is:",
                "options": ["10", "-10", "8", "2"],
                "correct": 1,
                "sol": "<b>Step 1:</b> For a particle to be in equilibrium, the vector sum of all forces acting on it must be zero: $\\vec{F_1} + \\vec{F_2} + \\vec{F_3} = \\vec{0}$.<br><b>Step 2:</b> Write $\\vec{F_1}$ fully distributed: $a\\hat{i} - a\\hat{j} + a\\hat{k}$.<br><b>Step 3:</b> Add the x-components and set to zero: $a + 2 + 8 = 0$.<br><b>Step 4:</b> Solve for a: $a + 10 = 0 \\implies a = -10$.<br><b>Step 5:</b> (Verification with y-components: $-(-10) - 3 - 7 = 10 - 10 = 0$. Verification holds)."
            },
            {
                "id": "VEC-TEST-057",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 3,
                "tags": ["Vector Resolution", "Coordinate Geometry"],
                "q": "If a particle is displaced from (0,0,0) to a point in XY-plane which is at a distance of 4 units in a direction making an angle clock wise $60^{\\circ}$ with the negative x-axis. What is the final position vector of the particle?",
                "options": ["$-2\\hat{i}+2\\sqrt{3}\\hat{j}$", "$2\\hat{i}+2\\sqrt{3}\\hat{j}$", "$2\\hat{j}+2\\sqrt{3}\\hat{k}$", "$2\\sqrt{3}\\hat{j}+2\\hat{k}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The magnitude of the vector is $R = 4$. The reference line is the negative x-axis ($180^{\\circ}$).<br><b>Step 2:</b> \"Clockwise with the negative x-axis\" means rotating upwards into the second quadrant (from $+180^{\\circ}$ back towards $+90^{\\circ}$). The true angle with the positive x-axis is $180^{\\circ} - 60^{\\circ} = 120^{\\circ}$.<br><b>Step 3:</b> The x-component is $x = R\\cos(120^{\\circ}) = 4(-1/2) = -2$.<br><b>Step 4:</b> The y-component is $y = R\\sin(120^{\\circ}) = 4(\\sqrt{3}/2) = 2\\sqrt{3}$.<br><b>Step 5:</b> The final position vector is $-2\\hat{i} + 2\\sqrt{3}\\hat{j}$."
            },
            {
                "id": "VEC-TEST-058",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Direction Cosines", "3D Vectors"],
                "q": "Cosines of angles made by a vector with X, Y axes are $3/5\\sqrt{2}$, $4/5\\sqrt{2}$ respectively. If the magnitude of the vector is $10\\sqrt{2}$ then that vector is:",
                "options": ["$8\\hat{i}+6\\hat{j}-10\\hat{k}$", "$6\\hat{i}-8\\hat{j}-10\\hat{k}$", "$-6\\hat{i}-8\\hat{j}+10\\hat{k}$", "$6\\hat{i}+8\\hat{j}+10\\hat{k}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Direction cosines must satisfy $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$.<br><b>Step 2:</b> Calculate squares: $\\left(\\frac{3}{5\\sqrt{2}}\\right)^2 + \\left(\\frac{4}{5\\sqrt{2}}\\right)^2 + \\cos^2\\gamma = 1$.<br><b>Step 3:</b> $\\frac{9}{50} + \\frac{16}{50} + \\cos^2\\gamma = 1 \\implies \\frac{25}{50} + \\cos^2\\gamma = 1 \\implies 0.5 + \\cos^2\\gamma = 1$.<br><b>Step 4:</b> $\\cos^2\\gamma = 0.5 \\implies \\cos\\gamma = \\frac{1}{\\sqrt{2}} = \\frac{5}{5\\sqrt{2}}$.<br><b>Step 5:</b> The vector components are $A_x = A\\cos\\alpha, A_y = A\\cos\\beta, A_z = A\\cos\\gamma$.<br><b>Step 6:</b> Substitute $A = 10\\sqrt{2}$: $A_x = 10\\sqrt{2}(\\frac{3}{5\\sqrt{2}}) = 6$, $A_y = 10\\sqrt{2}(\\frac{4}{5\\sqrt{2}}) = 8$, $A_z = 10\\sqrt{2}(\\frac{5}{5\\sqrt{2}}) = 10$. The vector is $6\\hat{i}+8\\hat{j}+10\\hat{k}$."
            },
            {
                "id": "VEC-TEST-059",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Direction Cosines", "3D Angles"],
                "q": "If a vector $\\overline{A}$ makes angles $45^{\\circ}$ and $60^{\\circ}$ with x and y axis respectively then the angle made by it with z-axis is:",
                "options": ["$30^{\\circ}$", "$60^{\\circ}$", "$90^{\\circ}$", "$120^{\\circ}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Let $\\alpha$, $\\beta$, and $\\gamma$ be the angles the vector makes with the x, y, and z axes respectively.<br><b>Step 2:</b> We know the fundamental relationship of direction cosines: $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$.<br><b>Step 3:</b> Substitute the given angles: $\\cos^2(45^{\\circ}) + \\cos^2(60^{\\circ}) + \\cos^2\\gamma = 1$.<br><b>Step 4:</b> $\\left(\\frac{1}{\\sqrt{2}}\\right)^2 + \\left(\\frac{1}{2}\\right)^2 + \\cos^2\\gamma = 1 \\implies \\frac{1}{2} + \\frac{1}{4} + \\cos^2\\gamma = 1$.<br><b>Step 5:</b> $\\frac{3}{4} + \\cos^2\\gamma = 1 \\implies \\cos^2\\gamma = \\frac{1}{4} \\implies \\cos\\gamma = \\frac{1}{2}$.<br><b>Step 6:</b> Therefore, $\\gamma = 60^{\\circ}$."
            },
            {
                "id": "VEC-TEST-060",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 3,
                "tags": ["Vector Addition", "Pythagorean Theorem"],
                "q": "A vector which has a magnitude of 8 is added to the vector $\\vec{P}$ which lies along the X-axis. The resultant of these two vectors is a third vector $\\vec{R}$ which lies along the Y-axis and has a magnitude twice that of $\\vec{P}$. The magnitude of $\\vec{P}$ is:",
                "options": ["$\\frac{6}{\\sqrt{5}}$", "$\\frac{8}{\\sqrt{5}}$", "$\\frac{12}{\\sqrt{5}}$", "$\\frac{16}{\\sqrt{5}}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Let $\\vec{Q}$ be the vector with magnitude 8 ($|\\vec{Q}|=8$).<br><b>Step 2:</b> We are given $\\vec{P} + \\vec{Q} = \\vec{R}$. We can rearrange this to $\\vec{Q} = \\vec{R} - \\vec{P}$.<br><b>Step 3:</b> We know $\\vec{P}$ lies on the X-axis, so $\\vec{P} = P\\hat{i}$.<br><b>Step 4:</b> We know $\\vec{R}$ lies on the Y-axis and $|\\vec{R}| = 2|\\vec{P}| = 2P$. So, $\\vec{R} = 2P\\hat{j}$.<br><b>Step 5:</b> Substitute into the equation: $\\vec{Q} = 2P\\hat{j} - P\\hat{i}$.<br><b>Step 6:</b> The magnitude of $\\vec{Q}$ is $\\sqrt{(-P)^2 + (2P)^2} = \\sqrt{P^2 + 4P^2} = \\sqrt{5P^2} = P\\sqrt{5}$.<br><b>Step 7:</b> Since $|\\vec{Q}| = 8$, we have $P\\sqrt{5} = 8 \\implies P = \\frac{8}{\\sqrt{5}}$."
            },
            {
                "id": "VEC-TEST-061",
                "topic": "Multiplication of a Vector by a Scalar",
                "difficulty": 1,
                "tags": ["Vector Magnitude", "Scalar Multiplication"],
                "q": "If $\\vec{V}=3\\hat{i}+4\\hat{j}$ then, with what scalar 'C' must it be multiplied so that $|C\\vec{V}|=7.5$:",
                "options": ["0.5", "2.5", "1.5", "3.5"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Calculate the initial magnitude of the vector: $|\\vec{V}| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5$.<br><b>Step 2:</b> We are given the condition $|C\\vec{V}| = 7.5$.<br><b>Step 3:</b> Since $|C\\vec{V}| = C|\\vec{V}|$, we can substitute the magnitude: $C(5) = 7.5$.<br><b>Step 4:</b> Solve for C: $C = \\frac{7.5}{5} = 1.5$."
            },
            {
                "id": "VEC-TEST-062",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 3,
                "tags": ["3D Geometry", "Dot Product", "Angle Between Vectors"],
                "q": "The angle between the diagonals of a cube with edges of unit length is:",
                "options": ["$\\sin^{-1}(1/3)$", "$\\cos^{-1}(1/3)$", "$\\tan^{-1}(1/3)$", "$\\cot^{-1}(1/3)$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Consider a cube with edges of length 1 aligned with the coordinate axes. Its vertices are at $(0,0,0)$ and $(1,1,1)$.<br><b>Step 2:</b> One body diagonal vector is $\\vec{d_1} = (1-0)\\hat{i} + (1-0)\\hat{j} + (1-0)\\hat{k} = \\hat{i}+\\hat{j}+\\hat{k}$.<br><b>Step 3:</b> Another body diagonal goes from $(1,0,0)$ to $(0,1,1)$, making the vector $\\vec{d_2} = -\\hat{i}+\\hat{j}+\\hat{k}$.<br><b>Step 4:</b> The magnitude of both diagonals is $\\sqrt{1^2 + 1^2 + 1^2} = \\sqrt{3}$.<br><b>Step 5:</b> Calculate the dot product: $\\vec{d_1} \\cdot \\vec{d_2} = (1)(-1) + (1)(1) + (1)(1) = -1 + 1 + 1 = 1$.<br><b>Step 6:</b> Use the dot product formula to find the angle: $\\cos\\theta = \\frac{\\vec{d_1} \\cdot \\vec{d_2}}{|\\vec{d_1}||\\vec{d_2}|} = \\frac{1}{\\sqrt{3}\\sqrt{3}} = \\frac{1}{3}$.<br><b>Step 7:</b> Therefore, $\\theta = \\cos^{-1}(1/3)$."
            },
            {
                "id": "VEC-TEST-063",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["2D Vectors", "Direction Angle"],
                "q": "The angle made by the vector $\\vec{A}=2\\hat{i}+3\\hat{j}$ with Y-axis is:",
                "options": ["$\\tan^{-1}(3/2)$", "$\\tan^{-1}(2/3)$", "$\\sin^{-1}(2/3)$", "$\\cos^{-1}(3/2)$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Let the angle made with the Y-axis be $\\alpha$.<br><b>Step 2:</b> From basic trigonometry for a 2D vector, $\\tan\\alpha = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{A_x}{A_y}$.<br><b>Step 3:</b> Substitute the components: $A_x = 2$ and $A_y = 3$.<br><b>Step 4:</b> $\\tan\\alpha = \\frac{2}{3}$.<br><b>Step 5:</b> Therefore, the angle is $\\alpha = \\tan^{-1}\\left(\\frac{2}{3}\\right)$."
            },
            {
                "id": "VEC-TEST-064",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 2,
                "tags": ["Direction Cosines", "Dot Product"],
                "q": "If $l_1, m_1, n_1$ and $l_2, m_2, n_2$ are the directional cosines of two vectors and $\\theta$ is the angle between them, then their value of $\\cos\\theta$ is:",
                "options": ["$l_1 l_2 + m_1 m_2 + n_1 n_2$", "$l_1 m_1 + m_1 n_1 + n_1 l_1$", "$l_2 m_2 + m_2 n_2 + n_2 l_2$", "$m_1 l_2 + l_2 m_2 + n_1 m_2$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Direction cosines ($l, m, n$) are simply the components of a unit vector. <br><b>Step 2:</b> Let the two unit vectors be $\\hat{u_1} = l_1\\hat{i} + m_1\\hat{j} + n_1\\hat{k}$ and $\\hat{u_2} = l_2\\hat{i} + m_2\\hat{j} + n_2\\hat{k}$.<br><b>Step 3:</b> The angle between two unit vectors is given entirely by their dot product since their magnitudes are 1: $\\cos\\theta = \\frac{\\hat{u_1} \\cdot \\hat{u_2}}{(1)(1)}$.<br><b>Step 4:</b> Perform the dot product: $\\hat{u_1} \\cdot \\hat{u_2} = (l_1)(l_2) + (m_1)(m_2) + (n_1)(n_2)$.<br><b>Step 5:</b> Therefore, $\\cos\\theta = l_1 l_2 + m_1 m_2 + n_1 n_2$."
            },
            {
                "id": "VEC-TEST-065",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 3,
                "tags": ["Vector Properties", "Dot Product"],
                "q": "If $\\vec{A}+\\vec{B}=\\vec{C}$, then magnitude of $\\vec{B}$ is:",
                "options": ["$\\vec{C}-\\vec{A}$", "$C-A$", "$\\sqrt{\\vec{C}\\cdot\\vec{B}-\\vec{A}\\cdot\\vec{B}}$", "$\\sqrt{\\vec{C}\\cdot\\vec{A}-\\vec{B}\\cdot\\vec{A}}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Rearrange the given vector equation: $\\vec{B} = \\vec{C} - \\vec{A}$.<br><b>Step 2:</b> To find the magnitude of $\\vec{B}$, we can take the dot product of $\\vec{B}$ with itself: $|\\vec{B}|^2 = \\vec{B} \\cdot \\vec{B}$.<br><b>Step 3:</b> Substitute the rearranged equation into one of the $\\vec{B}$ vectors: $|\\vec{B}|^2 = \\vec{B} \\cdot (\\vec{C} - \\vec{A})$.<br><b>Step 4:</b> Distribute the dot product: $|\\vec{B}|^2 = \\vec{C} \\cdot \\vec{B} - \\vec{A} \\cdot \\vec{B}$.<br><b>Step 5:</b> Take the square root of both sides: $|\\vec{B}| = \\sqrt{\\vec{C}\\cdot\\vec{B} - \\vec{A}\\cdot\\vec{B}}$."
            },
            {
                "id": "VEC-TEST-066",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 3,
                "tags": ["Vector Algebra", "Dot Product"],
                "q": "If $\\vec{a}=m\\vec{b}+\\vec{c}$. The scalar m is:",
                "options": ["$\\frac{\\vec{a}\\cdot\\vec{b}-\\vec{b}\\cdot\\vec{c}}{b^2}$", "$\\frac{\\vec{c}\\cdot\\vec{b}-\\vec{a}\\cdot\\vec{c}}{a^2}$", "$\\frac{\\vec{c}\\cdot\\vec{a}-\\vec{b}\\cdot\\vec{c}}{c^2}$", "$\\frac{(\\vec{a}\\cdot\\vec{b})(\\vec{b}\\cdot\\vec{c})}{a^2}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> We are given the vector equation $\\vec{a} = m\\vec{b} + \\vec{c}$.<br><b>Step 2:</b> To isolate the scalar $m$, take the dot product of the entire equation with vector $\\vec{b}$.<br><b>Step 3:</b> $\\vec{a} \\cdot \\vec{b} = (m\\vec{b} + \\vec{c}) \\cdot \\vec{b}$.<br><b>Step 4:</b> Distribute the dot product: $\\vec{a} \\cdot \\vec{b} = m(\\vec{b} \\cdot \\vec{b}) + (\\vec{c} \\cdot \\vec{b})$.<br><b>Step 5:</b> Since $\\vec{b} \\cdot \\vec{b} = b^2$, we have $\\vec{a} \\cdot \\vec{b} = mb^2 + \\vec{b} \\cdot \\vec{c}$.<br><b>Step 6:</b> Rearrange and solve for $m$: $mb^2 = \\vec{a} \\cdot \\vec{b} - \\vec{b} \\cdot \\vec{c} \\implies m = \\frac{\\vec{a}\\cdot\\vec{b} - \\vec{b}\\cdot\\vec{c}}{b^2}$."
            },
            {
                "id": "VEC-TEST-067",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 2,
                "tags": ["Perpendicular Vectors", "Kinematics with Vectors"],
                "q": "Velocity and acceleration vectors of charged particle moving perpendicular to the direction of magnetic field at a given instant of time are $\\vec{v}=2\\hat{i}+c\\hat{j}$ and $\\vec{a}=3\\hat{i}+4\\hat{j}$ respectively. Then the value of 'c' is:",
                "options": ["3", "1.5", "-1.5", "-3"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The magnetic force on a moving charge is always perpendicular to its velocity.<br><b>Step 2:</b> Since acceleration is in the direction of the net force, the acceleration vector $\\vec{a}$ is perpendicular to the velocity vector $\\vec{v}$.<br><b>Step 3:</b> For perpendicular vectors, their dot product is zero: $\\vec{v} \\cdot \\vec{a} = 0$.<br><b>Step 4:</b> Calculate the dot product: $(2)(3) + (c)(4) = 0$.<br><b>Step 5:</b> $6 + 4c = 0 \\implies 4c = -6 \\implies c = -1.5$."
            },
            {
                "id": "VEC-TEST-068",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 1,
                "tags": ["Applications of Vectors", "Conceptual"],
                "q": "Dot product is used in the determination of:<br>a) Work done by a force<br>b) Power developed by an automobile moving with uniform velocity.<br>c) The normal flux linked with a coil kept in magnetic field.<br>d) The force acting on a conductor carrying current kept in a magnetic field.",
                "options": ["a, d are true", "b, d are true", "a, b, c are true", "c, d are true"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Evaluate (a): Work done is $W = \\vec{F} \\cdot \\vec{S}$. This uses the dot product.<br><b>Step 2:</b> Evaluate (b): Power is $P = \\vec{F} \\cdot \\vec{v}$. This uses the dot product.<br><b>Step 3:</b> Evaluate (c): Magnetic flux is $\\Phi = \\vec{B} \\cdot \\vec{A}$. This uses the dot product.<br><b>Step 4:</b> Evaluate (d): Magnetic force on a current-carrying conductor is $\\vec{F} = I(\\vec{L} \\times \\vec{B})$. This uses the CROSS product, not the dot product.<br><b>Step 5:</b> Therefore, statements a, b, and c are true."
            },
            {
                "id": "VEC-TEST-069",
                "topic": "Vector Product (or) Cross Product",
                "difficulty": 2,
                "tags": ["Unit Normal Vector", "Cross Product"],
                "q": "The unit vector perpendicular to $\\vec{A}=2\\hat{i}+3\\hat{j}+\\hat{k}$ and $\\vec{B}=\\hat{i}-\\hat{j}+\\hat{k}$ is:",
                "options": ["$\\frac{4\\hat{i}-\\hat{j}-5\\hat{k}}{\\sqrt{42}}$", "$\\frac{4\\hat{i}-\\hat{j}+5\\hat{k}}{\\sqrt{42}}$", "$\\frac{4\\hat{i}+\\hat{j}+5\\hat{k}}{\\sqrt{42}}$", "$\\frac{4\\hat{i}+\\hat{j}-5\\hat{k}}{\\sqrt{42}}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> A vector perpendicular to both $\\vec{A}$ and $\\vec{B}$ is found using their cross product $\\vec{A} \\times \\vec{B}$.<br><b>Step 2:</b> $\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 2 & 3 & 1 \\\\ 1 & -1 & 1 \\end{vmatrix}$.<br><b>Step 3:</b> Expand the determinant: $\\hat{i}((3)(1) - (-1)(1)) - \\hat{j}((2)(1) - (1)(1)) + \\hat{k}((2)(-1) - (3)(1))$.<br><b>Step 4:</b> $\\vec{A} \\times \\vec{B} = \\hat{i}(3 + 1) - \\hat{j}(2 - 1) + \\hat{k}(-2 - 3) = 4\\hat{i} - 1\\hat{j} - 5\\hat{k}$.<br><b>Step 5:</b> Find the magnitude of this vector: $\\sqrt{4^2 + (-1)^2 + (-5)^2} = \\sqrt{16 + 1 + 25} = \\sqrt{42}$.<br><b>Step 6:</b> Divide the cross product by its magnitude to get the unit vector: $\\hat{n} = \\frac{4\\hat{i}-\\hat{j}-5\\hat{k}}{\\sqrt{42}}$."
            },
            {
                "id": "VEC-TEST-070",
                "topic": "Vector Product (or) Cross Product",
                "difficulty": 3,
                "tags": ["Vector Identities", "Cross Product"],
                "q": "Find the value of $(\\vec{a}+\\vec{b})\\times(\\vec{a}-\\vec{b})$:",
                "options": ["$(\\vec{a}\\times\\vec{b})$", "$2(\\vec{a}\\times\\vec{b})$", "$-2(\\vec{a}\\cdot\\vec{b})$", "$-2(\\vec{a}\\times\\vec{b})$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Distribute the cross product mathematically: $(\\vec{a} \\times \\vec{a}) - (\\vec{a} \\times \\vec{b}) + (\\vec{b} \\times \\vec{a}) - (\\vec{b} \\times \\vec{b})$.<br><b>Step 2:</b> Apply cross product properties: The cross product of any vector with itself is zero, so $\\vec{a} \\times \\vec{a} = 0$ and $\\vec{b} \\times \\vec{b} = 0$.<br><b>Step 3:</b> The expression simplifies to: $-\\vec{a} \\times \\vec{b} + \\vec{b} \\times \\vec{a}$.<br><b>Step 4:</b> Apply the anti-commutative property of cross products: $\\vec{b} \\times \\vec{a} = -\\vec{a} \\times \\vec{b}$.<br><b>Step 5:</b> Substitute this back: $-\\vec{a} \\times \\vec{b} - \\vec{a} \\times \\vec{b} = -2(\\vec{a} \\times \\vec{b})$."
            },
            {
                "id": "VEC-TEST-071",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["3D Vectors", "Resultant Magnitude"],
                "q": "A particle has a displacement of 12 m towards east then 5 m towards north and then 6 m vertically upwards the resultant displacement is nearly:",
                "options": ["10.04 m", "12.10 m", "14.32 m", "13.06 m"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Represent the displacement as a 3D vector. Let East be the x-axis, North be the y-axis, and Upwards be the z-axis.<br><b>Step 2:</b> The displacement vector is $\\vec{S} = 12\\hat{i} + 5\\hat{j} + 6\\hat{k}$.<br><b>Step 3:</b> The magnitude of the resultant displacement is $|\\vec{S}| = \\sqrt{x^2 + y^2 + z^2}$.<br><b>Step 4:</b> $|\\vec{S}| = \\sqrt{12^2 + 5^2 + 6^2} = \\sqrt{144 + 25 + 36} = \\sqrt{205}$.<br><b>Step 5:</b> Calculate the square root: $\\sqrt{205} \\approx 14.317$ m. The closest option is 14.32 m."
            },
            {
                "id": "VEC-TEST-072",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 3,
                "tags": ["Equilibrium", "Resolution of Vectors"],
                "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEiT_PG1mAvHeV0oXBp7RiSwinD_WrmBSVuPfZR6jYSLCjjqiC5nfD5qk0hsRTv_BOYWxYRSQGw4Sl1mlE7JHSS7l2xcwvc_nPMNjS1TdY5TOWvXnkkfEfqVZMhnF_onQQNaTGGaQ90J_1ZDnH_ciArITVsFp7uqAKKl15EMEQfv7oldWZdSQAA6D0yjx0X0",
                "q": "Four co-planar concurrent forces are acting on a body as shown in the figure to keep it in equilibrium. Then the values of P and $\\theta$ are:",
                "options": ["$P=4\\text{N}, \\theta=0^{\\circ}$", "$P=2\\text{N}, \\theta=90^{\\circ}$", "$P=2\\text{N}, \\theta=0^{\\circ}$", "$P=4\\text{N}, \\theta=90^{\\circ}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Analyze the forces from the diagram. A force of $\\sqrt{3}$ N points along the +y axis. A force of 1 N points along the +x axis. A force of 2 N points into the 4th quadrant, making an angle of $60^{\\circ}$ with the +x axis.<br><b>Step 2:</b> Vector P lies in the 2nd quadrant, making an angle $\\theta$ with the +y axis.<br><b>Step 3:</b> Because the body is in equilibrium, the sum of all x-components and y-components must independently equal zero.<br><b>Step 4:</b> Sum of x-components: $-P\\sin\\theta + 1 + 2\\cos 60^{\\circ} = 0$. Since $\\cos 60^{\\circ} = 0.5$, we get $-P\\sin\\theta + 1 + 1 = 0 \\implies P\\sin\\theta = 2$.<br><b>Step 5:</b> Sum of y-components: $P\\cos\\theta + \\sqrt{3} - 2\\sin 60^{\\circ} = 0$. Since $\\sin 60^{\\circ} = \\frac{\\sqrt{3}}{2}$, we get $P\\cos\\theta + \\sqrt{3} - \\sqrt{3} = 0 \\implies P\\cos\\theta = 0$.<br><b>Step 6:</b> The only way $P\\cos\\theta = 0$ while $P\\sin\\theta = 2$ is if $\\theta = 90^{\\circ}$ (making $\\cos 90^{\\circ}=0$ and $\\sin 90^{\\circ}=1$).<br><b>Step 7:</b> Substituting $\\theta = 90^{\\circ}$ gives $P(1) = 2 \\implies P = 2\\text{N}$."
            },
            {
                "id": "VEC-TEST-073",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Vector Addition", "Compass Directions"],
                "q": "O is a point on the ground chosen as origin. A body first suffers a displacement of $10\\sqrt{2}\\text{ m}$ North-East, next 10 m north and finally $10\\sqrt{2}\\text{ m}$ North-West. How far it is from the origin?",
                "options": ["30 m north", "30 m south", "30 m west", "30 m east"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Represent the displacements as vectors. Let East be $+x$ ($\\hat{i}$) and North be $+y$ ($\\hat{j}$).<br><b>Step 2:</b> North-East is exactly $45^{\\circ}$ between North and East. $\\vec{S_1} = 10\\sqrt{2}(\\cos 45^{\\circ}\\hat{i} + \\sin 45^{\\circ}\\hat{j}) = 10\\hat{i} + 10\\hat{j}$.<br><b>Step 3:</b> The second displacement is pure North. $\\vec{S_2} = 10\\hat{j}$.<br><b>Step 4:</b> North-West is $45^{\\circ}$ between North and West. $\\vec{S_3} = 10\\sqrt{2}(-\\cos 45^{\\circ}\\hat{i} + \\sin 45^{\\circ}\\hat{j}) = -10\\hat{i} + 10\\hat{j}$.<br><b>Step 5:</b> Sum the vectors: $\\vec{S} = (10\\hat{i} + 10\\hat{j}) + (10\\hat{j}) + (-10\\hat{i} + 10\\hat{j})$.<br><b>Step 6:</b> $\\vec{S} = (10 - 10)\\hat{i} + (10 + 10 + 10)\\hat{j} = 30\\hat{j}$.<br><b>Step 7:</b> The final displacement is 30 m North."
            },
            {
                "id": "VEC-TEST-074",
                "topic": "Addition, Subtraction and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Direction Cosines", "3D Vectors"],
                "q": "If the two directional cosines of a vectors are $\\frac{1}{\\sqrt{2}}$ and $\\frac{1}{\\sqrt{3}}$ then the value of third directional cosine is:",
                "options": ["$\\frac{1}{\\sqrt{6}}$", "$\\frac{1}{\\sqrt{5}}$", "$\\frac{1}{\\sqrt{7}}$", "$\\frac{1}{\\sqrt{10}}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The fundamental property of direction cosines is $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$.<br><b>Step 2:</b> Substitute the given values: $\\left(\\frac{1}{\\sqrt{2}}\\right)^2 + \\left(\\frac{1}{\\sqrt{3}}\\right)^2 + \\cos^2\\gamma = 1$.<br><b>Step 3:</b> Square the fractions: $\\frac{1}{2} + \\frac{1}{3} + \\cos^2\\gamma = 1$.<br><b>Step 4:</b> Find a common denominator to add: $\\frac{3}{6} + \\frac{2}{6} + \\cos^2\\gamma = 1 \\implies \\frac{5}{6} + \\cos^2\\gamma = 1$.<br><b>Step 5:</b> Solve for $\\cos^2\\gamma$: $\\cos^2\\gamma = 1 - \\frac{5}{6} = \\frac{1}{6}$.<br><b>Step 6:</b> Take the square root: $\\cos\\gamma = \\frac{1}{\\sqrt{6}}$."
            },
            {
                "id": "VEC-TEST-075",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 2,
                "tags": ["Work Done", "Dot Product"],
                "q": "A force $\\vec{F}=3\\hat{i}+c\\hat{j}+2\\hat{k}\\text{ N}$ acting on a particle causes a displacement $\\vec{S}=-4\\hat{i}+2\\hat{j}-3\\hat{k}\\text{ m}$. If the work done is 6 joule, the value of c is:",
                "options": ["0", "1", "12", "6"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The work done ($W$) by a constant force is given by the dot product: $W = \\vec{F} \\cdot \\vec{S}$.<br><b>Step 2:</b> We are given $W = 6\\text{ J}$. Setup the equation: $\\vec{F} \\cdot \\vec{S} = 6$.<br><b>Step 3:</b> Perform the dot product: $(3)(-4) + (c)(2) + (2)(-3) = 6$.<br><b>Step 4:</b> Simplify the terms: $-12 + 2c - 6 = 6$.<br><b>Step 5:</b> Combine constant terms: $2c - 18 = 6$.<br><b>Step 6:</b> Solve for c: $2c = 24 \\implies c = 12$."
            },
            {
                "id": "VEC-TEST-076",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 3,
                "tags": ["Perpendicular Vectors", "Dot Product"],
                "q": "If $\\vec{a}$ and $\\vec{b}$ are two unit vectors such that $\\vec{a}+2\\vec{b}$ and $5\\vec{a}-4\\vec{b}$ are perpendicular to each other then the angle between $\\vec{a}$ and $\\vec{b}$ is:",
                "options": ["$120^{\\circ}$", "$90^{\\circ}$", "$60^{\\circ}$", "$45^{\\circ}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Since the two resultant vectors are perpendicular, their dot product must be zero: $(\\vec{a} + 2\\vec{b}) \\cdot (5\\vec{a} - 4\\vec{b}) = 0$.<br><b>Step 2:</b> Distribute the dot product: $5(\\vec{a}\\cdot\\vec{a}) - 4(\\vec{a}\\cdot\\vec{b}) + 10(\\vec{b}\\cdot\\vec{a}) - 8(\\vec{b}\\cdot\\vec{b}) = 0$.<br><b>Step 3:</b> Since $\\vec{a}$ and $\\vec{b}$ are unit vectors, $\\vec{a}\\cdot\\vec{a} = 1$ and $\\vec{b}\\cdot\\vec{b} = 1$. The equation simplifies to: $5(1) + 6(\\vec{a}\\cdot\\vec{b}) - 8(1) = 0$.<br><b>Step 4:</b> Combine constants: $-3 + 6(\\vec{a}\\cdot\\vec{b}) = 0 \\implies \\vec{a}\\cdot\\vec{b} = \\frac{1}{2}$.<br><b>Step 5:</b> We know $\\vec{a}\\cdot\\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta = (1)(1)\\cos\\theta$. Therefore, $\\cos\\theta = \\frac{1}{2}$.<br><b>Step 6:</b> The angle $\\theta$ is $60^{\\circ}$."
            },
            {
                "id": "VEC-TEST-077",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 2,
                "tags": ["Vector Identities", "Dot Product"],
                "q": "If $\\vec{A}=9\\hat{i}-7\\hat{j}+5\\hat{k}$ and $\\vec{B}=3\\hat{i}-2\\hat{j}-6\\hat{k}$ then the value of $(\\vec{A}+\\vec{B})\\cdot(\\vec{A}-\\vec{B})$ is:",
                "options": ["206", "128", "106", "-17"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Expand the dot product algebraically: $(\\vec{A}+\\vec{B}) \\cdot (\\vec{A}-\\vec{B}) = \\vec{A}\\cdot\\vec{A} - \\vec{A}\\cdot\\vec{B} + \\vec{B}\\cdot\\vec{A} - \\vec{B}\\cdot\\vec{B}$.<br><b>Step 2:</b> Because the dot product is commutative ($\\vec{A}\\cdot\\vec{B} = \\vec{B}\\cdot\\vec{A}$), the middle terms cancel out. This leaves $|\\vec{A}|^2 - |\\vec{B}|^2$.<br><b>Step 3:</b> Calculate $|\\vec{A}|^2 = 9^2 + (-7)^2 + 5^2 = 81 + 49 + 25 = 155$.<br><b>Step 4:</b> Calculate $|\\vec{B}|^2 = 3^2 + (-2)^2 + (-6)^2 = 9 + 4 + 36 = 49$.<br><b>Step 5:</b> Subtract the magnitudes squared: $155 - 49 = 106$."
            },
            {
                "id": "VEC-TEST-078",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 2,
                "tags": ["Work Done", "Displacement Vector"],
                "q": "The work done by a force $2\\hat{i}-\\hat{j}+5\\hat{k}$ when it displaces the body from a point (3, 4, 6) to a point (7, 2, 5) is:",
                "options": ["5 units", "7 units", "1 units", "15 units"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Calculate the displacement vector $\\vec{S} = \\vec{r_{final}} - \\vec{r_{initial}}$.<br><b>Step 2:</b> $\\vec{S} = (7-3)\\hat{i} + (2-4)\\hat{j} + (5-6)\\hat{k} = 4\\hat{i} - 2\\hat{j} - \\hat{k}$.<br><b>Step 3:</b> Work done is the dot product of Force and Displacement: $W = \\vec{F} \\cdot \\vec{S}$.<br><b>Step 4:</b> $W = (2\\hat{i}-\\hat{j}+5\\hat{k}) \\cdot (4\\hat{i}-2\\hat{j}-\\hat{k})$.<br><b>Step 5:</b> $W = (2)(4) + (-1)(-2) + (5)(-1) = 8 + 2 - 5 = 5$ units."
            },
            {
                "id": "VEC-TEST-079",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 3,
                "tags": ["Vector Component", "Ratio"],
                "q": "The component of $\\vec{A}$ along $\\vec{B}$ is $\\sqrt{3}$ times that of the component of $\\vec{B}$ along $\\vec{A}$. Then $A:B$ is:",
                "options": ["$1:\\sqrt{3}$", "$\\sqrt{3}:1$", "$2:\\sqrt{3}$", "$\\sqrt{3}:2$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The scalar component of $\\vec{A}$ along $\\vec{B}$ is given by $\\frac{\\vec{A}\\cdot\\vec{B}}{B} = A\\cos\\theta$.<br><b>Step 2:</b> The scalar component of $\\vec{B}$ along $\\vec{A}$ is given by $\\frac{\\vec{A}\\cdot\\vec{B}}{A} = B\\cos\\theta$.<br><b>Step 3:</b> We are given the condition: $A\\cos\\theta = \\sqrt{3}(B\\cos\\theta)$.<br><b>Step 4:</b> Assuming $\\cos\\theta \\neq 0$, we can cancel it from both sides to get $A = \\sqrt{3}B$.<br><b>Step 5:</b> Therefore, the ratio $A:B$ is $\\sqrt{3}:1$."
            },
            {
                "id": "VEC-TEST-080",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 3,
                "tags": ["Orthogonal Projection", "2D Vectors"],
                "q": "If $\\vec{A}=(2\\hat{i}+3\\hat{j})$ and $\\vec{B}=(\\hat{i}-\\hat{j})$ then component of $\\vec{A}$ perpendicular to vector $\\vec{B}$ and in the same plane is:",
                "options": ["$\\frac{5}{2}(\\hat{i}+\\hat{j})$", "$\\frac{5}{\\sqrt{2}}(\\hat{i}+\\hat{j})$", "$\\frac{\\sqrt{5}}{2}(\\hat{i}+\\hat{j})$", "$\\frac{5}{\\sqrt{2}}(\\hat{i}+\\hat{k})$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> First, find the vector component of $\\vec{A}$ parallel to $\\vec{B}$ ($\\vec{A}_{||}$).<br><b>Step 2:</b> $\\vec{A}_{||} = \\left(\\frac{\\vec{A}\\cdot\\vec{B}}{|\\vec{B}|^2}\\right)\\vec{B} = \\frac{(2)(1) + (3)(-1)}{1^2 + (-1)^2}(\\hat{i}-\\hat{j}) = \\frac{2 - 3}{2}(\\hat{i}-\\hat{j}) = -\\frac{1}{2}(\\hat{i}-\\hat{j})$.<br><b>Step 3:</b> The component of $\\vec{A}$ perpendicular to $\\vec{B}$ is $\\vec{A}_{\\perp} = \\vec{A} - \\vec{A}_{||}$.<br><b>Step 4:</b> $\\vec{A}_{\\perp} = (2\\hat{i}+3\\hat{j}) - \\left(-\\frac{1}{2}\\hat{i}+\\frac{1}{2}\\hat{j}\\right)$.<br><b>Step 5:</b> Group the terms: $\\left(2 + \\frac{1}{2}\\right)\\hat{i} + \\left(3 - \\frac{1}{2}\\right)\\hat{j} = \\frac{5}{2}\\hat{i} + \\frac{5}{2}\\hat{j}$.<br><b>Step 6:</b> Factoring out gives $\\frac{5}{2}(\\hat{i}+\\hat{j})$."
            },
            {
                "id": "VEC-TEST-081",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 3,
                "tags": ["Vector Properties", "Dot Product"],
                "q": "If $\\vec{A}+\\vec{B}=\\vec{R}$ and $2\\vec{A}+\\vec{B}$ is perpendicular to $\\vec{B}$ then:",
                "options": ["$A=R$", "$B=2R$", "$B=R$", "$B=A$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Since $2\\vec{A}+\\vec{B}$ is perpendicular to $\\vec{B}$, their dot product is zero: $(2\\vec{A}+\\vec{B})\\cdot\\vec{B} = 0$.<br><b>Step 2:</b> Distribute the dot product: $2\\vec{A}\\cdot\\vec{B} + \\vec{B}\\cdot\\vec{B} = 0 \\implies 2AB\\cos\\theta = -B^2$.<br><b>Step 3:</b> The magnitude of the resultant $\\vec{R}$ is given by $R^2 = A^2 + B^2 + 2AB\\cos\\theta$.<br><b>Step 4:</b> Substitute $2AB\\cos\\theta = -B^2$ into the resultant equation.<br><b>Step 5:</b> $R^2 = A^2 + B^2 - B^2 \\implies R^2 = A^2$.<br><b>Step 6:</b> Taking the positive square root yields $R = A$."
            },
            {
                "id": "VEC-TEST-082",
                "topic": "Scalar Product (or) Dot Product",
                "difficulty": 3,
                "tags": ["Unit Normal Vector", "Trigonometry"],
                "q": "If $\\vec{A}=\\frac{1}{\\sqrt{2}}\\cos\\theta\\hat{i}+\\frac{1}{\\sqrt{2}}\\sin\\theta\\hat{j}$, what will be the unit vector perpendicular to $\\vec{A}$:",
                "options": ["$\\cos\\theta\\hat{i}+\\sin\\theta\\hat{j}$", "$-\\cos\\theta\\hat{i}+\\sin\\theta\\hat{j}$", "$\\frac{\\cos\\theta\\hat{i}+\\sin\\theta\\hat{j}}{\\sqrt{2}}$", "$\\sin\\theta\\hat{i}-\\cos\\theta\\hat{j}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Let the perpendicular unit vector be $\\vec{n} = x\\hat{i} + y\\hat{j}$. Since it is perpendicular to $\\vec{A}$, their dot product must be zero.<br><b>Step 2:</b> $\\vec{A}\\cdot\\vec{n} = \\frac{1}{\\sqrt{2}}\\cos\\theta(x) + \\frac{1}{\\sqrt{2}}\\sin\\theta(y) = 0 \\implies x\\cos\\theta + y\\sin\\theta = 0$.<br><b>Step 3:</b> A simple choice that satisfies this equation is $x = \\sin\\theta$ and $y = -\\cos\\theta$ (or vice versa). This gives the vector $\\sin\\theta\\hat{i} - \\cos\\theta\\hat{j}$.<br><b>Step 4:</b> Verify it is a unit vector: Magnitude = $\\sqrt{\\sin^2\\theta + (-\\cos\\theta)^2} = \\sqrt{1} = 1$.<br><b>Step 5:</b> Therefore, $\\sin\\theta\\hat{i}-\\cos\\theta\\hat{j}$ is the correct perpendicular unit vector."
            },
            {
                "id": "VEC-TEST-083",
                "topic": "Vector Product (or) Cross Product",
                "difficulty": 2,
                "tags": ["Cross Product", "Unit Vectors"],
                "q": "Find the value of $(\\hat{i}+\\hat{j})\\times(\\hat{i}-\\hat{j})$:",
                "options": ["$-2\\hat{k}$", "$2\\hat{k}$", "zero", "$\\hat{k}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Distribute the cross product mathematically: $(\\hat{i}\\times\\hat{i}) - (\\hat{i}\\times\\hat{j}) + (\\hat{j}\\times\\hat{i}) - (\\hat{j}\\times\\hat{j})$.<br><b>Step 2:</b> Use the properties of unit vector cross products: The cross product of any vector with itself is zero, so $\\hat{i}\\times\\hat{i} = 0$ and $\\hat{j}\\times\\hat{j} = 0$.<br><b>Step 3:</b> By definition, $\\hat{i}\\times\\hat{j} = \\hat{k}$, and $\\hat{j}\\times\\hat{i} = -\\hat{k}$.<br><b>Step 4:</b> Substitute these back into the expression: $0 - (\\hat{k}) + (-\\hat{k}) - 0$.<br><b>Step 5:</b> Simplify to get $-2\\hat{k}$."
            },
            {
                "id": "VEC-TEST-084",
                "topic": "Vector Product (or) Cross Product",
                "difficulty": 2,
                "tags": ["Area of Parallelogram", "Diagonals"],
                "q": "The diagonals of a parallelogram are $\\vec{A}=2\\hat{i}-3\\hat{j}+\\hat{k}$ and $\\vec{B}=-2\\hat{i}+4\\hat{j}-\\hat{k}$. What is the area of the parallelogram?",
                "options": ["2 units", "4 units", "$\\sqrt{5}$ units", "$\\frac{\\sqrt{5}}{2}$ units"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The area of a parallelogram when given its diagonals $\\vec{d_1}$ and $\\vec{d_2}$ is $\\frac{1}{2}|\\vec{d_1} \\times \\vec{d_2}|$.<br><b>Step 2:</b> Calculate the cross product: $\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 2 & -3 & 1 \\\\ -2 & 4 & -1 \\end{vmatrix}$.<br><b>Step 3:</b> $\\vec{A} \\times \\vec{B} = \\hat{i}(3-4) - \\hat{j}(-2 - (-2)) + \\hat{k}(8 - 6) = -\\hat{i} + 0\\hat{j} + 2\\hat{k}$.<br><b>Step 4:</b> Find the magnitude of the cross product: $|-\\hat{i} + 2\\hat{k}| = \\sqrt{(-1)^2 + 2^2} = \\sqrt{1 + 4} = \\sqrt{5}$.<br><b>Step 5:</b> The area is $\\frac{1}{2}\\sqrt{5}$ or $\\frac{\\sqrt{5}}{2}$ units."
            }
        ]
    }
};
