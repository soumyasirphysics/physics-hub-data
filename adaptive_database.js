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
            }
        ]
    }
};
