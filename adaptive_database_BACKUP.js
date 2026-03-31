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
                "q": "A pendulum bob of mass m carrying a charge q is at rest in a uniform horizontal electric field of intensity E. The tension in the thread is:<br>",
                "options": ["$\\sqrt{(Eq)^{2}+(mg)^{2}}$", "$\\sqrt{(\\frac{E}{q})^{2}+(\\frac{m}{g})^{2}}$", "$(Eq)^{2}+(mg)^{2}$", "$mg+Eq$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The pendulum bob is in equilibrium under the action of three forces: Tension ($T$) along the string, Weight ($mg$) acting vertically downward, and Electric force ($F_e = Eq$) acting horizontally.<br><b>Step 2:</b> The horizontal and vertical forces form a right-angled triangle with the tension acting as the balancing resultant force.<br><b>Step 3:</b> By vector addition (or Pythagorean theorem for perpendicular vectors), $T^2 = (F_e)^2 + (mg)^2$.<br><b>Step 4:</b> Therefore, $T = \\sqrt{(Eq)^2 + (mg)^2}$."
            },
            {
                "id": "ES-TEST-078",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Superposition Principle", "Geometric Arrangement"],
                "q": "Four charges $10^{-8}$ C, $-2\\times10^{-8}$ C, $+3\\times10^{-8}$ C and $2\\times10^{-8}$ C are placed at the four corners of a square of side 1m. The potential at the centre of the square is:<br>",
                "options": ["zero", "360 V", "180 V", "$360\\sqrt{2}$ V"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Electric potential is a scalar quantity. The total potential at the center is the algebraic sum of the potentials from each corner.<br><b>Step 2:</b> The distance from the center to any corner of a square of side $a=1$m is half the diagonal: $r = \\frac{a}{\\sqrt{2}} = \\frac{1}{\\sqrt{2}}$ m.<br><b>Step 3:</b> $V_{net} = \\frac{1}{4\\pi\\epsilon_0 r} \\sum q = \\frac{k}{r} (q_1 + q_2 + q_3 + q_4)$.<br><b>Step 4:</b> $\\sum q = (1 - 2 + 3 + 2) \\times 10^{-8} = 4 \\times 10^{-8}$ C.<br><b>Step 5:</b> $V_{net} = \\frac{9\\times10^9}{1/\\sqrt{2}} \\times (4\\times10^{-8}) = 9\\times10^9 \\times \\sqrt{2} \\times 4\\times10^{-8} = 360\\sqrt{2}$ V."
            },
            {
                "id": "ES-TEST-079",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 1,
                "tags": ["Properties of Conductors", "Charge Sharing"],
                "q": "Two metal spheres of radii $R_{1}$ and $R_{2}$ are charged to the same potential. The ratio of the charge on the two spheres is:<br>",
                "options": ["1", "1/2", "$R_{1}-R_{2}$", "$\\frac{R_{1}}{R_{2}}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The potential on the surface of a charged conducting sphere is $V = \\frac{1}{4\\pi\\epsilon_0}\\frac{Q}{R}$.<br><b>Step 2:</b> We are given that $V_1 = V_2$.<br><b>Step 3:</b> Therefore, $\\frac{k Q_1}{R_1} = \\frac{k Q_2}{R_2}$.<br><b>Step 4:</b> Rearranging for the ratio of charges gives $\\frac{Q_1}{Q_2} = \\frac{R_1}{R_2}$."
            },
            {
                "id": "ES-TEST-080",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 3,
                "tags": ["Concentric Shells", "Superposition Principle"],
                "q": "Two concentric, thin metallic spherical shells of radii $R_{1}$ and $R_{2}$ ($R_{1}>R_{2}$) bear charges $Q_{1}$ and $Q_{2}$ respectively. Then the potential at radius 'r' between $R_{1}$ and $R_{2}$ will be $\\frac{1}{4\\pi \\epsilon_{0}}$ times:<br>",
                "options": ["$\\frac{Q_{1}+Q_{2}}{r}$", "$\\frac{Q_{1}}{R_{1}}+\\frac{Q_{2}}{r}$", "$\\frac{Q_{1}}{R_{1}}+\\frac{Q_{2}}{R_{2}}$", "$\\frac{Q_{1}}{R_{2}}+\\frac{Q_{2}}{R_{2}}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The total potential at a distance $r$ (where $R_2 < r < R_1$) is the sum of the potentials from both shells: $V = V_{\\text{inner}} + V_{\\text{outer}}$.<br><b>Step 2:</b> The point $r$ is outside the inner shell ($R_2$). The potential behaves as if all its charge $Q_2$ is at the center: $V_{\\text{inner}} = \\frac{1}{4\\pi\\epsilon_0}\\frac{Q_2}{r}$.<br><b>Step 3:</b> The point $r$ is inside the outer shell ($R_1$). The potential anywhere inside a conducting shell is equal to its surface potential: $V_{\\text{outer}} = \\frac{1}{4\\pi\\epsilon_0}\\frac{Q_1}{R_1}$.<br><b>Step 4:</b> Adding them gives $V = \\frac{1}{4\\pi\\epsilon_0} \\left( \\frac{Q_1}{R_1} + \\frac{Q_2}{r} \\right)$."
            },
            {
                "id": "ES-TEST-081",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["Equipotential Surface", "Coordinate Geometry"],
                "q": "An electric charge $10^{-3}\\mu C$ is placed at the origin (0, 0) of X-Y coordinate system. Two points A and B are situated at $(\\sqrt{2},\\sqrt{2})$ and (2, 0) respectively. The potential difference between the points A and B will be:<br>",
                "options": ["9 V", "zero", "2 V", "4.5 V"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Find the distance of point A from the origin: $r_A = \\sqrt{(\\sqrt{2})^2 + (\\sqrt{2})^2} = \\sqrt{2 + 2} = \\sqrt{4} = 2$ units.<br><b>Step 2:</b> Find the distance of point B from the origin: $r_B = \\sqrt{2^2 + 0^2} = \\sqrt{4} = 2$ units.<br><b>Step 3:</b> Since $r_A = r_B$, both points lie on the same circular equipotential surface centered around the origin.<br><b>Step 4:</b> The potential depends only on the distance from the source charge ($V = k\\frac{q}{r}$). Therefore, $V_A = V_B$, and the potential difference is zero."
            },
            {
                "id": "ES-TEST-082",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 2,
                "tags": ["System Potential Energy", "Collinear Charges"],
                "q": "A charge $-2\\mu C$ at the origin, $-1\\mu C$ at +7cm and $1\\mu C$ at -7cm are placed on x - axis. The mutual potential energy of the system is:<br>",
                "options": ["-0.051 J", "-0.045 J", "0.045 J", "-0.064 J"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The mutual potential energy of a 3-charge system is $U = k \\left( \\frac{q_1 q_2}{r_{12}} + \\frac{q_1 q_3}{r_{13}} + \\frac{q_2 q_3}{r_{23}} \\right)$.<br><b>Step 2:</b> Let $q_1 = -2\\mu C$ (at $x=0$), $q_2 = -1\\mu C$ (at $x=0.07$), $q_3 = 1\\mu C$ (at $x=-0.07$).<br><b>Step 3:</b> Distances are $r_{12} = 0.07$ m, $r_{13} = 0.07$ m, and $r_{23} = 0.14$ m.<br><b>Step 4:</b> $U = 9\\times10^9 \\times 10^{-12} \\left( \\frac{(-2)(-1)}{0.07} + \\frac{(-2)(1)}{0.07} + \\frac{(-1)(1)}{0.14} \\right)$.<br><b>Step 5:</b> $U = 9\\times10^{-3} \\left( \\frac{2}{0.07} - \\frac{2}{0.07} - \\frac{1}{0.14} \\right) = 9\\times10^{-3} \\left( 0 - \\frac{1}{0.14} \\right) = -\\frac{0.009}{0.14} = -0.06428$ J."
            },
            {
                "id": "ES-TEST-083",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 3,
                "tags": ["Work Done", "Electric Potential"],
                "q": "Four equal charges Q are placed at the four corners of a square of side 'a' each. Work done in removing a charge -Q from its centre to infinity is:<br>",
                "options": ["zero", "$\\frac{\\sqrt{2}Q^{2}}{4\\pi\\epsilon_{0}a}$", "$\\frac{\\sqrt{2}Q^{2}}{\\pi\\epsilon_{0}a}$", "$\\frac{Q^{2}}{2\\pi\\epsilon_{0}a}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The work done by an external agent is equal to the change in potential energy: $W = U_{\\text{final}} - U_{\\text{initial}}$.<br><b>Step 2:</b> At infinity, the potential energy $U_{\\text{final}} = 0$.<br><b>Step 3:</b> The initial potential energy of the -Q charge at the center is $U_{\\text{initial}} = (-Q)V_{\\text{center}}$.<br><b>Step 4:</b> The potential at the center due to the 4 corners is $V_{\\text{center}} = 4 \\times \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{a/\\sqrt{2}} = \\frac{4\\sqrt{2}Q}{4\\pi\\epsilon_0 a} = \\frac{\\sqrt{2}Q}{\\pi\\epsilon_0 a}$.<br><b>Step 5:</b> $U_{\\text{initial}} = -Q \\left( \\frac{\\sqrt{2}Q}{\\pi\\epsilon_0 a} \\right) = -\\frac{\\sqrt{2}Q^2}{\\pi\\epsilon_0 a}$.<br><b>Step 6:</b> $W = 0 - \\left( -\\frac{\\sqrt{2}Q^2}{\\pi\\epsilon_0 a} \\right) = \\frac{\\sqrt{2}Q^{2}}{\\pi\\epsilon_{0}a}$."
            },
            {
                "id": "ES-TEST-084",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Potential Gradient", "Partial Derivatives"],
                "q": "The electrostatic potential V at any point (x,y,z) in space is given by $V=4x^{2}$. Which of the following statements is true?<br>",
                "options": ["The y and z components of the electrostatic field at any point are not zero", "The x-component of electric field intensity at any point is given by $(-8x\\hat{i})$", "The x-component of electric field intensity at a point (2, 0, 2) is $(-8\\hat{i})$", "The y and z components of the field are non-constant in magnitude"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The electric field is the negative gradient of the potential: $\\vec{E} = -\\nabla V = -\\left( \\frac{\\partial V}{\\partial x}\\hat{i} + \\frac{\\partial V}{\\partial y}\\hat{j} + \\frac{\\partial V}{\\partial z}\\hat{k} \\right)$.<br><b>Step 2:</b> Evaluate the partial derivatives. $\\frac{\\partial V}{\\partial x} = \\frac{d}{dx}(4x^2) = 8x$.<br><b>Step 3:</b> Since $V$ does not depend on $y$ or $z$, $\\frac{\\partial V}{\\partial y} = 0$ and $\\frac{\\partial V}{\\partial z} = 0$.<br><b>Step 4:</b> Therefore, the electric field is $\\vec{E} = -8x\\hat{i}$. The x-component is $(-8x\\hat{i})$, making the second option correct."
            },
            {
                "id": "ES-TEST-085",
                "topic": "Electric Dipole",
                "difficulty": 3,
                "tags": ["Dipole Moment", "System Potential Energy"],
                "q": "The self potential energy of hydrogen chloride whose dipole moment is $3.44\\times10^{-30}$ C-m and separation between hydrogen and chlorine atoms is $1.01\\times10^{-10}$ m is:<br><br>",
                "options": ["$1.036\\times10^{-19}$ J", "$3.2\\times10^{5}$ J", "$4.5\\times10^{7}$ J", "$1.65\\times10^{6}$ J"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The magnitude of the potential energy (work required to separate the dipole components) is $U = k\\frac{q^2}{r}$.<br><b>Step 2:</b> Find the charge $q$ using the dipole moment formula $p = q \\times r$.<br><b>Step 3:</b> $q = \\frac{p}{r} = \\frac{3.44\\times10^{-30}}{1.01\\times10^{-10}} \\approx 3.41\\times10^{-20}$ C.<br><b>Step 4:</b> Substitute $q$ into the energy equation: $U = (9\\times10^9) \\frac{(3.41\\times10^{-20})^2}{1.01\\times10^{-10}}$.<br><b>Step 5:</b> $U = \\frac{9\\times10^9 \\times 11.6\\times10^{-40}}{1.01\\times10^{-10}} = \\frac{104.4\\times10^{-31}}{1.01\\times10^{-10}} \\approx 1.036\\times10^{-19}$ J."
            },
            {
                "id": "ES-TEST-086",
                "topic": "Coulomb's Law",
                "difficulty": 3,
                "tags": ["Equilibrium of Suspended Charges", "Tension"],
                "q": "A ball of mass $m=0.5$ kg is suspended by a thread and a charge $q=0.1$ $\\mu\\text{C}$ is supplied. When a ball with diameter 5 cm and a like charge of same magnitude is brought close to the first ball, but below it, the tension decreases to $1/3$ of its initial value. The distance between centres of the balls is:<br>",
                "options": ["$0.12\\times10^{-2}$ m", "$0.51\\times10^{-4}$ m", "$0.2\\times10^{-5}$ m", "$0.52\\times10^{-2}$ m"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Initial tension $T_1 = mg = 0.5 \\times 9.8 = 4.9$ N.<br><b>Step 2:</b> New tension $T_2 = T_1 / 3 = 1.633$ N.<br><b>Step 3:</b> The decrease in tension is due to the upward electrostatic repulsive force: $F_e = T_1 - T_2 = 4.9 - 1.633 = 3.267$ N.<br><b>Step 4:</b> Use Coulomb's law $F_e = k \\frac{q^2}{r^2} \\implies 3.267 = 9 \\times 10^9 \\frac{(0.1 \\times 10^{-6})^2}{r^2}$.<br><b>Step 5:</b> $r^2 = \\frac{9 \\times 10^{-5}}{3.267} \\approx 27.5 \\times 10^{-6}$ m$^2 \\implies r \\approx 5.24 \\times 10^{-3}$ m $= 0.52 \\times 10^{-2}$ m."
            },
            {
                "id": "ES-TEST-087",
                "topic": "Coulomb's Law",
                "difficulty": 2,
                "tags": ["Superposition Principle", "Symmetry"],
                "q": "Five point charges each +q, are placed on five vertices of a regular hexagon of side L. The magnitude of the force on a point charge of value -q placed at the centre of the hexagon (in newton) is:<br>",
                "options": ["Zero", "$\\frac{\\sqrt{3}q^{2}}{4\\pi\\epsilon_{0}L^{2}}$", "$\\frac{q^{2}}{4\\pi\\epsilon_{0}L^{2}}$", "$\\frac{q^{2}}{4\\sqrt{3}\\pi\\epsilon_{0}L^{2}}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> If all six vertices had +q charges, the net force on a charge at the center would be exactly zero due to symmetry.<br><b>Step 2:</b> Having five +q charges is equivalent to having all six +q charges plus a single -q charge at the missing vertex.<br><b>Step 3:</b> The center is at a distance L from all vertices.<br><b>Step 4:</b> The net force is solely due to the equivalent single uncancelled charge, so $F = \\frac{1}{4\\pi\\epsilon_{0}}\\frac{q^{2}}{L^{2}}$."
            },
            {
                "id": "ES-TEST-088",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Oscillation of Charge", "Restoring Force"],
                "q": "Two equal negative charges -q each are fixed at points (0, -a) and (0,a) on y-axis. A positive charge Q is released from rest at the point (2a, 0) on the x-axis. The charge Q will:-",
                "options": ["execute simple harmonic motion about the origin", "move to the origin and remain at rest", "move to infinity", "execute oscillatory but not simple harmonic motion"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The force on the positive charge Q is always directed towards the origin along the x-axis. As it crosses the origin, its inertia carries it to the negative x-axis, and the force reverses, causing oscillation.<br><b>Step 2:</b> The magnitude of the restoring force is $F = \\frac{2kQqx}{(a^2 + x^2)^{3/2}}$.<br><b>Step 3:</b> For Simple Harmonic Motion (SHM), $F$ must be strictly proportional to $x$, which is only mathematically true if the displacement is very small ($x \\ll a$).<br><b>Step 4:</b> Since Q is released from a large distance $x = 2a$, this condition is not met. Therefore, it will execute oscillatory motion, but not SHM."
            },
            {
                "id": "ES-TEST-089",
                "topic": "Coulomb's Law",
                "difficulty": 3,
                "tags": ["Dielectrics", "Electric Force"],
                "q": "The force of attraction between two charges separated by certain distance in air is $F_{1}$. If the space between the charges is completely filled with dielectric of constant 4 the force becomes $F_{2}$. If half of the distance between the charges is filled with same dielectric the force between the charges is $F_{3}$. Then $F_{1}:F_{2}:F_{3}$ is:",
                "options": ["16:9:4", "9:36:16", "4:1:2", "36:9:16"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Force in air is $F_1 = k\\frac{q_1q_2}{d^2}$.<br><b>Step 2:</b> Force in full dielectric is $F_2 = \\frac{F_1}{K} = \\frac{F_1}{4}$. Thus, $F_1:F_2 = 4:1$.<br><b>Step 3:</b> For a partial dielectric, the equivalent effective distance in air is $d' = d_{air} + d_{medium}\\sqrt{K} = \\frac{d}{2} + \\frac{d}{2}\\sqrt{4} = \\frac{d}{2} + d = \\frac{3d}{2}$.<br><b>Step 4:</b> The new force is $F_3 = k\\frac{q_1q_2}{(3d/2)^2} = \\frac{4}{9} k\\frac{q_1q_2}{d^2} = \\frac{4}{9}F_1$.<br><b>Step 5:</b> Combining the ratios gives $F_1 : F_1/4 : 4F_1/9$. Multiply by 36 to clear fractions: $36 : 9 : 16$."
            },
            {
                "id": "ES-TEST-090",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Pendulum in Electric Field", "Time Period"],
                "q": "A bob of a simple pendulum of mass 40gm with a positive charge $4\\times10^{-6}$ C is oscillating with a time period $T_{1}$. An electric field of intensity $3.6\\times10^{4}$ N/C is applied vertically upwards. Now the time period is $T_{2}$. The value of $\\frac{T_{2}}{T_{1}}$ is $(g=10\\text{m/s}^{2})$:-",
                "options": ["0.16", "0.64", "1.25", "0.8"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Initial time period $T_1 = 2\\pi\\sqrt{\\frac{L}{g}}$.<br><b>Step 2:</b> The electric force acts upwards: $F_e = qE = 4\\times10^{-6} \\times 3.6\\times10^4 = 0.144$ N.<br><b>Step 3:</b> The upward acceleration provided by the field is $a_e = \\frac{F_e}{m} = \\frac{0.144}{0.04} = 3.6$ m/s$^2$.<br><b>Step 4:</b> The effective gravity pulling the bob down is reduced: $g' = g - a_e = 10 - 3.6 = 6.4$ m/s$^2$.<br><b>Step 5:</b> Ratio $\\frac{T_2}{T_1} = \\sqrt{\\frac{g}{g'}} = \\sqrt{\\frac{10}{6.4}} = \\sqrt{\\frac{100}{64}} = \\frac{10}{8} = 1.25$."
            },
            {
                "id": "ES-TEST-091",
                "topic": "Electric Field",
                "difficulty": 1,
                "tags": ["Work and Energy", "Kinematics of Particles"],
                "q": "A particle of mass m and charge q is placed at rest in a uniform electric field E and then released. The kinetic energy attained by the particle after moving a distance y is:-",
                "options": ["$qEy^{2}$", "$qE^{2}y$", "$qEy$", "$q^{2}Ey$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The electrostatic force acting on the particle is $F = qE$.<br><b>Step 2:</b> By the work-energy theorem, the kinetic energy attained from rest is equal to the work done by the field.<br><b>Step 3:</b> Work $W = F \\times \\text{displacement} = (qE) \\times y$.<br><b>Step 4:</b> Therefore, Kinetic Energy $= qEy$."
            },
            {
                "id": "ES-TEST-092",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Equilibrium on Incline", "Friction"],
                "q": "A particle of mass 1kg and carrying 0.01C is at rest on an inclined plane of angle $30^{\\circ}$ with horizontal when an electric field of $\\frac{490}{\\sqrt{3}}$ NC$^{-1}$ is applied parallel to horizontal. The coefficient of friction is:-",
                "options": ["0.5", "$\\frac{1}{\\sqrt{3}}$", "$\\frac{\\sqrt{3}}{2}$", "$\\frac{\\sqrt{3}}{7}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Resolve forces along the incline. Downward weight component $= mg\\sin 30^{\\circ} = 1 \\times 9.8 \\times 0.5 = 4.9$ N.<br><b>Step 2:</b> Upward electrostatic component $= qE\\cos 30^{\\circ} = (0.01 \\times \\frac{490}{\\sqrt{3}}) \\times \\frac{\\sqrt{3}}{2} = 2.45$ N.<br><b>Step 3:</b> Net sliding force is $4.9 - 2.45 = 2.45$ N down the incline. Static friction $f$ must balance this.<br><b>Step 4:</b> Normal reaction $N = mg\\cos 30^{\\circ} + qE\\sin 30^{\\circ} = (9.8 \\times \\frac{\\sqrt{3}}{2}) + (\\frac{4.9}{\\sqrt{3}} \\times 0.5) = 4.9\\sqrt{3} + \\frac{2.45}{\\sqrt{3}} = \\frac{17.15}{\\sqrt{3}}$ N.<br><b>Step 5:</b> For limiting equilibrium, coefficient of friction $\\mu = \\frac{f}{N} = \\frac{2.45}{17.15/\\sqrt{3}} = \\frac{2.45\\sqrt{3}}{17.15} = \\frac{\\sqrt{3}}{7}$."
            },
            {
                "id": "ES-TEST-093",
                "topic": "Electric Field",
                "difficulty": 2,
                "tags": ["Equilibrium", "Friction"],
                "q": "A sphere carrying charge 0.01 C is kept at rest without falling down, touching a vertical wall by applying a horizontal electric field 100 N/C. If the coefficient of friction between the sphere and the wall is 0.2, the weight of the sphere is:-",
                "options": ["4 N", "2 N", "20 N", "0.2 N"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The horizontal electric force pushes the sphere against the wall, providing the normal reaction: $N = qE = 0.01 \\times 100 = 1$ N.<br><b>Step 2:</b> The maximum static frictional force pointing vertically upwards is $f = \\mu N = 0.2 \\times 1 = 0.2$ N.<br><b>Step 3:</b> For the sphere to remain suspended at rest, its downward weight must be perfectly balanced by this upward frictional force.<br><b>Step 4:</b> Therefore, Weight $= f = 0.2$ N."
            },
            {
                "id": "ES-TEST-094",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 3,
                "tags": ["Concentric Shells", "Potential Difference"],
                "q": "A solid conducting sphere having a charge Q is surrounded by an uncharged concentric conducting spherical shell. The potential difference between the surface of solid sphere and the shell is V. The shell is now given a charge -3Q. The new potential difference between the same surfaces will be:-",
                "options": ["2V", "4V", "V", "2V"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The potential of the inner solid sphere is $V_{in} = \\frac{kQ}{r_{in}} + \\frac{kQ_{shell}}{r_{out}}$.<br><b>Step 2:</b> The potential of the outer shell is $V_{out} = \\frac{kQ}{r_{out}} + \\frac{kQ_{shell}}{r_{out}}$.<br><b>Step 3:</b> The potential difference is $\\Delta V = V_{in} - V_{out} = kQ\\left(\\frac{1}{r_{in}} - \\frac{1}{r_{out}}\\right)$.<br><b>Step 4:</b> Notice that the charge on the outer shell ($Q_{shell}$) mathematically cancels out in the difference equation. Therefore, adding -3Q to the outer shell does not change the potential difference. It remains V."
            },
            {
                "id": "ES-TEST-095",
                "topic": "Electric Potential and Potential Energy",
                "difficulty": 3,
                "tags": ["Conservation of Energy", "Kinematics of Particles"],
                "q": "An electron travelling from infinity with velocity 'v' into an electric field due to two stationary electrons separated by a distance of 2m. If it comes to rest when it reaches the mid point of the line joining the stationary electrons. The initial velocity 'v' of the electron is:",
                "options": ["$16$ m/s", "$32$ m/s", "$16\\sqrt{2}$ m/s", "$32\\sqrt{2}$ m/s"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The midpoint is 1m from each stationary electron. The electrostatic potential at the midpoint is $V = \\frac{k(-e)}{1} + \\frac{k(-e)}{1} = -2ke$.<br><b>Step 2:</b> The potential energy of the incoming electron (-e) exactly at the midpoint is $U = qV = (-e)(-2ke) = 2ke^2$.<br><b>Step 3:</b> Apply conservation of energy: Initial K.E. = Final P.E. $\\implies \\frac{1}{2}mv^2 = 2ke^2$.<br><b>Step 4:</b> Solve for velocity squared: $v^2 = \\frac{4ke^2}{m} = \\frac{4 \\times 9\\times10^9 \\times (1.6\\times10^{-19})^2}{9.1\\times10^{-31}} = \\frac{36 \\times 2.56 \\times 10^{-29}}{9.1\\times10^{-31}} \\approx 1012$.<br><b>Step 5:</b> $v = \\sqrt{1012} \\approx 31.8$ m/s, which is closest to $32$ m/s."
            },
            {
                "id": "ES-TEST-096",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Potential Gradient", "Differentiation"],
                "q": "The electric potential at a point (x, 0, 0) is given by $V=\\left[\\frac{1000}{x}+\\frac{1500}{x^{2}}+\\frac{500}{x^{3}}\\right]$, then the electric field at x = 1 m is (in volt/m):",
                "options": ["$-5500$", "$5500$", "$\\sqrt{5500}\\hat{i}$", "zero"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The electric field is the negative gradient of potential: $E_x = -\\frac{dV}{dx}$.<br><b>Step 2:</b> Differentiate the given potential function: $\\frac{dV}{dx} = -\\frac{1000}{x^2} - \\frac{3000}{x^3} - \\frac{1500}{x^4}$.<br><b>Step 3:</b> Evaluate the derivative at $x = 1$ m: $\\frac{dV}{dx} = -1000 - 3000 - 1500 = -5500$.<br><b>Step 4:</b> Calculate the field magnitude: $E_x = -(-5500) = 5500$ V/m."
            },
            {
                "id": "ES-TEST-097",
                "topic": "Electric Dipole",
                "difficulty": 3,
                "tags": ["General Point Field", "Vectors"],
                "q": "A small electric dipole is placed at origin with its dipole moment directed along positive x-axis. The direction of electric field at point $(2,2\\sqrt{2},0)$ is:",
                "options": ["along z-axis", "along y-axis", "along negative y-axis", "along negative z-axis"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The position vector of the point is $\\vec{r} = 2\\hat{i} + 2\\sqrt{2}\\hat{j}$. The distance squared is $r^2 = 2^2 + (2\\sqrt{2})^2 = 4 + 8 = 12$.<br><b>Step 2:</b> The dipole moment is along the x-axis: $\\vec{p} = p\\hat{i}$.<br><b>Step 3:</b> The general electric field formula is $\\vec{E} = \\frac{k}{r^3} [3(\\vec{p} \\cdot \\hat{r})\\hat{r} - \\vec{p}]$.<br><b>Step 4:</b> Calculate the dot product: $\\vec{p} \\cdot \\vec{r} = (p\\hat{i}) \\cdot (2\\hat{i} + 2\\sqrt{2}\\hat{j}) = 2p$.<br><b>Step 5:</b> Substitute into the proportional field equation: $\\vec{E} \\propto 3\\frac{2p}{12}(2\\hat{i} + 2\\sqrt{2}\\hat{j}) - p\\hat{i} = \\frac{p}{2}(2\\hat{i} + 2\\sqrt{2}\\hat{j}) - p\\hat{i} = p\\hat{i} + p\\sqrt{2}\\hat{j} - p\\hat{i} = p\\sqrt{2}\\hat{j}$.<br><b>Step 6:</b> The resultant vector is purely in the positive $\\hat{j}$ direction, which means it points precisely along the y-axis."
            },
            {
                "id": "ES-TEST-098",
                "topic": "Electric Dipole",
                "difficulty": 2,
                "tags": ["Work Done", "Torque"],
                "q": "Two charges $+3.2\\times10^{-19}$ C and $-3.2\\times10^{-19}$ C placed $2.4 \\text{ \\AA}$ apart form an electric dipole. It is placed in a uniform electric field of intensity $4\\times10^{5}$ V/m. The work done to rotate the electric dipole from the equilibrium position by $180^{\\circ}$ is:",
                "options": ["$3\\times10^{-23}$ J", "$6\\times10^{-23}$ J", "$12\\times10^{-23}$ J", "Zero"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Calculate the dipole moment $p = q \\times d = 3.2\\times10^{-19} \\times 2.4\\times10^{-10} = 7.68\\times10^{-29}$ C$\\cdot$m.<br><b>Step 2:</b> The work done to rotate a dipole from stable equilibrium ($0^{\\circ}$) to $180^{\\circ}$ is $W = pE(1 - \\cos 180^{\\circ}) = 2pE$.<br><b>Step 3:</b> Substitute the known values: $W = 2 \\times 7.68\\times10^{-29} \\times 4\\times10^5 = 61.44\\times10^{-24}$ J.<br><b>Step 4:</b> Converting to proper scientific notation gives $6.144\\times10^{-23}$ J, which matches approximately with option $6\\times10^{-23}$ J."
            },
            {
                "id": "ES-TEST-099",
                "topic": "Electric Dipole",
                "difficulty": 3,
                "tags": ["SHM of Dipole", "Time Period"],
                "q": "An electric dipole is made up of two particles having charges $+1\\mu\\text{C}$ mass 1 kg and other with charge $-1\\mu\\text{C}$ and mass 1 kg separated by distance 1m. It is in equilibrium in a uniform electric field of $20\\times10^{3}$ V/m. If the dipole is deflected through angle $2^{\\circ}$, time taken by it to come again in equilibrium is:",
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
                "q": "Some equipotential surfaces are shown in figure. The electric field strength is:",
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
    },
    
    "Motion in a Straight Line": {
        "classTarget": "Class 11",
        "topics": ["Displacement and Distance", "Speed and Velocity", "Acceleration", "Relative Velocity", "Motion Under Gravity", "Graphs"],
        "questions": [
            {
                "id": "KIN-TEST-001",
                "topic": "Displacement and Distance",
                "difficulty": 2,
                "tags": ["Circular Motion", "Ratio"],
                "q": "A body is moving along the circumference of a circle of radius 'R' and completes half of the revolution. Then, the ratio of its displacement to distance is:",
                "options": ["$\\pi:2$", "2:1", "$2:\\pi$", "1:2"],
                "correct": 2,
                "sol": "<b>Step 1:</b> When a body completes half a revolution along a circle, it reaches the diametrically opposite point.<br><b>Step 2:</b> The displacement is the shortest straight-line distance between the initial and final points, which is the diameter: $2R$.<br><b>Step 3:</b> The distance covered is half the circumference of the circle: $\\pi R$.<br><b>Step 4:</b> The ratio of displacement to distance is $\\frac{2R}{\\pi R} = 2:\\pi$."
            },
            {
                "id": "KIN-TEST-002",
                "topic": "Displacement and Distance",
                "difficulty": 2,
                "tags": ["Circular Motion", "Periodic Motion"],
                "q": "A body completes one round of a circle of radius 'R' in 20 seconds. The displacement of the body after 45 seconds is:",
                "options": ["$\\frac{R}{\\sqrt{2}}$", "$\\sqrt{2}R$", "$2\\sqrt{R}$", "2R"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The time period for one complete revolution is 20 seconds.<br><b>Step 2:</b> In 45 seconds, the body completes $\\frac{45}{20} = 2.25$ revolutions.<br><b>Step 3:</b> After 2 complete revolutions (40 seconds), the displacement is zero because the body returns to its starting point.<br><b>Step 4:</b> In the remaining 5 seconds, it completes $0.25$ (or $\\frac{1}{4}$) of a revolution, moving through an angle of $90^{\\circ}$ along the circle.<br><b>Step 5:</b> The displacement forms the hypotenuse of a right-angled triangle with two radii as the base and height: $\\sqrt{R^2 + R^2} = \\sqrt{2R^2} = \\sqrt{2}R$."
            },
            {
                "id": "KIN-TEST-003",
                "topic": "Speed and Velocity",
                "difficulty": 2,
                "tags": ["Average Speed", "Kinematics"],
                "q": "If a body covers first half of its journey with uniform speed $v_{1}$, and the second half of the journey with uniform speed $v_{2}$, then the average speed is:",
                "options": ["$v_{1}+v_{2}$", "$\\frac{2v_{1}v_{2}}{v_{1}+v_{2}}$", "$\\frac{v_{1}v_{2}}{v_{1}+v_{2}}$", "$v_{1}v_{2}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Average speed is defined as the total distance divided by the total time taken.<br><b>Step 2:</b> Let the total distance be $2S$. The first half distance $S$ is covered at speed $v_1$, and the second half $S$ at speed $v_2$.<br><b>Step 3:</b> The time taken for the first half is $t_1 = \\frac{S}{v_1}$, and for the second half is $t_2 = \\frac{S}{v_2}$.<br><b>Step 4:</b> Average Speed $= \\frac{2S}{t_1 + t_2} = \\frac{2S}{\\frac{S}{v_1} + \\frac{S}{v_2}}$.<br><b>Step 5:</b> Cancel $S$ and simplify the denominator: Average Speed $= \\frac{2}{\\frac{v_2 + v_1}{v_1 v_2}} = \\frac{2v_{1}v_{2}}{v_{1}+v_{2}}$."
            },
            {
        "id": "KIN-TEST-004",
        "topic": "Speed and Velocity",
        "difficulty": 2,
        "tags": ["Average Velocity", "1D Motion"],
        "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEgBgFms-iffheeK0MEOkeZcTOp-IJ_E5iWg97bfelNByMNZSSq_MTzSoVQ7yPLxkqNVhp1_RFqeHVLl1S_wFfGYLrKwzMAfFcNxld_rYlJNApP9CVeHu2T2w4Y16MYqIgxwMQj0VbQGdzIIomCbsTUXPnuGNbo-VBTGt4M4YMmOK1iXLFJ7DS7_5-r58LAe",
        "q": "A car is moving along a straight line, say OP in figure. It moves from O to P in 18 s and return from P to Q in 6 s. What are the average velocity and average speed of the car in going from O to P and back to Q?",
        "options": ["$10\\text{ ms}^{-1}, 20\\text{ ms}^{-1}$", "$20\\text{ ms}^{-1}, 10\\text{ ms}^{-1}$", "$10\\text{ ms}^{-1}, 10\\text{ ms}^{-1}$", "$20\\text{ ms}^{-1}, 20\\text{ ms}^{-1}$"],
        "correct": 0,
        "sol": "<b>Step 1:</b> Calculate the total time taken: $t = 18\\text{ s} + 6\\text{ s} = 24\\text{ s}$.<br><b>Step 2:</b> Calculate the net displacement from the origin O to final point Q using the values from the figure. Displacement $= 240\\text{ m} - 0\\text{ m} = 240\\text{ m}$.<br><b>Step 3:</b> Average Velocity $= \\frac{\\text{Displacement}}{\\text{Total Time}} = \\frac{240}{24} = 10\\text{ ms}^{-1}$.<br><b>Step 4:</b> Calculate the total path length (distance): O to P is 360 m, and P back to Q is $360 - 240 = 120\\text{ m}$. Total distance $= 360 + 120 = 480\\text{ m}$.<br><b>Step 5:</b> Average Speed $= \\frac{\\text{Total Distance}}{\\text{Total Time}} = \\frac{480}{24} = 20\\text{ ms}^{-1}$."
    },
            {
                "id": "KIN-TEST-005",
                "topic": "Speed and Velocity",
                "difficulty": 2,
                "tags": ["Average Velocity", "Uniform Acceleration"],
                "q": "For a body moving with uniform acceleration 'a', initial and final velocities in a time interval 't' are 'u' and 'v' respectively. Then, its average velocity in the time interval 't' is:",
                "options": ["$v+at$", "$v-at$", "$v-\\frac{at}{2}$", "$u-\\frac{at}{2}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> For a body undergoing uniform acceleration, the average velocity over a time interval is the arithmetic mean of the initial and final velocities: $v_{avg} = \\frac{u + v}{2}$.<br><b>Step 2:</b> From the first equation of motion, we know $v = u + at$, which can be rearranged as $u = v - at$.<br><b>Step 3:</b> Substitute this expression for $u$ into the average velocity formula: $v_{avg} = \\frac{(v - at) + v}{2}$.<br><b>Step 4:</b> Simplify the expression: $v_{avg} = \\frac{2v - at}{2} = v - \\frac{at}{2}$."
            },
            {
                "id": "KIN-TEST-006",
                "topic": "Acceleration",
                "difficulty": 2,
                "tags": ["Vector Kinematics", "Change in Velocity"],
                "q": "A body moves with a velocity of 3 m/s due east and then turns due north to travel with the same velocity. If the total time of travel is 6s, the acceleration of the body is:",
                "options": ["$\\sqrt{3}\\text{ m/s}^{2}$ towards north west", "$\\frac{1}{\\sqrt{2}}\\text{ m/s}^{2}$ towards north west", "$\\sqrt{2}\\text{ m/s}^{2}$ towards north east", "all the above"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Treat velocity as a vector. Initial velocity $\\vec{u} = 3\\hat{i}$ (East). Final velocity $\\vec{v} = 3\\hat{j}$ (North).<br><b>Step 2:</b> Change in velocity $\\Delta\\vec{v} = \\vec{v} - \\vec{u} = 3\\hat{j} - 3\\hat{i}$.<br><b>Step 3:</b> The direction of $\\Delta\\vec{v}$ is $-x$ and $+y$, which points towards North-West.<br><b>Step 4:</b> Magnitude of change in velocity $|\\Delta\\vec{v}| = \\sqrt{(-3)^2 + 3^2} = \\sqrt{18} = 3\\sqrt{2}\\text{ m/s}$.<br><b>Step 5:</b> Acceleration $a = \\frac{|\\Delta\\vec{v}|}{t} = \\frac{3\\sqrt{2}}{6} = \\frac{\\sqrt{2}}{2} = \\frac{1}{\\sqrt{2}}\\text{ m/s}^2$."
            },
            {
                "id": "KIN-TEST-007",
                "topic": "Acceleration",
                "difficulty": 3,
                "tags": ["Equations of Motion", "Simultaneous Equations"],
                "q": "If a body travels 30m in an interval of 2s and 50m in the next interval of 2s, then the acceleration of the body is:",
                "options": ["$10\\text{ m/s}^{2}$", "$5\\text{ m/s}^{2}$", "$20\\text{ m/s}^{2}$", "$25\\text{ m/s}^{2}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Use the equation of motion $S = ut + \\frac{1}{2}at^2$.<br><b>Step 2:</b> For the first interval ($t=2$s, $S=30$m): $30 = u(2) + \\frac{1}{2}a(2)^2 \\implies 30 = 2u + 2a \\implies 15 = u + a$ (Equation 1).<br><b>Step 3:</b> For the total journey of both intervals combined ($t = 4$s, $S = 30 + 50 = 80$m): $80 = u(4) + \\frac{1}{2}a(4)^2 \\implies 80 = 4u + 8a \\implies 20 = u + 2a$ (Equation 2).<br><b>Step 4:</b> Subtract Equation 1 from Equation 2: $(u + 2a) - (u + a) = 20 - 15$.<br><b>Step 5:</b> Therefore, acceleration $a = 5\\text{ m/s}^2$."
            },
            {
                "id": "KIN-TEST-008",
                "topic": "Acceleration",
                "difficulty": 3,
                "tags": ["Stopping Distance", "Kinematics"],
                "q": "A bullet travelling horizontally looses $1/20^{th}$ of its velocity while piercing a wooden plank. Then the number of such planks required to stop the bullet is:",
                "options": ["6", "9", "11", "13"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Let initial velocity be $u$. After passing through 1 plank of thickness $s$, the velocity is $v = u - \\frac{u}{20} = \\frac{19u}{20}$.<br><b>Step 2:</b> Use $v^2 - u^2 = 2as \\implies \\left(\\frac{19u}{20}\\right)^2 - u^2 = 2as$.<br><b>Step 3:</b> Simplify: $u^2 \\left(\\frac{361}{400} - 1\\right) = 2as \\implies 2as = -\\frac{39u^2}{400}$.<br><b>Step 4:</b> Let $n$ be the total number of planks required to stop the bullet completely ($v_{final} = 0$). Total distance is $ns$.<br><b>Step 5:</b> Use the equation for the full journey: $0^2 - u^2 = 2a(ns) = n(2as)$.<br><b>Step 6:</b> Substitute $2as$: $-u^2 = n \\left(-\\frac{39u^2}{400}\\right) \\implies n = \\frac{400}{39} \\approx 10.25$.<br><b>Step 7:</b> Since 10 planks are not enough to bring the velocity exactly to zero, it will pierce into the 11th plank. Thus, 11 planks are required."
            },
            {
                "id": "KIN-TEST-009",
                "topic": "Acceleration",
                "difficulty": 2,
                "tags": ["Equations of Motion", "Ratio"],
                "q": "A particle starts moving from rest under uniform acceleration. It travels a distance 'x' in the first two seconds and a distance 'y' in the next two seconds. If $y=nx$, then $n=$",
                "options": ["1", "2", "3", "4"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The particle starts from rest ($u=0$). The distance covered in time $t$ is $S = \\frac{1}{2}at^2$.<br><b>Step 2:</b> Distance $x$ in the first 2 seconds: $x = \\frac{1}{2}a(2)^2 = 2a$.<br><b>Step 3:</b> Distance covered in the first 4 seconds is $x + y$: $x + y = \\frac{1}{2}a(4)^2 = 8a$.<br><b>Step 4:</b> Find $y$ by subtracting $x$: $y = 8a - 2a = 6a$.<br><b>Step 5:</b> The ratio $n = \\frac{y}{x} = \\frac{6a}{2a} = 3$."
            },
            {
                "id": "KIN-TEST-010",
                "topic": "Acceleration",
                "difficulty": 3,
                "tags": ["Distance in nth Second", "Equations of Motion"],
                "q": "A particle is moving in a straight line with initial velocity 'u' and uniform acceleration 'a'. If the sum of the distances travelled in $t^{th}$ and $(t+1)^{th}$ second is 100 cm, then its velocity after 't' seconds in cm/s is:",
                "options": ["20", "30", "80", "50"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The distance covered in the $n^{th}$ second is $S_n = u + \\frac{a}{2}(2n - 1)$.<br><b>Step 2:</b> Distance in the $t^{th}$ second: $S_t = u + \\frac{a}{2}(2t - 1)$.<br><b>Step 3:</b> Distance in the $(t+1)^{th}$ second: $S_{t+1} = u + \\frac{a}{2}(2(t+1) - 1) = u + \\frac{a}{2}(2t + 1)$.<br><b>Step 4:</b> Add the two distances: $S_t + S_{t+1} = 2u + \\frac{a}{2}(2t - 1 + 2t + 1) = 2u + \\frac{a}{2}(4t) = 2u + 2at$.<br><b>Step 5:</b> Factor the expression: $2(u + at)$. We are given that this sum is 100 cm. So, $2(u + at) = 100 \\implies u + at = 50$.<br><b>Step 6:</b> By the first equation of motion, the velocity after $t$ seconds is $v = u + at$. Therefore, $v = 50\\text{ cm/s}."
            },
            {
                "id": "KIN-TEST-011",
                "topic": "Acceleration",
                "difficulty": 3,
                "tags": ["Kinematics", "Algebraic Manipulation"],
                "q": "A particle is moving with uniform acceleration along a straight line ABC. Its velocity at 'A' and 'B' are $6\\text{ m/s}$ and $9\\text{ m/s}$ respectively. If $AB:BC=5:16$ then its velocity at 'C' is:",
                "options": ["$9.6\\text{ m/s}$", "$12\\text{ m/s}$", "$15\\text{ m/s}$", "$21.5\\text{ m/s}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Let the distances be $AB = 5x$ and $BC = 16x$.<br><b>Step 2:</b> Apply $v^2 - u^2 = 2aS$ between points A and B: $v_B^2 - v_A^2 = 2a(AB) \\implies 9^2 - 6^2 = 2a(5x)$.<br><b>Step 3:</b> Simplify: $81 - 36 = 10ax \\implies 45 = 10ax \\implies ax = 4.5$.<br><b>Step 4:</b> Apply $v^2 - u^2 = 2aS$ between points B and C: $v_C^2 - v_B^2 = 2a(BC) \\implies v_C^2 - 9^2 = 2a(16x)$.<br><b>Step 5:</b> Rewrite as $v_C^2 - 81 = 32(ax)$. Substitute the value of $ax$: $v_C^2 - 81 = 32(4.5) = 144$.<br><b>Step 6:</b> $v_C^2 = 144 + 81 = 225$. Therefore, $v_C = 15\\text{ m/s}$."
            },
            {
                "id": "KIN-TEST-012",
                "topic": "Acceleration",
                "difficulty": 1,
                "tags": ["Equations of Motion", "Average Acceleration"],
                "q": "A car moving on a straight road accelerates from a speed of $4.1\\text{ m/s}$ to a speed of $6.9\\text{ m/s}$ in 5.0 s. Then its average acceleration is:",
                "options": ["$0.5\\text{ m/s}^{2}$", "$0.6\\text{ m/s}^{2}$", "$0.56\\text{ m/s}^{2}$", "$0.65\\text{ m/s}^{2}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Average acceleration is defined as the change in velocity divided by the time interval: $a = \\frac{v - u}{t}$.<br><b>Step 2:</b> Substitute the given values: $v = 6.9\\text{ m/s}$, $u = 4.1\\text{ m/s}$, $t = 5.0\\text{ s}$.<br><b>Step 3:</b> $a = \\frac{6.9 - 4.1}{5.0}$.<br><b>Step 4:</b> $a = \\frac{2.8}{5.0} = 0.56\\text{ m/s}^2$."
            },
            {
                "id": "KIN-TEST-013",
                "topic": "Motion Under Gravity",
                "difficulty": 2,
                "tags": ["Gravity Variations", "Maximum Height"],
                "q": "A body projected vertically upwards with a velocity of 19.6 m/s reaches a height of 19.8 m on earth. If it is projected vertically up with the same velocity on moon, then the maximum height reached by it is:",
                "options": ["19.18 m", "3.3 m", "9.9 m", "118.8 m"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The formula for maximum height attained by a projectile is $H = \\frac{u^2}{2g}$.<br><b>Step 2:</b> For a constant initial velocity $u$, the maximum height is inversely proportional to acceleration due to gravity: $H \\propto \\frac{1}{g}$.<br><b>Step 3:</b> The acceleration due to gravity on the moon is roughly $\\frac{1}{6}$ of that on Earth ($g_{moon} = g_{earth}/6$).<br><b>Step 4:</b> Therefore, the height reached on the moon will be 6 times the height reached on Earth.<br><b>Step 5:</b> $H_{moon} = 6 \\times 19.8\\text{ m} = 118.8\\text{ m}$."
            },
            {
                "id": "KIN-TEST-014",
                "topic": "Motion Under Gravity",
                "difficulty": 3,
                "tags": ["Quadratic Equation", "Kinematics"],
                "q": "A ball is thrown straight upward with a speed v from a point h meter above the ground. The time taken for the ball to strike the ground is:",
                "options": ["$\\frac{v}{g}\\left[1+\\sqrt{1+\\frac{2hg}{v^2}}\\right]$", "$\\frac{v}{g}\\left[1-\\sqrt{1-\\frac{2hg}{v^2}}\\right]$", "$\\frac{v}{g}\\left[1-\\sqrt{1+\\frac{2hg}{v^2}}\\right]$", "$\\frac{v}{g}\\left[2+\\frac{2hg}{v^2}\\right]$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Define the coordinate system with the starting point at origin (0) and upward as positive. The ground is at a displacement of $S = -h$.<br><b>Step 2:</b> Use the equation of motion $S = ut + \\frac{1}{2}at^2$. Substitute $S = -h$, $u = v$, and $a = -g$.<br><b>Step 3:</b> $-h = vt - \\frac{1}{2}gt^2$. Rearrange into a standard quadratic equation: $gt^2 - 2vt - 2h = 0$.<br><b>Step 4:</b> Solve for $t$ using the quadratic formula: $t = \\frac{-(-2v) \\pm \\sqrt{(-2v)^2 - 4(g)(-2h)}}{2g}$.<br><b>Step 5:</b> $t = \\frac{2v \\pm \\sqrt{4v^2 + 8gh}}{2g} = \\frac{v \\pm \\sqrt{v^2 + 2gh}}{g}$.<br><b>Step 6:</b> Since time must be positive and $\\sqrt{v^2 + 2gh} > v$, we take the positive root.<br><b>Step 7:</b> Factor out $v$ from the square root: $t = \\frac{v}{g} \\left[ 1 + \\sqrt{1 + \\frac{2hg}{v^2}} \\right]$."
            },
            {
                "id": "KIN-TEST-015",
                "topic": "Acceleration",
                "difficulty": 2,
                "tags": ["Impact", "Average Acceleration", "Change in Velocity"],
                "q": "A ball is dropped on the floor from a height of 10m. It rebounds to a height of 2.5m. If the ball is in contact with the floor for 0.01 s, then the average acceleration during contact is nearly:",
                "options": ["$500\\sqrt{2}\\text{ m/s}^{2}$ upwards", "$1800\\sqrt{2}\\text{ m/s}^{2}$ downwards", "$1500\\sqrt{2}\\text{ m/s}^{2}$ upwards", "$1500\\sqrt{2}\\text{ m/s}^{2}$ downwards"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Calculate the velocity of the ball just before impact (downwards): $v_1 = \\sqrt{2gh_1} = \\sqrt{2 \\times 10 \\times 10} = \\sqrt{200} = 10\\sqrt{2}\\text{ m/s}$.<br><b>Step 2:</b> Calculate the velocity of the ball just after impact (upwards): $v_2 = \\sqrt{2gh_2} = \\sqrt{2 \\times 10 \\times 2.5} = \\sqrt{50} = 5\\sqrt{2}\\text{ m/s}$.<br><b>Step 3:</b> Let the upward direction be positive. The initial velocity is $-10\\sqrt{2}$ and final velocity is $+5\\sqrt{2}$.<br><b>Step 4:</b> Change in velocity $\\Delta v = v_2 - v_1 = 5\\sqrt{2} - (-10\\sqrt{2}) = 15\\sqrt{2}\\text{ m/s}$ (upwards).<br><b>Step 5:</b> Average acceleration $a = \\frac{\\Delta v}{\\Delta t} = \\frac{15\\sqrt{2}}{0.01} = 1500\\sqrt{2}\\text{ m/s}^2$ upwards."
            },
            {
                "id": "KIN-TEST-016",
                "topic": "Motion Under Gravity",
                "difficulty": 2,
                "tags": ["Free Fall", "Kinematics"],
                "q": "A body falling from rest has a velocity 'v' after it falls through a distance 'h'. The distance it has to fall down further, for its velocity to become double, is ..... times 'h'.",
                "options": ["5", "1", "2", "3"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Use the third equation of motion: $v^2 - u^2 = 2gS$. Since the body falls from rest, $u=0$.<br><b>Step 2:</b> For the first part of the fall: $v^2 = 2gh$.<br><b>Step 3:</b> Let the total distance required for the velocity to become $2v$ be $H$. Then, $(2v)^2 = 2gH \\implies 4v^2 = 2gH$.<br><b>Step 4:</b> Substitute $v^2 = 2gh$ into this equation: $4(2gh) = 2gH \\implies H = 4h$.<br><b>Step 5:</b> The total distance is $4h$. Since it has already fallen a distance $h$, the *further* distance it has to fall is $4h - h = 3h$."
            },
            {
                "id": "KIN-TEST-017",
                "topic": "Relative Velocity",
                "difficulty": 2,
                "tags": ["Relative Acceleration", "Free Fall"],
                "q": "A ball is dropped from a building of height 45m. Simultaneously another ball is thrown up with a speed 40m/s. The rate of change of relative speed of the balls is:",
                "options": ["$20\\text{ ms}^{-2}$", "$40\\text{ ms}^{-2}$", "$30\\text{ ms}^{-2}$", "$0\\text{ ms}^{-2}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The rate of change of relative speed is the relative acceleration between the two balls.<br><b>Step 2:</b> The acceleration of the first ball (dropped) is $a_1 = -g$ (downwards).<br><b>Step 3:</b> The acceleration of the second ball (thrown upwards) is also $a_2 = -g$ (downwards), because gravity is the only force acting on both once they are in the air.<br><b>Step 4:</b> Relative acceleration $a_{rel} = a_1 - a_2 = -g - (-g) = 0$.<br><b>Step 5:</b> Therefore, their relative speed remains constant, and its rate of change is zero."
            },
            {
                "id": "KIN-TEST-018",
                "topic": "Relative Velocity",
                "difficulty": 3,
                "tags": ["Stopping Distance", "Relative Kinematics"],
                "q": "Two cars 1 & 2 starting from rest are moving with speeds $v_{1}$ and $v_{2}\\text{ m/s}$ ($v_{1}>v_{2}$). Car 2 is ahead of car '1' by s meter when the driver of the car '1' sees car '2'. What minimum retardation should be given to car '1' to avoid collision?",
                "options": ["$\\frac{v_{1}-v_{2}}{s}$", "$\\frac{v_{1}+v_{2}}{s}$", "$\\frac{(v_{1}+v_{2})^{2}}{2s}$", "$\\frac{(v_{1}-v_{2})^{2}}{2s}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Solve using the concept of relative motion. The relative velocity of car 1 with respect to car 2 is $u_{rel} = v_1 - v_2$.<br><b>Step 2:</b> To just avoid a collision, the final relative velocity $v_{rel}$ must become zero exactly when the relative distance covered equals the initial separation $s$.<br><b>Step 3:</b> Apply the kinematic equation $v_{rel}^2 - u_{rel}^2 = 2a_{rel}s$.<br><b>Step 4:</b> Substitute the values: $0 - (v_1 - v_2)^2 = 2(-a)s$, where $a$ is the required retardation.<br><b>Step 5:</b> Solve for $a$: $a = \\frac{(v_1 - v_2)^2}{2s}$."
            },
            {
                "id": "KIN-TEST-019",
                "topic": "Relative Velocity",
                "difficulty": 3,
                "tags": ["Stopping Distance", "Deceleration"],
                "q": "Two cars are travelling towards each other on a straight road at velocities $15\\text{ m/s}$ and $16\\text{ m/s}$ respectively. When they are 150m apart, both the drivers apply the brakes and the cars decelerate at $3\\text{ m/s}^{2}$ and $4\\text{ m/s}^{2}$ until they stop. Separation between the cars when they come to rest is:",
                "options": ["86.5 m", "89.5 m", "85.5 m", "80.5 m"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Calculate the stopping distance for the first car using $v^2 - u^2 = 2aS$.<br><b>Step 2:</b> $0^2 - 15^2 = 2(-3)S_1 \\implies S_1 = \\frac{225}{6} = 37.5\\text{ m}$.<br><b>Step 3:</b> Calculate the stopping distance for the second car.<br><b>Step 4:</b> $0^2 - 16^2 = 2(-4)S_2 \\implies S_2 = \\frac{256}{8} = 32.0\\text{ m}$.<br><b>Step 5:</b> Total distance covered by both cars before stopping $= 37.5 + 32.0 = 69.5\\text{ m}$.<br><b>Step 6:</b> The final separation between them is the initial separation minus the total distance covered: $150 - 69.5 = 80.5\\text{ m}$."
            },
            {
                "id": "KIN-TEST-020",
                "topic": "Displacement and Distance",
                "difficulty": 1,
                "tags": ["Vector Displacement", "Geometry"],
                "q": "A body moves from one corner of an equilateral triangle of side 10 cm to the same corner along the sides. Then the distance and displacement are respectively:",
                "options": ["30 cm & 10 cm", "30 cm & 0 cm", "0 cm & 30 cm", "30 cm & 30 cm"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The body travels along all three sides of the equilateral triangle to return to its starting point.<br><b>Step 2:</b> The total distance covered is the perimeter of the triangle: $10 + 10 + 10 = 30\\text{ cm}$.<br><b>Step 3:</b> Displacement is the shortest straight-line distance between the initial and final positions.<br><b>Step 4:</b> Since the body returns to its exact starting point, the initial and final positions are identical, so displacement is $0\\text{ cm}$."
            },
            {
                "id": "KIN-TEST-021",
                "topic": "Speed and Velocity",
                "difficulty": 2,
                "tags": ["Average Speed", "Harmonic Mean"],
                "q": "For a train that travels from one station to another at a uniform speed of $40\\text{ kmh}^{-1}$ and returns to final station at speed of $60\\text{ kmh}^{-1}$ then its average speed is:",
                "options": ["98 km/hr", "0 km/hr", "50 km/hr", "48 km/hr"],
                "correct": 3,
                "sol": "<b>Step 1:</b> When an object covers equal distances at different speeds $v_1$ and $v_2$, the average speed is given by the harmonic mean: $V_{avg} = \\frac{2v_1 v_2}{v_1 + v_2}$.<br><b>Step 2:</b> Substitute the given speeds: $v_1 = 40\\text{ km/h}$ and $v_2 = 60\\text{ km/h}$.<br><b>Step 3:</b> $V_{avg} = \\frac{2(40)(60)}{40 + 60} = \\frac{4800}{100}$.<br><b>Step 4:</b> $V_{avg} = 48\\text{ km/hr}$."
            },
            {
                "id": "KIN-TEST-022",
                "topic": "Speed and Velocity",
                "difficulty": 1,
                "tags": ["Constant Velocity", "Basic Kinematics"],
                "q": "If the distance between the sun and the earth is $1.5\\times 10^{11}$ m and velocity of light is $3\\times 10^{8}$ m/s, then the time taken by a light ray to reach the earth from the sun is:",
                "options": ["500 s", "500 minute", "50 s", "$5\\times 10^{3}\\text{ s}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Time taken is defined as $t = \\frac{\\text{Distance}}{\\text{Velocity}}$.<br><b>Step 2:</b> Substitute the given values: $t = \\frac{1.5 \\times 10^{11}}{3 \\times 10^8}$.<br><b>Step 3:</b> Simplify the powers of 10: $t = \\frac{1.5}{3} \\times 10^{11 - 8} = 0.5 \\times 10^3$.<br><b>Step 4:</b> $t = 0.5 \\times 1000 = 500\\text{ s}$."
            },
            {
                "id": "KIN-TEST-023",
                "topic": "Acceleration",
                "difficulty": 2,
                "tags": ["Vector Kinematics", "Average Acceleration"],
                "q": "A body is moving with velocity $30\\text{ ms}^{-1}$ towards east. After 10s its velocity becomes $40\\text{ ms}^{-1}$ towards north. The average acceleration of the body is:",
                "options": ["$7\\text{ ms}^{-2}$", "$\\sqrt{7}\\text{ ms}^{-2}$", "$5\\text{ ms}^{-2}$", "$1\\text{ ms}^{-2}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Represent initial and final velocities as vectors. Let East be $\\hat{i}$ and North be $\\hat{j}$.<br><b>Step 2:</b> $\\vec{u} = 30\\hat{i}$ and $\\vec{v} = 40\\hat{j}$.<br><b>Step 3:</b> The change in velocity is $\\Delta\\vec{v} = \\vec{v} - \\vec{u} = 40\\hat{j} - 30\\hat{i}$.<br><b>Step 4:</b> The magnitude of change in velocity is $|\\Delta\\vec{v}| = \\sqrt{(-30)^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50\\text{ ms}^{-1}$.<br><b>Step 5:</b> Average acceleration is $a_{avg} = \\frac{|\\Delta\\vec{v}|}{t} = \\frac{50}{10} = 5\\text{ ms}^{-2}$."
            },
            {
                "id": "KIN-TEST-024",
                "topic": "Acceleration",
                "difficulty": 2,
                "tags": ["1D Motion", "Direction Reversal"],
                "q": "A body starting with a velocity 'v' returns to its initial position after 't' second with the same speed, along the same line. Acceleration of the particle is:",
                "options": ["$\\frac{-2v}{t}$", "zero", "$\\frac{v}{2t}$", "$\\frac{t}{2v}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The body returns to its starting position, moving in the opposite direction. If the initial velocity is $u = v$, the final velocity must be $v_f = -v$.<br><b>Step 2:</b> The formula for uniform acceleration is $a = \\frac{v_f - u}{t}$.<br><b>Step 3:</b> Substitute the velocities: $a = \\frac{-v - v}{t}$.<br><b>Step 4:</b> $a = \\frac{-2v}{t}$."
            },
            {
                "id": "KIN-TEST-025",
                "topic": "Acceleration",
                "difficulty": 2,
                "tags": ["Equations of Motion", "Displacement"],
                "q": "A body starting from rest moving with uniform acceleration has a displacement of 16 m in first 4 s and 9 m in first 3 s. The acceleration of the body is:",
                "options": ["$1\\text{ ms}^{-2}$", "$2\\text{ ms}^{-2}$", "$3\\text{ ms}^{-2}$", "$4\\text{ ms}^{-2}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Use the second equation of motion: $S = ut + \\frac{1}{2}at^2$. Since the body starts from rest, $u=0$, so $S = \\frac{1}{2}at^2$.<br><b>Step 2:</b> Apply the equation to the first condition ($S=16\\text{ m}$, $t=4\\text{ s}$): $16 = \\frac{1}{2}a(4^2) \\implies 16 = 8a \\implies a = 2\\text{ ms}^{-2}$.<br><b>Step 3:</b> Verify this with the second condition ($S=9\\text{ m}$, $t=3\\text{ s}$): $9 = \\frac{1}{2}(2)(3^2) \\implies 9 = 9$, which holds true.<br><b>Step 4:</b> The acceleration is $2\\text{ ms}^{-2}$."
            },
            {
                "id": "KIN-TEST-026",
                "topic": "Acceleration",
                "difficulty": 2,
                "tags": ["Distance in nth Second", "Ratio"],
                "q": "A body starts from rest and moves with an uniform acceleration. The ratio of distance covered in the $n^{th}$ second to the distance covered in 'n' seconds is:",
                "options": ["$\\frac{2}{n}-\\frac{1}{n^{2}}$", "$\\frac{1}{n^{2}}-\\frac{1}{n}$", "$\\frac{2}{n^{2}}-\\frac{1}{n}$", "$\\frac{2}{n}+\\frac{1}{n^{2}}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The distance covered in exactly the $n^{th}$ second (when $u=0$) is $S_n = \\frac{a}{2}(2n - 1)$.<br><b>Step 2:</b> The total distance covered in 'n' seconds (when $u=0$) is $S = \\frac{1}{2}an^2$.<br><b>Step 3:</b> The ratio is $\\frac{S_n}{S} = \\frac{\\frac{a}{2}(2n - 1)}{\\frac{a}{2}n^2}$.<br><b>Step 4:</b> Simplify the fraction: $\\frac{2n - 1}{n^2} = \\frac{2n}{n^2} - \\frac{1}{n^2}$.<br><b>Step 5:</b> Final simplified expression: $\\frac{2}{n} - \\frac{1}{n^2}$."
            },
            {
                "id": "KIN-TEST-027",
                "topic": "Acceleration",
                "difficulty": 1,
                "tags": ["Unit Conversion", "Kinematics"],
                "q": "A bus accelerates uniformly from rest and acquires a speed of 36kmph in 10s. The acceleration is:",
                "options": ["$1\\text{ m/s}^{2}$", "$2\\text{ m/s}^{2}$", "$0.5\\text{ m/s}^{2}$", "$3\\text{ m/s}^{2}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> First, convert the final velocity into SI units (m/s).<br><b>Step 2:</b> $v = 36\\text{ km/h} = 36 \\times \\frac{5}{18}\\text{ m/s} = 10\\text{ m/s}$.<br><b>Step 3:</b> The bus starts from rest, so $u = 0$.<br><b>Step 4:</b> Use the formula for acceleration: $a = \\frac{v - u}{t}$.<br><b>Step 5:</b> $a = \\frac{10 - 0}{10} = 1\\text{ m/s}^2$."
            },
            {
                "id": "KIN-TEST-028",
                "topic": "Acceleration",
                "difficulty": 2,
                "tags": ["Stopping Distance", "Proportionality"],
                "q": "Speeds of two identical cars are U and 4U at a specific instant. The ratio of the respective distances in which the two cars are stopped from that instant is:",
                "options": ["1:1", "1:4", "1:8", "1:16"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The stopping distance $S$ for a car with initial velocity $u$ and constant deceleration $a$ is given by $v^2 - u^2 = 2aS \\implies 0 - u^2 = 2(-a)S \\implies S = \\frac{u^2}{2a}$.<br><b>Step 2:</b> Since the cars are identical, their maximum braking deceleration $a$ is the same.<br><b>Step 3:</b> Therefore, stopping distance is directly proportional to the square of the initial velocity: $S \\propto u^2$.<br><b>Step 4:</b> The ratio of stopping distances is $\\frac{S_1}{S_2} = \\left(\\frac{u_1}{u_2}\\right)^2 = \\left(\\frac{U}{4U}\\right)^2$.<br><b>Step 5:</b> $\\frac{S_1}{S_2} = \\left(\\frac{1}{4}\\right)^2 = \\frac{1}{16} = 1:16$."
            },
            {
                "id": "KIN-TEST-029",
                "topic": "Acceleration",
                "difficulty": 2,
                "tags": ["Stopping Distance", "Deceleration"],
                "q": "A car moving along a straight highway with speed of $126\\text{ kmh}^{-1}$ is brought to a stop within a distance of 200m. What is the retardation of the car?",
                "options": ["$3.06\\text{ ms}^{-2}$", "$4\\text{ ms}^{-2}$", "$5.06\\text{ ms}^{-2}$", "$6\\text{ ms}^{-2}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Convert the initial velocity to m/s: $u = 126\\text{ km/h} = 126 \\times \\frac{5}{18} = 35\\text{ m/s}$.<br><b>Step 2:</b> The final velocity $v = 0$ and stopping distance $S = 200\\text{ m}$.<br><b>Step 3:</b> Use the third equation of motion: $v^2 - u^2 = 2aS$.<br><b>Step 4:</b> $0^2 - (35)^2 = 2a(200) \\implies -1225 = 400a$.<br><b>Step 5:</b> Solve for acceleration: $a = -\\frac{1225}{400} = -3.0625\\text{ ms}^{-2}$.<br><b>Step 6:</b> The retardation (which implies the magnitude of the negative acceleration) is approximately $3.06\\text{ ms}^{-2}$."
            },
            {
                "id": "KIN-TEST-030",
                "topic": "Motion Under Gravity",
                "difficulty": 1,
                "tags": ["Free Fall", "Symmetry of Motion"],
                "q": "Two balls are projected simultaneously with the same velocity 'u' from the top of a tower, one vertically upwards and the other vertically downwards. Their respective times of the journeys are $t_{1}$ and $t_{2}$. At the time of reaching the ground, the ratio of their final velocities is:",
                "options": ["1:1", "1:2", "2:3", "2:1"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Let the height of the tower be $h$ and the projection velocity be $u$.<br><b>Step 2:</b> For the ball projected downwards, the final velocity $v_1$ just before hitting the ground is found using $v_1^2 = (-u)^2 + 2g(-h) \\implies v_1 = \\sqrt{u^2 + 2gh}$.<br><b>Step 3:</b> For the ball projected upwards, it will rise, stop momentarily, and fall back to the top of the tower. When it passes the top of the tower on its way down, its velocity will be exactly $u$ downwards due to symmetry.<br><b>Step 4:</b> From that point, its motion is identical to the first ball. Thus, its final velocity is also $v_2 = \\sqrt{u^2 + 2gh}$.<br><b>Step 5:</b> Since $v_1 = v_2$, the ratio of their final velocities is 1:1."
            },
            {
                "id": "KIN-TEST-031",
                "topic": "Motion Under Gravity",
                "difficulty": 2,
                "tags": ["Free Fall", "Time of Flight"],
                "q": "Two bodies are projected simultaneously with the same velocity of 19.6 m/s from the top of a tower, one vertically upwards and the other vertically downwards. As they reach the ground, the time gap is:",
                "options": ["0 s", "2 s", "4 s", "6 s"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The ball projected downwards reaches the ground faster. The ball projected upwards goes up, momentarily stops, and falls back to the top of the tower.<br><b>Step 2:</b> Due to the symmetry of motion under gravity, when the upward-projected ball returns to the top of the tower, it has a downward velocity exactly equal to its initial velocity (19.6 m/s).<br><b>Step 3:</b> From that point onward, its journey to the ground is perfectly identical to the first ball.<br><b>Step 4:</b> Therefore, the time gap between them hitting the ground is simply the extra time the first ball spent in the air going up and coming back to the tower's height.<br><b>Step 5:</b> Time gap $= \\frac{2u}{g} = \\frac{2(19.6)}{9.8} = 4\\text{ s}."
            },
            {
                "id": "KIN-TEST-032",
                "topic": "Motion Under Gravity",
                "difficulty": 3,
                "tags": ["Free Fall", "Relative Separation"],
                "q": "Two bodies begin to fall freely from the same height. The second one begins to fall $\\tau$ after the first. The time after which the 1st body begins to fall, the distance between the bodies equals to $l$ is:",
                "options": ["$\\frac{l}{g\\tau}+\\frac{\\tau}{2}$", "$\\frac{g\\tau}{l}+\\tau$", "$\\frac{\\tau}{lg}+\\frac{2}{\\tau}$", "$\\frac{g}{l\\tau}+\\frac{\\tau}{2}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Let $t$ be the time elapsed since the first body began to fall.<br><b>Step 2:</b> The distance fallen by the first body is $y_1 = \\frac{1}{2}gt^2$.<br><b>Step 3:</b> The second body falls for a time $(t - \\tau)$, so its distance is $y_2 = \\frac{1}{2}g(t - \\tau)^2$.<br><b>Step 4:</b> The separation between them is $l = y_1 - y_2 = \\frac{1}{2}gt^2 - \\frac{1}{2}g(t^2 - 2t\\tau + \\tau^2)$.<br><b>Step 5:</b> Simplify the expression: $l = \\frac{1}{2}g(2t\\tau - \\tau^2) = gt\\tau - \\frac{1}{2}g\\tau^2$.<br><b>Step 6:</b> Rearrange to solve for $t$: $gt\\tau = l + \\frac{1}{2}g\\tau^2 \\implies t = \\frac{l}{g\\tau} + \\frac{\\tau}{2}$."
            },
            {
                "id": "KIN-TEST-033",
                "topic": "Motion Under Gravity",
                "difficulty": 3,
                "tags": ["Quadratic Equation", "Moving Frame"],
                "q": "A balloon is going upwards with velocity 12 m/sec. It releases a packet when it is at a height of 65 m from the ground. How much time the packet will take to reach the ground ($g=10\\text{m/sec}^{2}$)",
                "options": ["5 sec", "6 sec", "7 sec", "8 sec"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Due to inertia, the released packet inherits the upward velocity of the balloon. So, $u = +12\\text{ m/s}$.<br><b>Step 2:</b> The net displacement to the ground is $S = -65\\text{ m}$. Acceleration $a = -10\\text{ m/s}^2$.<br><b>Step 3:</b> Use the equation $S = ut + \\frac{1}{2}at^2$: $-65 = 12t - \\frac{1}{2}(10)t^2$.<br><b>Step 4:</b> Simplify to form a quadratic equation: $5t^2 - 12t - 65 = 0$.<br><b>Step 5:</b> Use the quadratic formula: $t = \\frac{12 \\pm \\sqrt{(-12)^2 - 4(5)(-65)}}{2(5)} = \\frac{12 \\pm \\sqrt{144 + 1300}}{10}$.<br><b>Step 6:</b> $t = \\frac{12 \\pm \\sqrt{1444}}{10} = \\frac{12 \\pm 38}{10}$. Taking the positive root: $t = \\frac{50}{10} = 5\\text{ sec}$."
            },
            {
                "id": "KIN-TEST-034",
                "topic": "Motion Under Gravity",
                "difficulty": 2,
                "tags": ["Maximum Height", "Proportionality"],
                "q": "A body thrown up with some initial velocity reaches a maximum height of 50m. Another body with double the mass thrown up with double the initial velocity will reach a maximum height of:",
                "options": ["100m", "200m", "400m", "50m"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The formula for maximum height reached by a projectile is $H = \\frac{u^2}{2g}$.<br><b>Step 2:</b> This formula shows that maximum height is independent of the mass of the body.<br><b>Step 3:</b> Height is directly proportional to the square of the initial velocity: $H \\propto u^2$.<br><b>Step 4:</b> If the initial velocity is doubled ($2u$), the new height becomes $(2)^2 = 4$ times the original height.<br><b>Step 5:</b> New height $= 4 \\times 50\\text{ m} = 200\\text{ m}$."
            },
            {
                "id": "KIN-TEST-035",
                "topic": "Motion Under Gravity",
                "difficulty": 2,
                "tags": ["Galileo's Law of Odd Numbers", "Free Fall"],
                "q": "The distance moved by a freely falling body (starting from rest) during the 1st, 2nd and 3rd ... nth second of its motion, are proportional to:",
                "options": ["$(n-1)$", "$(2n-1)$", "$(n^2-1)$", "$(2n-1)/n^2$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The distance covered in exactly the $n^{th}$ second is given by $S_n = u + \\frac{a}{2}(2n - 1)$.<br><b>Step 2:</b> For a freely falling body starting from rest, $u = 0$ and $a = g$.<br><b>Step 3:</b> Therefore, $S_n = \\frac{g}{2}(2n - 1)$.<br><b>Step 4:</b> Since $\\frac{g}{2}$ is a constant, the distances are strictly proportional to the sequence of odd numbers: $(2n - 1)$."
            },
            {
                "id": "KIN-TEST-036",
                "topic": "Motion Under Gravity",
                "difficulty": 2,
                "tags": ["Free Fall", "Ratio"],
                "q": "A ball released from a height 'h' touches the ground in 't's. After t/2s since dropping, the height of the body from the ground is:",
                "options": ["$h/2$", "$h/4$", "$3h/4$", "$3h/2$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The total height $h$ fallen in time $t$ is given by $h = \\frac{1}{2}gt^2$.<br><b>Step 2:</b> Let the distance fallen in time $t/2$ be $y$. Then $y = \\frac{1}{2}g(t/2)^2$.<br><b>Step 3:</b> Simplify the expression for $y$: $y = \\frac{1}{2}g \\left(\\frac{t^2}{4}\\right) = \\frac{1}{4} \\left(\\frac{1}{2}gt^2\\right) = \\frac{h}{4}$.<br><b>Step 4:</b> The body has fallen a distance of $h/4$ from the top.<br><b>Step 5:</b> Therefore, the height remaining from the ground is $h - \\frac{h}{4} = \\frac{3h}{4}$."
            },
            {
                "id": "KIN-TEST-037",
                "topic": "Motion Under Gravity",
                "difficulty": 1,
                "tags": ["Free Fall", "Final Velocity"],
                "q": "A boy standing at the top of a tower of 20 m height drops a stone. Assuming $g=10\\text{ ms}^{-2}$, the velocity with which it hits the ground is:",
                "options": ["$20\\text{ ms}^{-1}$", "$40\\text{ ms}^{-1}$", "$5\\text{ ms}^{-1}$", "$10\\text{ ms}^{-1}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Use the third equation of motion: $v^2 - u^2 = 2gS$.<br><b>Step 2:</b> Since the stone is dropped, initial velocity $u = 0$.<br><b>Step 3:</b> Therefore, $v = \\sqrt{2gS}$.<br><b>Step 4:</b> Substitute the given values: $v = \\sqrt{2 \\times 10 \\times 20}$.<br><b>Step 5:</b> $v = \\sqrt{400} = 20\\text{ ms}^{-1}$."
            },
            {
                "id": "KIN-TEST-038",
                "topic": "Motion Under Gravity",
                "difficulty": 1,
                "tags": ["Displacement", "Conceptual"],
                "q": "A ball thrown vertically upwards with an initial velocity of 1.4 m/s returns in 2s. The total displacement of the ball is:",
                "options": ["22.4 cm", "zero", "44.8 m", "33.6m"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Displacement is defined as the shortest straight-line distance between the initial position and the final position.<br><b>Step 2:</b> The problem explicitly states that the ball \"returns\" after 2s.<br><b>Step 3:</b> Because the final position is identical to the initial starting position, the net displacement vector is precisely zero."
            },
            {
                "id": "KIN-TEST-039",
                "topic": "Motion Under Gravity",
                "difficulty": 3,
                "tags": ["Multi-stage Motion", "Free Fall"],
                "q": "A stone is dropped from a certain height which can reach the ground in 5s. It is stopped momentarily after 3s and then it is again released. The total time taken by the stone to reach the ground will be:",
                "options": ["6s", "6.5s", "7s", "7.5s"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Calculate the total height from which the stone was dropped: $H = \\frac{1}{2}g(5)^2 = 12.5g$.<br><b>Step 2:</b> Calculate the distance it fell in the first 3s before being stopped: $h_1 = \\frac{1}{2}g(3)^2 = 4.5g$.<br><b>Step 3:</b> Calculate the remaining distance it needs to fall after being released again: $h_{rem} = H - h_1 = 12.5g - 4.5g = 8g$.<br><b>Step 4:</b> Since it is released from rest again, calculate the time to fall the remaining distance: $t_2 = \\sqrt{\\frac{2h_{rem}}{g}} = \\sqrt{\\frac{2(8g)}{g}} = \\sqrt{16} = 4\\text{ s}$.<br><b>Step 5:</b> The total time taken is the first 3s plus the second 4s: $3 + 4 = 7\\text{ s}$."
            },
            {
                "id": "KIN-TEST-040",
                "topic": "Relative Velocity",
                "difficulty": 2,
                "tags": ["Relative Speed", "Simultaneous Equations"],
                "q": "What are the speeds of two objects if, when they move uniformly towards each other, they get 4 m closer in each second and when they move uniformly in the same direction with the original speeds, they get 4 m closer each 10s?",
                "options": ["2.8 m/s and 12 m/s", "5.2 m/s and 4.6 m/s", "3.2 m/s and 2.1 m/s", "2.2 m/s and 1.8 m/s"],
                "correct": 3,
                "sol": "<b>Step 1:</b> When moving towards each other (opposite directions), their relative speed is $v_1 + v_2$. They close 4m in 1s, so $v_1 + v_2 = \\frac{4}{1} = 4\\text{ m/s}$.<br><b>Step 2:</b> When moving in the same direction, their relative speed is $v_1 - v_2$. They close 4m in 10s, so $v_1 - v_2 = \\frac{4}{10} = 0.4\\text{ m/s}$.<br><b>Step 3:</b> Set up the system of equations: $v_1 + v_2 = 4$ and $v_1 - v_2 = 0.4$.<br><b>Step 4:</b> Add the equations: $2v_1 = 4.4 \\implies v_1 = 2.2\\text{ m/s}$.<br><b>Step 5:</b> Substitute $v_1$ back: $2.2 + v_2 = 4 \\implies v_2 = 1.8\\text{ m/s}$."
            },
            {
                "id": "KIN-TEST-041",
                "topic": "Relative Velocity",
                "difficulty": 2,
                "tags": ["Relative Speed", "Trains"],
                "q": "Two trains are each 50m long moving parallel towards each other at speeds 10 m/s and 15 m/s respectively, at what time will they pass each other?",
                "options": ["8 s", "4 s", "2 s", "6 s"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The total relative distance to be covered for the trains to completely pass each other is the sum of their lengths: $S_{rel} = 50\\text{ m} + 50\\text{ m} = 100\\text{ m}$.<br><b>Step 2:</b> Since they are moving towards each other, their relative speed is the sum of their individual speeds: $V_{rel} = 10 + 15 = 25\\text{ m/s}$.<br><b>Step 3:</b> Time taken is $t = \\frac{S_{rel}}{V_{rel}}$.<br><b>Step 4:</b> $t = \\frac{100}{25} = 4\\text{ s}$."
            },
            {
                "id": "KIN-TEST-042",
                "topic": "Relative Velocity",
                "difficulty": 2,
                "tags": ["Relative Acceleration", "Free Fall"],
                "q": "A ball is dropped from the top of a building 100 m high. At the same instant another ball is thrown upwards with a velocity of $40\\text{ ms}^{-1}$ form the bottom of the building. The two balls will meet after.",
                "options": ["5 s", "2.5 s", "2 s", "3 s"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Analyze the problem using relative motion. The initial relative distance is $S_{rel} = 100\\text{ m}$.<br><b>Step 2:</b> The relative initial velocity is $u_{rel} = u_{up} - u_{down} = 40 - 0 = 40\\text{ m/s}$.<br><b>Step 3:</b> Since both balls are strictly under the influence of gravity ($-g$), their relative acceleration is $a_{rel} = -g - (-g) = 0$.<br><b>Step 4:</b> Because relative acceleration is zero, the relative velocity remains constant. $t = \\frac{S_{rel}}{u_{rel}}$.<br><b>Step 5:</b> $t = \\frac{100}{40} = 2.5\\text{ s}$."
            },
            {
                "id": "KIN-TEST-043",
                "topic": "Displacement and Distance",
                "difficulty": 3,
                "tags": ["2D Vectors", "Net Displacement"],
                "q": "A person moves 30m north and then 20m towards east and finally $30\\sqrt{2}$ m in south-west direction. The displacement of the person from the origin will be:",
                "options": ["10m along north", "10 m along south", "10m along west", "zero"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Break down the journey into vector components. Let East be $+x$ ($\\hat{i}$) and North be $+y$ ($\\hat{j}$).<br><b>Step 2:</b> Leg 1 (North): $\\vec{S_1} = 30\\hat{j}$.<br><b>Step 3:</b> Leg 2 (East): $\\vec{S_2} = 20\\hat{i}$.<br><b>Step 4:</b> Leg 3 (South-West): South-West is exactly midway between South ($-y$) and West ($-x$). $\\vec{S_3} = -30\\sqrt{2}\\cos(45^{\\circ})\\hat{i} - 30\\sqrt{2}\\sin(45^{\\circ})\\hat{j}$.<br><b>Step 5:</b> Simplify $\\vec{S_3}$: $-30\\sqrt{2}\\left(\\frac{1}{\\sqrt{2}}\\right)\\hat{i} - 30\\sqrt{2}\\left(\\frac{1}{\\sqrt{2}}\\right)\\hat{j} = -30\\hat{i} - 30\\hat{j}$.<br><b>Step 6:</b> Net displacement $\\vec{S} = (20\\hat{i} + 30\\hat{j}) + (-30\\hat{i} - 30\\hat{j}) = -10\\hat{i} + 0\\hat{j}$.<br><b>Step 7:</b> The displacement is 10m strictly along the negative x-axis, which is West."
            },
            {
                "id": "KIN-TEST-044",
                "topic": "Speed and Velocity",
                "difficulty": 2,
                "tags": ["Average Speed", "Fractional Distances"],
                "q": "If a car covers $2/5^{th}$ of the total distance with $v_{1}$ speed and $3/5^{th}$ distance with $v_{2}$ then average speed is:",
                "options": ["$\\frac{1}{2}\\sqrt{v_{1}v_{2}}$", "$\\frac{v_{1}+v_{2}}{2}$", "$\\frac{2v_{1}v_{2}}{v_{1}+v_{2}}$", "$\\frac{5v_{1}v_{2}}{3v_{1}+2v_{2}}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Let the total distance be $S$. Average speed is defined as $\\frac{\\text{Total Distance}}{\\text{Total Time}}$.<br><b>Step 2:</b> Time for the first part: $t_1 = \\frac{2S/5}{v_1} = \\frac{2S}{5v_1}$.<br><b>Step 3:</b> Time for the second part: $t_2 = \\frac{3S/5}{v_2} = \\frac{3S}{5v_2}$.<br><b>Step 4:</b> Total Time $T = t_1 + t_2 = \\frac{2S}{5v_1} + \\frac{3S}{5v_2} = S\\left(\\frac{2v_2 + 3v_1}{5v_1v_2}\\right)$.<br><b>Step 5:</b> Average Speed $= \\frac{S}{T} = \\frac{S}{S\\left(\\frac{2v_2 + 3v_1}{5v_1v_2}\\right)}$.<br><b>Step 6:</b> Cancel $S$ and invert the fraction: $\\frac{5v_{1}v_{2}}{3v_{1}+2v_{2}}$."
            },
            {
                "id": "KIN-TEST-045",
                "topic": "Speed and Velocity",
                "difficulty": 3,
                "tags": ["Relative Approach", "Geometry"],
                "q": "Four persons A, B,C and D initially at the corners of a square of side length 'd'. If every person starts moving with same speed v such that each one faces the other always, the person will meet after time:",
                "options": ["$\\frac{d}{v}$", "$\\frac{\\sqrt{2}d}{v}$", "$\\frac{d}{2v}$", "$\\frac{d}{\\sqrt{2}v}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Person A always moves towards Person B, B towards C, C towards D, and D towards A. Due to symmetry, they will trace out spirals and meet precisely at the center of the square.<br><b>Step 2:</b> Analyze the relative motion between A and B. The distance between them initially is $d$.<br><b>Step 3:</b> The velocity of A towards B is $v$. The velocity of B is directed towards C, which is strictly perpendicular ($90^{\\circ}$) to the line joining A and B.<br><b>Step 4:</b> The component of B's velocity along the line AB is $v \\cos(90^{\\circ}) = 0$.<br><b>Step 5:</b> Therefore, the relative velocity of approach is $V_{app} = v_{A} - v_{B\\_along\\_AB} = v - 0 = v$.<br><b>Step 6:</b> The time taken to close the distance $d$ at approach velocity $v$ is $t = \\frac{d}{v}$."
            },
            {
                "id": "KIN-TEST-046",
                "topic": "Speed and Velocity",
                "difficulty": 3,
                "tags": ["Average Speed", "Average Velocity", "Multi-stage Motion"],
                "q": "A man walks on a straight road from his home to a market 2.5 km away with a speed of 5 km/h. Finding the market closed, he instantly turns and walks back home with a speed of 7.5 km/h. What is the (a) magnitude of average velocity and (b) average speed of the man over the time interval 0 to 50 min (in kmph).",
                "options": ["0, 4", "0, 6", "0, 8", "0, 12"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Calculate the time taken to reach the market: $t_1 = \\frac{\\text{Distance}}{\\text{Speed}} = \\frac{2.5\\text{ km}}{5\\text{ km/h}} = 0.5\\text{ hr} = 30\\text{ min}$.<br><b>Step 2:</b> Calculate the time remaining in the 50-minute interval: $t_2 = 50\\text{ min} - 30\\text{ min} = 20\\text{ min} = \\frac{1}{3}\\text{ hr}$.<br><b>Step 3:</b> Calculate the distance covered during the return trip in this remaining time: $d_2 = 7.5\\text{ km/h} \\times \\frac{1}{3}\\text{ hr} = 2.5\\text{ km}$.<br><b>Step 4:</b> Since he travels 2.5 km back, he exactly reaches home at $t=50\\text{ min}$. Net displacement is zero, so average velocity is 0.<br><b>Step 5:</b> Total distance covered = $2.5\\text{ km} + 2.5\\text{ km} = 5.0\\text{ km}$. Total time = $\\frac{50}{60}\\text{ hr} = \\frac{5}{6}\\text{ hr}$.<br><b>Step 6:</b> Average speed = $\\frac{5.0}{5/6} = 6\\text{ km/h}$."
            },
            {
                "id": "KIN-TEST-047",
                "topic": "Acceleration",
                "difficulty": 3,
                "tags": ["Equations of Motion", "Time Delay"],
                "q": "A starts from rest and moves with acceleration $a_1$. Two seconds later, B starts from rest and moves with an acceleration $a_2$. If the displacement of A in the $5^{th}$ second is the same as that of B in the same interval, the ratio of $a_1$ to $a_2$ is:",
                "options": ["9:5", "5:9", "1:1", "1:3"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The distance covered in the $n^{th}$ second by a body starting from rest is $S_n = \\frac{a}{2}(2n - 1)$.<br><b>Step 2:</b> For body A, the displacement in its $5^{th}$ second of motion is $S_{A5} = \\frac{a_1}{2}(2(5) - 1) = \\frac{9a_1}{2}$.<br><b>Step 3:</b> \"The same interval\" means the 5th second since the clock started. Since body B started 2 seconds later, this interval represents B's $3^{rd}$ second of actual motion.<br><b>Step 4:</b> For body B, the displacement in its $3^{rd}$ second is $S_{B3} = \\frac{a_2}{2}(2(3) - 1) = \\frac{5a_2}{2}$.<br><b>Step 5:</b> Equate the displacements: $\\frac{9a_1}{2} = \\frac{5a_2}{2} \\implies 9a_1 = 5a_2$.<br><b>Step 6:</b> Therefore, the ratio $\\frac{a_1}{a_2} = \\frac{5}{9}$."
            },
            {
                "id": "KIN-TEST-048",
                "topic": "Acceleration",
                "difficulty": 3,
                "tags": ["Simultaneous Equations", "Deceleration"],
                "q": "A body travels 200cm in the first two seconds and 220cm in the next 4 seconds with uniform deceleration. The velocity of the body at the end of the $7^{th}$ second is:",
                "options": ["20 cm/s", "15 cm/s", "10 cm/s", "0 cm/s"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Use $S = ut + \\frac{1}{2}at^2$. In the first 2s, distance is 200 cm: $200 = u(2) + \\frac{1}{2}a(2)^2 \\implies 2u + 2a = 200 \\implies u + a = 100$ (Eq 1).<br><b>Step 2:</b> In the first 6s (2s + next 4s), the total distance is $200 + 220 = 420\\text{ cm}$.<br><b>Step 3:</b> $420 = u(6) + \\frac{1}{2}a(6)^2 \\implies 6u + 18a = 420 \\implies u + 3a = 70$ (Eq 2).<br><b>Step 4:</b> Subtract Eq 1 from Eq 2: $(u + 3a) - (u + a) = 70 - 100 \\implies 2a = -30 \\implies a = -15\\text{ cm/s}^2$.<br><b>Step 5:</b> Substitute 'a' into Eq 1: $u - 15 = 100 \\implies u = 115\\text{ cm/s}$.<br><b>Step 6:</b> Velocity at the end of the 7th second ($t=7$): $v = u + at = 115 + (-15)(7) = 115 - 105 = 10\\text{ cm/s}$."
            },
            {
                "id": "KIN-TEST-049",
                "topic": "Acceleration",
                "difficulty": 2,
                "tags": ["Stopping Time", "Kinematics"],
                "q": "A bullet moving at $20\\text{ m/sec}$ strikes a wooden plank and penetrates 4 cm before coming to stop. The time taken to stop is:",
                "options": ["0.008 sec", "0.016 sec", "0.004 sec", "0.002 sec"],
                "correct": 2,
                "sol": "<b>Step 1:</b> We know initial velocity $u = 20\\text{ m/s}$, final velocity $v = 0\\text{ m/s}$, and stopping distance $S = 4\\text{ cm} = 0.04\\text{ m}$.<br><b>Step 2:</b> Use the kinematic relation linking distance, average velocity, and time: $S = \\left(\\frac{u+v}{2}\\right)t$.<br><b>Step 3:</b> Substitute the values: $0.04 = \\left(\\frac{20+0}{2}\\right)t$.<br><b>Step 4:</b> $0.04 = 10t$.<br><b>Step 5:</b> Solve for time: $t = \\frac{0.04}{10} = 0.004\\text{ sec}$."
            },
            {
                "id": "KIN-TEST-050",
                "topic": "Acceleration",
                "difficulty": 2,
                "tags": ["Stopping Distance", "Proportionality"],
                "q": "An automobile travelling with a speed of 60km/h can brake to stop within a distance of 20m. If the car is going twice as fast i.e., 120km/h the stopping distance will be:",
                "options": ["20 m", "40 m", "60 m", "80 m"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The stopping distance $S$ for an object with initial velocity $u$ undergoing constant deceleration $a$ is $v^2 - u^2 = 2aS \\implies 0 - u^2 = 2(-a)S \\implies S = \\frac{u^2}{2a}$.<br><b>Step 2:</b> Assuming the braking deceleration remains constant, the stopping distance is directly proportional to the square of the initial speed ($S \\propto u^2$).<br><b>Step 3:</b> The speed is doubled from 60 km/h to 120 km/h.<br><b>Step 4:</b> Since the speed increases by a factor of 2, the stopping distance will increase by a factor of $2^2 = 4$.<br><b>Step 5:</b> New stopping distance $= 20\\text{ m} \\times 4 = 80\\text{ m}$."
            },
            {
                "id": "KIN-TEST-051",
                "topic": "Relative Velocity",
                "difficulty": 3,
                "tags": ["Quadratic Equations", "Pursuit Problem"],
                "q": "A police party is moving in a jeep at a constant speed v. They saw a thief at a distance x on a motorcycle which is at rest. The moment the police saw the thief, the thief started at constant acceleration $\\alpha$. Which of the following relations is true if the police is able to catch the thief?",
                "options": ["$v^{2}<\\alpha x$", "$v^{2}<2\\alpha x$", "$v^{2}>2\\alpha x$", "$v^{2}=\\alpha x$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Let the police catch the thief at time $t$. The distance covered by the police is $vt$.<br><b>Step 2:</b> The distance covered by the thief is $\\frac{1}{2}\\alpha t^2$. Because the thief started $x$ distance ahead, the total distance to the meeting point from the police's origin is $x + \\frac{1}{2}\\alpha t^2$.<br><b>Step 3:</b> Equate the distances: $vt = x + \\frac{1}{2}\\alpha t^2$.<br><b>Step 4:</b> Rearrange into a quadratic equation in terms of $t$: $\\frac{1}{2}\\alpha t^2 - vt + x = 0$.<br><b>Step 5:</b> For the police to physically catch the thief, a real positive solution for $t$ must exist. This means the discriminant must be greater than zero: $b^2 - 4ac > 0$.<br><b>Step 6:</b> $(-v)^2 - 4\\left(\\frac{1}{2}\\alpha\\right)(x) > 0 \\implies v^2 - 2\\alpha x > 0 \\implies v^2 > 2\\alpha x$."
            },
            {
                "id": "KIN-TEST-052",
                "topic": "Acceleration",
                "difficulty": 2,
                "tags": ["Average Velocity", "Kinematics"],
                "q": "Velocity of a body moving with uniform acceleration of $3\\text{ m/s}^{2}$ is changed through 30m/s in certain time. Average velocity of body during this time is 30m/s. Distance covered by it during this time is:",
                "options": ["300 m", "200 m", "400 m", "250 m"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The change in velocity is given as $\\Delta v = 30\\text{ m/s}$, and uniform acceleration is $a = 3\\text{ m/s}^2$.<br><b>Step 2:</b> The time taken for this change is $t = \\frac{\\Delta v}{a} = \\frac{30}{3} = 10\\text{ s}$.<br><b>Step 3:</b> The average velocity during this entire interval is given as $v_{avg} = 30\\text{ m/s}$.<br><b>Step 4:</b> Distance covered is simply Average Velocity multiplied by Time.<br><b>Step 5:</b> $S = v_{avg} \\times t = 30 \\times 10 = 300\\text{ m}$."
            },
            {
                "id": "KIN-TEST-053",
                "topic": "Relative Velocity",
                "difficulty": 2,
                "tags": ["Pursuit Problem", "Quadratic Equations"],
                "q": "A person is running at his maximum speed of $4\\text{ m/s}$ to catch a train. When he is 6m from the door of the compartment the train starts to leave the station at a constant acceleration of $1\\text{ m/s}^{2}$. Find how long it takes him to catch up the train:",
                "options": ["2 s", "3 s", "4 s", "He will not catch it"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Set the origin at the person's starting position. The train starts at $x = 6\\text{ m}$.<br><b>Step 2:</b> The distance covered by the man in time $t$ is $S_{man} = 4t$.<br><b>Step 3:</b> The position of the train in time $t$ is $S_{train} = 6 + \\frac{1}{2}at^2 = 6 + \\frac{1}{2}(1)t^2$.<br><b>Step 4:</b> For the man to catch the train, their positions must be equal: $4t = 6 + 0.5t^2$.<br><b>Step 5:</b> Multiply by 2 and rearrange: $t^2 - 8t + 12 = 0$.<br><b>Step 6:</b> Factor the quadratic equation: $(t-2)(t-6) = 0$.<br><b>Step 7:</b> The first time they meet (which is when he catches the train) is $t = 2\\text{ s}$."
            },
            {
                "id": "KIN-TEST-054",
                "topic": "Acceleration",
                "difficulty": 2,
                "tags": ["Quadratic Equations", "Displacement"],
                "q": "A body is moving along the +ve x-axis with uniform acceleration of $-4\\text{ ms}^{-2}$. Its velocity at $x=0$ is $10\\text{ ms}^{-1}$. The time taken by the body to reach a point at $x=12\\text{ m}$ is:",
                "options": ["(2s, 3s)", "(3s, 4s)", "(4s, 8s)", "(1s, 2s)"],
                "correct": 0,
                "sol": "<b>Step 1:</b> We have initial velocity $u = 10\\text{ m/s}$, acceleration $a = -4\\text{ m/s}^2$, and displacement $S = 12\\text{ m}$.<br><b>Step 2:</b> Use the second equation of motion: $S = ut + \\frac{1}{2}at^2$.<br><b>Step 3:</b> Substitute the values: $12 = 10t + \\frac{1}{2}(-4)t^2 \\implies 12 = 10t - 2t^2$.<br><b>Step 4:</b> Divide the entire equation by 2 and rearrange: $t^2 - 5t + 6 = 0$.<br><b>Step 5:</b> Factor the quadratic equation: $(t-2)(t-3) = 0$.<br><b>Step 6:</b> The body is at $x=12\\text{m}$ at two instances: $t=2\\text{ s}$ (on its way out) and $t=3\\text{ s}$ (on its way back after velocity reversed direction)."
            },
            {
                "id": "KIN-TEST-055",
                "topic": "Motion Under Gravity",
                "difficulty": 3,
                "tags": ["Free Fall", "Ratio"],
                "q": "A freely falling body takes 't' second to travel first $(1/x)^{th}$ distance. Then, time of descent is:",
                "options": ["$\\frac{t}{\\sqrt{x}}$", "$t\\sqrt{x}$", "$\\frac{\\sqrt{x}}{t}$", "$\\frac{1}{t\\sqrt{x}}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Let the total height of the fall be $H$ and the total time of descent be $T$. We know $H = \\frac{1}{2}gT^2$.<br><b>Step 2:</b> The distance covered in the first part is $\\frac{H}{x}$, and it takes time $t$. So, $\\frac{H}{x} = \\frac{1}{2}gt^2$.<br><b>Step 3:</b> Substitute $H = \\frac{1}{2}gT^2$ into the second equation: $\\frac{1}{x} \\left(\\frac{1}{2}gT^2\\right) = \\frac{1}{2}gt^2$.<br><b>Step 4:</b> Cancel $\\frac{1}{2}g$ from both sides: $\\frac{T^2}{x} = t^2$.<br><b>Step 5:</b> Solve for total time $T$: $T^2 = x t^2 \\implies T = t\\sqrt{x}$."
            },
            {
                "id": "KIN-TEST-056",
                "topic": "Motion Under Gravity",
                "difficulty": 2,
                "tags": ["Free Fall", "Symmetry"],
                "q": "The distance travelled by a body during last second of its upward journey is 'd', when the body is projected with certain velocity vertically up. If the velocity of projection is doubled, the distance travelled by the body during the last second of its upward journey is:",
                "options": ["2d", "4d", "d/2", "d"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Due to the symmetry of free fall, the motion of a projectile going up and coming to a momentary stop is identical (in reverse) to dropping it from rest.<br><b>Step 2:</b> Therefore, the distance traveled in the *last* second of an upward journey is exactly equal to the distance traveled in the *first* second of a downward free fall from rest.<br><b>Step 3:</b> The distance for the first second of free fall is $S = u(1) + \\frac{1}{2}g(1)^2 = 0 + \\frac{g}{2} = \\frac{g}{2}$.<br><b>Step 4:</b> Because this distance is determined purely by gravity ($g/2$), it is a constant value and completely independent of the initial velocity of projection.<br><b>Step 5:</b> Even if the initial velocity is doubled, the distance in the final second before stopping remains 'd'."
            },
            {
                "id": "KIN-TEST-057",
                "topic": "Motion Under Gravity",
                "difficulty": 3,
                "tags": ["Multi-stage Motion", "Maximum Height"],
                "q": "A rocket is fired and ascends with constant vertical acceleration of $10\\text{ m/s}^{2}$ for 1 minute. Its fuel is exhausted and it continues as a free particle. The maximum altitude reached is $(g=10\\text{ m/s}^{2})$:",
                "options": ["18 km", "36 km", "72 km", "108 km"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Phase 1 (Powered flight): Initial velocity $u=0$, acceleration $a=10\\text{ m/s}^2$, time $t=60\\text{ s}$.<br><b>Step 2:</b> Altitude reached during Phase 1: $h_1 = \\frac{1}{2}at^2 = \\frac{1}{2}(10)(60)^2 = 5 \\times 3600 = 18000\\text{ m} = 18\\text{ km}$.<br><b>Step 3:</b> Velocity at engine cutoff: $v = u + at = 0 + 10(60) = 600\\text{ m/s}$.<br><b>Step 4:</b> Phase 2 (Free flight): The rocket coasts upward with initial velocity $600\\text{ m/s}$ under gravity ($a = -10\\text{ m/s}^2$).<br><b>Step 5:</b> Extra altitude reached during Phase 2: $h_2 = \\frac{v^2}{2g} = \\frac{(600)^2}{20} = \\frac{360000}{20} = 18000\\text{ m} = 18\\text{ km}$.<br><b>Step 6:</b> Total maximum altitude $= h_1 + h_2 = 18 + 18 = 36\\text{ km}$."
            },
            {
                "id": "KIN-TEST-058",
                "topic": "Motion Under Gravity",
                "difficulty": 3,
                "tags": ["Multi-stage Motion", "Deceleration"],
                "q": "A parachutist after bailing out falls 50m without friction. When parachute opens, it decelerates at $2\\text{ m/s}^{2}$. He reaches the ground with a speed of $3\\text{ m/s}$. At what height, did he bail out? (Take $g=9.8\\text{ ms}^{-2}$)",
                "options": ["91 m", "182 m", "293 m", "111 m"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Phase 1 (Free fall): $S_1 = 50\\text{ m}$, $u=0$, $a=g=9.8\\text{ m/s}^2$.<br><b>Step 2:</b> Calculate the velocity squared at the end of Phase 1: $v_1^2 = u^2 + 2gS_1 = 0 + 2(9.8)(50) = 980$.<br><b>Step 3:</b> Phase 2 (Parachute): Initial velocity squared is $v_1^2 = 980$, final velocity is $v_2 = 3\\text{ m/s}$, and acceleration is $a = -2\\text{ m/s}^2$.<br><b>Step 4:</b> Use $v_2^2 - v_1^2 = 2aS_2$ to find the remaining distance $S_2$: $3^2 - 980 = 2(-2)S_2 \\implies 9 - 980 = -4S_2$.<br><b>Step 5:</b> $-971 = -4S_2 \\implies S_2 = \\frac{971}{4} = 242.75\\text{ m}$.<br><b>Step 6:</b> The total height from which he bailed out is $S_1 + S_2 = 50 + 242.75 = 292.75\\text{ m} \\approx 293\\text{ m}$."
            },
            {
                "id": "KIN-TEST-059",
                "topic": "Motion Under Gravity",
                "difficulty": 3,
                "tags": ["Distance in nth Second", "Ratio"],
                "q": "A body is thrown vertically upwards with an initial velocity 'u' reaches a maximum height in 6s. The ratio of the distance travelled by the body in the first second to the seventh second is:",
                "options": ["1:1", "11:1", "1:2", "1:11"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Time to reach maximum height is $t = 6\\text{ s}$. Since $t = \\frac{u}{g}$, initial velocity $u = 6g$.<br><b>Step 2:</b> Distance travelled in the 1st second: $S_1 = u - \\frac{g}{2}(2(1) - 1) = 6g - 0.5g = 5.5g$.<br><b>Step 3:</b> The body reaches the top at $t=6\\text{s}$ and momentarily stops. The 7th second of its total journey represents the 1st second of its downward free fall.<br><b>Step 4:</b> Distance travelled in the first second of free fall is $S_7 = \\frac{1}{2}g(1)^2 = 0.5g$.<br><b>Step 5:</b> The ratio of these distances is $\\frac{5.5g}{0.5g} = \\frac{5.5}{0.5} = 11:1$."
            },
            {
                "id": "KIN-TEST-060",
                "topic": "Motion Under Gravity",
                "difficulty": 3,
                "tags": ["Partial Descent", "Time Algebra"],
                "q": "A body is thrown vertically up to reach its maximum height in t seconds. The total time from the time of projection to reach a point at half of its maximum height while returning (in seconds) is:",
                "options": ["$(1+\\sqrt{2})t$", "$(1+\\frac{1}{\\sqrt{2}})t$", "$\\frac{3t}{2}$", "$\\frac{t}{\\sqrt{2}}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The body reaches max height $H$ in $t$ seconds, so $H = \\frac{1}{2}gt^2$.<br><b>Step 2:</b> We need the total time to go up ($t$) PLUS the time it takes to fall half the maximum height from the top.<br><b>Step 3:</b> Let the time taken to fall a distance of $H/2$ be $t'$. Using the free fall equation: $\\frac{1}{2}gt'^2 = \\frac{H}{2}$.<br><b>Step 4:</b> Substitute $H$: $\\frac{1}{2}gt'^2 = \\frac{1}{2} \\left(\\frac{1}{2}gt^2\\right) \\implies t'^2 = \\frac{t^2}{2} \\implies t' = \\frac{t}{\\sqrt{2}}$.<br><b>Step 5:</b> Total time = time to ascend + time to partially descend $= t + \\frac{t}{\\sqrt{2}}$.<br><b>Step 6:</b> Factoring out $t$, we get $t\\left(1 + \\frac{1}{\\sqrt{2}}\\right)$."
            },
            {
                "id": "KIN-TEST-061",
                "topic": "Motion Under Gravity",
                "difficulty": 3,
                "tags": ["Sequential Drops", "Free Fall", "Kinematics"],
                "q": "Water drops fall from a tap on to the floor 5.0m below at regular intervals of time. The first drop strikes the floor when the fifth drop begins to fall. The height at which the third drop will be from ground, at the instant when the first drop strikes the ground is (Take $g=10\\text{m/s}^{2}$)",
                "options": ["1.25m", "2.15m", "2.75m", "3.75m"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Calculate the total time taken by the first drop to hit the ground: $t = \\sqrt{\\frac{2H}{g}} = \\sqrt{\\frac{2(5)}{10}} = 1\\text{ s}$.<br><b>Step 2:</b> If the 5th drop is just starting to fall when the 1st hits, there are 4 equal time intervals between the 5 drops.<br><b>Step 3:</b> The time interval between successive drops is $\\Delta t = \\frac{1}{4} = 0.25\\text{ s}$.<br><b>Step 4:</b> When the 1st drop hits the ground (at $t=1\\text{s}$), the 3rd drop has been falling for 2 time intervals: $t_3 = 2 \\times 0.25 = 0.5\\text{ s}$.<br><b>Step 5:</b> Calculate the distance fallen by the 3rd drop: $h_{fallen} = \\frac{1}{2}g(t_3)^2 = \\frac{1}{2}(10)(0.5)^2 = 5 \\times 0.25 = 1.25\\text{ m}$.<br><b>Step 6:</b> The height of the 3rd drop from the ground is $H - h_{fallen} = 5.0 - 1.25 = 3.75\\text{ m}$."
            },
            {
                "id": "KIN-TEST-062",
                "topic": "Motion Under Gravity",
                "difficulty": 3,
                "tags": ["Kinematics", "Projectile Motion"],
                "q": "A boy throws n balls per second at regular time intervals. When the first ball reaches the maximum height he throws the second one vertically up. The maximum height reached by each ball is:",
                "options": ["$\\frac{g}{2(n-1)^{2}}$", "$\\frac{g}{2n^{2}}$", "$\\frac{g}{n^{2}}$", "$\\frac{g}{n}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The boy throws $n$ balls per second. The time interval between successive throws is $\\Delta t = \\frac{1}{n}\\text{ s}$.<br><b>Step 2:</b> The second ball is thrown exactly when the first ball reaches its maximum height. Therefore, the time taken to reach maximum height is $t_{max} = \\Delta t = \\frac{1}{n}$.<br><b>Step 3:</b> The time to reach maximum height is also given by $t_{max} = \\frac{u}{g}$.<br><b>Step 4:</b> Equating the two gives the initial velocity: $\\frac{u}{g} = \\frac{1}{n} \\implies u = \\frac{g}{n}$.<br><b>Step 5:</b> The maximum height reached is $H = \\frac{u^2}{2g}$.<br><b>Step 6:</b> Substitute $u$: $H = \\frac{(g/n)^2}{2g} = \\frac{g^2 / n^2}{2g} = \\frac{g}{2n^2}$."
            },
            {
                "id": "KIN-TEST-063",
                "topic": "Motion Under Gravity",
                "difficulty": 2,
                "tags": ["Maximum Height", "Velocity"],
                "q": "A body is thrown vertically upward from a point 'A' 125m above the ground. It goes up to a maximum height of 250 m above the ground and passes through 'A' on its downward journey. The velocity of the body when it is at a height of 70m above the ground is $(g=10\\text{ m/s}^{2})$:",
                "options": ["$20\\text{ m/s}$", "$50\\text{ m/s}$", "$60\\text{ m/s}$", "$80\\text{ m/s}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> At its maximum height of 250 m from the ground, the velocity of the body is exactly 0.<br><b>Step 2:</b> We need to find its velocity when it falls from this 250 m peak down to a height of 70 m above the ground.<br><b>Step 3:</b> Calculate the distance it freely falls: $S = 250\\text{ m} - 70\\text{ m} = 180\\text{ m}$.<br><b>Step 4:</b> Use the free fall equation $v = \\sqrt{2gS}$.<br><b>Step 5:</b> Substitute the values: $v = \\sqrt{2(10)(180)} = \\sqrt{3600}$.<br><b>Step 6:</b> The velocity is $60\\text{ m/s}$."
            },
            {
                "id": "KIN-TEST-064",
                "topic": "Motion Under Gravity",
                "difficulty": 2,
                "tags": ["Multi-stage Motion", "Free Fall"],
                "q": "A body is released from the top of a tower of height H m. After 2s it is stopped and then instantaneously released. What will be its height after next 2s (in metres)? (Take $g=10\\text{ m/s}^{2}$)",
                "options": ["H - 5", "H - 10", "H - 20", "H - 40"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Calculate the distance the body falls in the first 2 seconds from rest: $h_1 = \\frac{1}{2}gt^2 = \\frac{1}{2}(10)(2^2) = 20\\text{ m}$.<br><b>Step 2:</b> The body is momentarily stopped, meaning its velocity resets to zero.<br><b>Step 3:</b> It is released again, so it falls from rest for another 2 seconds: $h_2 = \\frac{1}{2}gt^2 = \\frac{1}{2}(10)(2^2) = 20\\text{ m}$.<br><b>Step 4:</b> The total distance fallen from the top of the tower is $h_1 + h_2 = 20 + 20 = 40\\text{ m}$.<br><b>Step 5:</b> The remaining height from the ground is the total height minus the fallen distance: $H - 40$."
            },
            {
                "id": "KIN-TEST-065",
                "topic": "Motion Under Gravity",
                "difficulty": 3,
                "tags": ["Free Fall", "Algebraic Manipulation"],
                "q": "A ball dropped from 9th stair of a multistoried building reaches the ground in 3 sec. In the first second of its free fall, it passes through 'n' stairs, then 'n' is equal to:",
                "options": ["1", "3", "4", "2"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Let the height of one stair be $h$. The total height of 9 stairs is $9h$.<br><b>Step 2:</b> The ball falls a total distance of $9h$ in 3 seconds. Using $S = \\frac{1}{2}gt^2$: $9h = \\frac{1}{2}g(3^2) \\implies 9h = \\frac{9g}{2} \\implies h = \\frac{g}{2}$.<br><b>Step 3:</b> Calculate the distance the ball falls in the first 1 second: $y = \\frac{1}{2}g(1^2) = \\frac{g}{2}$.<br><b>Step 4:</b> Find the number of stairs passed in the first second: $n = \\frac{y}{h}$.<br><b>Step 5:</b> Substitute the values: $n = \\frac{g/2}{g/2} = 1$."
            },
            {
                "id": "KIN-TEST-066",
                "topic": "Relative Velocity",
                "difficulty": 3,
                "tags": ["Equations of Motion", "Acceleration"],
                "q": "Two particles P and Q simultaneously start moving from point A with velocities 15m/s and 20 m/s respectively. The two particles move with accelerations equal in magnitude but opposite in direction. When P overtakes Q at B then its velocity is 30m/s. The velocity of Q at point B will be:",
                "options": ["$30\\text{ m/s}$", "$5\\text{ m/s}$", "$10\\text{ m/s}$", "$15\\text{ m/s}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Use the first equation of motion for both particles. For P: $v_P = u_P + at$. For Q: $v_Q = u_Q - at$ (since acceleration is equal and opposite).<br><b>Step 2:</b> For particle P, we know the initial and final velocities: $30 = 15 + at \\implies at = 15$.<br><b>Step 3:</b> For particle Q, we want to find its final velocity $v_Q$ at the same time $t$: $v_Q = 20 - at$.<br><b>Step 4:</b> Substitute the value of $at$ we found from particle P into Q's equation.<br><b>Step 5:</b> $v_Q = 20 - 15 = 5\\text{ m/s}$."
            },
            {
                "id": "KIN-TEST-067",
                "topic": "Relative Velocity",
                "difficulty": 2,
                "tags": ["Trains", "Relative Speed"],
                "q": "Two trains A and B, 100m and 60m long, are moving in opposite directions on parallel tracks. The velocity of the shorter train is 3 times that of the longer one. If the trains take 4s to cross each other, the velocities of the trains are:",
                "options": ["$v_A=10\\text{ ms}^{-1}, v_B=30\\text{ ms}^{-1}$", "$v_A=2.5\\text{ ms}^{-1}, v_B=7.5\\text{ ms}^{-1}$", "$v_A=20\\text{ ms}^{-1}, v_B=60\\text{ ms}^{-1}$", "$v_A=5\\text{ ms}^{-1}, v_B=15\\text{ ms}^{-1}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Identify the lengths. Longer train A = 100 m. Shorter train B = 60 m.<br><b>Step 2:</b> The total relative distance to cross is $S_{rel} = 100 + 60 = 160\\text{ m}$.<br><b>Step 3:</b> Given $v_B = 3v_A$. Since they move in opposite directions, the relative velocity is $v_{rel} = v_A + v_B = v_A + 3v_A = 4v_A$.<br><b>Step 4:</b> Use the relationship $S_{rel} = v_{rel} \\times t$. Substitute the values: $160 = 4v_A \\times 4$.<br><b>Step 5:</b> $16v_A = 160 \\implies v_A = 10\\text{ m/s}$.<br><b>Step 6:</b> Consequently, $v_B = 3(10) = 30\\text{ m/s}$."
            },
            {
                "id": "KIN-TEST-068",
                "topic": "Relative Velocity",
                "difficulty": 2,
                "tags": ["Meeting Point", "Linear Equations"],
                "q": "Two particles move along x-axis in the same direction with uniform velocities 8 m/s and 4 m/s. Initially the first particle is 21m to the left of the origin and the second one is 7m to the right of the origin. The two particles meet from the origin at a distance of:",
                "options": ["35 m", "32 m", "28 m", "56 m"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Write the position equations for both particles as a function of time $t$.<br><b>Step 2:</b> For particle 1: $x_1(t) = -21 + 8t$.<br><b>Step 3:</b> For particle 2: $x_2(t) = 7 + 4t$.<br><b>Step 4:</b> The particles meet when their positions are equal: $x_1(t) = x_2(t)$.<br><b>Step 5:</b> $-21 + 8t = 7 + 4t \\implies 4t = 28 \\implies t = 7\\text{ s}$.<br><b>Step 6:</b> Substitute $t=7$ back into either position equation to find the distance from the origin: $x = 7 + 4(7) = 7 + 28 = 35\\text{ m}$."
            },
            {
                "id": "KIN-TEST-069",
                "topic": "Speed and Velocity",
                "difficulty": 2,
                "tags": ["Average Speed", "Basic Kinematics"],
                "q": "A moving car possesses average velocities of 5m/s, 10m/s and 15m/s in the first, second, and third seconds respectively. What is the total distance covered by the car in these 3s?",
                "options": ["15m", "30m", "55m", "45m"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The distance covered in any specific time interval is given by Distance = Average Velocity $\\times$ Time.<br><b>Step 2:</b> Since each interval is exactly 1 second long, the distance numerically equals the average velocity for that second.<br><b>Step 3:</b> Distance in the 1st second $d_1 = 5 \\times 1 = 5\\text{ m}$.<br><b>Step 4:</b> Distance in the 2nd second $d_2 = 10 \\times 1 = 10\\text{ m}$.<br><b>Step 5:</b> Distance in the 3rd second $d_3 = 15 \\times 1 = 15\\text{ m}$.<br><b>Step 6:</b> Total distance covered $= 5 + 10 + 15 = 30\\text{ m}$."
            },
            {
                "id": "KIN-TEST-070",
                "topic": "Acceleration",
                "difficulty": 2,
                "tags": ["Equations of Motion", "Average Velocity"],
                "q": "The average velocity of a body moving with uniform acceleration after travelling a distance of 3.06 m is 0.34 m/s. If the change in velocity of the body is 0.18 m/s during this time, its uniform acceleration is (in $\\text{m/s}^2$):",
                "options": ["0.01", "0.02", "0.03", "0.04"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Calculate the total time taken for the journey using average velocity: $t = \\frac{S}{v_{avg}}$.<br><b>Step 2:</b> Substitute the values: $t = \\frac{3.06}{0.34} = 9\\text{ s}$.<br><b>Step 3:</b> Acceleration is the change in velocity divided by the time interval: $a = \\frac{\\Delta v}{t}$.<br><b>Step 4:</b> Substitute the values: $a = \\frac{0.18}{9}$.<br><b>Step 5:</b> Calculate the result: $a = 0.02\\text{ m/s}^2$."
            },
            {
                "id": "KIN-TEST-071",
                "topic": "Acceleration",
                "difficulty": 3,
                "tags": ["Stopping Distance", "Proportionality"],
                "q": "If a body looses half of its velocity on penetrating 3cm in a wooden block, then how much will it penetrate more before coming to rest?",
                "options": ["1 cm", "2 cm", "3 cm", "4 cm"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Let the initial velocity be $u$. After penetrating $S_1 = 3\\text{ cm}$, the final velocity is $v_1 = \\frac{u}{2}$.<br><b>Step 2:</b> Use $v^2 - u^2 = 2aS$ to find the acceleration: $\\left(\\frac{u}{2}\\right)^2 - u^2 = 2a(3) \\implies -\\frac{3u^2}{4} = 6a \\implies a = -\\frac{u^2}{8}$.<br><b>Step 3:</b> For the next part of the journey, the initial velocity is $\\frac{u}{2}$ and the final velocity is $0$. Let the extra distance be $S_2$.<br><b>Step 4:</b> $0^2 - \\left(\\frac{u}{2}\\right)^2 = 2aS_2$.<br><b>Step 5:</b> Substitute the value of $a$: $-\\frac{u^2}{4} = 2\\left(-\\frac{u^2}{8}\\right)S_2 \\implies -\\frac{u^2}{4} = -\\frac{u^2}{4}S_2$.<br><b>Step 6:</b> Solving for $S_2$ yields $S_2 = 1\\text{ cm}$."
            },
            {
                "id": "KIN-TEST-072",
                "topic": "Acceleration",
                "difficulty": 2,
                "tags": ["Stopping Distance", "Kinematics"],
                "q": "A car moving with a speed of 50km/hr can be stopped by brakes after atleast 6m. If the same car is moving at a speed of 100km/hr; the minimum stopping distance is:",
                "options": ["12m", "18m", "24m", "6m"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The stopping distance $S$ under a constant braking deceleration is directly proportional to the square of the initial velocity ($S \\propto u^2$).<br><b>Step 2:</b> The speed is doubled from 50 km/hr to 100 km/hr.<br><b>Step 3:</b> Since the speed increases by a factor of 2, the stopping distance will increase by a factor of $2^2 = 4$.<br><b>Step 4:</b> The new stopping distance is $S_2 = 6\\text{ m} \\times 4 = 24\\text{ m}$."
            },
            {
                "id": "KIN-TEST-073",
                "topic": "Acceleration",
                "difficulty": 3,
                "tags": ["Quadratic Equation", "Kinematics"],
                "q": "A particle moving with a constant acceleration describes in the last second of its motion 36% of the whole distance. If it starts from rest, how long is the particle in motion and through what distance does it moves if it describes 6 cm in the first sec?",
                "options": ["5 s; 150cm", "10 s; 150 cm", "15 s; 100 cm", "20 s; 200cm"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Calculate acceleration from the first second. $S_1 = \\frac{1}{2}a(1^2) \\implies 6 = \\frac{a}{2} \\implies a = 12\\text{ cm/s}^2$.<br><b>Step 2:</b> The total distance covered in time $t$ is $S = \\frac{1}{2}at^2 = 6t^2$.<br><b>Step 3:</b> Distance in the last second is $S_t = u + \\frac{a}{2}(2t - 1) = 0 + 6(2t - 1) = 12t - 6$.<br><b>Step 4:</b> We are given $S_t = 0.36 S$. Substitute the expressions: $12t - 6 = 0.36(6t^2)$.<br><b>Step 5:</b> Divide by 6: $2t - 1 = 0.36t^2 \\implies 0.36t^2 - 2t + 1 = 0$.<br><b>Step 6:</b> Multiply by 100 and simplify: $36t^2 - 200t + 100 = 0 \\implies 9t^2 - 50t + 25 = 0$.<br><b>Step 7:</b> Factor the quadratic: $(t - 5)(9t - 5) = 0$. The realistic time is $t = 5\\text{ s}$ (since it must be $>1$s).<br><b>Step 8:</b> Calculate total distance: $S = 6(5^2) = 6(25) = 150\\text{ cm}$."
            },
            {
                "id": "KIN-TEST-074",
                "topic": "Relative Velocity",
                "difficulty": 2,
                "tags": ["Equations of Motion", "Overtaking"],
                "q": "A bus starts from rest with a constant acceleration of $5\\text{ m/s}^{2}$. At the same time a car travelling with a constant velocity 50 m/s over takes and passes the bus. How fast is the bus travelling when they are side by side?",
                "options": ["10 m/s", "50 m/s", "100 m/s", "150 m/s"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Set their starting positions at $x=0$. They will be side by side again when their displacements are equal ($S_{bus} = S_{car}$).<br><b>Step 2:</b> Displacement of the bus: $S_{bus} = \\frac{1}{2}at^2 = \\frac{1}{2}(5)t^2 = 2.5t^2$.<br><b>Step 3:</b> Displacement of the car: $S_{car} = v_{car} \\times t = 50t$.<br><b>Step 4:</b> Equate the displacements: $2.5t^2 = 50t \\implies 2.5t = 50 \\implies t = 20\\text{ s}$.<br><b>Step 5:</b> Calculate the velocity of the bus at $t = 20\\text{ s}$: $v_{bus} = u + at = 0 + 5(20) = 100\\text{ m/s}$."
            },
            {
                "id": "KIN-TEST-075",
                "topic": "Acceleration",
                "difficulty": 3,
                "tags": ["Successive Distances", "Deceleration"],
                "q": "A particle moving with uniform retardation covers distances 18m, 14m and 10m in successive seconds. It comes to rest after travelling a further distance of:",
                "options": ["50 m", "8 m", "12 m", "42 m"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The distance covered in successive equal time intervals ($1\\text{ s}$) under constant acceleration changes by a constant amount ($a$).<br><b>Step 2:</b> $a = S_2 - S_1 = 14 - 18 = -4\\text{ m/s}^2$.<br><b>Step 3:</b> Find the initial velocity $u$ using the distance of the first second: $S_1 = u + \\frac{a}{2}(2(1) - 1) \\implies 18 = u - 2 \\implies u = 20\\text{ m/s}$.<br><b>Step 4:</b> Find the velocity after the 3 seconds: $v_3 = u + at = 20 + (-4)(3) = 20 - 12 = 8\\text{ m/s}$.<br><b>Step 5:</b> Calculate the further distance required to come to rest from this velocity: $v_{final}^2 - v_3^2 = 2aS_{further}$.<br><b>Step 6:</b> $0^2 - 8^2 = 2(-4)S_{further} \\implies -64 = -8S_{further} \\implies S_{further} = 8\\text{ m}$."
            },
            {
                "id": "KIN-TEST-076",
                "topic": "Speed and Velocity",
                "difficulty": 2,
                "tags": ["Sound Velocity", "Free Fall"],
                "q": "The splash of sound was heard 5.35s after dropping a stone into a well 122.5m deep. Velocity of sound in air is:",
                "options": ["$350\\text{ cm/s}$", "$350\\text{ m/s}$", "$392\\text{ cm/s}$", "$0\\text{ cm/s}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Calculate the time taken for the stone to fall freely to the water: $t_1 = \\sqrt{\\frac{2h}{g}}$.<br><b>Step 2:</b> Substitute the values: $t_1 = \\sqrt{\\frac{2(122.5)}{9.8}} = \\sqrt{\\frac{245}{9.8}} = \\sqrt{25} = 5\\text{ s}$.<br><b>Step 3:</b> The total time is $5.35\\text{ s}$. The time taken for the sound to travel back up is $t_2 = 5.35 - 5 = 0.35\\text{ s}$.<br><b>Step 4:</b> Velocity of sound = $\\frac{\\text{Distance}}{\\text{Time}} = \\frac{122.5\\text{ m}}{0.35\\text{ s}}$.<br><b>Step 5:</b> $v_{sound} = 350\\text{ m/s}$."
            },
            {
                "id": "KIN-TEST-077",
                "topic": "Motion Under Gravity",
                "difficulty": 3,
                "tags": ["Relative Motion", "Collision"],
                "q": "Two stones are thrown vertically upwards with the same velocity of 49m/s. If they are thrown one after the other with a time lapse of 3 second, height at which they collide is:",
                "options": ["58.8 m", "111.5 m", "117.6 m", "122.5 m"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Let them collide at time $t$ after the first stone is thrown. The position of the first stone is $h_1 = 49t - 4.9t^2$.<br><b>Step 2:</b> The second stone is thrown 3 seconds later, so its time of flight is $(t-3)$. Its position is $h_2 = 49(t-3) - 4.9(t-3)^2$.<br><b>Step 3:</b> Equate the heights: $49t - 4.9t^2 = 49(t-3) - 4.9(t^2 - 6t + 9)$.<br><b>Step 4:</b> Expand the right side: $49t - 4.9t^2 = 49t - 147 - 4.9t^2 + 29.4t - 44.1$.<br><b>Step 5:</b> Cancel common terms: $0 = -191.1 + 29.4t \\implies 29.4t = 191.1 \\implies t = 6.5\\text{ s}$.<br><b>Step 6:</b> Substitute $t$ back into $h_1$: $h_1 = 49(6.5) - 4.9(6.5)^2 = 318.5 - 207.025 = 111.475\\text{ m} \\approx 111.5\\text{ m}$."
            },
            {
                "id": "KIN-TEST-078",
                "topic": "Motion Under Gravity",
                "difficulty": 3,
                "tags": ["Equations of Motion", "Algebraic Manipulation"],
                "q": "A stone projected upwards with a velocity 'u' reaches two points 'P' and 'Q' separated by a distance 'h' with velocities $u/2$ and $u/3$. The maximum height reached by it is:",
                "options": ["$\\frac{9h}{5}$", "$\\frac{18h}{5}$", "$\\frac{36h}{5}$", "$\\frac{72h}{5}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Use the equation $v^2 - u^2 = 2gS$ between points P and Q. The stone is moving upwards, so acceleration is $-g$.<br><b>Step 2:</b> $v_Q^2 - v_P^2 = 2(-g)h \\implies \\left(\\frac{u}{3}\\right)^2 - \\left(\\frac{u}{2}\\right)^2 = -2gh$.<br><b>Step 3:</b> $\\frac{u^2}{9} - \\frac{u^2}{4} = -2gh \\implies \\frac{4u^2 - 9u^2}{36} = -2gh \\implies -\\frac{5u^2}{36} = -2gh$.<br><b>Step 4:</b> Solve for the term $\\frac{u^2}{2g}$: $\\frac{5u^2}{36} = 2gh \\implies \\frac{u^2}{2g} = \\frac{36h}{5}$.<br><b>Step 5:</b> The formula for maximum height is exactly $H_{max} = \\frac{u^2}{2g}$. Therefore, $H_{max} = \\frac{36h}{5}$."
            },
            {
                "id": "KIN-TEST-079",
                "topic": "Motion Under Gravity",
                "difficulty": 2,
                "tags": ["Free Fall", "Kinematics"],
                "q": "A ball is dropped from the top of a building. The ball takes 0.5s to fall past the 3m length of a window at certain distance from the top of the building. Speed of the ball as it crosses the top edge of the window is $(g=10\\text{m/s}^{2})$:",
                "options": ["$3.5\\text{ ms}^{-1}$", "$8.5\\text{ ms}^{-1}$", "$5\\text{ ms}^{-1}$", "$12\\text{ ms}^{-1}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Let the velocity of the ball at the top edge of the window be $u$.<br><b>Step 2:</b> The ball covers a distance $S = 3\\text{ m}$ in time $t = 0.5\\text{ s}$ with acceleration $g = 10\\text{ m/s}^2$.<br><b>Step 3:</b> Use the equation $S = ut + \\frac{1}{2}gt^2$.<br><b>Step 4:</b> Substitute the values: $3 = u(0.5) + \\frac{1}{2}(10)(0.5)^2$.<br><b>Step 5:</b> $3 = 0.5u + 5(0.25) \\implies 3 = 0.5u + 1.25$.<br><b>Step 6:</b> $0.5u = 3 - 1.25 = 1.75 \\implies u = 3.5\\text{ m/s}$."
            },
            {
                "id": "KIN-TEST-080",
                "topic": "Motion Under Gravity",
                "difficulty": 2,
                "tags": ["Time of Flight", "Symmetry"],
                "q": "A body thrown vertically up with a velocity 'u' reaches the maximum height 'h' after 'T' second. Correct statement among the following is:",
                "options": ["at a height h/2 from the ground its velocity is u/2", "at a time 'T' its velocity is 'u'", "at a time '2T' its velocity is '-u'", "at a time '2T' its velocity is -6u"],
                "correct": 2,
                "sol": "<b>Step 1:</b> At maximum height $h$, time $t = T$ and velocity $v = 0$. The initial velocity is related by $u = gT$.<br><b>Step 2:</b> Evaluate Option 1: Using $v^2 - u^2 = -2gh/2$, $v^2 = u^2 - gh$. Since $h = u^2/2g$, $v^2 = u^2 - u^2/2 = u^2/2$, so $v = u/\\sqrt{2}$, not $u/2$. (False)<br><b>Step 3:</b> Evaluate Option 2: At time $T$, the body is at max height, so velocity is 0, not $u$. (False)<br><b>Step 4:</b> Evaluate Option 3: Time $2T$ is exactly the total time of flight. Due to symmetry, it returns to the projection point with the same speed but opposite direction. Thus, $v = -u$. (True)<br><b>Step 5:</b> Evaluate Option 4: Incorrect based on Option 3."
            },
            {
                "id": "KIN-TEST-081",
                "topic": "Motion Under Gravity",
                "difficulty": 3,
                "tags": ["Multi-stage Motion", "Kinematics"],
                "q": "A ball is projected vertically upwards with a velocity of $25\\text{ ms}^{-1}$ from the bottom of a tower. A boy who is standing at the top of a tower is unable to catch the ball when it passes him in the upward direction. But the ball again reaches him after 3 sec when it is falling. Now the boy catches it. Then the height of the tower is $(g=10\\text{ms}^{-2})$:",
                "options": ["5 m", "10 m", "15 m", "20 m"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The ball passes the boy going up, reaches its maximum height, and falls back to the boy 3 seconds later.<br><b>Step 2:</b> By symmetry, the time taken to travel from the boy's height to the maximum height is $\\frac{3}{2} = 1.5\\text{ s}$.<br><b>Step 3:</b> At maximum height, velocity is zero. We can find the ball's velocity exactly as it passed the boy going upwards: $v_{boy} = g \\times t = 10 \\times 1.5 = 15\\text{ m/s}$.<br><b>Step 4:</b> Now we know the initial velocity at the ground ($u = 25\\text{ m/s}$) and the velocity at the tower's height ($v = 15\\text{ m/s}$).<br><b>Step 5:</b> Use $v^2 - u^2 = 2(-g)H \\implies 15^2 - 25^2 = -20H$.<br><b>Step 6:</b> $225 - 625 = -20H \\implies -400 = -20H \\implies H = 20\\text{ m}$."
            },
            {
                "id": "KIN-TEST-082",
                "topic": "Motion Under Gravity",
                "difficulty": 2,
                "tags": ["Sequential Drops", "Free Fall"],
                "q": "A person sitting on the top of a tall building is dropping balls at regular intervals of one second. When the 6th ball is being dropped, the positions of the 3rd, 4th, 5th balls from the top of the building are respectively:",
                "options": ["4.9m, 19.6m, 44.1m", "4.9m, 14.7m, 24.5m", "44.1m, 19.6m, 4.9m", "24.5m, 14.7m, 4.9m"],
                "correct": 2,
                "sol": "<b>Step 1:</b> If balls are dropped at 1-second intervals, when the 6th ball is dropped ($t=0$ for the 6th), the 5th ball has been falling for 1 second.<br><b>Step 2:</b> The 4th ball has been falling for 2 seconds.<br><b>Step 3:</b> The 3rd ball has been falling for 3 seconds.<br><b>Step 4:</b> Calculate distance using $y = \\frac{1}{2}gt^2$.<br><b>Step 5:</b> For the 3rd ball: $y_3 = \\frac{1}{2}(9.8)(3^2) = 4.9 \\times 9 = 44.1\\text{ m}$.<br><b>Step 6:</b> For the 4th ball: $y_4 = \\frac{1}{2}(9.8)(2^2) = 4.9 \\times 4 = 19.6\\text{ m}$.<br><b>Step 7:</b> For the 5th ball: $y_5 = \\frac{1}{2}(9.8)(1^2) = 4.9\\text{ m}$. The positions are 44.1m, 19.6m, and 4.9m respectively."
            },
            {
                "id": "KIN-TEST-083",
                "topic": "Motion Under Gravity",
                "difficulty": 3,
                "tags": ["Algebraic Manipulation", "Kinematics"],
                "q": "A stone projected vertically up from the ground reaches a height y in its path at $t_{1}$ seconds and after further $t_{2}$ seconds reaches the ground. The height y is equal to:",
                "options": ["$\\frac{1}{2}g(t_{1}+t_{2})$", "$\\frac{1}{2}g(t_{1}+t_{2})^{2}$", "$\\frac{1}{2}g t_{1}t_{2}$", "$g t_{1}t_{2}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The total time of flight of the stone is $T = t_1 + t_2$.<br><b>Step 2:</b> We know the total time of flight is $T = \\frac{2u}{g}$. Therefore, initial velocity $u = \\frac{g(t_1 + t_2)}{2}$.<br><b>Step 3:</b> The height $y$ at time $t_1$ is given by $y = ut_1 - \\frac{1}{2}gt_1^2$.<br><b>Step 4:</b> Substitute the expression for $u$: $y = \\left[\\frac{g(t_1 + t_2)}{2}\\right]t_1 - \\frac{1}{2}gt_1^2$.<br><b>Step 5:</b> Expand the terms: $y = \\frac{1}{2}gt_1^2 + \\frac{1}{2}gt_1t_2 - \\frac{1}{2}gt_1^2$.<br><b>Step 6:</b> The $t_1^2$ terms cancel out, leaving $y = \\frac{1}{2}gt_1t_2$."
            },
            {
                "id": "KIN-TEST-084",
                "topic": "Motion Under Gravity",
                "difficulty": 2,
                "tags": ["Displacement", "Vector Kinematics"],
                "q": "A person standing on the edge of a well throws a stone vertically upwards with an initial velocity $5\\text{ ms}^{-1}$. The stone gone up, comes down and falls in the well making a sound. If the person hears the sound 3 second after throwing, then the depth of water (neglect time travel for the sound and take $g=10\\text{ms}^{-2}$):",
                "options": ["1.25 m", "21.25 m", "30 m", "32.5 m"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Set the edge of the well as the origin ($S=0$). Upward is positive, downward is negative.<br><b>Step 2:</b> The initial velocity $u = +5\\text{ m/s}$. The total time of flight is $t = 3\\text{ s}$. Acceleration $a = -10\\text{ m/s}^2$.<br><b>Step 3:</b> Use the displacement equation: $S = ut + \\frac{1}{2}at^2$.<br><b>Step 4:</b> Substitute the values: $S = 5(3) + \\frac{1}{2}(-10)(3)^2$.<br><b>Step 5:</b> $S = 15 - 5(9) = 15 - 45 = -30\\text{ m}$.<br><b>Step 6:</b> The displacement is -30m, meaning the water level is 30m below the edge of the well."
            },
            {
                "id": "KIN-TEST-085",
                "topic": "Relative Velocity",
                "difficulty": 2,
                "tags": ["Time of Flight", "Relative Motion"],
                "q": "A ball is thrown vertically upwards with a speed of 10 m/s from the top of a tower 200m height and another is thrown vertically downwards with the same speed simultaneously. The time difference between them on reaching the ground is $(g=10\\text{m/s}^{2})$:",
                "options": ["12 s", "6 s", "2 s", "1 s"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Let ball A be thrown upwards and ball B be thrown downwards.<br><b>Step 2:</b> Ball A goes up, reaches its maximum height, and falls back down to the top of the tower.<br><b>Step 3:</b> When ball A returns to the top of the tower, it has a downward velocity of exactly 10 m/s (due to symmetry).<br><b>Step 4:</b> From this moment on, ball A's journey to the ground is perfectly identical to ball B's entire journey.<br><b>Step 5:</b> Therefore, the time difference in reaching the ground is simply the extra time ball A spent travelling up and back down to the tower's height.<br><b>Step 6:</b> Time difference $\\Delta t = \\frac{2u}{g} = \\frac{2(10)}{10} = 2\\text{ s}$."
            },
            {
                "id": "KIN-TEST-086",
                "topic": "Motion Under Gravity",
                "difficulty": 3,
                "tags": ["Quadratic Equations", "Time Algebra"],
                "q": "A body is projected vertically upwards with a velocity 'u'. It crosses a point in its journey at a height 'h' twice, just after 1 and 7 seconds. The value of u in $\\text{m/s}$ is $(g=10\\text{ms}^{-2})$:",
                "options": ["50", "40", "30", "20"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The height $h$ at time $t$ is given by the quadratic equation $h = ut - \\frac{1}{2}gt^2$.<br><b>Step 2:</b> Rearranging gives $\\frac{1}{2}gt^2 - ut + h = 0$. This equation has two roots, $t_1$ and $t_2$, representing the times it crosses height $h$ on the way up and on the way down.<br><b>Step 3:</b> The sum of the roots of this quadratic equation is $t_1 + t_2 = \\frac{u}{\\frac{1}{2}g} = \\frac{2u}{g}$.<br><b>Step 4:</b> We are given the roots $t_1 = 1\\text{ s}$ and $t_2 = 7\\text{ s}$.<br><b>Step 5:</b> Substitute the values: $1 + 7 = \\frac{2u}{10} \\implies 8 = \\frac{2u}{10}$.<br><b>Step 6:</b> Solve for u: $80 = 2u \\implies u = 40\\text{ m/s}$."
            },
            {
                "id": "KIN-TEST-087",
                "topic": "Motion Under Gravity",
                "difficulty": 2,
                "tags": ["Time of Flight", "Symmetry"],
                "q": "A stone thrown vertically up from the ground reaches a maximum height of 50m in 10s. Time taken by the stone to reach the ground from maximum height is:",
                "options": ["5 s", "10 s", "20 s", "25 s"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The motion of a projectile under gravity without air resistance is perfectly symmetrical.<br><b>Step 2:</b> The time taken to ascend from the ground to the maximum height is exactly equal to the time taken to descend from the maximum height back to the ground.<br><b>Step 3:</b> We are given the time of ascent is 10s.<br><b>Step 4:</b> Therefore, the time of descent (time taken to reach the ground from maximum height) is also 10s."
            },
            {
                "id": "KIN-TEST-088",
                "topic": "Motion Under Gravity",
                "difficulty": 3,
                "tags": ["Distance in nth Second", "Ratio"],
                "q": "A freely falling body travels a specific percentage of its total distance in its 5th second of fall. If the body hits the ground exactly at the end of the 5th second, what percentage of the total distance did it cover in that final second?",
                "options": ["8%", "12%", "25%", "36%"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Let the total time of fall be $n = 5\\text{ s}$. The total distance covered is $S = \\frac{1}{2}gn^2$.<br><b>Step 2:</b> Substitute $n=5$: $S = \\frac{1}{2}g(25) = 12.5g$.<br><b>Step 3:</b> The distance covered in the 5th second specifically is $S_5 = \\frac{g}{2}(2n - 1)$.<br><b>Step 4:</b> Substitute $n=5$: $S_5 = \\frac{g}{2}(2(5) - 1) = \\frac{g}{2}(9) = 4.5g$.<br><b>Step 5:</b> Calculate the percentage: $\\frac{S_5}{S} \\times 100 = \\frac{4.5g}{12.5g} \\times 100 = \\frac{4.5}{12.5} \\times 100 = \\frac{9}{25} \\times 100$.<br><b>Step 6:</b> $9 \\times 4 = 36\\%$."
            },
            {
                "id": "KIN-TEST-089",
                "topic": "Motion Under Gravity",
                "difficulty": 3,
                "tags": ["Time Intervals", "Symmetry"],
                "q": "A body is projected with a velocity u. It passes through a certain point above the ground in t sec. The time after which the body passes through the same point during the return journey is:",
                "options": ["$\\frac{u}{g}-t^{2}$", "$2\\left(\\frac{u}{g}-t\\right)$", "$\\frac{u^{2}}{g}-t$", "$3\\left(\\frac{u^{2}}{g^{2}}-t\\right)$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Let the total time of flight of the body be $T = \\frac{2u}{g}$.<br><b>Step 2:</b> The body passes a certain point on its way up at time $t$.<br><b>Step 3:</b> Due to the symmetry of the parabolic path, the time spent above this specific point is the total time $T$ minus the time spent below it on both sides (which is $2t$).<br><b>Step 4:</b> Time spent above the point $= T - 2t$.<br><b>Step 5:</b> Substitute the total time of flight: Time gap $= \\frac{2u}{g} - 2t$.<br><b>Step 6:</b> Factor out the 2: Time gap $= 2\\left(\\frac{u}{g} - t\\right)$."
            },
            {
                "id": "KIN-TEST-090",
                "topic": "Motion Under Gravity",
                "difficulty": 2,
                "tags": ["Sequential Projection", "Maximum Height"],
                "q": "A boy throws a ball in air in such a manner that when the ball is at its maximum height he throws another ball. If the balls are thrown with the time difference 1 second, the maximum height attained by each ball is:",
                "options": ["9.8 m", "19.6 m", "4.9 m", "2.45 m"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The second ball is thrown exactly when the first ball reaches its maximum height. This means the time taken to reach the maximum height is equal to the time difference between throws.<br><b>Step 2:</b> Time to max height $t = 1\\text{ s}$.<br><b>Step 3:</b> We know $t = \\frac{u}{g}$. Therefore, the initial velocity is $u = g(1) = 9.8\\text{ m/s}$.<br><b>Step 4:</b> The maximum height is $H = \\frac{u^2}{2g}$.<br><b>Step 5:</b> Substitute $u$: $H = \\frac{(9.8)^2}{2(9.8)} = \\frac{9.8}{2}$.<br><b>Step 6:</b> $H = 4.9\\text{ m}$."
            },
            {
                "id": "KIN-TEST-091",
                "topic": "Relative Velocity",
                "difficulty": 2,
                "tags": ["Relative Speed", "Linear Equations"],
                "q": "Two cars are travelling in the same direction with a velocity of 60 kmph. They are separated by a distance of 5 km. A truck moving in opposite direction meets the two cars in a time interval of 3 minute. The velocity of the truck is (in kmph):",
                "options": ["20", "30", "40", "60"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Let the velocity of the truck be $v\\text{ kmph}$.<br><b>Step 2:</b> Since the truck and the cars are moving in opposite directions, the relative velocity of approach is $v_{rel} = v + 60\\text{ kmph}$.<br><b>Step 3:</b> The distance between the two cars is $5\\text{ km}$. The truck covers this relative distance in 3 minutes.<br><b>Step 4:</b> Convert time to hours: $t = \\frac{3}{60}\\text{ hr} = \\frac{1}{20}\\text{ hr}$.<br><b>Step 5:</b> Use the formula $S_{rel} = v_{rel} \\times t \\implies 5 = (v + 60) \\times \\frac{1}{20}$.<br><b>Step 6:</b> $100 = v + 60 \\implies v = 40\\text{ kmph}$."
            },
            {
                "id": "KIN-TEST-092",
                "topic": "Relative Velocity",
                "difficulty": 3,
                "tags": ["Relative Speed", "Vector Kinematics"],
                "q": "A police van moving on a highway with a speed of 30 kmph fires a bullet at a thief's car speeding away in the same direction with a speed of 192 kmph. If the muzzle speed of the bullet is 150 m/s, with what speed does the bullet hit the thief's car?",
                "options": ["$25\\text{ m/s}$", "$50\\text{ m/s}$", "$75\\text{ m/s}$", "$105\\text{ m/s}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Convert the vehicle speeds from kmph to m/s. Police van $v_p = 30 \\times \\frac{5}{18} = \\frac{25}{3}\\text{ m/s}$. Thief car $v_t = 192 \\times \\frac{5}{18} = \\frac{160}{3}\\text{ m/s}$.<br><b>Step 2:</b> The bullet is fired from a moving van, so its velocity relative to the ground is the muzzle speed plus the van's speed: $v_{bullet\\_ground} = 150 + \\frac{25}{3} = \\frac{450 + 25}{3} = \\frac{475}{3}\\text{ m/s}$.<br><b>Step 3:</b> The speed at which the bullet hits the thief's car is the relative velocity of the bullet with respect to the thief's car.<br><b>Step 4:</b> $v_{rel} = v_{bullet\\_ground} - v_t = \\frac{475}{3} - \\frac{160}{3}$.<br><b>Step 5:</b> $v_{rel} = \\frac{315}{3} = 105\\text{ m/s}$."
            },
            {
                "id": "KIN-TEST-093",
                "topic": "Relative Velocity",
                "difficulty": 2,
                "tags": ["Relative Speed", "Linear Equations"],
                "q": "Two cars are moving in same direction with speed of 30kmph. They are separated by a distance of 5km. What is the speed of a car moving in opposite direction if it meets the two cars at an interval of 4 min?",
                "options": ["60 kmph", "5 kmph", "30 kmph", "45 kmph"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Let the speed of the car moving in the opposite direction be $v\\text{ kmph}$.<br><b>Step 2:</b> The relative velocity between this car and the two identical cars is $v_{rel} = v + 30\\text{ kmph}$.<br><b>Step 3:</b> The relative distance it must cover to get from the first car to the second is $S_{rel} = 5\\text{ km}$.<br><b>Step 4:</b> The time interval is $t = 4\\text{ min} = \\frac{4}{60}\\text{ hr} = \\frac{1}{15}\\text{ hr}$.<br><b>Step 5:</b> Apply $S_{rel} = v_{rel} \\times t \\implies 5 = (v + 30) \\times \\frac{1}{15}$.<br><b>Step 6:</b> $75 = v + 30 \\implies v = 45\\text{ kmph}$."
            },
            {
                "id": "KIN-TEST-094",
                "topic": "Displacement and Distance",
                "difficulty": 2,
                "tags": ["Multi-stage Motion", "1D Motion"],
                "q": "A motorist drives north for 35.0 minutes at 85.0 km/h and then stops for 15.0 minutes. He next continues north, travelling 130 km in 2.00 hours. What is his total displacement?",
                "options": ["85 km", "179.6 km", "20 km", "140 km"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Displacement is the total straight-line distance since the motion is strictly in one direction (North).<br><b>Step 2:</b> Calculate the distance covered in the first leg: $d_1 = \\text{Speed} \\times \\text{Time} = 85.0 \\times \\left(\\frac{35.0}{60}\\right) = 49.5833...\\text{ km}$.<br><b>Step 3:</b> The distance covered during the 15-minute stop is $d_2 = 0\\text{ km}$.<br><b>Step 4:</b> The distance covered in the final leg is explicitly given as $d_3 = 130\\text{ km}$.<br><b>Step 5:</b> Total displacement $= d_1 + d_2 + d_3 = 49.583 + 0 + 130 = 179.583\\text{ km}$.<br><b>Step 6:</b> Rounding to one decimal place gives $179.6\\text{ km}$."
            },
            {
                "id": "KIN-TEST-095",
                "topic": "Speed and Velocity",
                "difficulty": 2,
                "tags": ["Parametric Equations", "Differentiation"],
                "q": "The coordinates of a moving particle at any time 't' are given by $x=\\alpha t^{3}$ and $y=\\beta t^{3}$. The speed of the particle at time 't' is given by:",
                "options": ["$\\sqrt{\\alpha^{2}+\\beta^{2}}$", "$3t\\sqrt{\\alpha^{2}+\\beta^{2}}$", "$3t^{2}\\sqrt{\\alpha^{2}+\\beta^{2}}$", "$t^{2}\\sqrt{\\alpha^{2}+\\beta^{2}}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The velocity components are the time derivatives of the position coordinates.<br><b>Step 2:</b> x-component of velocity: $v_x = \\frac{dx}{dt} = 3\\alpha t^2$.<br><b>Step 3:</b> y-component of velocity: $v_y = \\frac{dy}{dt} = 3\\beta t^2$.<br><b>Step 4:</b> The overall speed is the magnitude of the velocity vector: $v = \\sqrt{v_x^2 + v_y^2}$.<br><b>Step 5:</b> Substitute the components: $v = \\sqrt{(3\\alpha t^2)^2 + (3\\beta t^2)^2} = \\sqrt{9\\alpha^2 t^4 + 9\\beta^2 t^4}$.<br><b>Step 6:</b> Factor out $9t^4$ from the root: $v = 3t^2\\sqrt{\\alpha^2 + \\beta^2}$."
            },
            {
                "id": "KIN-TEST-096",
                "topic": "Acceleration",
                "difficulty": 3,
                "tags": ["Implicit Differentiation", "Calculus"],
                "q": "The relation between time t and distance x is $t=ax^{2}+bx$ where a and b are constants. The acceleration is:",
                "options": ["$-2av^{3}$", "$2av^{2}$", "$-2abv^{2}$", "$2bv^{3}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Differentiate the given equation $t = ax^2 + bx$ with respect to $x$: $\\frac{dt}{dx} = 2ax + b$.<br><b>Step 2:</b> Since velocity $v = \\frac{dx}{dt}$, it follows that $v = (2ax + b)^{-1}$.<br><b>Step 3:</b> Acceleration is $a_{cc} = \\frac{dv}{dt}$. Using the chain rule, $a_{cc} = \\frac{dv}{dx} \\cdot \\frac{dx}{dt} = v \\cdot \\frac{dv}{dx}$.<br><b>Step 4:</b> Differentiate $v$ with respect to $x$: $\\frac{dv}{dx} = -1(2ax + b)^{-2} \\cdot (2a) = -2a(2ax + b)^{-2}$.<br><b>Step 5:</b> Notice that $(2ax + b)^{-2} = v^2$. So, $\\frac{dv}{dx} = -2av^2$.<br><b>Step 6:</b> Substitute back into the acceleration equation: $a_{cc} = v(-2av^2) = -2av^3$."
            },
            {
                "id": "KIN-TEST-097",
                "topic": "Acceleration",
                "difficulty": 3,
                "tags": ["Equations of Motion", "Algebraic Manipulation"],
                "q": "Two cars start in a race with velocities $u_{1}$ and $u_{2}$ and travel in a straight line with accelerations $\\alpha$ and $\\beta$. If both reach the finish line at the same time, the range of the race is:",
                "options": ["$\\frac{2(u_{1}-u_{2})}{(\\beta-\\alpha)^{2}}(u_{1}\\beta-u_{2}\\alpha)$", "$\\frac{2(u_{1}-u_{2})}{\\beta+\\alpha}(u_{1}\\alpha-u_{2}\\beta)$", "$\\frac{2(u_{1}-u_{2})^{2}}{(\\beta-\\alpha)^{2}}$", "$\\frac{2u_{1}u_{2}}{\\beta\\alpha}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Let the range of the race be $S$ and the time taken be $t$.<br><b>Step 2:</b> For Car 1: $S = u_1 t + \\frac{1}{2}\\alpha t^2$. For Car 2: $S = u_2 t + \\frac{1}{2}\\beta t^2$.<br><b>Step 3:</b> Equate the distances: $u_1 t + \\frac{1}{2}\\alpha t^2 = u_2 t + \\frac{1}{2}\\beta t^2$.<br><b>Step 4:</b> Divide by $t$ and solve for $t$: $(u_1 - u_2) = \\frac{1}{2}(\\beta - \\alpha)t \\implies t = \\frac{2(u_1 - u_2)}{\\beta - \\alpha}$.<br><b>Step 5:</b> Substitute $t$ back into Car 1's equation: $S = u_1\\left(\\frac{2(u_1 - u_2)}{\\beta - \\alpha}\\right) + \\frac{1}{2}\\alpha\\left(\\frac{2(u_1 - u_2)}{\\beta - \\alpha}\\right)^2$.<br><b>Step 6:</b> Factor out $\\frac{2(u_1-u_2)}{(\\beta-\\alpha)^2}$: $S = \\frac{2(u_1-u_2)}{(\\beta-\\alpha)^2} [u_1(\\beta - \\alpha) + \\alpha(u_1 - u_2)]$.<br><b>Step 7:</b> Simplify the bracket: $u_1\\beta - u_1\\alpha + u_1\\alpha - u_2\\alpha = u_1\\beta - u_2\\alpha$. Final relation matches option 1."
            },
            {
                "id": "KIN-TEST-098",
                "topic": "Speed and Velocity",
                "difficulty": 3,
                "tags": ["Average Velocity", "Uniform Acceleration"],
                "q": "A point moves with uniform acceleration. $v_{1}, v_{2}$ and $v_{3}$ denote the average velocities in three successive intervals of time $t_{1}, t_{2}$ and $t_{3}$. Correct relation among the following is:",
                "options": ["$(v_{1}-v_{2}):(v_{2}-v_{3})=(t_{1}-t_{2}):(t_{2}-t_{3})$", "$(v_{1}-v_{2}):(v_{2}-v_{3})=(t_{1}+t_{2}):(t_{2}+t_{3})$", "$(v_{1}-v_{2}):(v_{2}-v_{3})=(t_{1}-t_{2}):(t_{2}+t_{3})$", "$(v_{1}-v_{2}):(v_{2}-v_{3})=(t_{1}+t_{2}):(t_{2}-t_{3})$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> For uniform acceleration $a$, the average velocity in a time interval is equal to the instantaneous velocity exactly at the midpoint of that time interval.<br><b>Step 2:</b> The midpoint of the first interval is at time $\\frac{t_1}{2}$. Thus, $v_1 = u + a(\\frac{t_1}{2})$.<br><b>Step 3:</b> The midpoint of the second interval is at $t_1 + \\frac{t_2}{2}$. Thus, $v_2 = u + a(t_1 + \\frac{t_2}{2})$.<br><b>Step 4:</b> The midpoint of the third interval is at $t_1 + t_2 + \\frac{t_3}{2}$. Thus, $v_3 = u + a(t_1 + t_2 + \\frac{t_3}{2})$.<br><b>Step 5:</b> Evaluate $v_2 - v_1 = a(t_1 + \\frac{t_2}{2} - \\frac{t_1}{2}) = a(\\frac{t_1 + t_2}{2})$.<br><b>Step 6:</b> Evaluate $v_3 - v_2 = a(t_1 + t_2 + \\frac{t_3}{2} - t_1 - \\frac{t_2}{2}) = a(\\frac{t_2 + t_3}{2})$.<br><b>Step 7:</b> The ratio $\\frac{|v_1 - v_2|}{|v_2 - v_3|} = \\frac{a(t_1 + t_2)/2}{a(t_2 + t_3)/2} = \\frac{t_1 + t_2}{t_2 + t_3}$."
            },
            {
                "id": "KIN-TEST-099",
                "topic": "Acceleration",
                "difficulty": 3,
                "tags": ["Multi-stage Motion", "Constant Velocity"],
                "q": "A train starts from rest and moves with uniform acceleration $\\alpha$ for some time and acquires a velocity 'v'. It then moves with constant velocity for some time and then decelerates at rate $\\beta$ and finally comes to rest at the next station. If 'L' is distance between two stations then total time of travel is:",
                "options": ["$\\frac{L}{v}+\\frac{v}{2}(\\frac{1}{\\alpha}+\\frac{1}{\\beta})$", "$\\frac{L}{v}-\\frac{v}{2}(\\frac{1}{\\alpha}-\\frac{1}{\\beta})$", "$\\frac{L}{v}-\\frac{v}{2}(\\frac{1}{\\alpha}+\\frac{1}{\\beta})$", "$\\frac{L}{v}+\\frac{v}{2}(\\frac{1}{\\alpha}-\\frac{1}{\\beta})$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Let $t_1$, $t_2$, and $t_3$ be the times spent accelerating, cruising, and decelerating respectively.<br><b>Step 2:</b> Time accelerating: $t_1 = \\frac{v}{\\alpha}$. Distance $L_1 = \\frac{1}{2}vt_1$.<br><b>Step 3:</b> Time decelerating: $t_3 = \\frac{v}{\\beta}$. Distance $L_3 = \\frac{1}{2}vt_3$.<br><b>Step 4:</b> Distance cruising: $L_2 = vt_2$.<br><b>Step 5:</b> Total distance $L = L_1 + L_2 + L_3 = \\frac{1}{2}vt_1 + vt_2 + \\frac{1}{2}vt_3$.<br><b>Step 6:</b> Solve this for $t_2$: $vt_2 = L - \\frac{v}{2}(t_1 + t_3) \\implies t_2 = \\frac{L}{v} - \\frac{1}{2}(t_1 + t_3)$.<br><b>Step 7:</b> Total time $T = t_1 + t_2 + t_3 = t_1 + \\frac{L}{v} - \\frac{1}{2}t_1 - \\frac{1}{2}t_3 + t_3 = \\frac{L}{v} + \\frac{1}{2}t_1 + \\frac{1}{2}t_3$.<br><b>Step 8:</b> Substitute $t_1$ and $t_3$: $T = \\frac{L}{v} + \\frac{v}{2}\\left(\\frac{1}{\\alpha} + \\frac{1}{\\beta}\\right)$."
            },
            {
                "id": "KIN-TEST-100",
                "topic": "Acceleration",
                "difficulty": 3,
                "tags": ["Multi-stage Motion", "Equations of Motion"],
                "q": "A car, starting from rest, accelerates at the rate f through a distance S, then continues at constant speed for time t and then decelerates at the rate (f/2) to come to rest. If the total distance travelled is 15S, then:",
                "options": ["$S=ft$", "$S=\\frac{1}{6}ft^{2}$", "$S=\\frac{1}{72}ft^{2}$", "$S=\\frac{1}{4}ft^{2}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The car accelerates at $f$ over distance $S$. The maximum velocity reached is $v = \\sqrt{2fS}$.<br><b>Step 2:</b> The car decelerates to rest from $v$ at rate $f/2$. Using $v^2 = 2aS_{dec} \\implies 2fS = 2(f/2)S_{dec} \\implies 2fS = fS_{dec} \\implies S_{dec} = 2S$.<br><b>Step 3:</b> Total distance is $15S$. The distance covered during the constant speed phase is $S_{const} = 15S - S - 2S = 12S$.<br><b>Step 4:</b> We know $S_{const} = v \\times t$. So, $12S = \\sqrt{2fS} \\times t$.<br><b>Step 5:</b> Square both sides: $144S^2 = 2fSt^2$.<br><b>Step 6:</b> Divide by $144S$: $S = \\frac{2f}{144}t^2 = \\frac{1}{72}ft^2$."
            },
            {
                "id": "KIN-TEST-101",
                "topic": "Acceleration",
                "difficulty": 2,
                "tags": ["Variable Acceleration", "Calculus"],
                "q": "For motion of an object along the x-axis, the velocity v depends on the displacement x as $v=3x^{2}-2x$. What is the acceleration at $x=2\\text{m}$?",
                "options": ["$48\\text{ms}^{-2}$", "$80\\text{ms}^{-2}$", "$18\\text{ms}^{-2}$", "$10\\text{ms}^{-2}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Acceleration is defined as $a = \\frac{dv}{dt}$. By chain rule, $a = v \\cdot \\frac{dv}{dx}$.<br><b>Step 2:</b> Calculate velocity at $x=2\\text{m}$: $v(2) = 3(2)^2 - 2(2) = 12 - 4 = 8\\text{ m/s}$.<br><b>Step 3:</b> Differentiate velocity with respect to x: $\\frac{dv}{dx} = 6x - 2$.<br><b>Step 4:</b> Calculate $\\frac{dv}{dx}$ at $x=2\\text{m}$: $\\frac{dv}{dx} = 6(2) - 2 = 12 - 2 = 10\\text{ s}^{-1}$.<br><b>Step 5:</b> Calculate acceleration: $a = v \\cdot \\frac{dv}{dx} = 8 \\times 10 = 80\\text{ ms}^{-2}$."
            },
            {
                "id": "KIN-TEST-102",
                "topic": "Motion Under Gravity",
                "difficulty": 2,
                "tags": ["Gravity Variations", "Percentage Change"],
                "q": "The friction of the air causes a vertical retardation equal to 10% of the acceleration due to gravity. Take $g=10\\text{m/s}^{2}$. The maximum height and time to reach the maximum height will be decreased by:",
                "options": ["9%, 9%", "11%, 11%", "9%, 10%", "11%, 9%"],
                "correct": 0,
                "sol": "<b>Step 1:</b> During ascent, both gravity and air friction act downwards. Effective downward acceleration $g' = g + 0.1g = 1.1g$.<br><b>Step 2:</b> New maximum height $H' = \\frac{u^2}{2g'} = \\frac{u^2}{2(1.1g)} = \\frac{1}{1.1} H = \\frac{10}{11} H$.<br><b>Step 3:</b> Decrease in height = $H - \\frac{10}{11}H = \\frac{1}{11}H$. Percentage decrease = $\\frac{1}{11} \\times 100 \\approx 9.09\\% \\approx 9\\%$.<br><b>Step 4:</b> New time to reach max height $T' = \\frac{u}{g'} = \\frac{u}{1.1g} = \\frac{1}{1.1} T = \\frac{10}{11} T$.<br><b>Step 5:</b> Decrease in time = $T - \\frac{10}{11}T = \\frac{1}{11}T$. Percentage decrease = $\\frac{1}{11} \\times 100 \\approx 9.09\\% \\approx 9\\%$."
            },
            {
                "id": "KIN-TEST-103",
                "topic": "Motion Under Gravity",
                "difficulty": 3,
                "tags": ["Multi-stage Motion", "Deceleration"],
                "q": "A parachutist after bailing out falls for 10s without friction. When the parachute opens he descends with an acceleration of $2\\text{ m/s}^{2}$ against his direction and reached the ground with $4\\text{ m/s}$. From what height he has dropped himself? $(g=10\\text{m/s}^{2})$",
                "options": ["500m", "2496m", "2996m", "4296m"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Phase 1 (Free Fall): Starts from rest ($u=0$), $t=10\\text{s}$, $a=10\\text{ m/s}^2$.<br><b>Step 2:</b> Distance fallen: $h_1 = \\frac{1}{2}gt^2 = \\frac{1}{2}(10)(10^2) = 500\\text{ m}$.<br><b>Step 3:</b> Velocity at parachute deployment: $v_1 = u + gt = 0 + 10(10) = 100\\text{ m/s}$.<br><b>Step 4:</b> Phase 2 (Parachute): Initial velocity $u_2 = 100\\text{ m/s}$, final velocity $v_2 = 4\\text{ m/s}$, acceleration $a = -2\\text{ m/s}^2$.<br><b>Step 5:</b> Remaining distance $h_2$: $v_2^2 - u_2^2 = 2ah_2 \\implies 4^2 - 100^2 = 2(-2)h_2$.<br><b>Step 6:</b> $16 - 10000 = -4h_2 \\implies -9984 = -4h_2 \\implies h_2 = 2496\\text{ m}$.<br><b>Step 7:</b> Total height dropped $= h_1 + h_2 = 500 + 2496 = 2996\\text{ m}$."
            },
            {
                "id": "KIN-TEST-104",
                "topic": "Motion Under Gravity",
                "difficulty": 2,
                "tags": ["Free Fall", "Kinematics"],
                "q": "A body is dropped from the roof of a multi-storied building. It passes the ceiling of the 15th storey at a speed of $20\\text{ ms}^{-1}$. If the height of each storey is 4m, the number of storeys in the building is (take $g=10\\text{ms}^{-2}$ and neglect air resistance):",
                "options": ["20", "25", "30", "35"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Calculate the total distance fallen from the roof to reach a velocity of $20\\text{ m/s}$.<br><b>Step 2:</b> Use $v^2 - u^2 = 2gS$. Since it's dropped, $u=0$.<br><b>Step 3:</b> $20^2 = 2(10)S \\implies 400 = 20S \\implies S = 20\\text{ m}$.<br><b>Step 4:</b> Convert the distance to storeys: $20\\text{ m} / 4\\text{ m/storey} = 5\\text{ storeys}$. The body has fallen 5 storeys.<br><b>Step 5:</b> Passing the *ceiling* of the 15th storey means there are exactly 15 storeys still below the ball (storeys 15 down to 1).<br><b>Step 6:</b> Total storeys in building = Storeys fallen + Storeys below = $5 + 15 = 20$."
            },
            {
                "id": "KIN-TEST-105",
                "topic": "Motion Under Gravity",
                "difficulty": 2,
                "tags": ["Constant Velocity", "Gravity Switch"],
                "q": "A body is projected vertically up with velocity $98\\text{ms}^{-1}$. After 2 s if the acceleration due to gravity of earth disappears, the velocity of the body at the end of next 3 s is:",
                "options": ["$49\\text{ms}^{-1}$", "$49.6\\text{ms}^{-1}$", "$78.4\\text{ms}^{-1}$", "$94.7\\text{ms}^{-1}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Calculate the velocity of the body exactly 2 seconds after projection.<br><b>Step 2:</b> Use $v = u - gt$. Since $u = 98\\text{ m/s}$, we get $v = 98 - (9.8)(2) = 98 - 19.6 = 78.4\\text{ m/s}$.<br><b>Step 3:</b> At this exact instant, the problem states that gravity disappears, making the net acceleration $a = 0$.<br><b>Step 4:</b> By Newton's First Law, an object in motion will maintain its velocity unless acted upon by an external force.<br><b>Step 5:</b> Since $a=0$, the velocity remains constant for the next 3 seconds.<br><b>Step 6:</b> Therefore, the velocity is $78.4\\text{ ms}^{-1}$."
            },
            {
        "id": "KIN-TEST-106",
        "topic": "Graphs",
        "difficulty": 2,
        "tags": ["Velocity-Time Graph", "Area under Curve"],
        "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEi9sCQzerQSdjPlkYx2gmpTAGYD15M66LRA6Fzwx6npgIPwGNInDbfFo_m4XkBJKY8znIinrJTGKswvxnKKcozdPnSro4ULK6WUun9gc7l3h3H0EP0Afg6-Qv_oftry1sSz6HirjkKJcNA6Nvw6YNLmh9scvln40ExlkJd7NkSdHpq8T8PbsuLtX3vtVldj",
        "q": "An elevator is going up. The variation in the velocity of the elevator is as given in the graph. What is the height to which the elevator takes the passengers?",
        "options": ["3.6 m", "28.8 m", "36.0 m", "72.0 m"],
        "correct": 2,
        "sol": "<b>Step 1:</b> The height (displacement) is given by the area under the velocity-time graph.<br><b>Step 2:</b> The graph forms a trapezium with the parallel sides on the time axis.<br><b>Step 3:</b> The bottom base is the total time interval: $b_1 = 12\\text{ s} - 0\\text{ s} = 12\\text{ s}$.<br><b>Step 4:</b> The top base is the interval of constant velocity: $b_2 = 10\\text{ s} - 2\\text{ s} = 8\\text{ s}$.<br><b>Step 5:</b> The height of the trapezium is the maximum velocity: $h = 3.6\\text{ m/s}$.<br><b>Step 6:</b> Area $= \\frac{1}{2}(b_1 + b_2) \\times h = \\frac{1}{2}(12 + 8) \\times 3.6 = \\frac{1}{2}(20) \\times 3.6 = 10 \\times 3.6 = 36.0\\text{ m}$."
    },
    {
        "id": "KIN-TEST-107",
        "topic": "Graphs",
        "difficulty": 2,
        "tags": ["Velocity-Time Graph", "Distance and Displacement"],
        "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEjs-fzqifILT3vOeaThPB8ys7otawVmE-4xUw5Zd1lcw9kfLbO0lUaPmtqjbRXZtGqKi7DReNWSnZ3ncIVV8jHtZIPcTv_PJIqo2g1BlnTVym4zOwzgoB9DbX8OET5zsxDVi0HsJLzK6_Et49JHL4wRUzhJZNzoXfKoUBn_3ySPaYGIOj8AqdC-azRpQ95q",
        "q": "The velocity time graph of a body moving in a straight line is shown in the figure. The displacement and distance travelled by the body in 6 sec are respectively (in metres).",
        "options": ["8, 16", "16, 8", "16, 16", "8, 8"],
        "correct": 0,
        "sol": "<b>Step 1:</b> Calculate the area of each rectangular block on the graph.<br><b>Step 2:</b> Area 1 (0 to 2s): $A_1 = 4 \\times 2 = 8\\text{ m}$.<br><b>Step 3:</b> Area 2 (2 to 4s): $A_2 = -2 \\times 2 = -4\\text{ m}$.<br><b>Step 4:</b> Area 3 (4 to 6s): $A_3 = 2 \\times 2 = 4\\text{ m}$.<br><b>Step 5:</b> Displacement is the algebraic sum of the areas: $8 + (-4) + 4 = 8\\text{ m}$.<br><b>Step 6:</b> Distance is the sum of the absolute magnitudes of the areas: $|8| + |-4| + |4| = 8 + 4 + 4 = 16\\text{ m}$."
    },
    {
        "id": "KIN-TEST-108",
        "topic": "Graphs",
        "difficulty": 1,
        "tags": ["Velocity-Time Graph", "Maximum Height"],
        "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEgfRZloO97_ycrIiPo5wQXG6H8X_1JS8Xbn1LREu284xSNAY7medyGK4zpmvwdDGq-9Hva_EuADhwMnzXnsqb9q5L5r4tJ_bwXeIEeuT6GhAbEbEOiqXpF75WH5oCb88RCnhoQcK339xgvBZt2DnIk0BAhehYHoGc6gtHDI16c7mEBGh87ECCtHZby26fvs",
        "q": "The velocity-time graph of a stone thrown vertically upward with an initial velocity of $30\\text{ ms}^{-1}$ is shown in the figure. The velocity in the upward direction is taken as positive and that in the downward direction as negative. What is the maximum height to which the stone rises?",
        "options": ["30 m", "45 m", "60 m", "90 m"],
        "correct": 1,
        "sol": "<b>Step 1:</b> The maximum height is achieved when the velocity of the stone becomes exactly zero (at $t=3\\text{s}$ according to the graph).<br><b>Step 2:</b> The height is represented by the area under the velocity-time graph from $t=0$ to $t=3$.<br><b>Step 3:</b> The graph forms a right-angled triangle with a base of 3s and a height of $30\\text{ m/s}$.<br><b>Step 4:</b> Area $= \\frac{1}{2} \\times \\text{base} \\times \\text{height}$.<br><b>Step 5:</b> Area $= \\frac{1}{2} \\times 3 \\times 30 = 45\\text{ m}$."
    },
    {
        "id": "KIN-TEST-109",
        "topic": "Graphs",
        "difficulty": 2,
        "tags": ["Velocity-Time Graph", "Integration"],
        "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEjViT6fl6MFqAa2CRNJAFWCjdTEMcgwPSKCSBPVaLzSaCrDWHpp1TK-OHmSnUT3GdyAR3OaLukOOorVV6Mcn4cuSgpTNOU55A6wq_KLsMJfY8lqNnfxggjRm5PWiamEZe4Rsbk9RJAPc9kmbH9-lE80-_ecoAN1vkpbwSHjG1nFhgMl-pYaEQ8JqeYcPS8k",
        "q": "The variation of velocity of particle moving along a straight line is shown in the figure. The distance travelled by the particle in 4s is",
        "options": ["55 m", "30 m", "25 m", "60 m"],
        "correct": 0,
        "sol": "<b>Step 1:</b> Find the area under the curve for each 1-second interval shown in the graph.<br><b>Step 2:</b> 0 to 1s (Triangle): Area $= \\frac{1}{2} \\times 1 \\times 20 = 10\\text{ m}$.<br><b>Step 3:</b> 1 to 2s (Rectangle): Area $= 1 \\times 20 = 20\\text{ m}$.<br><b>Step 4:</b> 2 to 3s (Trapezium): Area $= \\frac{1}{2} \\times (20 + 10) \\times 1 = 15\\text{ m}$.<br><b>Step 5:</b> 3 to 4s (Rectangle): Area $= 1 \\times 10 = 10\\text{ m}$.<br><b>Step 6:</b> Total distance $= 10 + 20 + 15 + 10 = 55\\text{ m}$."
    },
            {
                "id": "KIN-TEST-110",
                "topic": "Graphs",
                "difficulty": 2,
                "tags": ["Velocity-Time Graph", "Acceleration Intervals"],
                "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEjT77rf-fKfBsi9HpQJHQ6Ph6Qd4z_iodrvZRe210R0KAegUkjIoAtbA7Iwj7iuvbaz-594gVx7idwBV3xwAeFn_E0WuhlslUprcurJ0YcsBWT4w3KJxXI8nXP2IXWSeUBcRm03Ayp-4434WLOnfQAbYwb0OcgWKXYh1xoxEitV1gYLyK25QjS1u032RaSe",
                "q": "Velocity-time (v-t) graph for a moving object is shown in the figure. Total displacement of the object during the time interval when there is non-zero acceleration and retardation is",
                "options": ["60 m", "50 m", "30 m", "40 m"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Identify the intervals with non-zero acceleration/retardation from the graph. These are the segments where the velocity is changing: 20s to 30s and 30s to 40s.<br><b>Step 2:</b> Calculate the area of the trapezium for the acceleration phase (20 to 30s). Base $= 10\\text{s}$, parallel sides are $1$ and $4$. Area $= \\frac{1}{2} \\times 10 \\times (1 + 4) = 5 \\times 5 = 25\\text{ m}$.<br><b>Step 3:</b> Calculate the area of the trapezium for the retardation phase (30 to 40s). Base $= 10\\text{s}$, parallel sides are $4$ and $1$. Area $= \\frac{1}{2} \\times 10 \\times (4 + 1) = 5 \\times 5 = 25\\text{ m}$.<br><b>Step 4:</b> Total displacement during these specific intervals $= 25 + 25 = 50\\text{ m}$."
            },
            {
                "id": "KIN-TEST-111",
                "topic": "Relative Velocity",
                "difficulty": 3,
                "tags": ["Vector Kinematics", "2D Motion"],
                "q": "An armored car 2m long and 3 m wide is moving at $10\\text{ ms}^{-1}$ along its length when a bullet hits it in a direction making an angle $\\tan^{-1}(3/4)$ with the length of the car as seen by a stationary observer. The bullet enters one edge of the car at the corner and passes out at the diagonally opposite corner. Neglecting gravity, the time for the bullet to cross the car is:",
                "options": ["0.20 s", "0.15 s", "0.10 s", "0.50 s"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Let the car move along the x-axis: $\\vec{v}_c = 10\\hat{i}$.<br><b>Step 2:</b> Bullet velocity relative to ground is $\\vec{v}_b = v_b \\cos\\theta\\hat{i} + v_b \\sin\\theta\\hat{j}$. Since $\\tan\\theta = 3/4$, we have $\\cos\\theta = 4/5$ and $\\sin\\theta = 3/5$. So, $\\vec{v}_b = \\frac{4v_b}{5}\\hat{i} + \\frac{3v_b}{5}\\hat{j}$.<br><b>Step 3:</b> Bullet velocity relative to the car is $\\vec{v}_{bc} = \\vec{v}_b - \\vec{v}_c = \\left(\\frac{4v_b}{5} - 10\\right)\\hat{i} + \\left(\\frac{3v_b}{5}\\right)\\hat{j}$.<br><b>Step 4:</b> To pass diagonally from $(0,0)$ to $(2,3)$ relative to the car, the relative velocity vector must be parallel to the diagonal $2\\hat{i} + 3\\hat{j}$. Thus, $\\frac{v_{y}}{v_{x}} = \\frac{3}{2}$.<br><b>Step 5:</b> Set up the proportion: $\\frac{3v_b/5}{4v_b/5 - 10} = \\frac{3}{2} \\implies 2\\left(\\frac{3v_b}{5}\\right) = 3\\left(\\frac{4v_b}{5} - 10\\right) \\implies \\frac{6v_b}{5} = \\frac{12v_b}{5} - 30$.<br><b>Step 6:</b> Solve for $v_b$: $\\frac{6v_b}{5} = 30 \\implies v_b = 25\\text{ m/s}$.<br><b>Step 7:</b> Substitute back to find relative x-velocity: $v_{x} = \\frac{4(25)}{5} - 10 = 20 - 10 = 10\\text{ m/s}$.<br><b>Step 8:</b> Time to cross the 2m length is $t = \\frac{2}{10} = 0.20\\text{ s}$."
            },
            {
                "id": "KIN-TEST-112",
                "topic": "Relative Velocity",
                "difficulty": 3,
                "tags": ["Minima/Maxima", "Calculus"],
                "q": "Two particles start simultaneously from the same point and move along two straight lines. One with uniform velocity v and other with a uniform acceleration a. If $\\alpha$ is the angle between the lines of motion of two particles then the least value of relative velocity will be at time given by:",
                "options": ["$\\frac{v}{a}\\sin\\alpha$", "$\\frac{v}{a}\\cos\\alpha$", "$\\frac{v}{a}\\tan\\alpha$", "$\\frac{v}{a}\\cot\\alpha$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Let particle 1 move along the x-axis: $\\vec{v}_1 = v\\hat{i}$.<br><b>Step 2:</b> Particle 2 starts from rest and accelerates at angle $\\alpha$: $\\vec{v}_2 = (at\\cos\\alpha)\\hat{i} + (at\\sin\\alpha)\\hat{j}$.<br><b>Step 3:</b> The relative velocity vector is $\\vec{v}_{rel} = \\vec{v}_1 - \\vec{v}_2 = (v - at\\cos\\alpha)\\hat{i} - (at\\sin\\alpha)\\hat{j}$.<br><b>Step 4:</b> The square of the magnitude is $V^2 = (v - at\\cos\\alpha)^2 + (-at\\sin\\alpha)^2 = v^2 - 2vat\\cos\\alpha + a^2t^2\\cos^2\\alpha + a^2t^2\\sin^2\\alpha$.<br><b>Step 5:</b> Simplify using $\\sin^2\\alpha + \\cos^2\\alpha = 1$: $V^2 = v^2 - 2vat\\cos\\alpha + a^2t^2$.<br><b>Step 6:</b> To find the minimum relative velocity, differentiate $V^2$ with respect to time $t$ and set it to zero: $\\frac{d(V^2)}{dt} = -2va\\cos\\alpha + 2a^2t = 0$.<br><b>Step 7:</b> Solve for $t$: $2a^2t = 2va\\cos\\alpha \\implies t = \\frac{v\\cos\\alpha}{a}$."
            },
            {
                "id": "KIN-TEST-113",
                "topic": "Relative Velocity",
                "difficulty": 1,
                "tags": ["1D Motion", "Relative Speed"],
                "q": "A jet airplane travelling at the speed of $500\\text{ km/h}$ ejects its products of combustion at the speed of $1500\\text{ km/h}$ relative to the jet plane. What is the velocity of the later (exhaust gas) with respect to an observer on the ground?",
                "options": ["$-100\\text{ kmph}$", "$-1000\\text{ kmph}$", "$-10\\text{ kmph}$", "$-11\\text{ kmph}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Establish a sign convention. Let the direction of the jet airplane be positive. Velocity of the jet relative to ground $\\vec{v}_j = +500\\text{ km/h}$.<br><b>Step 2:</b> The exhaust gas is ejected backwards. So, the velocity of the exhaust gas relative to the jet is $\\vec{v}_{ej} = -1500\\text{ km/h}$.<br><b>Step 3:</b> We need the velocity of the exhaust gas relative to the ground ($\\vec{v}_e$). Use the relative velocity formula: $\\vec{v}_{ej} = \\vec{v}_e - \\vec{v}_j$.<br><b>Step 4:</b> Rearrange to solve for $\\vec{v}_e$: $\\vec{v}_e = \\vec{v}_{ej} + \\vec{v}_j$.<br><b>Step 5:</b> Substitute the values: $\\vec{v}_e = -1500 + 500 = -1000\\text{ km/h}$."
            }
        ]
    },
    "Motion in a Plane": {
        "classTarget": "Class 11",
        "topics": ["Addition and Resolution of Vectors", "Relative Velocity in 2D", "Projectile Motion", "Circular Motion"],
        "questions": [
            {
                "id": "MIP-TEST-001",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Vector Addition", "Concurrent Forces"],
                "q": "The maximum resultant of two concurrent forces is 10N and their minimum resultant is 4N. The magnitude of large force is:",
                "options": ["5N", "7N", "3N", "14N"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The maximum resultant occurs when forces are parallel: $F_1 + F_2 = 10$.<br><b>Step 2:</b> The minimum resultant occurs when forces are anti-parallel: $F_1 - F_2 = 4$.<br><b>Step 3:</b> Adding the two equations: $2F_1 = 14 \\implies F_1 = 7$N.<br><b>Step 4:</b> Substituting back gives $F_2 = 3$N. The larger force is 7N."
            },
            {
                "id": "MIP-TEST-002",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 3,
                "tags": ["Vector Addition", "Orthogonal Resultant"],
                "q": "The resultant of two vectors of magnitudes 3 units and 5 units is perpendicular to 3 units. The angle between the vectors is:",
                "options": ["$127^{\\circ}$", "$120^{\\circ}$", "$75^{\\circ}$", "$150^{\\circ}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Let $\\vec{A}$ have magnitude 3 and $\\vec{B}$ have magnitude 5. The resultant is perpendicular to $\\vec{A}$, meaning $\\alpha = 90^{\\circ}$.<br><b>Step 2:</b> Use the formula for the direction of the resultant: $\\tan \\alpha = \\frac{B \\sin \\theta}{A + B \\cos \\theta}$.<br><b>Step 3:</b> $\\tan 90^{\\circ} = \\infty$, which implies the denominator must be zero: $3 + 5 \\cos \\theta = 0$.<br><b>Step 4:</b> $\\cos \\theta = -\\frac{3}{5}$.<br><b>Step 5:</b> We know $\\cos(180^{\\circ} - 53^{\\circ}) = -\\cos 53^{\\circ} = -\\frac{3}{5}$. Therefore, $\\theta = 127^{\\circ}$."
            },
            {
                "id": "MIP-TEST-003",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Unit Vectors", "Vector Subtraction"],
                "q": "The sum of two unit vectors is also a vector of unit magnitude, then the magnitude of the difference of the two unit vectors is:",
                "options": ["1 unit", "2 units", "$\\sqrt{3}$ units", "zero"],
                "correct": 2,
                "sol": "<b>Step 1:</b> We are given $|\\hat{a} + \\hat{b}| = 1$. Square both sides: $|\\hat{a}|^2 + |\\hat{b}|^2 + 2|\\hat{a}||\\hat{b}|\\cos\\theta = 1^2$.<br><b>Step 2:</b> Since they are unit vectors, $1 + 1 + 2(1)(1)\\cos\\theta = 1 \\implies 2 + 2\\cos\\theta = 1 \\implies \\cos\\theta = -\\frac{1}{2}$.<br><b>Step 3:</b> Now, find the magnitude of their difference: $|\\hat{a} - \\hat{b}| = \\sqrt{|\\hat{a}|^2 + |\\hat{b}|^2 - 2|\\hat{a}||\\hat{b}|\\cos\\theta}$.<br><b>Step 4:</b> Substitute the values: $\\sqrt{1 + 1 - 2(1)(1)(-\\frac{1}{2})} = \\sqrt{2 + 1} = \\sqrt{3}$ units."
            },
            {
                "id": "MIP-TEST-004",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Equilibrium", "Triangle Law"],
                "q": "Which of the following sets of forces acting simultaneously on a particle keep it in equilibrium?",
                "options": ["3N, 5N, 10N", "4N, 5N, 12N", "2N, 6N, 5N", "5N, 8N, 1N"],
                "correct": 2,
                "sol": "<b>Step 1:</b> For three concurrent forces to keep a particle in equilibrium, they must be able to form a closed triangle.<br><b>Step 2:</b> According to the triangle inequality theorem, the sum of the magnitudes of any two forces must be greater than or equal to the magnitude of the third force.<br><b>Step 3:</b> Check option 3: $2 + 5 = 7$, and $7 > 6$. This is the only set that satisfies the condition."
            },
            {
        "id": "MIP-TEST-005",
        "topic": "Addition and Resolution of Vectors",
        "difficulty": 2,
        "tags": ["Vector Addition", "Cosine Rule"],
        "q": "Two vectors inclined at an angle $\\theta$ have magnitude 3 N and 5 N and their resultant is of magnitude 4 N. The angle $\\theta$ is:",
        "options": ["$90^{\\circ}$", "$\\cos^{-1}(\\frac{4}{5})$", "$\\cos^{-1}(\\frac{3}{5})$", "$\\cos^{-1}(-\\frac{3}{5})$"],
        "correct": 3,
        "sol": "<b>Step 1:</b> Use the magnitude of resultant formula: $R^2 = A^2 + B^2 + 2AB\\cos \\theta$.<br><b>Step 2:</b> Substitute the given magnitudes: $4^2 = 3^2 + 5^2 + 2(3)(5)\\cos \\theta$.<br><b>Step 3:</b> $16 = 9 + 25 + 30\\cos \\theta \\implies 16 = 34 + 30\\cos \\theta$.<br><b>Step 4:</b> $-18 = 30\\cos \\theta \\implies \\cos \\theta = -\\frac{18}{30} = -\\frac{3}{5}$.<br><b>Step 5:</b> Therefore, $\\theta = \\cos^{-1}(-\\frac{3}{5})$."
    },
            {
                "id": "MIP-TEST-006",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Polygon Law", "3D Vectors"],
                "q": "The plane which can be formed with the vectors $\\vec{a}=3\\hat{i}-4\\hat{j}+2\\hat{k}$, $\\vec{b}=2\\hat{i}-\\hat{j}-6\\hat{k}$, and $\\vec{c}=5\\hat{i}-5\\hat{j}-4\\hat{k}$ is:",
                "options": ["Quadrilateral", "Triangle", "Circle", "Hyperbola"],
                "correct": 1,
                "sol": "<b>Step 1:</b> For three vectors to form a closed triangle, the sum of any two vectors must equal the third vector (or their total vector sum is zero).<br><b>Step 2:</b> Let's check the sum of $\\vec{a}$ and $\\vec{b}$: $\\vec{a} + \\vec{b} = (3\\hat{i}-4\\hat{j}+2\\hat{k}) + (2\\hat{i}-\\hat{j}-6\\hat{k})$.<br><b>Step 3:</b> $\\vec{a} + \\vec{b} = 5\\hat{i} - 5\\hat{j} - 4\\hat{k}$.<br><b>Step 4:</b> This sum is exactly equal to $\\vec{c}$. Since $\\vec{a} + \\vec{b} = \\vec{c}$, the vectors form a Triangle."
            },
            {
                "id": "MIP-TEST-007",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 1,
                "tags": ["Polygon Law", "Symmetry"],
                "q": "Five equal forces each of 20N are acting at a point in the same plane. If the angles between them are same, the resultant of these forces is:",
                "options": ["0", "40N", "20N", "$20\\sqrt{2}$N"],
                "correct": 0,
                "sol": "<b>Step 1:</b> When $n$ equal forces act at a point such that the angle between any two adjacent forces is equal (i.e., $360^{\\circ}/n$), they are symmetrically distributed.<br><b>Step 2:</b> By the polygon law of vector addition, these forces form a closed regular polygon.<br><b>Step 3:</b> The resultant of any closed polygon of vectors is exactly zero."
            },
            {
                "id": "MIP-TEST-008",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Equilibrium", "Resolution of Forces"],
                "q": "A boy is hanging from a horizontal branch of a tree. The tension in the arms will be maximum when the angle between the arms is:",
                "options": ["$0^{\\circ}$", "$30^{\\circ}$", "$60^{\\circ}$", "$120^{\\circ}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Let $T$ be the tension in each arm and $\\theta$ be the angle between the arms.<br><b>Step 2:</b> For vertical equilibrium, the sum of the vertical components of tension must equal the boy's weight: $2T\\cos(\\frac{\\theta}{2}) = mg$.<br><b>Step 3:</b> Rearrange to solve for tension: $T = \\frac{mg}{2\\cos(\\theta/2)}$.<br><b>Step 4:</b> The tension $T$ is maximum when the denominator $\\cos(\\theta/2)$ is minimum.<br><b>Step 5:</b> Among the given options, $\\theta = 120^{\\circ}$ gives the largest $\\theta/2 = 60^{\\circ}$, which yields the smallest cosine value (0.5), thus maximizing the tension."
            },
            {
                "id": "MIP-TEST-009",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Equilibrium", "Lami's Theorem"],
                "q": "A 10 kg body suspended by a rope is pulled by means of a horizontal force to make $60^{\\circ}$ by rope to vertical. The horizontal force is:",
                "options": ["10 kgwt", "30 kgwt", "$10\\sqrt{3}$ kgwt", "$30\\sqrt{3}$ kgwt"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Three forces act on the knot: Tension $T$ in the upper rope, weight $W = mg$ downwards, and horizontal force $F$.<br><b>Step 2:</b> Resolve the tension $T$ into vertical and horizontal components. The vertical component balances the weight: $T\\cos 60^{\\circ} = W$.<br><b>Step 3:</b> The horizontal component balances the pulling force: $T\\sin 60^{\\circ} = F$.<br><b>Step 4:</b> Divide the two equations: $\\frac{T\\sin 60^{\\circ}}{T\\cos 60^{\\circ}} = \\frac{F}{W} \\implies \\tan 60^{\\circ} = \\frac{F}{10}$.<br><b>Step 5:</b> $F = 10 \\times \\sqrt{3} = 10\\sqrt{3}$ kgwt."
            },
            {
                "id": "MIP-TEST-010",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Equilibrium", "Lami's Theorem"],
                "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEijiwTKb5d5ypDyH_d6CCxzXJ7kSYl84_eTpFig_kwAJuHLq8UNy9yhc1N_S8noCsufbnQvtv3cYhc2msgOHhBzMLtDhgln9WWNQ6dWVuhZ9kKEJS0ULjF_TkJiPdxDeGHcqwZQiW3cUPeeIqSJkrMoJQBEpDFjORySmyvP3mVJGlfKHWIhPmpDqMhKwUkt",
                "q": "If 'P' is in equilibrium then $\\frac{T_{1}}{T_{2}}$ is:",
                "options": ["$\\sqrt{3}$", "2", "$\\frac{1}{\\sqrt{3}}$", "$\\frac{1}{2}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> For point P to be in equilibrium, the net horizontal force must be zero.<br><b>Step 2:</b> Balance the horizontal components of the two tensions: $T_1 \\cos 30^{\\circ} = T_2 \\cos 60^{\\circ}$.<br><b>Step 3:</b> Substitute the trigonometric values: $T_1 \\left(\\frac{\\sqrt{3}}{2}\\right) = T_2 \\left(\\frac{1}{2}\\right)$.<br><b>Step 4:</b> Rearrange the equation to find the ratio: $\\frac{T_1}{T_2} = \\frac{1/2}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}}$."
            },
            {
                "id": "MIP-TEST-011",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Vector Kinematics", "3D Motion"],
                "q": "A body starts with a velocity $(2\\hat{i}+3\\hat{j}+11\\hat{k})\\text{ m/s}$ and moves with an acceleration $(5\\hat{i}+5\\hat{j}-5\\hat{k})\\text{ m/s}^{2}$. What is its velocity after 0.2 sec?",
                "options": ["$7\\hat{i}+8\\hat{j}+6\\hat{k}$", "$2\\hat{i}-3\\hat{j}+11\\hat{k}$", "$3\\hat{i}-4\\hat{j}-10\\hat{k}$", "$3\\hat{i}+4\\hat{j}+10\\hat{k}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Use the vector equation of motion: $\\vec{v} = \\vec{u} + \\vec{a}t$.<br><b>Step 2:</b> Substitute the given vectors: $\\vec{v} = (2\\hat{i}+3\\hat{j}+11\\hat{k}) + 0.2(5\\hat{i}+5\\hat{j}-5\\hat{k})$.<br><b>Step 3:</b> Multiply the acceleration vector by the scalar time (0.2): $\\vec{v} = (2\\hat{i}+3\\hat{j}+11\\hat{k}) + (1\\hat{i}+1\\hat{j}-1\\hat{k})$.<br><b>Step 4:</b> Add the corresponding components together: $\\vec{v} = (2+1)\\hat{i} + (3+1)\\hat{j} + (11-1)\\hat{k}$.<br><b>Step 5:</b> The final velocity is $3\\hat{i}+4\\hat{j}+10\\hat{k}$."
            },
            {
                "id": "MIP-TEST-012",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Displacement Vector", "Parametric Equations"],
                "q": "The position vector of a particle is given by $\\vec{r}=(3t^{2}\\hat{i}+4t^{2}\\hat{j}+7\\hat{k})\\text{ m}$ at a given time t. The net displacement of the particle after 10 s is:",
                "options": ["500 m", "400 m", "300 m", "700 m"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Find the initial position vector at $t=0$: $\\vec{r_i} = 3(0)\\hat{i} + 4(0)\\hat{j} + 7\\hat{k} = 7\\hat{k}$.<br><b>Step 2:</b> Find the final position vector at $t=10\\text{ s}$: $\\vec{r_f} = 3(10^2)\\hat{i} + 4(10^2)\\hat{j} + 7\\hat{k} = 300\\hat{i} + 400\\hat{j} + 7\\hat{k}$.<br><b>Step 3:</b> The displacement vector is the change in position: $\\vec{S} = \\vec{r_f} - \\vec{r_i} = 300\\hat{i} + 400\\hat{j} + 0\\hat{k}$.<br><b>Step 4:</b> Calculate the magnitude of the displacement vector: $|\\vec{S}| = \\sqrt{300^2 + 400^2} = \\sqrt{90000 + 160000}$.<br><b>Step 5:</b> $|\\vec{S}| = \\sqrt{250000} = 500\\text{ m}$."
            },
            {
                "id": "MIP-TEST-013",
                "topic": "Relative Velocity in 2D",
                "difficulty": 2,
                "tags": ["Change in Velocity", "Average Acceleration"],
                "q": "A particle is moving eastwards with a velocity $5\\text{ ms}^{-1}$ changes its direction northwards in 10 seconds and moves with same magnitude of velocity. The average acceleration is:",
                "options": ["zero", "$\\frac{1}{\\sqrt{2}}\\text{ ms}^{-2}$ towards N-E", "$\\frac{1}{\\sqrt{2}}\\text{ ms}^{-2}$ towards S-E", "$\\frac{1}{\\sqrt{2}}\\text{ ms}^{-2}$ towards N-W"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Represent velocities as vectors. Initial velocity $\\vec{u} = 5\\hat{i}$ (East), Final velocity $\\vec{v} = 5\\hat{j}$ (North).<br><b>Step 2:</b> Calculate the change in velocity: $\\Delta\\vec{v} = \\vec{v} - \\vec{u} = 5\\hat{j} - 5\\hat{i}$.<br><b>Step 3:</b> Find the magnitude of this change: $|\\Delta\\vec{v}| = \\sqrt{(-5)^2 + 5^2} = \\sqrt{50} = 5\\sqrt{2}\\text{ m/s}$.<br><b>Step 4:</b> Determine the direction of $\\Delta\\vec{v}$. The vector has a negative x-component and a positive y-component, which points exactly North-West.<br><b>Step 5:</b> Calculate average acceleration: $\\vec{a}_{avg} = \\frac{\\Delta\\vec{v}}{t} = \\frac{5\\sqrt{2}}{10} = \\frac{\\sqrt{2}}{2} = \\frac{1}{\\sqrt{2}}\\text{ ms}^{-2}$ towards North-West."
            },
            {
                "id": "MIP-TEST-014",
                "topic": "Relative Velocity in 2D",
                "difficulty": 3,
                "tags": ["Rain and Man Problem", "Relative Velocity"],
                "q": "A man is going due east with a velocity of $5\\text{ ms}^{-1}$. It is vertically raining downwards with a velocity of $4\\text{ ms}^{-1}$. At what angle should he hold the umbrella to the vertical so as to protect him self from the rain?",
                "options": ["$\\tan^{-1}(\\frac{5}{4})$ in anti-clockwise direction", "$\\tan^{-1}(\\frac{5}{4})$ in clock-wise direction", "$\\tan^{-1}(\\frac{4}{5})$ North of East", "$\\tan^{-1}(\\frac{4}{5})$ East of North"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Define the coordinate system. Let East be the positive x-axis ($\\hat{i}$) and Up be the positive y-axis ($\\hat{j}$).<br><b>Step 2:</b> Velocity of man $\\vec{v}_m = 5\\hat{i}$, velocity of rain $\\vec{v}_r = -4\\hat{j}$.<br><b>Step 3:</b> Find the relative velocity of rain with respect to the man: $\\vec{v}_{rm} = \\vec{v}_r - \\vec{v}_m = -4\\hat{j} - 5\\hat{i}$.<br><b>Step 4:</b> The rain appears to fall towards him from the front (East) and top. The angle $\\theta$ it makes with the vertical (y-axis) is $\\tan\\theta = \\frac{|v_{rm,x}|}{|v_{rm,y}|} = \\frac{5}{4}$.<br><b>Step 5:</b> To protect himself, he must tilt the umbrella forward (towards the East) by this angle, which corresponds to a clock-wise direction from the vertical."
            },
            {
                "id": "MIP-TEST-015",
                "topic": "Relative Velocity in 2D",
                "difficulty": 1,
                "tags": ["Relative Speed", "Orthogonal Vectors"],
                "q": "Rain drops are falling down ward vertically at 4kmph. For a person moving forward at 3kmph feels the rain falling at:",
                "options": ["7 kmph", "1 kmph", "5 kmph", "25 kmph"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Let the velocity of the rain be $\\vec{v}_r = -4\\hat{j}$ and the velocity of the man be $\\vec{v}_m = 3\\hat{i}$.<br><b>Step 2:</b> The relative velocity of the rain with respect to the man is $\\vec{v}_{rm} = \\vec{v}_r - \\vec{v}_m = -4\\hat{j} - 3\\hat{i}$.<br><b>Step 3:</b> The speed at which the person feels the rain falling is the magnitude of this relative velocity vector.<br><b>Step 4:</b> $|\\vec{v}_{rm}| = \\sqrt{(-3)^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25}$.<br><b>Step 5:</b> The apparent speed is $5\\text{ kmph}$."
            },
            {
                "id": "MIP-TEST-016",
                "topic": "Relative Velocity in 2D",
                "difficulty": 2,
                "tags": ["Rain and Man Problem", "Relative Velocity"],
                "q": "A man travelling at 10.8 kmph in topless car on a rainy day. He holds an umbrella at angle of $37^{\\circ}$ with the vertical so that he does not wet. If rain drops falls vertically downwards what is rain velocity.",
                "options": ["1 m/s", "2 m/s", "3 m/s", "4 m/s"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Convert the velocity of the man from kmph to m/s: $v_m = 10.8 \\times \\frac{5}{18} = 3\\text{ m/s}$.<br><b>Step 2:</b> The rain falls vertically, so $\\vec{v}_r = -v_r \\hat{j}$ and the man moves horizontally, $\\vec{v}_m = v_m \\hat{i}$.<br><b>Step 3:</b> The relative velocity of rain with respect to the man is $\\vec{v}_{rm} = \\vec{v}_r - \\vec{v}_m = -v_r \\hat{j} - v_m \\hat{i}$.<br><b>Step 4:</b> The angle $\\theta$ the umbrella makes with the vertical satisfies $\\tan\\theta = \\frac{v_m}{v_r}$.<br><b>Step 5:</b> Substitute the known values: $\\tan 37^{\\circ} = \\frac{3}{v_r} \\implies \\frac{3}{4} = \\frac{3}{v_r}$.<br><b>Step 6:</b> Solving for $v_r$ gives $4\\text{ m/s}$."
            },
            {
                "id": "MIP-TEST-017",
                "topic": "Relative Velocity in 2D",
                "difficulty": 2,
                "tags": ["River Boat Problem", "Relative Velocity"],
                "q": "A man can row a boat in still water with a velocity of 8 kmph. Water is flowing in a river with a velocity of 4 kmph. At what angle should he row the boat so as to reach the exact opposite point",
                "options": ["$150^{\\circ}$ to flow of water", "$120^{\\circ}$ to flow of water.", "$30^{\\circ}$ to flow of water.", "$90^{\\circ}$ to flow of water."],
                "correct": 1,
                "sol": "<b>Step 1:</b> To reach the exact opposite point, the boat's net velocity must be perpendicular to the river flow.<br><b>Step 2:</b> This means the horizontal component of the boat's velocity must perfectly cancel the river's velocity: $v_b \\sin\\theta = v_r$, where $\\theta$ is the angle with the normal to the bank.<br><b>Step 3:</b> Substitute the values: $8 \\sin\\theta = 4 \\implies \\sin\\theta = \\frac{1}{2}$.<br><b>Step 4:</b> Therefore, $\\theta = 30^{\\circ}$ from the normal (perpendicular) to the bank.<br><b>Step 5:</b> The angle with the direction of the river flow is $90^{\\circ} + 30^{\\circ} = 120^{\\circ}$."
            },
            {
                "id": "MIP-TEST-018",
                "topic": "Relative Velocity in 2D",
                "difficulty": 2,
                "tags": ["River Boat Problem", "Downstream and Upstream"],
                "q": "A person can swim in still water at $5\\text{ m/s}$. He moves in a river of velocity 3 m/s, first down the stream and next same distance up the stream. The ratio of times taken are",
                "options": ["1:1", "1:2", "1:4", "4:1"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Velocity downstream is the sum of swimmer's and river's speeds: $v_{down} = v_b + v_r = 5 + 3 = 8\\text{ m/s}$.<br><b>Step 2:</b> Time taken to swim distance $d$ downstream: $t_1 = \\frac{d}{8}$.<br><b>Step 3:</b> Velocity upstream is the difference: $v_{up} = v_b - v_r = 5 - 3 = 2\\text{ m/s}$.<br><b>Step 4:</b> Time taken to swim the same distance $d$ upstream: $t_2 = \\frac{d}{2}$.<br><b>Step 5:</b> Ratio of times: $\\frac{t_1}{t_2} = \\frac{d/8}{d/2} = \\frac{2}{8} = 1:4$."
            },
            {
                "id": "MIP-TEST-019",
                "topic": "Relative Velocity in 2D",
                "difficulty": 2,
                "tags": ["River Boat Problem", "Drift"],
                "q": "The velocity of water in a river is 2 kmph, while width is 400 m. A boat is rowed from a point rowing always aiming opposite point at 8 kmph of still water velocity. On reaching the opposite bank the drift obtained is",
                "options": ["93 m", "100.8 m", "112.4 m", "100 m"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Since the boat always aims at the opposite point, its entire velocity of $8\\text{ kmph}$ is directed perpendicular to the river flow.<br><b>Step 2:</b> The time $t$ taken to cross the river of width $d = 400\\text{ m} = 0.4\\text{ km}$ is $t = \\frac{d}{v_b} = \\frac{0.4}{8} = 0.05\\text{ hours}$.<br><b>Step 3:</b> During this time, the river's current pulls the boat horizontally, causing drift.<br><b>Step 4:</b> Drift $x = v_r \\times t = 2\\text{ kmph} \\times 0.05\\text{ hours} = 0.1\\text{ km}$.<br><b>Step 5:</b> Convert the drift to meters: $0.1 \\times 1000 = 100\\text{ m}$."
            },
            {
                "id": "MIP-TEST-020",
                "topic": "Relative Velocity in 2D",
                "difficulty": 2,
                "tags": ["River Boat Problem", "Shortest Time"],
                "q": "A man can swim in still water at a speed of 4 kmph. He desires to cross a river flowing at a speed of 3 kmph in the shortest time interval. If the width of the river is 3km time taken to cross the river (in hours) and the horizontal distance travelled (in km) are respectively",
                "options": ["$\\frac{3}{4}, \\frac{9}{4}$", "$\\frac{3}{5}, 3$", "$\\frac{1}{4}, \\frac{15}{4}$", "$\\frac{3}{\\sqrt{7}}, 0.7$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> For the shortest time interval, the swimmer must aim straight across the river perpendicular to the current.<br><b>Step 2:</b> Time taken $t = \\frac{d}{v_b} = \\frac{3\\text{ km}}{4\\text{ kmph}} = \\frac{3}{4}\\text{ hours}$.<br><b>Step 3:</b> The horizontal distance (drift) traveled due to the river's flow is $x = v_r \\times t$.<br><b>Step 4:</b> Substitute the values: $x = 3 \\times \\frac{3}{4} = \\frac{9}{4}\\text{ km}$."
            },
            {
                "id": "MIP-TEST-021",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Equation of Trajectory", "Kinematics"],
                "q": "A particle is projected in xy plane with y-axis along vertical, the point of projection is origin. The equation of the path is $y=\\sqrt{3}x-\\frac{g}{2}x^{2}$. where y and x are in m. Then the speed of projection in $\\text{ms}^{-1}$ is",
                "options": ["2", "$\\sqrt{3}$", "4", "$\\frac{\\sqrt{3}}{2}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The standard equation of a projectile's trajectory is $y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}$.<br><b>Step 2:</b> Compare the given equation $y = \\sqrt{3}x - \\frac{g}{2}x^2$ with the standard equation.<br><b>Step 3:</b> From the x term: $\\tan\\theta = \\sqrt{3} \\implies \\theta = 60^{\\circ}$.<br><b>Step 4:</b> From the $x^2$ term: $\\frac{g}{2u^2\\cos^2\\theta} = \\frac{g}{2}$.<br><b>Step 5:</b> Cancel $g/2$ from both sides: $u^2\\cos^2 60^{\\circ} = 1$.<br><b>Step 6:</b> Substitute $\\cos 60^{\\circ} = 1/2$: $u^2 (\\frac{1}{4}) = 1 \\implies u^2 = 4 \\implies u = 2\\text{ ms}^{-1}$."
            },
            {
                "id": "MIP-TEST-022",
                "topic": "Projectile Motion",
                "difficulty": 1,
                "tags": ["Time of Flight", "Kinematics"],
                "q": "If a body is thrown with a speed of 19.6m/s making an angle of $30^{\\circ}$ with the horizontal, then the time of flight is",
                "options": ["1 s", "2 s", "23 s", "5 s"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The formula for the time of flight of a projectile is $T = \\frac{2u\\sin\\theta}{g}$.<br><b>Step 2:</b> Substitute the given values: $u = 19.6\\text{ m/s}$, $\\theta = 30^{\\circ}$, and $g = 9.8\\text{ m/s}^2$.<br><b>Step 3:</b> $T = \\frac{2 \\times 19.6 \\times \\sin 30^{\\circ}}{9.8}$.<br><b>Step 4:</b> Since $\\frac{19.6}{9.8} = 2$ and $\\sin 30^{\\circ} = 0.5$, we get $T = 2 \\times 2 \\times 0.5 = 2\\text{ s}$."
            },
            {
                "id": "MIP-TEST-023",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Horizontal Range", "Angles"],
                "q": "A particle is projected with an initial velocity of $200\\text{ m/s}$ in a direction making an angle of $30^{\\circ}$ with the vertical. The horizontal distance covered by the particle in 3s is",
                "options": ["300 m", "150 m", "175 m", "125 m"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The angle is given with respect to the vertical ($30^{\\circ}$). Therefore, the horizontal component of velocity is $v_x = u\\sin(30^{\\circ})$.<br><b>Step 2:</b> Calculate the horizontal velocity: $v_x = 200 \\times \\sin 30^{\\circ} = 200 \\times 0.5 = 100\\text{ m/s}$.<br><b>Step 3:</b> The horizontal distance covered is velocity multiplied by time: $x = v_x \\times t$.<br><b>Step 4:</b> Substitute the values: $x = 100 \\times 3 = 300\\text{ m}$."
            },
            {
                "id": "MIP-TEST-024",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Vector Representation", "Velocity Components"],
                "q": "A body is projected with an initial velocity $20\\text{ m/s}$ at $60^{\\circ}$ to the horizontal. Its initial velocity vector is ($g=10\\text{ m/s}^{2}$)",
                "options": ["$10\\hat{i}-20\\hat{j}$", "$10\\sqrt{3}\\hat{i}+10\\hat{j}$", "$10\\hat{i}+10\\sqrt{3}\\hat{j}$", "$5\\hat{i}+5\\sqrt{3}\\hat{j}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Any 2D velocity vector can be broken down into horizontal and vertical components: $\\vec{u} = u\\cos\\theta \\hat{i} + u\\sin\\theta \\hat{j}$.<br><b>Step 2:</b> Calculate horizontal component: $u_x = 20 \\cos 60^{\\circ} = 20 \\times 0.5 = 10\\text{ m/s}$.<br><b>Step 3:</b> Calculate vertical component: $u_y = 20 \\sin 60^{\\circ} = 20 \\times \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}\\text{ m/s}$.<br><b>Step 4:</b> Combine them to get the initial velocity vector: $\\vec{u} = 10\\hat{i} + 10\\sqrt{3}\\hat{j}$."
            },
            {
                "id": "MIP-TEST-025",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Momentum", "Velocity at Maximum Height"],
                "q": "A body is projected at an angle of $30^{\\circ}$ with the horizontal with momentum P. At its highest point the magnitude of the momentum is:",
                "options": ["$\\frac{\\sqrt{3}}{2}P$", "$\\frac{2}{\\sqrt{3}}P$", "P", "$\\frac{P}{2}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Initial momentum is given by $P = mu$.<br><b>Step 2:</b> At the highest point of a projectile's trajectory, its vertical velocity is zero. It only has a horizontal velocity component.<br><b>Step 3:</b> Horizontal velocity remains constant throughout the flight: $v_{top} = u\\cos\\theta = u\\cos 30^{\\circ}$.<br><b>Step 4:</b> Momentum at the highest point is $P' = m(v_{top}) = m(u\\cos 30^{\\circ})$.<br><b>Step 5:</b> Substitute $P = mu$ and $\\cos 30^{\\circ} = \\frac{\\sqrt{3}}{2}$: $P' = P \\frac{\\sqrt{3}}{2}$."
            },
            {
                "id": "MIP-TEST-026",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Energy Conservation", "Time of Flight"],
                "q": "The potential energy of a projectile at its maximum height is equal to its kinetic energy there. If the velocity of projection is $20\\text{ ms}^{-1}$, its time of flight is ($g=10\\text{ ms}^{-2}$)",
                "options": ["2s", "$2\\sqrt{2}\\text{ s}$", "$\\frac{1}{2}\\text{ s}$", "$\\frac{1}{\\sqrt{2}}\\text{ s}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> At maximum height, Potential Energy $PE = mgh = mg \\left( \\frac{u^2\\sin^2\\theta}{2g} \\right) = \\frac{1}{2}mu^2\\sin^2\\theta$.<br><b>Step 2:</b> Kinetic Energy at maximum height is entirely due to horizontal velocity: $KE = \\frac{1}{2}mv_x^2 = \\frac{1}{2}mu^2\\cos^2\\theta$.<br><b>Step 3:</b> Equate PE and KE: $\\frac{1}{2}mu^2\\sin^2\\theta = \\frac{1}{2}mu^2\\cos^2\\theta \\implies \\sin^2\\theta = \\cos^2\\theta \\implies \\tan\\theta = 1 \\implies \\theta = 45^{\\circ}$.<br><b>Step 4:</b> Use the formula for time of flight: $T = \\frac{2u\\sin\\theta}{g}$.<br><b>Step 5:</b> Substitute values: $T = \\frac{2(20)\\sin 45^{\\circ}}{10} = 4 \\times \\frac{1}{\\sqrt{2}} = 2\\sqrt{2}\\text{ s}$."
            },
            {
                "id": "MIP-TEST-027",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Average Velocity", "Maximum Range"],
                "q": "From a point on the ground a particle is projected with initial velocity u, such that its horizontal range is maximum. The magnitude of average velocity during its ascent.",
                "options": ["$\\frac{\\sqrt{5}u}{2\\sqrt{2}}$", "$\\frac{5u}{4}$", "$\\frac{\\sqrt{3}}{2\\sqrt{2}}$", "none"],
                "correct": 0,
                "sol": "<b>Step 1:</b> For maximum horizontal range, the angle of projection must be $\\theta = 45^{\\circ}$.<br><b>Step 2:</b> Time of ascent is half the time of flight: $t = \\frac{u\\sin 45^{\\circ}}{g} = \\frac{u}{g\\sqrt{2}}$.<br><b>Step 3:</b> Horizontal displacement during ascent: $x = (u\\cos 45^{\\circ})t = \\frac{u}{\\sqrt{2}} \\times \\frac{u}{g\\sqrt{2}} = \\frac{u^2}{2g}$.<br><b>Step 4:</b> Vertical displacement during ascent is the maximum height: $y = H = \\frac{u^2\\sin^2 45^{\\circ}}{2g} = \\frac{u^2}{4g}$.<br><b>Step 5:</b> Total displacement $S = \\sqrt{x^2 + y^2} = \\sqrt{(\\frac{u^2}{2g})^2 + (\\frac{u^2}{4g})^2} = \\frac{u^2}{4g}\\sqrt{4+1} = \\frac{\\sqrt{5}u^2}{4g}$.<br><b>Step 6:</b> Average velocity $v_{avg} = \\frac{S}{t} = \\frac{\\sqrt{5}u^2 / 4g}{u / g\\sqrt{2}} = \\frac{\\sqrt{5}u\\sqrt{2}}{4} = \\frac{\\sqrt{5}u}{2\\sqrt{2}}$."
            },
            {
                "id": "MIP-TEST-028",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Parametric Equations", "Velocity"],
                "q": "The horizontal and vertical displacements of a projectile are given as $x=at$ & $y=b~t-c~t^{2}$. Then velocity of projection is",
                "options": ["$\\sqrt{a^{2}+b^{2}}$", "$\\sqrt{b^{2}+c^{2}}$", "$\\sqrt{a^{2}+c^{2}}$", "$\\sqrt{b^{2}-c^{2}}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The horizontal velocity is the derivative of the horizontal position: $v_x = \\frac{dx}{dt} = \\frac{d}{dt}(at) = a$.<br><b>Step 2:</b> The vertical velocity is the derivative of the vertical position: $v_y = \\frac{dy}{dt} = \\frac{d}{dt}(bt - ct^2) = b - 2ct$.<br><b>Step 3:</b> Velocity of projection is the velocity at $t=0$. Initial horizontal velocity $u_x = a$. Initial vertical velocity $u_y = b - 2c(0) = b$.<br><b>Step 4:</b> The magnitude of initial velocity of projection is $u = \\sqrt{u_x^2 + u_y^2} = \\sqrt{a^2 + b^2}$."
            },
            {
                "id": "MIP-TEST-029",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Complementary Angles", "Maximum Height"],
                "q": "Two bodies are thrown from the same point with the same velocity of $50\\text{ ms}^{-1}$. If their angles of projection are complimentary to each other and the difference of maximum heights is 30m, the minimum and maximum heights are ($g=10\\text{ m/s}^{2}$)",
                "options": ["50 m & 80 m", "47.5 m & 77.5 m", "30 m & 60 m", "25 m & 55 m"],
                "correct": 1,
                "sol": "<b>Step 1:</b> For complementary angles $\\theta$ and $90^{\\circ}-\\theta$, maximum heights are $H_1 = \\frac{u^2\\sin^2\\theta}{2g}$ and $H_2 = \\frac{u^2\\cos^2\\theta}{2g}$.<br><b>Step 2:</b> Calculate the sum of the heights: $H_1 + H_2 = \\frac{u^2}{2g}(\\sin^2\\theta + \\cos^2\\theta) = \\frac{u^2}{2g}$.<br><b>Step 3:</b> Substitute values: $H_1 + H_2 = \\frac{50^2}{2(10)} = \\frac{2500}{20} = 125\\text{ m}$.<br><b>Step 4:</b> We are given the difference: $H_1 - H_2 = 30\\text{ m}$.<br><b>Step 5:</b> Add the two equations: $2H_1 = 155 \\implies H_1 = 77.5\\text{ m}$ (Maximum Height).<br><b>Step 6:</b> Subtract to find the other: $H_2 = 125 - 77.5 = 47.5\\text{ m}$ (Minimum Height)."
            },
            {
                "id": "MIP-TEST-030",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Maximum Range", "Kinematics"],
                "q": "A missile is fired for maximum range with an initial velocity of $20\\text{ m s}^{-1}$, the range of the missile is ($g=10\\text{ m/s}^{2}$)",
                "options": ["50m", "60 m", "20m", "40 m"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The horizontal range of a projectile is given by $R = \\frac{u^2\\sin 2\\theta}{g}$.<br><b>Step 2:</b> For the range to be maximum, $\\sin 2\\theta$ must be 1, which means $\\theta = 45^{\\circ}$.<br><b>Step 3:</b> The formula for maximum range simplifies to $R_{max} = \\frac{u^2}{g}$.<br><b>Step 4:</b> Substitute the given values: $u = 20\\text{ m/s}$ and $g = 10\\text{ m/s}^2$.<br><b>Step 5:</b> $R_{max} = \\frac{(20)^2}{10} = \\frac{400}{10} = 40\\text{ m}$."
            },
            {
                "id": "MIP-TEST-031",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Velocity Components", "3D Vectors"],
                "q": "If $\\vec{u}=a\\hat{i}+b\\hat{j}+c\\hat{k}$ with $\\hat{i}, \\hat{j}, \\hat{k}$ are in east, north and vertical directions, horizontal component of velocity of projectile is",
                "options": ["a", "b", "$\\sqrt{a^{2}+b^{2}}$", "$\\sqrt{b^{2}+c^{2}}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The horizontal plane is formed by the East ($\\hat{i}$) and North ($\\hat{j}$) directions.<br><b>Step 2:</b> Therefore, the horizontal velocity vector is $\\vec{u}_h = a\\hat{i} + b\\hat{j}$.<br><b>Step 3:</b> The magnitude of this horizontal component is $\\sqrt{a^2 + b^2}$."
            },
            {
                "id": "MIP-TEST-032",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Time of Flight", "Maximum Height"],
                "q": "If the time of flight of a projectile is doubled, what happens to the maximum height attained?",
                "options": ["halved", "remains unchanged", "doubled", "become four times"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The time of flight is given by $T = \\frac{2u\\sin\\theta}{g}$, which means $u\\sin\\theta = \\frac{gT}{2}$.<br><b>Step 2:</b> The maximum height is $H = \\frac{u^2\\sin^2\\theta}{2g}$.<br><b>Step 3:</b> Substitute $u\\sin\\theta$: $H = \\frac{(gT/2)^2}{2g} = \\frac{g^2T^2/4}{2g} = \\frac{gT^2}{8}$.<br><b>Step 4:</b> This shows that $H \\propto T^2$. If $T$ is doubled, $H$ increases by a factor of $2^2 = 4$. Thus, it becomes four times."
            },
            {
                "id": "MIP-TEST-033",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Velocity Components", "Maximum Height"],
                "q": "If $\\vec{u}=a\\hat{i}+b\\hat{j}+c\\hat{k}$ with $\\hat{i}, \\hat{j}, \\hat{k}$ are in east, north and vertical directions, the maximum height of the projectile is",
                "options": ["$\\frac{a^{2}}{2g}$", "$\\frac{b^{2}}{2g}$", "$\\frac{c^{2}}{2g}$", "$\\frac{b^{2}c^{2}}{2g}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The maximum height attained by a projectile depends exclusively on its vertical component of initial velocity.<br><b>Step 2:</b> From the given vector, the vertical direction corresponds to $\\hat{k}$, so the vertical velocity component is $u_y = c$.<br><b>Step 3:</b> The formula for maximum height using the vertical component is $H = \\frac{u_y^2}{2g}$.<br><b>Step 4:</b> Substituting $u_y = c$, we get $H = \\frac{c^2}{2g}$."
            },
            {
                "id": "MIP-TEST-034",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Horizontal Projectile", "Proportionality"],
                "q": "A body projected horizontally with a velocity 'v' from a height 'h' has a range 'R'. With what velocity a body is to be projected horizontally from a height $h/2$ to have the same range?",
                "options": ["$\\sqrt{2}v$", "$2v$", "$6v$", "$8v$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The horizontal range for a body projected horizontally is $R = v \\sqrt{\\frac{2h}{g}}$.<br><b>Step 2:</b> Let the new velocity be $v'$ for a height of $h/2$. The new range is $R' = v' \\sqrt{\\frac{2(h/2)}{g}} = v' \\sqrt{\\frac{h}{g}}$.<br><b>Step 3:</b> We are given that the ranges are the same: $R = R'$.<br><b>Step 4:</b> Equate them: $v \\sqrt{\\frac{2h}{g}} = v' \\sqrt{\\frac{h}{g}}$.<br><b>Step 5:</b> Cancel $\\sqrt{\\frac{h}{g}}$ from both sides: $v\\sqrt{2} = v' \\implies v' = \\sqrt{2}v$."
            },
            {
                "id": "MIP-TEST-035",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Horizontal Projectile", "Final Velocity"],
                "q": "A stone is thrown horizontally with velocity $g\\text{ ms}^{-1}$ from the top of a tower of height $g$ metre. The velocity with which it hits the ground is (in $\\text{ms}^{-1}$)",
                "options": ["$g$", "$2g$", "$\\sqrt{3}g$", "$4g$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The horizontal velocity remains constant throughout the flight: $v_x = u = g$.<br><b>Step 2:</b> The vertical velocity upon hitting the ground after falling a height $h$ from rest vertically is $v_y = \\sqrt{2gh}$.<br><b>Step 3:</b> Substitute $h = g$: $v_y = \\sqrt{2g(g)} = \\sqrt{2g^2} = \\sqrt{2}g$.<br><b>Step 4:</b> The total magnitude of velocity upon hitting the ground is $v = \\sqrt{v_x^2 + v_y^2}$.<br><b>Step 5:</b> $v = \\sqrt{g^2 + (\\sqrt{2}g)^2} = \\sqrt{g^2 + 2g^2} = \\sqrt{3g^2} = \\sqrt{3}g$."
            },
            {
                "id": "MIP-TEST-036",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Horizontal Projectile", "Angle of Impact"],
                "q": "A body is thrown horizontally from the top of a tower. It reaches the ground after 4s at an angle $45^{\\circ}$ to the ground. The velocity of projection is",
                "options": ["$9.8\\text{ ms}^{-1}$", "$19.6\\text{ ms}^{-1}$", "$29.4\\text{ ms}^{-1}$", "$39.2\\text{ ms}^{-1}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Let the horizontal velocity of projection be $u$. This horizontal component $v_x = u$ remains constant.<br><b>Step 2:</b> Calculate the vertical velocity after 4s: $v_y = gt = 9.8 \\times 4 = 39.2\\text{ m/s}$.<br><b>Step 3:</b> The angle $\\theta$ the velocity vector makes with the ground is given by $\\tan\\theta = \\frac{v_y}{v_x}$.<br><b>Step 4:</b> Substitute the values: $\\tan 45^{\\circ} = \\frac{39.2}{u} \\implies 1 = \\frac{39.2}{u}$.<br><b>Step 5:</b> Solving for $u$ gives $u = 39.2\\text{ ms}^{-1}$."
            },
            {
                "id": "MIP-TEST-037",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Horizontal Projectile", "Kinematics"],
                "q": "Two cliff of heights 120 m and 100.4 m are separated by a horizontal distance of 16 m if a car has to reach from the first cliff to the second the horizontal velocity of car should be",
                "options": ["16 m/s", "4 m/s", "2 m/s", "8 m/s"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Determine the vertical distance the car must fall: $h = 120\\text{ m} - 100.4\\text{ m} = 19.6\\text{ m}$.<br><b>Step 2:</b> Calculate the time taken to fall this height freely: $t = \\sqrt{\\frac{2h}{g}}$.<br><b>Step 3:</b> Substitute the values: $t = \\sqrt{\\frac{2(19.6)}{9.8}} = \\sqrt{\\frac{39.2}{9.8}} = \\sqrt{4} = 2\\text{ s}$.<br><b>Step 4:</b> The car must cover the horizontal gap of 16m in exactly 2s.<br><b>Step 5:</b> Horizontal velocity $v = \\frac{R}{t} = \\frac{16\\text{ m}}{2\\text{ s}} = 8\\text{ m/s}$."
            },
            {
                "id": "MIP-TEST-038",
                "topic": "Circular Motion",
                "difficulty": 1,
                "tags": ["Angular Velocity", "Rigid Body Dynamics"],
                "q": "A circular disc is rotating about its own axis at the rate of 200 revolutions per minute. Two particles P,Q of disc are at distances 5cm, 10cm from axis of rotation. The ratio of angular velocities of P and Q is",
                "options": ["1:2", "1:1", "2:1", "4:1"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Angular velocity ($\\omega$) is defined as the rate of change of angular displacement.<br><b>Step 2:</b> For any rigid body rotating about a fixed axis, all particles on the body complete one full revolution in the exact same amount of time.<br><b>Step 3:</b> Therefore, every point on the disc sweeps through the same angle per unit time, meaning they share the same angular velocity.<br><b>Step 4:</b> Since angular velocity is independent of the radial distance from the axis, the ratio of their angular velocities is 1:1."
            },
            {
                "id": "MIP-TEST-039",
                "topic": "Circular Motion",
                "difficulty": 3,
                "tags": ["Angular Kinematics", "Equations of Motion"],
                "q": "A stationary wheel starts rotating about its own axis at uniform angular acceleration $8\\text{ rad/s}^{2}$. The time taken by it to complete 77 rotations is",
                "options": ["5.5 sec", "7 sec", "11 sec", "14 sec"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Calculate the total angular displacement $\\theta$ required. Since 1 rotation is $2\\pi$ radians, $\\theta = 77 \\times 2\\pi = 154\\pi$ radians.<br><b>Step 2:</b> Use the approximation $\\pi \\approx \\frac{22}{7}$ to simplify: $\\theta \\approx 154 \\times \\frac{22}{7} = 22 \\times 22 = 484$ rad.<br><b>Step 3:</b> Use the angular kinematic equation $\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2$. Since it starts from rest, $\\omega_0 = 0$.<br><b>Step 4:</b> Substitute the values: $484 = 0 + \\frac{1}{2}(8)t^2 \\implies 484 = 4t^2$.<br><b>Step 5:</b> Solve for $t$: $t^2 = \\frac{484}{4} = 121 \\implies t = 11\\text{ sec}$."
            },
            {
                "id": "MIP-TEST-040",
                "topic": "Circular Motion",
                "difficulty": 1,
                "tags": ["Angular Velocity", "Frequency"],
                "q": "A circular disc is rotating about its own axis at uniform rate completes 30 rotations in one minute. The angular velocity of disc in $\\text{rad s}^{-1}$ is",
                "options": ["$2\\pi$", "$\\pi$", "$\\frac{\\pi}{2}$", "$\\frac{\\pi}{4}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Calculate the frequency ($n$) of rotation in revolutions per second (Hz).<br><b>Step 2:</b> $n = \\frac{30 \\text{ rotations}}{60 \\text{ seconds}} = 0.5 \\text{ rev/s}$.<br><b>Step 3:</b> The formula linking angular velocity and frequency is $\\omega = 2\\pi n$.<br><b>Step 4:</b> Substitute the frequency: $\\omega = 2\\pi(0.5) = \\pi \\text{ rad s}^{-1}$."
            },
            {
                "id": "MIP-TEST-041",
                "topic": "Circular Motion",
                "difficulty": 1,
                "tags": ["Centripetal Acceleration", "Kinematics"],
                "q": "A particle is moving at uniform speed $2\\text{ ms}^{-1}$ along a circle of radius 0.5m. The centripetal acceleration of particle is",
                "options": ["$1\\text{ ms}^{-2}$", "$2\\text{ ms}^{-2}$", "$4\\text{ ms}^{-2}$", "$8\\text{ ms}^{-2}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The formula for centripetal acceleration is $a_c = \\frac{v^2}{r}$.<br><b>Step 2:</b> Substitute the given values: velocity $v = 2\\text{ m/s}$ and radius $r = 0.5\\text{ m}$.<br><b>Step 3:</b> $a_c = \\frac{2^2}{0.5} = \\frac{4}{0.5}$.<br><b>Step 4:</b> Calculate the result: $a_c = 8\\text{ ms}^{-2}$."
            },
            {
                "id": "MIP-TEST-042",
                "topic": "Circular Motion",
                "difficulty": 3,
                "tags": ["Angular Velocity", "Relative Motion"],
                "q": "A particle p is moving in a circle of radius 'a' with a uniform speed v. C is the centre of the circle and AB is a diameter. when passing through B the angular velocity of P about A and C are in the ratio",
                "options": ["1:1", "1:2", "2:1", "1:3"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Angular velocity about a reference point is defined as $\\omega = \\frac{v_{\\perp}}{r}$, where $v_{\\perp}$ is the component of velocity perpendicular to the line joining the particle and the reference point.<br><b>Step 2:</b> When the particle P passes through point B, its velocity $v$ is tangential to the circle, meaning it is strictly perpendicular to the diameter AB.<br><b>Step 3:</b> Calculate angular velocity about the center C: The distance $CB = a$, so $\\omega_C = \\frac{v}{a}$.<br><b>Step 4:</b> Calculate angular velocity about point A: The distance $AB = 2a$ (diameter), so $\\omega_A = \\frac{v}{2a}$.<br><b>Step 5:</b> Find the ratio: $\\omega_A : \\omega_C = \\left(\\frac{v}{2a}\\right) : \\left(\\frac{v}{a}\\right) = 1:2$."
            },
            {
                "id": "MIP-TEST-043",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Vector Addition", "Parallelogram Law"],
                "q": "Two forces each of 20N act on a body at $120^{\\circ}$. The magnitude and direction of resultant is",
                "options": ["$20\\text{N}; \\phi=60^{\\circ}$", "$20\\sqrt{2}\\text{N}; \\phi=60^{\\circ}$", "$10\\sqrt{2}\\text{N}; \\phi=0^{\\circ}$", "$10\\sqrt{2}\\text{N}; \\phi=120^{\\circ}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> When two equal forces $F$ act at an angle $\\theta$, their resultant is given by $R = 2F\\cos(\\frac{\\theta}{2})$.<br><b>Step 2:</b> Substitute the values: $R = 2(20)\\cos(\\frac{120^{\\circ}}{2}) = 40\\cos 60^{\\circ}$.<br><b>Step 3:</b> Since $\\cos 60^{\\circ} = 0.5$, $R = 40(0.5) = 20\\text{N}$.<br><b>Step 4:</b> Because the two forces have equal magnitudes, their resultant vector perfectly bisects the angle between them.<br><b>Step 5:</b> Therefore, the direction of the resultant relative to either force is $\\phi = \\frac{120^{\\circ}}{2} = 60^{\\circ}$."
            },
            {
                "id": "MIP-TEST-044",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Vector Addition", "Ratio of Forces"],
                "q": "Two forces whose magnitudes are in the ratio 3:5 give a resultant of 35N. If the angle between them is $60^{\\circ}$, the magnitude of each force is",
                "options": ["3N, 5N", "9N, 25N", "15N, 25N", "21N, 35N"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Let the magnitudes of the two forces be $3x$ and $5x$.<br><b>Step 2:</b> Use the formula for the magnitude of the resultant: $R^2 = A^2 + B^2 + 2AB\\cos\\theta$.<br><b>Step 3:</b> Substitute the knowns: $35^2 = (3x)^2 + (5x)^2 + 2(3x)(5x)\\cos 60^{\\circ}$.<br><b>Step 4:</b> $1225 = 9x^2 + 25x^2 + 30x^2(0.5) = 34x^2 + 15x^2 = 49x^2$.<br><b>Step 5:</b> Solve for $x$: $x^2 = \\frac{1225}{49} = 25 \\implies x = 5$.<br><b>Step 6:</b> The magnitudes of the forces are $3(5) = 15\\text{N}$ and $5(5) = 25\\text{N}$."
            },
            {
                "id": "MIP-TEST-045",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 3,
                "tags": ["Vector Addition", "Angle Calculation"],
                "q": "The resultant of two forces 2P and $\\sqrt{2}P$ is $\\sqrt{10}P$. The angle between the forces is",
                "options": ["$30^{\\circ}$", "$60^{\\circ}$", "$45^{\\circ}$", "$90^{\\circ}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Use the resultant formula: $R^2 = F_1^2 + F_2^2 + 2F_1 F_2 \\cos\\theta$.<br><b>Step 2:</b> Substitute the given values: $(\\sqrt{10}P)^2 = (2P)^2 + (\\sqrt{2}P)^2 + 2(2P)(\\sqrt{2}P)\\cos\\theta$.<br><b>Step 3:</b> Expand the terms: $10P^2 = 4P^2 + 2P^2 + 4\\sqrt{2}P^2\\cos\\theta$.<br><b>Step 4:</b> Simplify the equation: $10P^2 = 6P^2 + 4\\sqrt{2}P^2\\cos\\theta \\implies 4P^2 = 4\\sqrt{2}P^2\\cos\\theta$.<br><b>Step 5:</b> Cancel $4P^2$ from both sides: $1 = \\sqrt{2}\\cos\\theta \\implies \\cos\\theta = \\frac{1}{\\sqrt{2}}$.<br><b>Step 6:</b> Therefore, the angle $\\theta$ is $45^{\\circ}$."
            },
            {
                "id": "MIP-TEST-046",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 1,
                "tags": ["Triangle Law", "Vector Addition"],
                "q": "Which one of the following cannot be represented by the three sides of a triangle?",
                "options": ["5, 9, 11", "5, 7, 13", "7, 10, 13", "3, 8, 9"],
                "correct": 1,
                "sol": "<b>Step 1:</b> According to the triangle inequality theorem, for any three lengths to form a triangle, the sum of the lengths of any two sides must be strictly greater than the length of the third side.<br><b>Step 2:</b> Test option 1: $5 + 9 = 14 > 11$ (Valid).<br><b>Step 3:</b> Test option 2: $5 + 7 = 12$. Since $12 < 13$, these sides cannot close to form a triangle.<br><b>Step 4:</b> Thus, 5, 7, 13 cannot represent the three sides of a triangle."
            },
            {
                "id": "MIP-TEST-047",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 3,
                "tags": ["Triangle Law", "Vector Geometry"],
                "imgUrl": "https://blogger.googleusercontent.com/img/a/AVvXsEjMkxXRl3aUrSBFDurXUbChTjRkd93rm67MYfyupCLKwtXSNed8_lNXsUMXTZI6pnpcsuiM3sZm6eZvNIoHcxznKWFmf5Q89g8-FjTIm38uI5TBLD35m_ThXAdz5pFO_kFTBZko2R0JY22umYbpuse8X63damp_VXu5pWeEvoFfLQKw-Mj5RaL0alTvoqjC",
                "q": "Figure shows three vectors $\\vec{a}$, $\\vec{b}$ and $\\vec{c}$ where R is the mid point of PQ. then which of the following relations is correct.",
                "options": ["$\\vec{a}+\\vec{b}=2\\vec{c}$", "$\\vec{a}+\\vec{b}=\\vec{c}$", "$\\vec{a}-\\vec{b}=2\\vec{c}$", "$\\vec{a}-\\vec{b}=\\vec{c}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Analyze the vector triangle $\\Delta POR$. By the triangle law of vector addition, $\\vec{a} = \\vec{c} + \\vec{PR}$.<br><b>Step 2:</b> Analyze the vector triangle $\\Delta QOR$. Similarly, $\\vec{b} = \\vec{c} + \\vec{QR}$.<br><b>Step 3:</b> Add the two equations together: $\\vec{a} + \\vec{b} = 2\\vec{c} + \\vec{PR} + \\vec{QR}$.<br><b>Step 4:</b> Since R is given as the midpoint of PQ, the vector $\\vec{PR}$ is equal in magnitude but opposite in direction to $\\vec{QR}$. Therefore, $\\vec{PR} = -\\vec{QR}$, which means $\\vec{PR} + \\vec{QR} = 0$.<br><b>Step 5:</b> Substituting this back leaves $\\vec{a} + \\vec{b} = 2\\vec{c}$."
            },
            {
                "id": "MIP-TEST-048",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Polygon Law", "Symmetry"],
                "q": "Eleven forces each equal to 5N act on a particle simultaneously. If each force makes an angle $30^{\\circ}$ with the next one, the resultant of all forces is",
                "options": ["15 N", "55 N", "5 N", "zero"],
                "correct": 2,
                "sol": "<b>Step 1:</b> If 12 equal forces act at equal angles of $30^{\\circ}$ ($360^{\\circ}/12 = 30^{\\circ}$), they form a completely closed regular polygon. By the polygon law, their net resultant is zero.<br><b>Step 2:</b> If one force is removed (leaving exactly 11 forces), the closed loop is broken.<br><b>Step 3:</b> For the sum of all 12 to be zero, the resultant of the 11 forces must exactly balance the missing 12th force.<br><b>Step 4:</b> Therefore, the resultant of the 11 forces is equal in magnitude to the single missing force, which is 5N."
            },
            {
                "id": "MIP-TEST-049",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Equilibrium", "Resolution of Forces"],
                "q": "A body of mass $\\sqrt{3}$ kg is suspended by a string to rigid support. The body is pulled horizontally by a force F until the string makes an angle of $30^{\\circ}$ with the vertical. The value of F and tension in the string are",
                "options": ["9.8 N, 9.8N", "9.8 N, 19.6 N", "19.6 N, 19.6 N", "19.6 N, 9.8 N"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The body is in equilibrium under the action of three forces: Tension $T$, weight $mg$, and horizontal force $F$.<br><b>Step 2:</b> Resolve the tension into components. Balancing vertical forces: $T\\cos 30^{\\circ} = mg$.<br><b>Step 3:</b> Substitute the knowns: $T(\\frac{\\sqrt{3}}{2}) = \\sqrt{3} \\times 9.8 \\implies T = 19.6\\text{ N}$.<br><b>Step 4:</b> Balancing horizontal forces: $F = T\\sin 30^{\\circ}$.<br><b>Step 5:</b> Substitute the tension: $F = 19.6 \\times \\frac{1}{2} = 9.8\\text{ N}$."
            },
            {
                "id": "MIP-TEST-050",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 3,
                "tags": ["Equilibrium", "Lami's Theorem"],
                "q": "Two light strings of length 4cm and 3 cm are tied to a bob of weight 500 gm. The free ends of the strings are tied to pegs in the same horizontal line and separated by 5 cm. The ratio of tension in the longer string to that in the shorter string is",
                "options": ["4:3", "3:4", "4:5", "5:4"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The lengths of the strings (3cm, 4cm) and the distance between the pegs (5cm) form a 3-4-5 right-angled triangle. Thus, the angle between the two strings at the bob is exactly $90^{\\circ}$.<br><b>Step 2:</b> Let the tension in the 4cm string be $T_1$ and in the 3cm string be $T_2$. Let the angle the 4cm string makes with the horizontal be $\\theta_1$ and the 3cm string be $\\theta_2$.<br><b>Step 3:</b> From the geometry of the triangle, $\\sin\\theta_1 = \\frac{4}{5}$ and $\\sin\\theta_2 = \\frac{3}{5}$. Also, $\\cos\\theta_1 = \\frac{3}{5}$ and $\\cos\\theta_2 = \\frac{4}{5}$.<br><b>Step 4:</b> For horizontal equilibrium, the horizontal components of the tensions must be equal: $T_1\\cos\\theta_1 = T_2\\cos\\theta_2$.<br><b>Step 5:</b> Substitute the cosine values: $T_1(\\frac{3}{5}) = T_2(\\frac{4}{5})$.<br><b>Step 6:</b> Rearrange to find the ratio: $\\frac{T_1}{T_2} = \\frac{3}{4}$."
            },
            {
                "id": "MIP-TEST-051",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Newton's Second Law", "3D Vectors"],
                "q": "A force $2\\hat{i}+\\hat{j}-\\hat{k}$ newton acts on a body which is initially at rest. If the velocity of the body at the end of 20 seconds is $4\\hat{i}+2\\hat{j}+2\\hat{k}\\text{ ms}^{-1}$, the mass of the body is",
                "options": ["20kg", "15kg", "10kg", "5kg"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Calculate the acceleration vector using $\\vec{a} = \\frac{\\vec{v} - \\vec{u}}{t}$.<br><b>Step 2:</b> $\\vec{a} = \\frac{(4\\hat{i}+2\\hat{j}+2\\hat{k}) - 0}{20} = 0.2\\hat{i} + 0.1\\hat{j} + 0.1\\hat{k}$.<br><b>Step 3:</b> Find the magnitude of acceleration: $|\\vec{a}| = \\sqrt{0.2^2 + 0.1^2 + 0.1^2} = \\sqrt{0.06} = \\frac{\\sqrt{6}}{10}\\text{ m/s}^{2}$.<br><b>Step 4:</b> Find the magnitude of force: $|\\vec{F}| = \\sqrt{2^2 + 1^2 + (-1)^2} = \\sqrt{4+1+1} = \\sqrt{6}\\text{ N}$.<br><b>Step 5:</b> Use Newton's second law ($F = ma$) to find mass: $m = \\frac{|\\vec{F}|}{|\\vec{a}|} = \\frac{\\sqrt{6}}{\\sqrt{6}/10} = 10\\text{ kg}$."
            },
            {
                "id": "MIP-TEST-052",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Displacement Vector", "Parametric Equations"],
                "q": "The position vector of a moving particle at t seconds is given by $\\vec{r}=3\\hat{i}+4t^{2}\\hat{j}-t^{3}\\hat{k}$. Its displacement during an interval of 1s to 3s is",
                "options": ["$\\hat{j}-\\hat{k}$", "$3\\hat{i}+4\\hat{j}-\\hat{k}$", "$9\\hat{i}+36\\hat{j}-27\\hat{k}$", "$32\\hat{j}-26\\hat{k}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Calculate the position vector at $t=1\\text{ s}$: $\\vec{r}(1) = 3\\hat{i} + 4(1)^2\\hat{j} - (1)^3\\hat{k} = 3\\hat{i} + 4\\hat{j} - \\hat{k}$.<br><b>Step 2:</b> Calculate the position vector at $t=3\\text{ s}$: $\\vec{r}(3) = 3\\hat{i} + 4(3)^2\\hat{j} - (3)^3\\hat{k} = 3\\hat{i} + 36\\hat{j} - 27\\hat{k}$.<br><b>Step 3:</b> The displacement is the difference between the final and initial position vectors: $\\Delta\\vec{r} = \\vec{r}(3) - \\vec{r}(1)$.<br><b>Step 4:</b> $\\Delta\\vec{r} = (3-3)\\hat{i} + (36-4)\\hat{j} + (-27 - (-1))\\hat{k}$.<br><b>Step 5:</b> $\\Delta\\vec{r} = 0\\hat{i} + 32\\hat{j} - 26\\hat{k}$."
            },
            {
                "id": "MIP-TEST-053",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 1,
                "tags": ["Acceleration Vector", "Kinematics"],
                "q": "If initial velocity of a body is $\\vec{u}=2\\hat{i}-2\\hat{j}+3\\hat{k}$ and the final velocity is $\\vec{v}=2\\hat{i}-4\\hat{j}+5\\hat{k}$ it is changed in time of 10 sec. Find the acceleration vector?",
                "options": ["$\\frac{3\\hat{i}-2\\hat{j}+2\\hat{k}}{10}$", "$\\frac{-3\\hat{i}+\\hat{j}+2\\hat{k}}{10}$", "$\\frac{-3\\hat{i}-2\\hat{j}+2\\hat{k}}{10}$", "$\\frac{-\\hat{j}+\\hat{k}}{5}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Use the formula for average acceleration: $\\vec{a} = \\frac{\\vec{v} - \\vec{u}}{t}$.<br><b>Step 2:</b> Substitute the given vectors: $\\vec{a} = \\frac{(2\\hat{i}-4\\hat{j}+5\\hat{k}) - (2\\hat{i}-2\\hat{j}+3\\hat{k})}{10}$.<br><b>Step 3:</b> Subtract corresponding components: $\\vec{a} = \\frac{(2-2)\\hat{i} + (-4 - (-2))\\hat{j} + (5-3)\\hat{k}}{10}$.<br><b>Step 4:</b> $\\vec{a} = \\frac{0\\hat{i} - 2\\hat{j} + 2\\hat{k}}{10}$.<br><b>Step 5:</b> Simplify the fraction: $\\vec{a} = \\frac{-2\\hat{j} + 2\\hat{k}}{10} = \\frac{-\\hat{j} + \\hat{k}}{5}$."
            },
            {
                "id": "MIP-TEST-054",
                "topic": "Relative Velocity in 2D",
                "difficulty": 2,
                "tags": ["Average Acceleration", "Change in Velocity"],
                "q": "A particle is moving eastwards with a velocity $15\\text{ ms}^{-1}$. Suddenly it moves towards north and moves with the same speed in a time 10 sec. The average acceleration during this time is",
                "options": ["$3/\\sqrt{2}\\text{ NE}$", "$3\\sqrt{2}\\text{ NE}$", "$3/\\sqrt{2}\\text{ NW}$", "$3\\sqrt{2}\\text{ NW}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Represent initial velocity as $\\vec{u} = 15\\hat{i}$ (East) and final velocity as $\\vec{v} = 15\\hat{j}$ (North).<br><b>Step 2:</b> The change in velocity is $\\Delta\\vec{v} = \\vec{v} - \\vec{u} = 15\\hat{j} - 15\\hat{i}$.<br><b>Step 3:</b> The vector $-15\\hat{i} + 15\\hat{j}$ points directly North-West.<br><b>Step 4:</b> Find the magnitude of the change in velocity: $|\\Delta\\vec{v}| = \\sqrt{(-15)^2 + 15^2} = \\sqrt{225 + 225} = 15\\sqrt{2}\\text{ m/s}$.<br><b>Step 5:</b> Calculate average acceleration: $a_{avg} = \\frac{|\\Delta\\vec{v}|}{t} = \\frac{15\\sqrt{2}}{10} = 1.5\\sqrt{2}$.<br><b>Step 6:</b> Rewrite $1.5\\sqrt{2}$ as $\\frac{3}{2}\\sqrt{2} = \\frac{3}{\\sqrt{2}}\\text{ m/s}^{2}$."
            },
            {
                "id": "MIP-TEST-055",
                "topic": "Relative Velocity in 2D",
                "difficulty": 3,
                "tags": ["Relative Speed", "Vector Kinematics"],
                "q": "A Person crossing a road with a certain velocity due north, sees a car moving towards east. The relative velocity of the car w.r.t the person is $\\sqrt{2}$ times that of the velocity of the person. The angle made by the relative velocity with the east is",
                "options": ["$30^{\\circ}$", "$45^{\\circ}$", "$60^{\\circ}$", "$90^{\\circ}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Let the velocity of the person be $\\vec{v}_p = v_p\\hat{j}$ (North). Let the true velocity of the car be $\\vec{v}_c = v_c\\hat{i}$ (East).<br><b>Step 2:</b> The relative velocity of the car with respect to the person is $\\vec{v}_{cp} = \\vec{v}_c - \\vec{v}_p = v_c\\hat{i} - v_p\\hat{j}$.<br><b>Step 3:</b> We are given that $|\\vec{v}_{cp}| = \\sqrt{2}v_p$. So, $\\sqrt{v_c^2 + (-v_p)^2} = \\sqrt{2}v_p$.<br><b>Step 4:</b> Square both sides: $v_c^2 + v_p^2 = 2v_p^2 \\implies v_c^2 = v_p^2 \\implies v_c = v_p$.<br><b>Step 5:</b> The relative velocity vector is $\\vec{v}_{cp} = v_p\\hat{i} - v_p\\hat{j}$.<br><b>Step 6:</b> The angle this vector makes with East (the positive x-axis) is $\\tan\\theta = \\frac{|v_y|}{|v_x|} = \\frac{v_p}{v_p} = 1$. Therefore, $\\theta = 45^{\\circ}$."
            },
            {
                "id": "MIP-TEST-056",
                "topic": "Relative Velocity in 2D",
                "difficulty": 3,
                "tags": ["Rain and Man Problem", "Relative Velocity"],
                "q": "A Person is walking in rain feels the velocity of rain as twice to his velocity. At which angle he should hold the umbrella with vertical if he moves forward, if it is raining vertically downwards",
                "options": ["$30^{\\circ}$", "$45^{\\circ}$", "$60^{\\circ}$", "$90^{\\circ}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Let the man's velocity be $\\vec{v}_m = v_m\\hat{i}$ and the true rain velocity be $\\vec{v}_r = -v_r\\hat{j}$.<br><b>Step 2:</b> The relative velocity of rain with respect to the man is $\\vec{v}_{rm} = \\vec{v}_r - \\vec{v}_m = -v_m\\hat{i} - v_r\\hat{j}$.<br><b>Step 3:</b> We are given that the magnitude of this relative velocity is twice the man's speed: $|\\vec{v}_{rm}| = 2v_m$.<br><b>Step 4:</b> $\\sqrt{(-v_m)^2 + (-v_r)^2} = 2v_m \\implies v_m^2 + v_r^2 = 4v_m^2 \\implies v_r^2 = 3v_m^2 \\implies v_r = \\sqrt{3}v_m$.<br><b>Step 5:</b> The angle $\\theta$ with the vertical is $\\tan\\theta = \\frac{v_m}{v_r} = \\frac{v_m}{\\sqrt{3}v_m} = \\frac{1}{\\sqrt{3}}$.<br><b>Step 6:</b> Therefore, the umbrella should be held at $30^{\\circ}$ with the vertical."
            },
            {
        "id": "MIP-TEST-057",
        "topic": "Relative Velocity in 2D",
        "difficulty": 2,
        "tags": ["Rain and Man Problem", "Trigonometry"],
        "q": "When it is raining vertically down, to a man walking on road the velocity of rain appears to be 1.5 times his velocity. To protect himself from rain he should hold the umbrella at an angle $\\theta$ to vertical. Then $\\tan \\theta=$",
        "options": ["$\\frac{2}{\\sqrt{5}}$", "$\\frac{\\sqrt{5}}{2}$", "$\\frac{2}{3}$", "$\\frac{3}{2}$"],
        "correct": 0,
        "sol": "<b>Step 1:</b> Let the man's velocity be $v_m$ horizontally, and rain's true velocity be $v_r$ vertically.<br><b>Step 2:</b> The magnitude of relative velocity is given as $|\\vec{v}_{rm}| = 1.5v_m = \\frac{3}{2}v_m$.<br><b>Step 3:</b> We know $|\\vec{v}_{rm}| = \\sqrt{v_m^2 + v_r^2}$. Square both sides: $v_m^2 + v_r^2 = (1.5v_m)^2 = 2.25v_m^2$.<br><b>Step 4:</b> Solve for $v_r$: $v_r^2 = 2.25v_m^2 - 1v_m^2 = 1.25v_m^2 = \\frac{5}{4}v_m^2 \\implies v_r = \\frac{\\sqrt{5}}{2}v_m$.<br><b>Step 5:</b> The angle $\\theta$ with the vertical satisfies $\\tan \\theta = \\frac{v_m}{v_r}$.<br><b>Step 6:</b> Substitute $v_r$: $\\tan \\theta = \\frac{v_m}{(\\sqrt{5}/2)v_m} = \\frac{2}{\\sqrt{5}}$."
    },
            {
                "id": "MIP-TEST-058",
                "topic": "Relative Velocity in 2D",
                "difficulty": 2,
                "tags": ["Orthogonal Vectors", "Relative Speed"],
                "q": "A motor car A is travelling with a velocity of 20m/s in the north - west direction and another motor car B is travelling with a velocity of 15 m/s in the north-east direction. The magnitude of relative velocity of B with respect to A is.",
                "options": ["25 m/s", "15 m/s", "20 m/s", "35 m/s"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Note the directions: North-West and North-East are exactly perpendicular to each other ($90^{\\circ}$ apart).<br><b>Step 2:</b> Since the velocity vectors are orthogonal, the magnitude of their relative velocity $|\\vec{v}_{BA}| = |\\vec{v}_B - \\vec{v}_A|$ can be found using the Pythagorean theorem.<br><b>Step 3:</b> $|\\vec{v}_{BA}| = \\sqrt{v_A^2 + v_B^2}$.<br><b>Step 4:</b> Substitute the values: $|\\vec{v}_{BA}| = \\sqrt{20^2 + 15^2} = \\sqrt{400 + 225}$.<br><b>Step 5:</b> $|\\vec{v}_{BA}| = \\sqrt{625} = 25\\text{ m/s}$."
            },
            {
                "id": "MIP-TEST-059",
                "topic": "Relative Velocity in 2D",
                "difficulty": 2,
                "tags": ["River Boat Problem", "Time of Crossing"],
                "q": "A man can swim in still water at a speed of 6 kmph and he has to cross the river and reach just opposite point on the other bank. If the river is flowing at a speed of 3 kmph, and the width of the river is 2km, the time taken to cross the river is (in hours)",
                "options": ["$\\frac{2}{27}$", "$\\frac{2}{\\sqrt{27}}$", "$\\frac{2}{3}$", "$\\frac{2}{\\sqrt{45}}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> To reach the \"just opposite\" point, the swimmer must swim upstream at an angle such that his horizontal component perfectly cancels the river's flow.<br><b>Step 2:</b> The effective velocity crossing the river is $v_{cross} = \\sqrt{v_m^2 - v_r^2}$.<br><b>Step 3:</b> Substitute the values: $v_{cross} = \\sqrt{6^2 - 3^2} = \\sqrt{36 - 9} = \\sqrt{27}\\text{ kmph}$.<br><b>Step 4:</b> The time taken to cross is $t = \\frac{\\text{Width}}{v_{cross}}$.<br><b>Step 5:</b> $t = \\frac{2}{\\sqrt{27}}$ hours."
            },
            {
                "id": "MIP-TEST-060",
                "topic": "Relative Velocity in 2D",
                "difficulty": 2,
                "tags": ["River Boat Problem", "Drift"],
                "q": "A boat moves perpendicular to the bank with a velocity of $7.2\\text{ km/h}$. The current carries it 150m downstream, find the velocity of the current (The width of the river is 0.5 km).",
                "options": ["$0.4\\text{ ms}^{-1}$", "$1.2\\text{ ms}^{-1}$", "$0.5\\text{ ms}^{-1}$", "$0.6\\text{ ms}^{-1}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Convert the boat's velocity to m/s: $v_b = 7.2 \\times \\frac{5}{18} = 2\\text{ m/s}$.<br><b>Step 2:</b> Convert the river's width to meters: $d = 0.5\\text{ km} = 500\\text{ m}$.<br><b>Step 3:</b> Since the boat is aimed perpendicular to the bank, the time taken to cross is purely determined by the boat's velocity: $t = \\frac{d}{v_b} = \\frac{500}{2} = 250\\text{ s}$.<br><b>Step 4:</b> During this time, the river current pushes the boat downstream causing a drift $x = 150\\text{ m}$.<br><b>Step 5:</b> The drift is caused entirely by the river's velocity: $x = v_r \\times t$.<br><b>Step 6:</b> Substitute and solve for $v_r$: $150 = v_r \\times 250 \\implies v_r = \\frac{150}{250} = 0.6\\text{ m/s}$."
            },
            {
                "id": "MIP-TEST-061",
                "topic": "Relative Velocity in 2D",
                "difficulty": 2,
                "tags": ["River Boat Problem", "Drift"],
                "q": "A swimmer is capable of swimming $1.65\\text{ ms}^{-1}$ in still water. If she swims directly across a 180m wide river whose current is $0.85\\text{ ms}^{-1}$, how far downstream (from a point opposite her starting point) will she reach?",
                "options": ["92.7 m", "40 m", "48 m", "20 m"],
                "correct": 0,
                "sol": "<b>Step 1:</b> \"Directly across\" means the swimmer aims perpendicular to the river flow. Her entire swimming speed contributes to crossing the river.<br><b>Step 2:</b> Calculate the time taken to cross the river: $t = \\frac{d}{v_b} = \\frac{180}{1.65} \\approx 109.09\\text{ s}$.<br><b>Step 3:</b> During this time, the river current pulls her downstream. This horizontal distance is the drift.<br><b>Step 4:</b> Calculate drift: $x = v_r \\times t = 0.85 \\times 109.09 = 92.72\\text{ m}$.<br><b>Step 5:</b> The closest option is 92.7 m."
            },
            {
                "id": "MIP-TEST-062",
                "topic": "Relative Velocity in 2D",
                "difficulty": 3,
                "tags": ["River Boat Problem", "Relative Speed"],
                "q": "A person swims at $135^{\\circ}$ to current of river, to meet target on reaching opposite point. The ratio of person's velocity to river water velocity is",
                "options": ["$\\sqrt{3}:1$", "$\\sqrt{2}:1$", "$1:\\sqrt{2}$", "$1:\\sqrt{3}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Let the river flow along the positive x-axis. A heading of $135^{\\circ}$ means the person swims at an angle of $135^{\\circ} - 90^{\\circ} = 45^{\\circ}$ upstream relative to the normal (perpendicular) crossing line.<br><b>Step 2:</b> To reach the exactly opposite point, the downstream velocity of the river must perfectly cancel the upstream component of the swimmer's velocity.<br><b>Step 3:</b> Set up the equation: $v_m \\sin(45^{\\circ}) = v_r$.<br><b>Step 4:</b> Substitute $\\sin 45^{\\circ} = \\frac{1}{\\sqrt{2}}$: $v_m \\left(\\frac{1}{\\sqrt{2}}\\right) = v_r$.<br><b>Step 5:</b> Rearrange to find the ratio $v_m : v_r = \\sqrt{2} : 1$."
            },
            {
                "id": "MIP-TEST-063",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Equation of Trajectory", "Angle of Projection"],
                "q": "The parabolic path of a projectile is represented by $y=\\frac{x}{\\sqrt{3}}-\\frac{x^{2}}{60}$ in MKS units. Its angle of projection is $(g=10\\text{ ms}^{-2})$",
                "options": ["$30^{\\circ}$", "$45^{\\circ}$", "$60^{\\circ}$", "$90^{\\circ}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The standard equation of trajectory for a projectile is $y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}$.<br><b>Step 2:</b> Compare the given equation $y = \\frac{x}{\\sqrt{3}} - \\frac{x^2}{60}$ with the standard form.<br><b>Step 3:</b> By equating the coefficients of the linear $x$ term, we get $\\tan\\theta = \\frac{1}{\\sqrt{3}}$.<br><b>Step 4:</b> The angle whose tangent is $\\frac{1}{\\sqrt{3}}$ is $30^{\\circ}$."
            },
            {
                "id": "MIP-TEST-064",
                "topic": "Projectile Motion",
                "difficulty": 1,
                "tags": ["Time of Flight", "Kinematics"],
                "q": "A body is projected at angle $30^{\\circ}$ to horizontal with a velocity $50\\text{ ms}^{-1}$. Its time of flight is",
                "options": ["4 s", "5 s", "6 s", "7 s"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The formula for the total time of flight of a projectile is $T = \\frac{2u\\sin\\theta}{g}$.<br><b>Step 2:</b> Substitute the given values: $u = 50\\text{ m/s}$, $\\theta = 30^{\\circ}$, and $g = 10\\text{ m/s}^2$ (standard approximation if not given).<br><b>Step 3:</b> $T = \\frac{2(50)\\sin 30^{\\circ}}{10}$.<br><b>Step 4:</b> Since $\\sin 30^{\\circ} = 0.5$, we have $T = \\frac{100(0.5)}{10} = \\frac{50}{10} = 5\\text{ s}$."
            },
            {
                "id": "MIP-TEST-065",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Velocity Vector", "Kinematics"],
                "q": "A body is projected with velocity $60\\text{ m/s}$ at $30^{\\circ}$ to the horizontal. The velocity of the body after 3 seconds is $(g=10\\text{ ms}^{-2})$",
                "options": ["$20\\hat{i}+20\\sqrt{3}\\hat{j}$", "$30\\hat{i}$", "$10\\sqrt{3}\\hat{j}$", "$30\\sqrt{3}\\hat{i}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Calculate the initial horizontal and vertical components of velocity.<br><b>Step 2:</b> $u_x = 60\\cos 30^{\\circ} = 60\\left(\\frac{\\sqrt{3}}{2}\\right) = 30\\sqrt{3}\\text{ m/s}$.<br><b>Step 3:</b> $u_y = 60\\sin 30^{\\circ} = 60(0.5) = 30\\text{ m/s}$.<br><b>Step 4:</b> The horizontal velocity remains constant, so $v_x = 30\\sqrt{3}\\text{ m/s}$.<br><b>Step 5:</b> Calculate the vertical velocity after 3 seconds using $v_y = u_y - gt$: $v_y = 30 - 10(3) = 30 - 30 = 0\\text{ m/s}$.<br><b>Step 6:</b> The velocity vector is strictly horizontal: $\\vec{v} = 30\\sqrt{3}\\hat{i}$."
            },
            {
                "id": "MIP-TEST-066",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Maximum Height", "Range"],
                "q": "A body is projected with velocity u such that its horizontal range and maximum vertical heights are same. The maximum height is",
                "options": ["$\\frac{u^{2}}{2g}$", "$\\frac{3u^{2}}{4g}$", "$\\frac{16u^{2}}{17g}$", "$\\frac{8u^{2}}{17g}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> We are given that Range $R$ = Maximum Height $H$.<br><b>Step 2:</b> Substitute the formulas: $\\frac{u^2\\sin 2\\theta}{g} = \\frac{u^2\\sin^2\\theta}{2g}$.<br><b>Step 3:</b> Expand $\\sin 2\\theta$ and simplify: $\\frac{u^2(2\\sin\\theta\\cos\\theta)}{g} = \\frac{u^2\\sin^2\\theta}{2g} \\implies 2\\cos\\theta = \\frac{\\sin\\theta}{2}$.<br><b>Step 4:</b> Solve for $\\theta$: $\\tan\\theta = 4$.<br><b>Step 5:</b> Construct a right triangle with opposite = 4, adjacent = 1. Hypotenuse = $\\sqrt{4^2+1^2} = \\sqrt{17}$. Thus, $\\sin\\theta = \\frac{4}{\\sqrt{17}}$.<br><b>Step 6:</b> Substitute $\\sin\\theta$ back into the height formula: $H = \\frac{u^2\\sin^2\\theta}{2g} = \\frac{u^2(16/17)}{2g} = \\frac{8u^2}{17g}$."
            },
            {
                "id": "MIP-TEST-067",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Kinetic Energy", "Velocity at Maximum Height"],
                "q": "A cricket ball is hit for a six leaving the bat at an angle of $60^{\\circ}$ to the horizontal with kinetic energy 'k'. At the top, K.E. of the ball is",
                "options": ["Zero", "k", "$\\frac{k}{4}$", "$\\frac{k}{\\sqrt{2}}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Initial kinetic energy is $k = \\frac{1}{2}mu^2$.<br><b>Step 2:</b> At the highest point (the top), the vertical component of velocity is zero. The ball only has its horizontal component of velocity, which is constant: $v_{top} = u\\cos\\theta$.<br><b>Step 3:</b> The kinetic energy at the top is $KE_{top} = \\frac{1}{2}m(v_{top})^2 = \\frac{1}{2}m(u\\cos 60^{\\circ})^2$.<br><b>Step 4:</b> Substitute $\\cos 60^{\\circ} = 0.5$: $KE_{top} = \\frac{1}{2}mu^2 (0.5)^2 = k(0.25) = \\frac{k}{4}$."
            },
            {
                "id": "MIP-TEST-068",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Maximum Range", "Kinematics"],
                "q": "A bomb at rest is exploded and the pieces are scattered in all directions with a maximum velocity of $20\\text{ ms}^{-1}$. Dangerous distance from that spot is $(g=10\\text{ m/s}^{2})$",
                "options": ["10 m", "20 m", "30 m", "40 m"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The dangerous distance is the maximum possible horizontal range a piece of the bomb can reach.<br><b>Step 2:</b> Maximum range occurs when the angle of projection is $45^{\\circ}$.<br><b>Step 3:</b> The formula for maximum range is $R_{max} = \\frac{v^2}{g}$.<br><b>Step 4:</b> Substitute the maximum velocity $v = 20\\text{ m/s}$ and $g = 10\\text{ m/s}^2$.<br><b>Step 5:</b> $R_{max} = \\frac{20^2}{10} = \\frac{400}{10} = 40\\text{ m}$."
            },
            {
                "id": "MIP-TEST-069",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Maximum Range", "Maximum Height"],
                "q": "A boy can throw a stone up to a maximum height of 10 m. The maximum horizontal distance that the boy can throw the same stone up to will be",
                "options": ["$20\\sqrt{2}\\text{ m}$", "10 m", "$10\\sqrt{2}\\text{ m}$", "20 m"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The maximum height a person can throw an object is achieved when thrown straight up ($\\theta = 90^{\\circ}$). The formula is $H_{max} = \\frac{u^2}{2g}$.<br><b>Step 2:</b> We are given $H_{max} = 10\\text{ m}$, so $\\frac{u^2}{2g} = 10 \\implies \\frac{u^2}{g} = 20$.<br><b>Step 3:</b> The maximum horizontal distance (range) is achieved when thrown at $\\theta = 45^{\\circ}$. The formula is $R_{max} = \\frac{u^2}{g}$.<br><b>Step 4:</b> From Step 2, we already found that $\\frac{u^2}{g} = 20$.<br><b>Step 5:</b> Therefore, the maximum horizontal distance is $20\\text{ m}$."
            },
            {
                "id": "MIP-TEST-070",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Maximum Range", "Horizontal Component"],
                "q": "A grass hopper can jump a maximum horizontal distance of 0.3 m. If it spends negligible time on the ground, its horizontal component of velocity is $(g=10\\text{ m/s}^{2})$",
                "options": ["$3/2\\text{ m/s}$", "$\\sqrt{\\frac{3}{2}}\\text{ m/s}$", "$1/2\\text{ m/s}$", "$\\sqrt{\\frac{2}{3}}\\text{ m/s}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Maximum horizontal distance (range) is achieved at $\\theta = 45^{\\circ}$. Formula: $R_{max} = \\frac{u^2}{g}$.<br><b>Step 2:</b> Substitute the given range: $0.3 = \\frac{u^2}{10} \\implies u^2 = 3 \\implies u = \\sqrt{3}\\text{ m/s}$.<br><b>Step 3:</b> The horizontal component of velocity is $u_x = u\\cos\\theta$.<br><b>Step 4:</b> Substitute $u$ and $\\theta = 45^{\\circ}$: $u_x = \\sqrt{3} \\cos 45^{\\circ} = \\sqrt{3} \\times \\frac{1}{\\sqrt{2}} = \\sqrt{\\frac{3}{2}}\\text{ m/s}$."
            },
            {
        "id": "MIP-TEST-071",
        "topic": "Projectile Motion",
        "difficulty": 3,
        "tags": ["Velocity Components", "Kinematics"],
        "q": "A stone is thrown with a velocity v at an angle $\\theta$ with the horizontal. Its speed when it makes an angle $\\alpha$ with the horizontal is",
        "options": ["$v\\cos \\theta$", "$\\frac{v}{\\cos \\alpha}$", "$v\\cos \\theta \\cos \\alpha$", "$\\frac{v\\cos \\theta}{\\cos \\alpha}$"],
        "correct": 3,
        "sol": "<b>Step 1:</b> In projectile motion, ignoring air resistance, the horizontal component of velocity remains constant throughout the flight.<br><b>Step 2:</b> Initial horizontal velocity is $u_x = v\\cos \\theta$.<br><b>Step 3:</b> Let the speed be $v'$ when the velocity vector makes an angle $\\alpha$ with the horizontal. The new horizontal component is $v'_x = v'\\cos \\alpha$.<br><b>Step 4:</b> Equate the horizontal components: $v\\cos \\theta = v'\\cos \\alpha$.<br><b>Step 5:</b> Solve for the new speed $v'$: $v' = \\frac{v\\cos \\theta}{\\cos \\alpha}$."
    },
            {
                "id": "MIP-TEST-072",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Complementary Angles", "Maximum Range"],
                "q": "A body is projected with a certain speed at angles of projection of $\\theta$ and $90^{\\circ}-\\theta$. The maximum heights attained in the two cases are 20 m and 10 m respectively. The maximum possible range is",
                "options": ["60 m", "30 m", "20 m", "80 m"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The maximum heights for complementary angles are $H_1 = \\frac{u^2\\sin^2\\theta}{2g} = 20$ and $H_2 = \\frac{u^2\\cos^2\\theta}{2g} = 10$.<br><b>Step 2:</b> Add the two height equations together: $H_1 + H_2 = \\frac{u^2}{2g}(\\sin^2\\theta + \\cos^2\\theta) = \\frac{u^2}{2g}$.<br><b>Step 3:</b> Substitute the values: $20 + 10 = \\frac{u^2}{2g} \\implies 30 = \\frac{u^2}{2g} \\implies \\frac{u^2}{g} = 60$.<br><b>Step 4:</b> The formula for maximum possible range (when thrown at $45^{\\circ}$) is exactly $R_{max} = \\frac{u^2}{g}$.<br><b>Step 5:</b> Therefore, $R_{max} = 60\\text{ m}$."
            },
            {
        "id": "MIP-TEST-073",
        "topic": "Projectile Motion",
        "difficulty": 2,
        "tags": ["Velocity at Maximum Height", "Kinematics"],
        "q": "The launching speed of a certain projectile is five times the speed it has at its maximum height. Its angle of projection is",
        "options": ["$\\theta=\\cos^{-1}(0.2)$", "$\\theta=\\sin^{-1}(0.2)$", "$\\theta=\\tan^{-1}(0.2)$", "$\\theta=0^{\\circ}$"],
        "correct": 0,
        "sol": "<b>Step 1:</b> Let the launching speed be $u$ and the angle of projection be $\\theta$.<br><b>Step 2:</b> At the maximum height, the vertical velocity is zero. The projectile only has a horizontal velocity, which remains constant: $v_{top} = u\\cos \\theta$.<br><b>Step 3:</b> The problem states that the launching speed is 5 times the speed at maximum height: $u = 5(v_{top})$.<br><b>Step 4:</b> Substitute $v_{top}$: $u = 5(u\\cos \\theta)$.<br><b>Step 5:</b> Cancel $u$ from both sides: $1 = 5\\cos \\theta \\implies \\cos \\theta = \\frac{1}{5} = 0.2$.<br><b>Step 6:</b> Therefore, $\\theta = \\cos^{-1}(0.2)$."
    },
            {
                "id": "MIP-TEST-074",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Range", "Kinematics"],
                "q": "A person throws a bottle into a dustbin at the same height as he is 2m away at an angle of $45^{\\circ}$ The velocity of thrown is",
                "options": ["g", "$\\sqrt{g}$", "2g", "$\\sqrt{2g}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The dustbin is at the same height, so the distance of 2m represents the horizontal range $R$.<br><b>Step 2:</b> The angle of projection is $\\theta = 45^{\\circ}$. The range formula is $R = \\frac{u^2\\sin 2\\theta}{g}$.<br><b>Step 3:</b> Substitute the values: $2 = \\frac{u^2\\sin 90^{\\circ}}{g}$.<br><b>Step 4:</b> Since $\\sin 90^{\\circ} = 1$, we get $2 = \\frac{u^2}{g} \\implies u^2 = 2g$.<br><b>Step 5:</b> Taking the square root gives the initial velocity: $u = \\sqrt{2g}$."
            },
            {
                "id": "MIP-TEST-075",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Equation of Trajectory", "Horizontal Projectile"],
                "q": "A body projected horizontally from the top of a tower follows $y=20x^{2}$ parabola equation where x, y are in m $(g=10\\text{ m s}^{-2})$. Then the velocity of the projectile is $(\\text{ms}^{-1})$",
                "options": ["0.2", "0.3", "0.4", "0.5"],
                "correct": 3,
                "sol": "<b>Step 1:</b> For a horizontally projected body, the equation of the trajectory taking the point of projection as the origin is $y = \\frac{g}{2u^2}x^2$.<br><b>Step 2:</b> Compare this with the given equation $y = 20x^2$.<br><b>Step 3:</b> Equating the coefficients: $\\frac{g}{2u^2} = 20$.<br><b>Step 4:</b> Substitute $g = 10$: $\\frac{10}{2u^2} = 20 \\implies \\frac{5}{u^2} = 20$.<br><b>Step 5:</b> Solve for $u^2$: $u^2 = \\frac{5}{20} = \\frac{1}{4}$.<br><b>Step 6:</b> Taking the square root gives $u = \\frac{1}{2} = 0.5\\text{ m/s}$."
            },
            {
                "id": "MIP-TEST-076",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Horizontal Projectile", "Time of Flight"],
                "q": "A bomb is dropped from an aeroplane flying horizontally with a velocity of 720 kmph at an altitude of 980m. Time taken by the bomb to hit the ground is",
                "options": ["1 s", "7.2 s", "14.14 s", "0.15 s"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The time taken by a horizontally projected object to reach the ground depends only on its initial height, not its horizontal velocity. The initial vertical velocity is $u_y = 0$.<br><b>Step 2:</b> Use the kinematic equation for vertical fall: $h = \\frac{1}{2}gt^2$.<br><b>Step 3:</b> Rearrange to solve for time: $t = \\sqrt{\\frac{2h}{g}}$.<br><b>Step 4:</b> Substitute $h = 980\\text{ m}$ and $g = 9.8\\text{ m/s}^2$: $t = \\sqrt{\\frac{2(980)}{9.8}} = \\sqrt{\\frac{1960}{9.8}} = \\sqrt{200}$.<br><b>Step 5:</b> Calculate the square root: $t = 14.14\\text{ s}$."
            },
            {
                "id": "MIP-TEST-077",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Horizontal Projectile", "Velocity Vector"],
                "q": "A body is projected horizontally from a height of 78.4 m with a velocity $10\\text{ ms}^{-1}$. Its velocity after 3 seconds is $(g=10\\text{ ms}^{-2})$ (Take direction of projection as $\\hat{i}$ and vertically upward direction as $\\hat{j}$)",
                "options": ["$10\\hat{i}-30\\hat{j}$", "$10\\hat{i}+30\\hat{j}$", "$20\\hat{i}-30\\hat{j}$", "$10\\hat{i}+10\\sqrt{3}\\hat{j}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The horizontal velocity of the projectile remains constant. Since it's projected along $\\hat{i}$, $v_x = 10\\hat{i}$.<br><b>Step 2:</b> The initial vertical velocity is zero. The vertical velocity after time $t$ is $v_y = u_y - gt$.<br><b>Step 3:</b> Substitute the values: $v_y = 0 - 10(3) = -30\\text{ m/s}$.<br><b>Step 4:</b> Since the upward direction is $\\hat{j}$, the downward vertical velocity is $-30\\hat{j}$.<br><b>Step 5:</b> The total velocity vector is the sum of horizontal and vertical components: $\\vec{v} = 10\\hat{i} - 30\\hat{j}$."
            },
            {
                "id": "MIP-TEST-078",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Horizontal Projectile", "Kinematics"],
                "q": "Two thin wood screens A and B are separated by 200 m. A bullet travelling horizontally at a speed of $600\\text{ m/s}$ hits screen A, penetrates through it, and finally emerges out from B making holes in A and B. If the resistance of air and wood are negligible, the difference of heights of the holes in A and B is",
                "options": ["5 m", "$\\frac{49}{90}\\text{ m}$", "$\\frac{7}{\\sqrt{90}}\\text{ m}$", "zero"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The bullet travels the horizontal distance of 200m at a constant speed of $600\\text{ m/s}$. Calculate the time taken: $t = \\frac{200}{600} = \\frac{1}{3}\\text{ s}$.<br><b>Step 2:</b> During this time $\\frac{1}{3}\\text{ s}$, the bullet falls vertically strictly under the influence of gravity.<br><b>Step 3:</b> Use the free fall equation to find the vertical drop: $y = \\frac{1}{2}gt^2$.<br><b>Step 4:</b> Substitute $g = 9.8\\text{ m/s}^2$ and $t = \\frac{1}{3}\\text{ s}$: $y = \\frac{1}{2}(9.8)\\left(\\frac{1}{3}\\right)^2 = 4.9 \\left(\\frac{1}{9}\\right)$.<br><b>Step 5:</b> Multiply to get the fraction: $y = \\frac{49}{90}\\text{ m}$."
            },
            {
                "id": "MIP-TEST-079",
                "topic": "Circular Motion",
                "difficulty": 2,
                "tags": ["Angular Kinematics", "Constant Acceleration"],
                "q": "A stationary wheel starts rotating about its own axis at constant angular acceleration. If the wheel completes 50 rotations in first 2 seconds, then the number of rotations made by it in next two seconds is",
                "options": ["75", "100", "125", "150"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Use the angular kinematic equation $\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2$. Since it starts from rest, $\\omega_0 = 0$.<br><b>Step 2:</b> For the first 2 seconds: $\\theta_1 = \\frac{1}{2}\\alpha(2)^2 = 2\\alpha$. We are given $\\theta_1 = 50$ rotations, so $2\\alpha = 50 \\implies \\alpha = 25\\text{ rotations/s}^2$.<br><b>Step 3:</b> Find the total rotations completed from the start up to $t=4\\text{ s}$ (the first 2s + the next 2s).<br><b>Step 4:</b> $\\theta_{total} = \\frac{1}{2}(25)(4)^2 = \\frac{1}{2}(25)(16) = 200$ rotations.<br><b>Step 5:</b> The rotations in the *next* two seconds are $\\theta_{total} - \\theta_1 = 200 - 50 = 150$ rotations."
            },
            {
                "id": "MIP-TEST-080",
                "topic": "Circular Motion",
                "difficulty": 2,
                "tags": ["Centripetal Acceleration", "Angular Velocity"],
                "q": "A point size body is moving along a circle at an angular velocity $2.8\\text{ rad s}^{-1}$. If centripetal acceleration of body is $7\\text{ ms}^{-2}$ then its speed is",
                "options": ["$1.25\\text{ ms}^{-1}$", "$2.5\\text{ ms}^{-1}$", "$3.5\\text{ ms}^{-1}$", "$7\\text{ ms}^{-1}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The formula for centripetal acceleration relating linear speed ($v$) and angular velocity ($\\omega$) is $a_c = v\\omega$.<br><b>Step 2:</b> We are given $a_c = 7\\text{ m/s}^2$ and $\\omega = 2.8\\text{ rad/s}$.<br><b>Step 3:</b> Substitute the values into the formula: $7 = v(2.8)$.<br><b>Step 4:</b> Solve for $v$: $v = \\frac{7}{2.8} = 2.5\\text{ m/s}$."
            },
            {
                "id": "MIP-TEST-081",
                "topic": "Circular Motion",
                "difficulty": 2,
                "tags": ["Linear Velocity", "Rotational Kinematics"],
                "q": "A circular plate is rotating about its own axis at an angular velocity 100 revolutions per minute. The linear velocity of a particle P of plate at a distance 4.2 cm from axis of rotation is",
                "options": ["$0.22\\text{ m/s}$", "$0.44\\text{ m/s}$", "$2.2\\text{ m/s}$", "$4.4\\text{ m/s}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> First, convert the angular velocity from revolutions per minute (rpm) to radians per second (rad/s).<br><b>Step 2:</b> $\\omega = 100 \\text{ rpm} \\times \\frac{2\\pi \\text{ rad}}{60 \\text{ s}} = \\frac{10\\pi}{3}\\text{ rad/s}$.<br><b>Step 3:</b> Convert the radial distance to meters: $r = 4.2\\text{ cm} = 0.042\\text{ m}$.<br><b>Step 4:</b> Use the relation between linear and angular velocity: $v = r\\omega$.<br><b>Step 5:</b> $v = 0.042 \\times \\frac{10\\pi}{3} = 0.014 \\times 10\pi = 0.14\pi$.<br><b>Step 6:</b> Substitute $\\pi \\approx \\frac{22}{7}$: $v = 0.14 \\times \\frac{22}{7} = 0.02 \\times 22 = 0.44\\text{ m/s}$."
            },
            {
                "id": "MIP-TEST-082",
                "topic": "Circular Motion",
                "difficulty": 2,
                "tags": ["Centripetal Acceleration", "Ratio"],
                "q": "An aircraft executes horizontal loop of radius 1 km with steady speed of 900 kmph. The ratio of centripetal acceleration with acceleration due to gravity is",
                "options": ["6.0", "6.4", "5", "7"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Convert the speed of the aircraft to m/s: $v = 900 \\times \\frac{5}{18} = 250\\text{ m/s}$.<br><b>Step 2:</b> Convert the radius to meters: $r = 1\\text{ km} = 1000\\text{ m}$.<br><b>Step 3:</b> Calculate the centripetal acceleration: $a_c = \\frac{v^2}{r} = \\frac{250^2}{1000} = \\frac{62500}{1000} = 62.5\\text{ m/s}^2$.<br><b>Step 4:</b> Calculate the ratio of $a_c$ to gravity ($g=9.8\\text{ m/s}^2$): $\\text{Ratio} = \\frac{62.5}{9.8} \\approx 6.377$.<br><b>Step 5:</b> Rounding to one decimal place gives 6.4."
            },
            {
                "id": "MIP-TEST-083",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 3,
                "tags": ["Vector Addition", "Orthogonal Resultant"],
                "q": "The greatest and least resultant of two forces acting at a point are 29 Kg wt. and 5 Kg wt. respectively. If each force is increased by 3 Kg wt. the magnitude of the resultant of new forces acting at right angles to each other is",
                "options": ["45 kg wt.", "35 kg wt.", "25 kg wt.", "15 kg wt."],
                "correct": 2,
                "sol": "<b>Step 1:</b> The greatest resultant occurs when forces are parallel ($F_1 + F_2 = 29$). The least resultant occurs when they are anti-parallel ($F_1 - F_2 = 5$).<br><b>Step 2:</b> Solve this system of equations. Add them: $2F_1 = 34 \\implies F_1 = 17\\text{ kg wt}$.<br><b>Step 3:</b> Subtract them: $2F_2 = 24 \\implies F_2 = 12\\text{ kg wt}$.<br><b>Step 4:</b> Increase each force by 3 kg wt: $F_1' = 17 + 3 = 20\\text{ kg wt}$ and $F_2' = 12 + 3 = 15\\text{ kg wt}$.<br><b>Step 5:</b> These new forces act at right angles ($90^{\\circ}$). The resultant is $R = \\sqrt{(F_1')^2 + (F_2')^2}$.<br><b>Step 6:</b> $R = \\sqrt{20^2 + 15^2} = \\sqrt{400 + 225} = \\sqrt{625} = 25\\text{ kg wt}$."
            },
            {
                "id": "MIP-TEST-084",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Vector Addition", "Orthogonal Components"],
                "q": "Two forces P and Q act at an angle of $120^{\\circ}$ with each other. If the resultant is at right angles to P and P is equal to 4 kg-wt, then the value of Q is",
                "options": ["4 kgwt", "8 kgwt", "6 kgwt", "3 kgwt"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The formula for the angle $\\alpha$ the resultant makes with force P is $\\tan\\alpha = \\frac{Q\\sin\\theta}{P + Q\\cos\\theta}$.<br><b>Step 2:</b> We are given that the resultant is at right angles to P, meaning $\\alpha = 90^{\\circ}$.<br><b>Step 3:</b> Since $\\tan 90^{\\circ}$ is undefined, the denominator of the fraction must be zero: $P + Q\\cos\\theta = 0$.<br><b>Step 4:</b> Substitute $P = 4$ and $\\theta = 120^{\\circ}$: $4 + Q\\cos 120^{\\circ} = 0$.<br><b>Step 5:</b> We know $\\cos 120^{\\circ} = -0.5$. Therefore, $4 - 0.5Q = 0$.<br><b>Step 6:</b> Solve for Q: $0.5Q = 4 \\implies Q = 8\\text{ kgwt}$."
            },
            {
                "id": "MIP-TEST-085",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 3,
                "tags": ["Vector Addition", "Algebraic Manipulation"],
                "q": "The resultant of two vectors is $\\vec{R}$. If the magnitude of $\\vec{Q}$ is doubled the new resultant becomes perpendicular to $\\vec{P}$, then magnitude of $\\vec{R}$ is",
                "options": ["$\\frac{P^{2}-Q^{2}}{2PQ}$", "$\\frac{P+Q}{P-Q}$", "Q", "$\\frac{P}{Q}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Let the angle between $\\vec{P}$ and $\\vec{Q}$ be $\\theta$. The initial resultant magnitude is $R = \\sqrt{P^2 + Q^2 + 2PQ\\cos\\theta}$.<br><b>Step 2:</b> When $\\vec{Q}$ is doubled to $2\\vec{Q}$, the new resultant is perpendicular to $\\vec{P}$.<br><b>Step 3:</b> Using the direction formula where $\\alpha = 90^{\\circ}$, the denominator must be zero: $P + (2Q)\\cos\\theta = 0$.<br><b>Step 4:</b> From this, we find $2PQ\\cos\\theta = -P^2$.<br><b>Step 5:</b> Substitute this expression for $2PQ\\cos\\theta$ back into the original resultant squared formula: $R^2 = P^2 + Q^2 + (-P^2)$.<br><b>Step 6:</b> $R^2 = Q^2 \\implies R = Q$."
            },
            {
        "id": "MIP-TEST-086",
        "topic": "Addition and Resolution of Vectors",
        "difficulty": 3,
        "tags": ["Polygon Law", "Vector Equality"],
        "q": "$\\vec{P}, \\vec{Q}, \\vec{R}, \\vec{S}$ are vectors of equal magnitude. If $\\vec{P}+\\vec{Q}-\\vec{R}=0$, the angle between $\\vec{P}$ and $\\vec{Q}$ is $\\theta_1$. If $\\vec{P}+\\vec{Q}-\\vec{S}=0$, the angle between $\\vec{P}$ and $\\vec{S}$ is $\\theta_2$. The ratio of $\\theta_1$ to $\\theta_2$ is",
        "options": ["1:2", "2:1", "1:1", "$1:\\sqrt{3}$"],
        "correct": 1,
        "sol": "<b>Step 1:</b> For the first condition: $\\vec{P}+\\vec{Q} = \\vec{R}$. Since all vectors have the same magnitude $x$, the resultant of $\\vec{P}$ and $\\vec{Q}$ has magnitude $x$.<br><b>Step 2:</b> $x^2 = x^2 + x^2 + 2x^2\\cos \\theta_1 \\implies 2x^2\\cos \\theta_1 = -x^2 \\implies \\cos \\theta_1 = -0.5$. Therefore, $\\theta_1 = 120^{\\circ}$.<br><b>Step 3:</b> For the second condition: $\\vec{P}+\\vec{Q}-\\vec{S}=0 \\implies \\vec{Q} = \\vec{S}-\\vec{P}$. The magnitude of $(\\vec{S}-\\vec{P})$ is equal to the magnitude of $\\vec{Q}$, which is $x$.<br><b>Step 4:</b> The magnitude of a vector difference is $x^2 = x^2 + x^2 - 2x^2\\cos \\theta_2 \\implies 2x^2\\cos \\theta_2 = x^2 \\implies \\cos \\theta_2 = 0.5$. Therefore, $\\theta_2 = 60^{\\circ}$.<br><b>Step 5:</b> The ratio $\\theta_1 / \\theta_2 = 120^{\\circ} / 60^{\\circ} = 2:1$."
    },
            {
                "id": "MIP-TEST-087",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Polygon Law", "Cyclic Vectors"],
                "q": "If ABCD is a quadrilateral whose sides represent vectors in cyclic order, $\\vec{AB}$ is equivalent to",
                "options": ["$\\vec{CA}+\\vec{CB}$", "$\\vec{CD}$", "$\\vec{AD}+\\vec{DC}+\\vec{CB}$", "$\\vec{AD}+\\vec{BD}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> By the polygon law of vector addition, if vectors form a closed loop in sequential (cyclic) order, their vector sum is zero.<br><b>Step 2:</b> Therefore, $\\vec{AB} + \\vec{BC} + \\vec{CD} + \\vec{DA} = 0$.<br><b>Step 3:</b> Rearrange the equation to solve for $\\vec{AB}$: $\\vec{AB} = -(\\vec{BC} + \\vec{CD} + \\vec{DA})$.<br><b>Step 4:</b> Reversing the direction of a vector flips its sign (e.g., $-\\vec{BC} = \\vec{CB}$).<br><b>Step 5:</b> Apply this rule to all terms: $\\vec{AB} = \\vec{CB} + \\vec{DC} + \\vec{AD}$.<br><b>Step 6:</b> Rearranging the terms gives $\\vec{AD} + \\vec{DC} + \\vec{CB}$."
            },
            {
                "id": "MIP-TEST-088",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 3,
                "tags": ["Equilibrium", "Resolution of Forces"],
                "q": "An iron sphere of mass 100 kg is suspended freely from a rigid support by means of a rope of length 2m. The horizontal force required to displace it horizontally through 50cm is",
                "options": ["980 N", "490 N", "245 N", "112.5 N"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The sphere is in equilibrium under three forces: horizontal force $F$, weight $mg$, and tension $T$.<br><b>Step 2:</b> Balancing forces: $T\\sin\\theta = F$ and $T\\cos\\theta = mg$. Dividing these yields $F = mg\\tan\\theta$.<br><b>Step 3:</b> From geometry, the rope length (hypotenuse) is $2\\text{m}$ and the horizontal displacement (opposite side) is $0.5\\text{m}$.<br><b>Step 4:</b> $\\sin\\theta = \\frac{0.5}{2} = 0.25 = \\frac{1}{4}$.<br><b>Step 5:</b> For small angles, $\\tan\\theta \\approx \\sin\\theta$. Thus, $\\tan\\theta \\approx \\frac{1}{4}$.<br><b>Step 6:</b> Substitute the values (taking $g=9.8\\text{ m/s}^2$): $F = (100 \\times 9.8) \\times \\left(\\frac{1}{4}\\right) = \\frac{980}{4} = 245\\text{ N}$."
            },
            {
                "id": "MIP-TEST-089",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 1,
                "tags": ["Equilibrium", "Vector Addition"],
                "q": "Three forces $\\vec{A}=(\\hat{i}+\\hat{j}+\\hat{k})$, $\\vec{B}=(2\\hat{i}-\\hat{j}+3\\hat{k})$ and $\\vec{C}$ acting on a body to keep it in equilibrium. Then $\\vec{C}$ is",
                "options": ["$-(3\\hat{i}+4\\hat{k})$", "$-(4\\hat{i}+3\\hat{k})$", "$(3\\hat{i}+4\\hat{j})$", "$(2\\hat{i}-3\\hat{k})$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> For a body to be in equilibrium under the action of three forces, their vector sum must be strictly zero.<br><b>Step 2:</b> $\\vec{A} + \\vec{B} + \\vec{C} = 0$.<br><b>Step 3:</b> Rearrange to solve for $\\vec{C}$: $\\vec{C} = -(\\vec{A} + \\vec{B})$.<br><b>Step 4:</b> Add $\\vec{A}$ and $\\vec{B}$: $\\vec{A} + \\vec{B} = (1+2)\\hat{i} + (1-1)\\hat{j} + (1+3)\\hat{k} = 3\\hat{i} + 0\\hat{j} + 4\\hat{k}$.<br><b>Step 5:</b> Substitute back: $\\vec{C} = -(3\\hat{i} + 4\\hat{k})$."
            },
            {
                "id": "MIP-TEST-090",
                "topic": "Relative Velocity in 2D",
                "difficulty": 3,
                "tags": ["Rolling Motion", "Displacement Vector"],
                "q": "The displacement of the point of a wheel initially in contact with the ground when the wheel rolls forward quarter revolution where perimeter of the wheel is $4\\pi$ m, is (Assume the forward direction as x-axis)",
                "options": ["$\\sqrt{(\\pi+2)^{2}+4} \\text{ along } \\tan^{-1}(\\frac{2}{\\pi})$", "$\\sqrt{(\\pi-2)^{2}+4} \\text{ along } \\tan^{-1}(\\frac{2}{\\pi-2})$", "$\\sqrt{(\\pi-2)^{2}+4} \\text{ along } \\tan^{-1}(\\frac{2}{\\pi})$", "$\\sqrt{(\\pi+2)^{2}+4} \\text{ along } \\tan^{-1}(\\frac{2}{\\pi-2})$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Calculate the radius. Perimeter $2\\pi R = 4\\pi \\implies R = 2\\text{ m}$.<br><b>Step 2:</b> Set the initial contact point as the origin $(0,0)$. The wheel rolls forward by a quarter revolution.<br><b>Step 3:</b> The horizontal distance covered by the center of the wheel is $\\frac{1}{4}$ of the perimeter: $x_c = \\frac{4\\pi}{4} = \\pi$. The height of the center remains $y_c = R = 2$.<br><b>Step 4:</b> A quarter revolution represents a $90^{\\circ}$ clockwise rotation. The point initially at the bottom $(0, -R)$ relative to the center rotates to the back $(-R, 0)$ relative to the center.<br><b>Step 5:</b> The new absolute coordinates of the point are $x = x_c - R = \\pi - 2$ and $y = y_c + 0 = 2$.<br><b>Step 6:</b> The displacement vector is $(\\pi-2)\\hat{i} + 2\\hat{j}$. Its magnitude is $\\sqrt{(\\pi-2)^2 + 4}$ and its angle with the x-axis is $\\tan^{-1}\\left(\\frac{2}{\\pi-2}\\right)$."
            },
            {
                "id": "MIP-TEST-091",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["2D Kinematics", "Constant Acceleration"],
                "q": "A particle starts from the origin at $t=0\\text{s}$ with a velocity of $10.0\\hat{j}\\text{ m/s}$ and moves in the xy-plane with a constant acceleration of $(8\\hat{i}+2\\hat{j})\\text{ ms}^{-2}$. Then y-coordinate of the particle in 2 sec is",
                "options": ["24 m", "16 m", "8 m", "12 m"],
                "correct": 0,
                "sol": "<b>Step 1:</b> To find the y-coordinate, consider only the vertical components of the motion.<br><b>Step 2:</b> Initial velocity in y-direction: $u_y = 10\\text{ m/s}$.<br><b>Step 3:</b> Acceleration in y-direction: $a_y = 2\\text{ m/s}^2$.<br><b>Step 4:</b> Use the kinematic equation $y = u_y t + \\frac{1}{2} a_y t^2$.<br><b>Step 5:</b> Substitute $t = 2\\text{ s}$: $y = 10(2) + \\frac{1}{2}(2)(2^2) = 20 + 4 = 24\\text{ m}$."
            },
            {
                "id": "MIP-TEST-092",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Average Velocity", "Displacement Vector"],
                "q": "A car moving at a constant speed of 36 kmph moves north wards for 20 minutes then due to west with the same speed for $8\\frac{1}{3}$ minutes. What is the average velocity of the car during this run in kmph?",
                "options": ["27.5", "40.5", "20.8", "32.7"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Convert times to hours: $t_1 = \\frac{20}{60} = \\frac{1}{3}\\text{ hr}$ and $t_2 = \\frac{25/3}{60} = \\frac{25}{180} = \\frac{5}{36}\\text{ hr}$.<br><b>Step 2:</b> Calculate distances. Northward distance $d_1 = 36 \\times \\frac{1}{3} = 12\\text{ km}$. Westward distance $d_2 = 36 \\times \\frac{5}{36} = 5\\text{ km}$.<br><b>Step 3:</b> Net displacement $S = \\sqrt{d_1^2 + d_2^2} = \\sqrt{12^2 + 5^2} = 13\\text{ km}$.<br><b>Step 4:</b> Total time $t_{total} = \\frac{1}{3} + \\frac{5}{36} = \\frac{12+5}{36} = \\frac{17}{36}\\text{ hr}$.<br><b>Step 5:</b> Average velocity $v_{avg} = \\frac{S}{t_{total}} = \\frac{13}{17/36} = \\frac{13 \\times 36}{17} = \\frac{468}{17} \\approx 27.52\\text{ kmph}$."
            },
            {
                "id": "MIP-TEST-093",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 3,
                "tags": ["Vector Addition", "Kinematics"],
                "q": "Velocity of a particle at time $t=0$ is $2\\text{ms}^{-1}$. A constant acceleration of $2\\text{ms}^{-2}$ acts on the particle for 1 second at an angle of $60^{\\circ}$ with its initial velocity. Find the magnitude of velocity at the end of 1 second.",
                "options": ["$\\sqrt{3}\\text{ m/s}$", "$2\\sqrt{3}\\text{ m/s}$", "$4\\text{ m/s}$", "$8\\text{ m/s}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Set initial velocity along the x-axis: $\\vec{u} = 2\\hat{i}\\text{ m/s}$.<br><b>Step 2:</b> Resolve acceleration vector: $\\vec{a} = 2\\cos 60^{\\circ}\\hat{i} + 2\\sin 60^{\\circ}\\hat{j} = 2(0.5)\\hat{i} + 2(\\frac{\\sqrt{3}}{2})\\hat{j} = 1\\hat{i} + \\sqrt{3}\\hat{j}$.<br><b>Step 3:</b> Use $\\vec{v} = \\vec{u} + \\vec{a}t$. Since $t=1\\text{ s}$, $\\vec{v} = 2\\hat{i} + (1\\hat{i} + \\sqrt{3}\\hat{j})(1) = 3\\hat{i} + \\sqrt{3}\\hat{j}$.<br><b>Step 4:</b> Find the magnitude: $|\\vec{v}| = \\sqrt{3^2 + (\\sqrt{3})^2} = \\sqrt{9 + 3} = \\sqrt{12}$.<br><b>Step 5:</b> Simplify: $\\sqrt{12} = 2\\sqrt{3}\\text{ m/s}$."
            },
            {
                "id": "MIP-TEST-094",
                "topic": "Circular Motion",
                "difficulty": 2,
                "tags": ["Change in Velocity", "Vector Subtraction"],
                "q": "An aeroplane moving in a circular path with a speed $250\\text{ km/h}$. The change in velocity in half of the revolution is.",
                "options": ["$500\\text{ km/h}$", "$250\\text{ km/h}$", "$120\\text{ km/h}$", "zero"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Speed remains constant, but the direction of the velocity vector changes continuously.<br><b>Step 2:</b> After half a revolution, the velocity vector points in the exact opposite direction to its initial state.<br><b>Step 3:</b> Let initial velocity be $\\vec{u} = v\\hat{i}$ and final velocity be $\\vec{v} = -v\\hat{i}$.<br><b>Step 4:</b> The change in velocity is $\\Delta\\vec{v} = \\vec{v} - \\vec{u} = -v\\hat{i} - v\\hat{i} = -2v\\hat{i}$.<br><b>Step 5:</b> The magnitude of change is $2v = 2(250) = 500\\text{ km/h}$."
            },
            {
                "id": "MIP-TEST-095",
                "topic": "Relative Velocity in 2D",
                "difficulty": 2,
                "tags": ["Orthogonal Vectors", "Relative Speed"],
                "q": "A car starting from a point travels towards east with a velocity of 36 kmph. Another car starting from the same point travels towards north with a velocity of 24 kmph. The relative velocity of one with respect to another is",
                "options": ["$12\\sqrt{13}\\text{ kmph}$", "30 kmph", "12 kmph", "20 kmph"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Define the velocity vectors: $\\vec{v}_1 = 36\\hat{i}$ (East) and $\\vec{v}_2 = 24\\hat{j}$ (North).<br><b>Step 2:</b> The relative velocity of car 1 with respect to car 2 is $\\vec{v}_{12} = \\vec{v}_1 - \\vec{v}_2 = 36\\hat{i} - 24\\hat{j}$.<br><b>Step 3:</b> Calculate magnitude: $|\\vec{v}_{12}| = \\sqrt{36^2 + (-24)^2}$.<br><b>Step 4:</b> Factor out common multiples to simplify calculation: $\\sqrt{(12 \\times 3)^2 + (12 \\times 2)^2} = 12\\sqrt{3^2 + 2^2}$.<br><b>Step 5:</b> $|\\vec{v}_{12}| = 12\\sqrt{9 + 4} = 12\\sqrt{13}\\text{ kmph}$."
            },
            {
                "id": "MIP-TEST-096",
                "topic": "Relative Velocity in 2D",
                "difficulty": 3,
                "tags": ["3D Relative Velocity", "Vector Magnitude"],
                "q": "A ship is moving due east with a velocity of $12\\text{ m/sec}$, a truck is moving across on the ship with velocity $4\\text{ m/sec}$. A monkey is climbing the vertical pole mounted on the truck with a velocity of $3\\text{ m/sec}$. Find the velocity of the monkey as observed by the man on the shore (m/sec)",
                "options": ["10", "15", "13", "20"],
                "correct": 2,
                "sol": "<b>Step 1:</b> All three velocity vectors are mutually perpendicular to each other in 3D space.<br><b>Step 2:</b> Velocity of ship relative to shore: $\\vec{v}_{ss} = 12\\hat{i}$.<br><b>Step 3:</b> Velocity of truck relative to ship: $\\vec{v}_{ts} = 4\\hat{j}$.<br><b>Step 4:</b> Velocity of monkey relative to truck: $\\vec{v}_{mt} = 3\\hat{k}$.<br><b>Step 5:</b> Velocity of monkey relative to shore: $\\vec{v}_m = \\vec{v}_{mt} + \\vec{v}_{ts} + \\vec{v}_{ss} = 12\\hat{i} + 4\\hat{j} + 3\\hat{k}$.<br><b>Step 6:</b> Magnitude: $|\\vec{v}_m| = \\sqrt{12^2 + 4^2 + 3^2} = \\sqrt{144 + 16 + 9} = \\sqrt{169} = 13\\text{ m/s}$."
            },
            {
                "id": "MIP-TEST-097",
                "topic": "Relative Velocity in 2D",
                "difficulty": 3,
                "tags": ["Rain and Man Problem", "Relative Velocity"],
                "q": "A man is walking due east at the rate of 2kmph. The rain appears to him to come down vertically at the rate of 2kmph. The actual velocity and direction of rainfall with the vertical respectively are",
                "options": ["$2\\sqrt{2}\\text{ kmph}, 45^{\\circ}$", "$\\frac{1}{\\sqrt{2}}\\text{ kmph}, 30^{\\circ}$", "2 kmph, $0^{\\circ}$", "1 kmph, $90^{\\circ}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Velocity of the man $\\vec{v}_m = 2\\hat{i}$.<br><b>Step 2:</b> The relative velocity of the rain with respect to the man appears vertical: $\\vec{v}_{rm} = -2\\hat{j}$.<br><b>Step 3:</b> We know $\\vec{v}_{rm} = \\vec{v}_r - \\vec{v}_m$. Therefore, the actual rain velocity is $\\vec{v}_r = \\vec{v}_{rm} + \\vec{v}_m = 2\\hat{i} - 2\\hat{j}$.<br><b>Step 4:</b> The magnitude of actual rain velocity is $|\\vec{v}_r| = \\sqrt{2^2 + (-2)^2} = \\sqrt{4+4} = 2\\sqrt{2}\\text{ kmph}$.<br><b>Step 5:</b> The angle with the vertical (y-axis) is $\\tan\\theta = \\frac{v_x}{v_y} = \\frac{2}{2} = 1 \\implies \\theta = 45^{\\circ}$."
            },
            {
                "id": "MIP-TEST-098",
                "topic": "Relative Velocity in 2D",
                "difficulty": 2,
                "tags": ["River Boat Problem", "Downstream and Upstream"],
                "q": "A boat takes 2 hours to travel 8km and back in still water lake. With water velocity of 4 kmph, the time taken for going upstream of 8km and coming back is",
                "options": ["160 minutes", "80 minutes", "320 minutes", "180 minutes"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Find boat's velocity in still water. Total distance = 16km, total time = 2hr $\\implies v_b = \\frac{16}{2} = 8\\text{ kmph}$.<br><b>Step 2:</b> With river velocity $v_r = 4\\text{ kmph}$, downstream speed $v_d = 8+4=12\\text{ kmph}$, upstream speed $v_u = 8-4=4\\text{ kmph}$.<br><b>Step 3:</b> Time downstream $t_1 = \\frac{8}{12} = \\frac{2}{3}\\text{ hr}$.<br><b>Step 4:</b> Time upstream $t_2 = \\frac{8}{4} = 2\\text{ hr}$.<br><b>Step 5:</b> Total time $= 2 + \\frac{2}{3} = \\frac{8}{3}\\text{ hr}$.<br><b>Step 6:</b> Convert to minutes: $\\frac{8}{3} \\times 60 = 8 \\times 20 = 160\\text{ minutes}$."
            },
            {
                "id": "MIP-TEST-099",
                "topic": "Relative Velocity in 2D",
                "difficulty": 2,
                "tags": ["River Boat Problem", "Drift"],
                "q": "The velocity of water in a river is 2 kmph, while width is 400 m. A boat is rowed from a point rowing always aiming opposite point at 8 kmph of still water velocity. On reaching the opposite bank the drift obtained is",
                "options": ["93 m", "100.8 m", "112.4 m", "100 m"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Aiming strictly at the opposite point means the boat's full $8\\text{ kmph}$ velocity is perpendicular to the bank.<br><b>Step 2:</b> Time taken to cross $d=400\\text{ m} = 0.4\\text{ km}$ is $t = \\frac{d}{v_b} = \\frac{0.4}{8} = 0.05\\text{ hr}$.<br><b>Step 3:</b> Drift is the horizontal distance carried by the river current in that time.<br><b>Step 4:</b> Drift $x = v_r \\times t = 2\\text{ kmph} \\times 0.05\\text{ hr} = 0.1\\text{ km}$.<br><b>Step 5:</b> Convert to meters: $0.1 \\times 1000 = 100\\text{ m}$."
            },
            {
                "id": "MIP-TEST-100",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Equation of Trajectory", "Kinematics"],
                "q": "A particle is projected from ground with some initial velocity making an angle of $45^{\\circ}$ with the horizontal. It reaches a height of 7.5 m above the ground while it travels a horizontal distance of 10 m from the point of projection. The initial speed of the projection is",
                "options": ["$5\\text{ m/s}$", "$10\\text{ m/s}$", "$20\\text{ m/s}$", "$40\\text{ m/s}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Use the equation of trajectory: $y = x \\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}$.<br><b>Step 2:</b> Substitute the known values: $y = 7.5$, $x = 10$, $\\theta = 45^{\\circ}$, $g = 10$.<br><b>Step 3:</b> $7.5 = 10\\tan 45^{\\circ} - \\frac{10(10^2)}{2u^2\\cos^2 45^{\\circ}}$.<br><b>Step 4:</b> $7.5 = 10(1) - \\frac{1000}{2u^2(0.5)} \\implies 7.5 = 10 - \\frac{1000}{u^2}$.<br><b>Step 5:</b> $2.5 = \\frac{1000}{u^2} \\implies u^2 = \\frac{1000}{2.5} = 400$.<br><b>Step 6:</b> Solving for $u$ gives $u = 20\\text{ m/s}$."
            },
            {
                "id": "MIP-TEST-101",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Average Velocity", "Displacement Vector"],
                "q": "A particle is projected from ground at an angle $45^{\\circ}$ with initial velocity $20\\sqrt{2}\\text{ ms}^{-1}$. The magnitude of average velocity in a time interval from $t=0$ to $t=3\\text{ s}$ in $\\text{ms}^{-1}$ is",
                "options": ["20.62", "10.31", "41.14", "5.15"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Find initial velocity components: $u_x = 20\\sqrt{2}\\cos 45^{\\circ} = 20\\text{ m/s}$, $u_y = 20\\sqrt{2}\\sin 45^{\\circ} = 20\\text{ m/s}$.<br><b>Step 2:</b> Calculate position at $t=3\\text{ s}$. Horizontal: $x = u_x t = 20(3) = 60\\text{ m}$.<br><b>Step 3:</b> Vertical: $y = u_y t - \\frac{1}{2}gt^2 = 20(3) - \\frac{1}{2}(10)(3^2) = 60 - 45 = 15\\text{ m}$.<br><b>Step 4:</b> Total displacement $S = \\sqrt{x^2 + y^2} = \\sqrt{60^2 + 15^2} = \\sqrt{3600 + 225} = \\sqrt{3825}$.<br><b>Step 5:</b> Average velocity $v_{avg} = \\frac{S}{t} = \\frac{\\sqrt{3825}}{3} = \\sqrt{\\frac{3825}{9}} = \\sqrt{425}$.<br><b>Step 6:</b> $\\sqrt{425} \\approx 20.615\\text{ m/s}$."
            },
            {
                "id": "MIP-TEST-102",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Orthogonal Vectors", "Dot Product"],
                "q": "A ball is thrown with a velocity of u making an angle q with the horizontal. Its velocity vector normal to initial vector (u) after a time interval of",
                "options": ["$\\frac{u \\sin q}{g}$", "$\\frac{u}{g \\cos q}$", "$\\frac{u}{g \\sin q}$", "$\\frac{u \\cos q}{g}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Initial velocity vector $\\vec{u} = u\\cos q \\hat{i} + u\\sin q \\hat{j}$.<br><b>Step 2:</b> Velocity vector after time $t$ is $\\vec{v} = u\\cos q \\hat{i} + (u\\sin q - gt)\\hat{j}$.<br><b>Step 3:</b> The vectors are normal if their dot product is zero: $\\vec{u} \\cdot \\vec{v} = 0$.<br><b>Step 4:</b> $(u\\cos q)(u\\cos q) + (u\\sin q)(u\\sin q - gt) = 0$.<br><b>Step 5:</b> $u^2\\cos^2 q + u^2\\sin^2 q - ugt\\sin q = 0 \\implies u^2(\\cos^2 q + \\sin^2 q) = ugt\\sin q$.<br><b>Step 6:</b> $u^2 = ugt\\sin q \\implies t = \\frac{u}{g\\sin q}$."
            },
            {
                "id": "MIP-TEST-103",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Average Velocity", "Maximum Height"],
                "q": "A stone is projected with a velocity $20\\sqrt{2}\\text{ m/s}$ at an angle of $45^{\\circ}$ to the horizontal. The average velocity of stone during its motion from starting point to its maximum height is",
                "options": ["$10\\sqrt{5}\\text{ m/s}$", "$20\\sqrt{5}\\text{ m/s}$", "$5\\sqrt{5}\\text{ m/s}$", "$20\\text{ m/s}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Time to max height $t = \\frac{u\\sin\\theta}{g} = \\frac{20\\sqrt{2}\\sin 45^{\\circ}}{10} = \\frac{20}{10} = 2\\text{ s}$.<br><b>Step 2:</b> Horizontal distance $x = \\frac{R}{2} = \\frac{u^2\\sin 2\\theta}{2g} = \\frac{(20\\sqrt{2})^2(1)}{20} = \\frac{800}{20} = 40\\text{ m}$.<br><b>Step 3:</b> Maximum height $y = H = \\frac{u^2\\sin^2\\theta}{2g} = \\frac{800(0.5)}{20} = \\frac{400}{20} = 20\\text{ m}$.<br><b>Step 4:</b> Total displacement $S = \\sqrt{x^2 + y^2} = \\sqrt{40^2 + 20^2} = \\sqrt{1600 + 400} = \\sqrt{2000} = 20\\sqrt{5}\\text{ m}$.<br><b>Step 5:</b> Average velocity $v_{avg} = \\frac{S}{t} = \\frac{20\\sqrt{5}}{2} = 10\\sqrt{5}\\text{ m/s}$."
            },
            {
                "id": "MIP-TEST-104",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Maximum Range", "Relative Velocity"],
                "q": "A player kicks a foot ball obliquely at a speed of $20\\text{ m/s}$ so that its range is maximum. Another player at a distance of 24m away in the direction of kick starts running at that instant to catch the ball. Before the ball hits the ground to catch it, the speed with which the second player has to run is $(g=10\\text{ ms}^{-2})$",
                "options": ["$4\\text{ m/s}$", "$4\\sqrt{2}\\text{ m/s}$", "$8\\sqrt{2}\\text{ m/s}$", "$8\\text{ m/s}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> For maximum range, angle of kick is $45^{\\circ}$. Max range $R = \\frac{u^2}{g} = \\frac{20^2}{10} = 40\\text{ m}$.<br><b>Step 2:</b> Total time of flight $T = \\frac{2u\\sin 45^{\\circ}}{g} = \\frac{2(20)(1/\\sqrt{2})}{10} = 2\\sqrt{2}\\text{ s}$.<br><b>Step 3:</b> The second player is initially 24m away from the kicker. He must cover the remaining distance to the landing spot.<br><b>Step 4:</b> Distance to run $= 40\\text{ m} - 24\\text{ m} = 16\\text{ m}$.<br><b>Step 5:</b> The player must cover 16m in the time of flight ($2\\sqrt{2}\\text{ s}$). Speed $= \\frac{16}{2\\sqrt{2}} = \\frac{8}{\\sqrt{2}} = 4\\sqrt{2}\\text{ m/s}$."
            },
            {
        "id": "MIP-TEST-105",
        "topic": "Projectile Motion",
        "difficulty": 2,
        "tags": ["Change in Velocity", "Maximum Height"],
        "q": "A particle is fired with velocity u making angle $\\theta$ with the horizontal. What is the change in velocity when it is at the highest point?",
        "options": ["$u \\cos \\theta$", "$u$", "$u \\sin \\theta$", "$(u \\cos \\theta-u)$"],
        "correct": 2,
        "sol": "<b>Step 1:</b> Let's define the initial velocity vector: $\\vec{u}_{i} = u\\cos \\theta \\hat{i} + u\\sin \\theta \\hat{j}$.<br><b>Step 2:</b> At the highest point, the vertical component of velocity becomes zero, but the horizontal component remains unchanged.<br><b>Step 3:</b> Final velocity vector at the top: $\\vec{v}_{f} = u\\cos \\theta \\hat{i} + 0\\hat{j}$.<br><b>Step 4:</b> The change in velocity is $\\Delta\\vec{v} = \\vec{v}_{f} - \\vec{u}_{i} = (u\\cos \\theta \\hat{i}) - (u\\cos \\theta \\hat{i} + u\\sin \\theta \\hat{j}) = -u\\sin \\theta \\hat{j}$.<br><b>Step 5:</b> The magnitude of this change in velocity is simply $u\\sin \\theta$."
    },
            {
                "id": "MIP-TEST-106",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Range Boundaries", "Kinematics"],
                "q": "Two projectiles A and B are thrown from the same point with velocities $v$ and $v/2$ respectively. If B is thrown at an angle $45^{\\circ}$ with horizontal, what is the inclination of A when their ranges are the same?",
                "options": ["$\\sin^{-1}(\\frac{1}{4})$", "$\\frac{1}{2}\\sin^{-1}(\\frac{1}{4})$", "$2\\sin^{-1}(\\frac{1}{4})$", "$\\frac{1}{2}\\sin^{-1}(\\frac{1}{8})$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> The horizontal range formula is $R = \\frac{u^2 \\sin 2\\theta}{g}$.<br><b>Step 2:</b> Calculate the range of projectile B: $R_B = \\frac{(v/2)^2 \\sin(2 \\times 45^{\\circ})}{g} = \\frac{v^2/4 \\sin 90^{\\circ}}{g} = \\frac{v^2}{4g}$.<br><b>Step 3:</b> The range of projectile A is $R_A = \\frac{v^2 \\sin 2\\theta_A}{g}$.<br><b>Step 4:</b> Equate the ranges ($R_A = R_B$): $\\frac{v^2 \\sin 2\\theta_A}{g} = \\frac{v^2}{4g}$.<br><b>Step 5:</b> Simplify to find $\\theta_A$: $\\sin 2\\theta_A = \\frac{1}{4} \\implies 2\\theta_A = \\sin^{-1}\\left(\\frac{1}{4}\\right)$.<br><b>Step 6:</b> Therefore, $\\theta_A = \\frac{1}{2}\\sin^{-1}\\left(\\frac{1}{4}\\right)$."
            },
            {
                "id": "MIP-TEST-107",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Range", "Maximum Height"],
                "q": "A particle is projected with a velocity v such that its range on the horizontal plane is twice the greatest height attained by it. The range of the projectile is (when acceleration due to gravity is 'g')",
                "options": ["$\\frac{4v^2}{5g}$", "$\\frac{4g}{5v^2}$", "$\\frac{v^2}{g}$", "$\\frac{4v^2}{\\sqrt{5}g}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> We are given the condition $R = 2H$.<br><b>Step 2:</b> Substitute the standard formulas: $\\frac{v^2 \\sin 2\\theta}{g} = 2 \\left( \\frac{v^2 \\sin^2 \\theta}{2g} \\right)$.<br><b>Step 3:</b> Expand $\\sin 2\\theta$: $2\\sin\\theta\\cos\\theta = \\sin^2\\theta \\implies \\tan\\theta = 2$.<br><b>Step 4:</b> Using a right triangle (opposite=2, adjacent=1, hypotenuse=$\\sqrt{5}$), we find $\\sin\\theta = \\frac{2}{\\sqrt{5}}$ and $\\cos\\theta = \\frac{1}{\\sqrt{5}}$.<br><b>Step 5:</b> Substitute into the range formula: $R = \\frac{v^2 (2 \\sin \\theta \\cos \\theta)}{g} = \\frac{v^2 (2 \\cdot \\frac{2}{\\sqrt{5}} \\cdot \\frac{1}{\\sqrt{5}})}{g}$.<br><b>Step 6:</b> Simplify to get $R = \\frac{4v^2}{5g}$."
            },
            {
                "id": "MIP-TEST-108",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Maximum Range", "Area Calculation"],
                "q": "A number of bullets are fired in all possible directions with the same initial velocity u. The maximum area of ground covered by bullets is",
                "options": ["$\\pi(\\frac{u^2}{g})^2$", "$\\pi(\\frac{u^2}{2g})$", "$\\pi(\\frac{u}{g})^2$", "$\\pi(\\frac{u}{2g})^2$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The bullets scatter in a circle around the firing point. The radius of this circle is the maximum possible horizontal range.<br><b>Step 2:</b> The maximum horizontal range is achieved at an angle of $45^{\\circ}$ and is given by $R_{max} = \\frac{u^2}{g}$.<br><b>Step 3:</b> The area covered is a circle with radius $r = R_{max}$.<br><b>Step 4:</b> Area $= \\pi r^2 = \\pi \\left( \\frac{u^2}{g} \\right)^2$."
            },
            {
                "id": "MIP-TEST-109",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Maximum Range", "Velocity Components"],
                "q": "A ball is projected from the ground with a velocity 'u' such that its range is maximum. Then:",
                "options": ["Its velocity at half the maximum height is $\\frac{\\sqrt{3}}{2}u$", "Its velocity at the maximum height is 'u'", "Change in its velocity when it returns to the ground is 'u'", "All the above are true"],
                "correct": 0,
                "sol": "<b>Step 1:</b> For maximum range, the angle of projection must be $\\theta = 45^{\\circ}$.<br><b>Step 2:</b> Evaluate Option 2: Velocity at max height is $v_x = u\\cos 45^{\\circ} = \\frac{u}{\\sqrt{2}} \\neq u$. (False)<br><b>Step 3:</b> Evaluate Option 1: The maximum height is $H = \\frac{u^2\\sin^2 45^{\\circ}}{2g} = \\frac{u^2}{4g}$. Half of this height is $h = \\frac{u^2}{8g}$.<br><b>Step 4:</b> Find vertical velocity at $h$: $v_y^2 = u_y^2 - 2gh = (\\frac{u}{\\sqrt{2}})^2 - 2g(\\frac{u^2}{8g}) = \\frac{u^2}{2} - \\frac{u^2}{4} = \\frac{u^2}{4} \\implies v_y = \\frac{u}{2}$.<br><b>Step 5:</b> The horizontal velocity is constant: $v_x = \\frac{u}{\\sqrt{2}}$.<br><b>Step 6:</b> Total velocity at half max height: $v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{\\frac{u^2}{2} + \\frac{u^2}{4}} = \\sqrt{\\frac{3u^2}{4}} = \\frac{\\sqrt{3}}{2}u$. (True)"
            },
            {
                "id": "MIP-TEST-110",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Horizontal Projectile", "Kinematics"],
                "q": "A stair case contains ten steps each 10 cm high and 20 cm wide. The minimum horizontal velocity with which the ball has to be rolled off the upper most step, so as to hit directly the edge of the lowest step is (approximately)",
                "options": ["$42\\text{ ms}^{-1}$", "$4.2\\text{ ms}^{-1}$", "$24\\text{ ms}^{-1}$", "$2.4\\text{ ms}^{-1}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Let $w$ be the width ($0.2\\text{ m}$) and $h$ be the height ($0.1\\text{ m}$) of each step.<br><b>Step 2:</b> To hit the edge of the $n^{th}$ step (which is the lowest, 10th step), the ball must clear $n-1 = 9$ steps. The total drop $y = 9h = 0.9\\text{ m}$ and total horizontal distance $x = 9w = 1.8\\text{ m}$.<br><b>Step 3:</b> The equation of the trajectory for horizontal projection is $y = \\frac{gx^2}{2u^2}$.<br><b>Step 4:</b> Substitute the values: $0.9 = \\frac{9.8(1.8)^2}{2u^2}$.<br><b>Step 5:</b> Rearrange for $u^2$: $u^2 = \\frac{9.8(3.24)}{2(0.9)} = \\frac{31.752}{1.8} = 17.64$.<br><b>Step 6:</b> Take the square root: $u = \\sqrt{17.64} = 4.2\\text{ m/s}$."
            },
            {
                "id": "MIP-TEST-111",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Horizontal Projectile", "Relative Distance"],
                "q": "From certain height 'h' two bodies are projected horizontally each with velocity v. One body is projected towards North and the other body is projected towards east. Their separation on reaching the ground is",
                "options": ["$\\sqrt{\\frac{2v^2h}{g}}$", "$\\sqrt{\\frac{4v^2h}{g}}$", "$\\sqrt{\\frac{v^2h}{g}}$", "$\\sqrt{\\frac{8v^2h}{g}}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Both bodies fall from the same height $h$, so their time of flight is identical: $t = \\sqrt{\\frac{2h}{g}}$.<br><b>Step 2:</b> The horizontal distance covered by the first body (North) is $x_1 = vt = v\\sqrt{\\frac{2h}{g}}$.<br><b>Step 3:</b> The horizontal distance covered by the second body (East) is $x_2 = vt = v\\sqrt{\\frac{2h}{g}}$.<br><b>Step 4:</b> Since their paths are perpendicular, their separation is the hypotenuse: $S = \\sqrt{x_1^2 + x_2^2}$.<br><b>Step 5:</b> $S = \\sqrt{2 x_1^2} = x_1\\sqrt{2} = v\\sqrt{\\frac{2h}{g}} \\cdot \\sqrt{2} = \\sqrt{\\frac{4v^2h}{g}}$."
            },
            {
                "id": "MIP-TEST-112",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Horizontal Projectile", "Kinematics"],
                "q": "An object is projected horizontally from a top of the tower of height h. The line joining the point of projection and point of striking on the ground makes an angle $45^{\\circ}$ with ground, Then with what velocity the object strikes the ground",
                "options": ["$\\sqrt{\\frac{11gh}{2}}$", "$\\sqrt{\\frac{9gh}{2}}$", "$\\sqrt{\\frac{7gh}{2}}$", "$\\sqrt{\\frac{5gh}{2}}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> If the line makes $45^{\\circ}$ with the ground, then the height of the tower $h$ equals the horizontal range $R$: $h = R$.<br><b>Step 2:</b> The range is $R = u \\sqrt{\\frac{2h}{g}}$. Equating this to $h$ gives $h = u \\sqrt{\\frac{2h}{g}}$.<br><b>Step 3:</b> Square both sides: $h^2 = u^2 \\frac{2h}{g} \\implies u^2 = \\frac{gh}{2}$.<br><b>Step 4:</b> The velocity on striking the ground has components $v_x = u$ and $v_y = \\sqrt{2gh}$.<br><b>Step 5:</b> Total striking velocity is $v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{u^2 + 2gh}$.<br><b>Step 6:</b> Substitute $u^2$: $v = \\sqrt{\\frac{gh}{2} + 2gh} = \\sqrt{\\frac{5gh}{2}}$."
            },
            {
                "id": "MIP-TEST-113",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Horizontal Projectile", "Geometry"],
                "q": "A ball is thrown horizontally from a cliff such that it strikes the ground after 5s. The line of sight makes an angle $37^{\\circ}$ with the horizontal. The initial velocity of projection in $\\text{ms}^{-1}$ is",
                "options": ["$50$", "$\\frac{100}{\\sqrt{3}}$", "$\\frac{100}{\\sqrt{2}}$", "$\\frac{100}{3}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Calculate the height of the cliff from the time of flight: $h = \\frac{1}{2}gt^2 = \\frac{1}{2}(10)(5^2) = 125\\text{ m}$.<br><b>Step 2:</b> The line of sight makes an angle of $37^{\\circ}$ with the horizontal, meaning $\\tan 37^{\\circ} = \\frac{h}{R}$.<br><b>Step 3:</b> Substitute values: $\\frac{3}{4} = \\frac{125}{R} \\implies R = \\frac{500}{3}\\text{ m}$.<br><b>Step 4:</b> The horizontal velocity is constant: $u = \\frac{R}{t}$.<br><b>Step 5:</b> Substitute values: $u = \\frac{500/3}{5} = \\frac{100}{3}\\text{ m/s}$."
            },
            {
                "id": "MIP-TEST-114",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Quadratic Equation", "Range Calculation"],
                "q": "An object is launched from a cliff 20 m above the ground at an angle of $30^{\\circ}$ above the horizontal with an initial speed of $30\\text{ m/s}$. How far does the object travel horizontally before landing on the ground?",
                "options": ["$20\\text{ m}$", "$20\\sqrt{3}\\text{ m}$", "$60\\text{ m}$", "$60\\sqrt{3}\\text{ m}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Initial vertical velocity $u_y = 30 \\sin 30^{\\circ} = 15\\text{ m/s}$. Horizontal velocity $u_x = 30 \\cos 30^{\\circ} = 15\\sqrt{3}\\text{ m/s}$.<br><b>Step 2:</b> Establish the vertical displacement equation taking ground as $y=0$ and launch point as $y=20$: $y = u_y t - \\frac{1}{2}gt^2 \\implies -20 = 15t - 5t^2$.<br><b>Step 3:</b> Rearrange into a quadratic equation: $5t^2 - 15t - 20 = 0 \\implies t^2 - 3t - 4 = 0$.<br><b>Step 4:</b> Factor the equation: $(t-4)(t+1) = 0$. The realistic time of flight is $t = 4\\text{ s}$.<br><b>Step 5:</b> Calculate horizontal distance: $R = u_x t = 15\\sqrt{3} \\times 4 = 60\\sqrt{3}\\text{ m}$."
            },
            {
                "id": "MIP-TEST-115",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Kinematics", "Angle of Projection"],
                "q": "A bomber flying upward at an angle of $53^{\\circ}$ with the vertical releases a bomb at an altitude of 800 m. The bomb strikes the ground 20 s after its release. If $g=10\\text{ m s}^{-2}$, the velocity at the time of release of the bomb in $\\text{ms}^{-1}$ is",
                "options": ["400", "800", "100", "200"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The bomber is flying at $53^{\\circ}$ with the vertical. Therefore, the vertical component of its velocity is $u_y = u \\cos 53^{\\circ} = u(\\frac{3}{5})$.<br><b>Step 2:</b> The bomb inherits this initial vertical velocity. The net vertical displacement is $S_y = -800\\text{ m}$ in $t = 20\\text{ s}$.<br><b>Step 3:</b> Use the kinematic equation: $S_y = u_y t - \\frac{1}{2}gt^2$.<br><b>Step 4:</b> Substitute values: $-800 = u_y(20) - \\frac{1}{2}(10)(20^2) = 20u_y - 2000$.<br><b>Step 5:</b> Solve for $u_y$: $20u_y = 1200 \\implies u_y = 60\\text{ m/s}$.<br><b>Step 6:</b> Substitute $u_y$ back: $u(\\frac{3}{5}) = 60 \\implies u = 100\\text{ m/s}$."
            },
            {
                "id": "MIP-TEST-116",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Relative Velocity", "Orthogonal Vectors"],
                "q": "Two particles move in a uniform gravitational field with an acceleration g. At the initial moment the particles were located at same point and moved with velocities $u_1=9\\text{ m s}^{-1}$ and $u_2=4\\text{ m s}^{-1}$ horizontally in opposite directions. The time between the particles at the moment when their velocity vectors are mutually perpendicular in s is (take $g=10\\text{ m s}^{-2}$)",
                "options": ["0.36", "3.6", "0.6", "6"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Formulate the velocity vectors at time $t$. $\\vec{v}_1 = 9\\hat{i} - 10t\\hat{j}$ and $\\vec{v}_2 = -4\\hat{i} - 10t\\hat{j}$.<br><b>Step 2:</b> For vectors to be mutually perpendicular, their dot product must be zero: $\\vec{v}_1 \\cdot \\vec{v}_2 = 0$.<br><b>Step 3:</b> Perform the dot product: $(9)(-4) + (-10t)(-10t) = 0$.<br><b>Step 4:</b> $-36 + 100t^2 = 0 \\implies 100t^2 = 36$.<br><b>Step 5:</b> Solve for $t$: $t^2 = 0.36 \\implies t = 0.6\\text{ s}$."
            },
            {
                "id": "MIP-TEST-117",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Horizontal Projectile", "Meeting Point"],
                "q": "An aeroplane is flying horizontally at a height of 980 m with velocity $100\\text{ ms}^{-1}$ drops a food packet. A person on the ground is 414 m ahead horizontally from the dropping point. At what velocity should he move so that he can catch the food packet.",
                "options": ["$50\\sqrt{2}\\text{ ms}^{-1}$", "$\\frac{50}{\\sqrt{2}}\\text{ ms}^{-1}$", "$100\\text{ ms}^{-1}$", "$200\\text{ ms}^{-1}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Calculate the time of flight of the packet: $t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2(980)}{9.8}} = \\sqrt{200} = 10\\sqrt{2} \\approx 14.14\\text{ s}$.<br><b>Step 2:</b> Calculate the horizontal range of the packet: $R = ut = 100 \\times 10\\sqrt{2} = 1000\\sqrt{2} \\approx 1414\\text{ m}$.<br><b>Step 3:</b> The person is initially 414m ahead. The distance he must cover to catch the packet is $1414 - 414 = 1000\\text{ m}$.<br><b>Step 4:</b> The velocity he must run at is $v = \\frac{\\text{Distance}}{\\text{Time}} = \\frac{1000}{10\\sqrt{2}} = \\frac{100}{\\sqrt{2}} = 50\\sqrt{2}\\text{ m/s}$."
            },
            {
                "id": "MIP-TEST-118",
                "topic": "Circular Motion",
                "difficulty": 3,
                "tags": ["Centripetal Acceleration", "Tangential Acceleration"],
                "q": "A cyclist riding with a speed of 27kmph. As he approaches a circular turn on the road of radius 80m, he applies breaks and reduces his speed at the constant rate of $0.50\\text{ m/s}$ every second. The net acceleration of cyclist on the circular turn is",
                "options": ["$0.5\\text{ m/s}^2$", "$0.87\\text{ m/s}^2$", "$0.56\\text{ m/s}^2$", "$1\\text{ m/s}^2$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Convert the speed to m/s: $v = 27 \\times \\frac{5}{18} = 7.5\\text{ m/s}$.<br><b>Step 2:</b> The cyclist experiences two accelerations. First is tangential deceleration (braking): $a_t = 0.5\\text{ m/s}^2$.<br><b>Step 3:</b> Second is centripetal acceleration: $a_c = \\frac{v^2}{r} = \\frac{7.5^2}{80} = \\frac{56.25}{80} \\approx 0.703\\text{ m/s}^2$.<br><b>Step 4:</b> The net acceleration is the vector sum: $a = \\sqrt{a_t^2 + a_c^2} = \\sqrt{(0.5)^2 + (0.703)^2}$.<br><b>Step 5:</b> $a = \\sqrt{0.25 + 0.494} = \\sqrt{0.744} \\approx 0.862\\text{ m/s}^2$.<br><b>Step 6:</b> The closest matching option is $0.87\\text{ m/s}^2$."
            },
            {
                "id": "MIP-TEST-119",
                "topic": "Circular Motion",
                "difficulty": 2,
                "tags": ["Angular Velocity", "Linear Speed"],
                "q": "The length of minute hand in a pendulum clock is 10cm. The speed of tip of the hand is (in m/s)",
                "options": ["$\\frac{\\pi}{6000}$", "$\\frac{\\pi}{18000}$", "$\\frac{\\pi}{3600}$", "$\\frac{\\pi}{1200}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> A minute hand completes 1 full revolution ($2\\pi$ radians) every 1 hour.<br><b>Step 2:</b> Convert the time period to seconds: $T = 60 \\times 60 = 3600\\text{ s}$.<br><b>Step 3:</b> Calculate angular velocity: $\\omega = \\frac{2\\pi}{3600} = \\frac{\\pi}{1800}\\text{ rad/s}$.<br><b>Step 4:</b> Calculate linear speed using $v = r\\omega$. Substitute $r = 10\\text{ cm} = 0.1\\text{ m}$.<br><b>Step 5:</b> $v = 0.1 \\times \\frac{\\pi}{1800} = \\frac{\\pi}{18000}\\text{ m/s}$."
            },
            {
                "id": "MIP-TEST-120",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Parametric Equations", "Angle of Projection"],
                "q": "Equations of motion of a projectile are given by $x=36t$ and $2y=96t-98t^2\\text{ m}$. The angle of projection is equal to",
                "options": ["$\\sin^{-1}(\\frac{3}{4})$", "$\\sin^{-1}(\\frac{4}{3})$", "$\\sin^{-1}(\\frac{4}{5})$", "$\\sin^{-1}(\\frac{3}{5})$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Differentiate the horizontal equation to find initial horizontal velocity: $v_x = \\frac{dx}{dt} = 36$. Thus, $u_x = 36\\text{ m/s}$.<br><b>Step 2:</b> Simplify the vertical equation: $y = 48t - 49t^2$.<br><b>Step 3:</b> Differentiate to find initial vertical velocity: $v_y = \\frac{dy}{dt} = 48 - 98t$. At $t=0$, $u_y = 48\\text{ m/s}$.<br><b>Step 4:</b> The angle of projection $\\theta$ is $\\tan\\theta = \\frac{u_y}{u_x} = \\frac{48}{36} = \\frac{4}{3}$.<br><b>Step 5:</b> For a right triangle with opposite = 4 and adjacent = 3, the hypotenuse is 5.<br><b>Step 6:</b> Therefore, $\\sin\\theta = \\frac{4}{5} \\implies \\theta = \\sin^{-1}(\\frac{4}{5})$."
            },
           {
        "id": "MIP-TEST-121",
        "topic": "Addition and Resolution of Vectors",
        "difficulty": 2,
        "tags": ["Vector Addition", "Resultant Angle"],
        "q": "$\\vec{A}$ and $\\vec{B}$ are two vectors of equal magnitude and $\\theta$ is the angle between them. The angle between $\\vec{A}$ or $\\vec{B}$ with their resultant is",
        "options": ["$\\theta/4$", "$\\theta/2$", "$2\\theta$", "0"],
        "correct": 1,
        "sol": "<b>Step 1:</b> Let the magnitude of both vectors be $x$. The angle of the resultant with vector $\\vec{A}$ is given by $\\tan\\alpha = \\frac{B\\sin \\theta}{A + B\\cos \\theta}$.<br><b>Step 2:</b> Substitute $A = B = x$: $\\tan\\alpha = \\frac{x\\sin \\theta}{x + x\\cos \\theta} = \\frac{\\sin \\theta}{1 + \\cos \\theta}$.<br><b>Step 3:</b> Use trigonometric half-angle identities: $\\sin \\theta = 2\\sin(\\theta/2)\\cos(\\theta/2)$ and $1 + \\cos \\theta = 2\\cos^2(\\theta/2)$.<br><b>Step 4:</b> $\\tan\\alpha = \\frac{2\\sin(\\theta/2)\\cos(\\theta/2)}{2\\cos^2(\\theta/2)} = \\tan(\\theta/2)$.<br><b>Step 5:</b> Therefore, $\\alpha = \\theta/2$. The resultant of two vectors of equal magnitude always perfectly bisects the angle between them."
    },
    {
        "id": "MIP-TEST-122",
        "topic": "Projectile Motion",
        "difficulty": 1,
        "tags": ["Velocity at Maximum Height", "Conceptual"],
        "q": "If a body is projected with an angle $\\theta$ to the horizontal then",
        "options": ["its velocity is always perpendicular to its acceleration", "its velocity becomes zero at its maximum height", "its velocity makes zero angle with the horizontal at its maximum height", "just before hitting the ground, the direction of velocity coincides with the acceleration"],
        "correct": 2,
        "sol": "<b>Step 1:</b> Analyze the velocity vector of a projectile throughout its flight.<br><b>Step 2:</b> The horizontal velocity ($u\\cos \\theta$) remains constant, while the vertical velocity ($u\\sin \\theta - gt$) decreases to zero on the way up.<br><b>Step 3:</b> At the maximum height, the vertical component is exactly zero. The only remaining velocity is purely horizontal.<br><b>Step 4:</b> Since the velocity vector is purely horizontal, it makes an angle of $0^{\\circ}$ with the horizontal plane."
    },
            {
        "id": "MIP-TEST-123",
        "topic": "Projectile Motion",
        "difficulty": 3,
        "tags": ["Maximum Range", "Time of Flight"],
        "q": "A body is projected at an angle $\\theta$ so that its range is maximum. If T is the time of flight then the value of maximum range is (acceleration due to gravity = g)",
        "options": ["$\\frac{g^2 T}{2}$", "$\\frac{gT}{2}$", "$\\frac{gT^2}{2}$", "$\\frac{g^2 T^2}{2}$"],
        "correct": 2,
        "sol": "<b>Step 1:</b> For maximum range, the angle of projection must be $\\theta = 45^{\\circ}$.<br><b>Step 2:</b> Write the formula for time of flight: $T = \\frac{2u\\sin 45^{\\circ}}{g} = \\frac{2u(1/\\sqrt{2})}{g} = \\frac{u\\sqrt{2}}{g}$.<br><b>Step 3:</b> Solve for the initial velocity $u$: $u = \\frac{gT}{\\sqrt{2}}$.<br><b>Step 4:</b> Write the formula for maximum range: $R_{max} = \\frac{u^2}{g}$.<br><b>Step 5:</b> Substitute $u$ into the range formula: $R_{max} = \\frac{(gT/\\sqrt{2})^2}{g} = \\frac{g^2 T^2 / 2}{g} = \\frac{gT^2}{2}$."
    },
            {
                "id": "MIP-TEST-124",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Equation of Trajectory", "Maximum Height"],
                "q": "The path of projectile is given by the equation $y=ax-bx^2$, where 'a' and 'b' are constants and x and y are respectively horizontal and vertical distances of projectile from the point of projection. The maximum height attained by the projectile and the angle of projection are respectively.",
                "options": ["$\\frac{2a^2}{b}, \\tan^{-1}(a)$", "$\\frac{b^2}{2a}, \\tan^{-1}(b)$", "$\\frac{a^2}{b}, \\tan^{-1}(2b)$", "$\\frac{a^2}{4b}, \\tan^{-1}(a)$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Compare the given trajectory $y = ax - bx^2$ with the standard form $y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}$.<br><b>Step 2:</b> By comparing the linear terms, $\\tan\\theta = a \\implies \\theta = \\tan^{-1}(a)$.<br><b>Step 3:</b> The maximum height is reached at the vertex of the parabola. We can find the x-coordinate of the vertex by taking the derivative $\\frac{dy}{dx} = 0$.<br><b>Step 4:</b> $\\frac{dy}{dx} = a - 2bx = 0 \\implies x = \\frac{a}{2b}$.<br><b>Step 5:</b> Substitute this x back into the equation to find the maximum height (y): $H = a(\\frac{a}{2b}) - b(\\frac{a}{2b})^2 = \\frac{a^2}{2b} - \\frac{a^2}{4b} = \\frac{a^2}{4b}$."
            },
            {
                "id": "MIP-TEST-125",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Horizontal Projectile", "Velocity Components"],
                "q": "A body is projected horizontally from the top of a tower with a velocity of $10\\text{ m/s}$. If it hits the ground at an angle $45^{\\circ}$, the vertical component of velocity when it hits ground in m/s is",
                "options": ["10", "$10\\sqrt{2}$", "$5\\sqrt{2}$", "5"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The horizontal component of velocity remains constant throughout the flight. Therefore, at the moment of impact, $v_x = u = 10\\text{ m/s}$.<br><b>Step 2:</b> The angle $\\theta$ the velocity vector makes with the ground is given by $\\tan\\theta = \\frac{v_y}{v_x}$.<br><b>Step 3:</b> Substitute the known values: $\\tan 45^{\\circ} = \\frac{v_y}{10}$.<br><b>Step 4:</b> Since $\\tan 45^{\\circ} = 1$, we get $1 = \\frac{v_y}{10} \\implies v_y = 10\\text{ m/s}$."
            },
            {
        "id": "MIP-TEST-126",
        "topic": "Projectile Motion",
        "difficulty": 2,
        "tags": ["Time of Flight", "Maximum Height"],
        "q": "A body is projected with an angle $\\theta$. The maximum height reached is h. If the time of flight is 4 sec and $g=10\\text{ m/s}^2$, then the value of h is",
        "options": ["10 m", "40 m", "20 m", "5 m"],
        "correct": 2,
        "sol": "<b>Step 1:</b> The formula for the time of flight is $T = \\frac{2u\\sin \\theta}{g}$.<br><b>Step 2:</b> Substitute the given values: $4 = \\frac{2u\\sin \\theta}{10} \\implies 40 = 2u\\sin \\theta \\implies u\\sin \\theta = 20\\text{ m/s}$. This is the initial vertical velocity.<br><b>Step 3:</b> The formula for maximum height is $h = \\frac{u^2\\sin^2 \\theta}{2g} = \\frac{(u\\sin \\theta)^2}{2g}$.<br><b>Step 4:</b> Substitute $u\\sin \\theta = 20$ into the height formula: $h = \\frac{20^2}{2(10)} = \\frac{400}{20} = 20\\text{ m}$."
    },
            {
                "id": "MIP-TEST-127",
                "topic": "Relative Velocity in 2D",
                "difficulty": 3,
                "tags": ["River Boat Problem", "Relative Velocity"],
                "q": "A person reaches a point directly opposite on the other bank of a river. The velocity of the water in the river is $4\\text{ m/s}$ and the velocity of the person in still water is $5\\text{ m/s}$. If the width of the river is 84.6 m, time taken to cross the river in seconds is",
                "options": ["9.4", "2", "84.6", "28.2"],
                "correct": 3,
                "sol": "<b>Step 1:</b> To reach the directly opposite point, the person must swim upstream at an angle to cancel out the river's flow.<br><b>Step 2:</b> The effective velocity (perpendicular to the river banks) is $v_y = \\sqrt{v_m^2 - v_r^2}$.<br><b>Step 3:</b> Substitute the speeds: $v_y = \\sqrt{5^2 - 4^2} = \\sqrt{25 - 16} = \\sqrt{9} = 3\\text{ m/s}$.<br><b>Step 4:</b> The time taken to cross is $t = \\frac{\\text{Width}}{v_y}$.<br><b>Step 5:</b> $t = \\frac{84.6}{3} = 28.2\\text{ s}$."
            },
            {
                "id": "MIP-TEST-128",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 3,
                "tags": ["Vector Addition", "Magnitude of Resultant"],
                "q": "The greatest and least resultant of two forces are 7 N and 3 N respectively. If each of the force is increased by 3 N and applied at $60^{\\circ}$, the magnitude of the resultant is",
                "options": ["7 N", "3 N", "10 N", "$\\sqrt{129}\\text{ N}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Set up the equations for greatest (parallel) and least (anti-parallel) resultants: $F_1 + F_2 = 7$ and $F_1 - F_2 = 3$.<br><b>Step 2:</b> Adding them gives $2F_1 = 10 \\implies F_1 = 5\\text{ N}$. Subtracting gives $F_2 = 2\\text{ N}$.<br><b>Step 3:</b> Increase each force by 3N: The new forces are $F_1' = 5+3=8\\text{ N}$ and $F_2' = 2+3=5\\text{ N}$.<br><b>Step 4:</b> Calculate the resultant of these new forces at $60^{\\circ}$: $R = \\sqrt{(F_1')^2 + (F_2')^2 + 2F_1'F_2'\\cos 60^{\\circ}}$.<br><b>Step 5:</b> $R = \\sqrt{8^2 + 5^2 + 2(8)(5)(0.5)} = \\sqrt{64 + 25 + 40} = \\sqrt{129}\\text{ N}$."
            },
            {
                "id": "MIP-TEST-129",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 3,
                "tags": ["Triangle Law", "Vector Geometry"],
                "q": "In an equilateral triangle ABC, AL, BM and CN are medians. Forces along BC and BA represented by them will have a resultant represented by",
                "options": ["$2\\vec{AL}$", "$2\\vec{BM}$", "$2\\vec{CN}$", "$\\vec{AC}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> According to the parallelogram law of vector addition, the resultant of vectors $\\vec{BC}$ and $\\vec{BA}$ is the diagonal of the parallelogram formed by them.<br><b>Step 2:</b> The diagonal starting from B passes precisely through the midpoint of the opposite side AC.<br><b>Step 3:</b> The median from B to the midpoint of AC is defined as $\\vec{BM}$.<br><b>Step 4:</b> By vector geometry, the full diagonal is twice the length of the median to that side: $\\vec{BC} + \\vec{BA} = 2\\vec{BM}$."
            },
            {
                "id": "MIP-TEST-130",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 3,
                "tags": ["Vector Equilibrium", "Geometric Proof"],
                "q": "Given that $\\vec{A}+\\vec{B}+\\vec{C}=0$, out of three vectors two are equal in magnitude and the magnitude of third vector is $\\sqrt{2}$ times that of either of two having equal magnitude. Then angle between vectors are given by",
                "options": ["$30^{\\circ}, 60^{\\circ}, 90^{\\circ}$", "$45^{\\circ}, 150^{\\circ}, 150^{\\circ}$", "$90^{\\circ}, 135^{\\circ}, 150^{\\circ}$", "$90^{\\circ}, 135^{\\circ}, 135^{\\circ}$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Let $|\\vec{A}| = |\\vec{B}| = x$. The third vector has magnitude $|\\vec{C}| = \\sqrt{2}x$.<br><b>Step 2:</b> Since their sum is zero, they form a closed triangle. The side lengths are $x$, $x$, and $\\sqrt{2}x$. This satisfies Pythagoras' theorem ($x^2 + x^2 = 2x^2$), making it a right-angled isosceles triangle.<br><b>Step 3:</b> The internal angles of this triangle are $90^{\\circ}, 45^{\\circ}$, and $45^{\\circ}$.<br><b>Step 4:</b> The angle *between* two vectors is determined when they are placed tail-to-tail. This is the exterior angle of the closed triangle ($180^{\\circ} - \\text{internal angle}$).<br><b>Step 5:</b> The angles between the vectors are $180^{\\circ}-90^{\\circ} = 90^{\\circ}$, $180^{\\circ}-45^{\\circ} = 135^{\\circ}$, and $180^{\\circ}-45^{\\circ} = 135^{\\circ}$."
            },
            {
                "id": "MIP-TEST-131",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 3,
                "tags": ["Equilibrium", "Lami's Theorem"],
                "q": "A and B are the two pegs separated by 13 cm. A body of 169 kgwt is suspended by thread of 17 cm connecting to A & B, such that the two segments of strings are perpendicular. Then tensions in shorter and longer parts of string are",
                "options": ["100 kgwt, 69 kgwt", "65 kgwt, 156 kgwt", "156 kgwt, 65 kgwt", "69 kgwt, 100 kgwt"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Let segments be $x$ and $y$. We know $x+y=17$ and $x^2+y^2=13^2=169$. Solving gives lengths of 5 cm (shorter) and 12 cm (longer).<br><b>Step 2:</b> Let the 12cm string make an angle $\\alpha$ with the horizontal line of the pegs. From the 5-12-13 triangle, $\\cos\\alpha = 12/13$ and $\\sin\\alpha = 5/13$.<br><b>Step 3:</b> The 5cm string makes an angle $(90^{\\circ}-\\alpha)$ with the horizontal.<br><b>Step 4:</b> Apply Lami's theorem or resolve forces horizontally: $T_{long}\\cos\\alpha = T_{short}\\cos(90^{\\circ}-\\alpha) \\implies T_{long}(\\frac{12}{13}) = T_{short}(\\frac{5}{13}) \\implies 12T_{long} = 5T_{short}$.<br><b>Step 5:</b> Resolve vertically: $T_{long}\\sin\\alpha + T_{short}\\sin(90^{\\circ}-\\alpha) = W \\implies T_{long}(\\frac{5}{13}) + T_{short}(\\frac{12}{13}) = 169$.<br><b>Step 6:</b> Substitute $T_{short} = \\frac{12}{5}T_{long}$: $T_{long}(\\frac{5}{13}) + (\\frac{12}{5}T_{long})(\\frac{12}{13}) = 169 \\implies T_{long} \\left( \\frac{25 + 144}{65} \\right) = 169 \\implies T_{long} = 65\\text{ kgwt}$.<br><b>Step 7:</b> Consequently, $T_{short} = 156\\text{ kgwt}$. The shorter string holds the larger tension."
            },
            {
                "id": "MIP-TEST-132",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Velocity Vector", "Parametric Equations"],
                "q": "The position of a particle is given by $\\vec{r}=3t\\hat{i}-2t^2\\hat{j}+4\\hat{k}\\text{ m}$ where t is in second and the co-efficients have proper units for r to be in m. The magnitude and direction of velocity of the particle at $t=2\\text{ s}$ is",
                "options": ["$8.54\\text{ ms}^{-1}, 20^{\\circ}$ with x-axis", "$10.54\\text{ ms}^{-1}, 70^{\\circ}$ with x-axis", "$8.54\\text{ ms}^{-1}, 70^{\\circ}$ with x-axis", "$10.54\\text{ ms}^{-1}, 20^{\\circ}$ with x-axis"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The velocity vector is the time derivative of the position vector: $\\vec{v} = \\frac{d\\vec{r}}{dt} = 3\\hat{i} - 4t\\hat{j}$.<br><b>Step 2:</b> At $t=2\\text{ s}$, the velocity is $\\vec{v} = 3\\hat{i} - 8\\hat{j}$.<br><b>Step 3:</b> Magnitude: $|\\vec{v}| = \\sqrt{3^2 + (-8)^2} = \\sqrt{9 + 64} = \\sqrt{73} \\approx 8.544\\text{ m/s}$.<br><b>Step 4:</b> Direction: The angle $\\theta$ with the x-axis is given by $\\tan\\theta = \\frac{|v_y|}{|v_x|} = \\frac{8}{3} \\approx 2.66$.<br><b>Step 5:</b> Since $\\tan 70^{\\circ} \\approx 2.74$, the angle is roughly $70^{\\circ}$ below the x-axis."
            },
            {
                "id": "MIP-TEST-133",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 3,
                "tags": ["2D Kinematics", "Constant Acceleration"],
                "q": "A particle starts from origin at $t=0$ with a constant velocity $5\\hat{i}\\text{ ms}^{-1}$ and moves in xy plane under action of a force which produces a constant acceleration of $(3\\hat{i}+2\\hat{j})\\text{ ms}^{-2}$. The y - coordinate of the particle at the instant its x co-ordinate is 84 m in m is",
                "options": ["6", "36", "18", "9"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Setup the kinematic equations for x and y components. Initial velocity $u_x = 5$, $u_y = 0$. Acceleration $a_x = 3$, $a_y = 2$.<br><b>Step 2:</b> The x-displacement is $x = u_x t + \\frac{1}{2}a_x t^2 \\implies 84 = 5t + \\frac{1}{2}(3)t^2$.<br><b>Step 3:</b> Multiply by 2 and form a quadratic equation: $3t^2 + 10t - 168 = 0$.<br><b>Step 4:</b> Solve using the quadratic formula: $t = \\frac{-10 \\pm \\sqrt{100 - 4(3)(-168)}}{6} = \\frac{-10 \\pm \\sqrt{2116}}{6} = \\frac{-10 \\pm 46}{6}$. The physical time is $t = \\frac{36}{6} = 6\\text{ s}$.<br><b>Step 5:</b> Use this time to find the y-coordinate: $y = u_y t + \\frac{1}{2}a_y t^2 = 0 + \\frac{1}{2}(2)(6^2) = 36\\text{ m}$."
            },
            {
                "id": "MIP-TEST-134",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 3,
                "tags": ["Relative Motion", "Collision"],
                "q": "Two particles having position vectors $\\vec{r}_1=(3\\hat{i}+5\\hat{j})\\text{ m}$ and $\\vec{r}_2=(-\\hat{i}+3\\hat{j})\\text{ m}$ are moving with velocities $\\vec{v}_1=(4\\hat{i}-4\\hat{j})\\text{ ms}^{-1}$ and $\\vec{v}_2=(a\\hat{i}-3\\hat{j})\\text{ ms}^{-1}$. If they collide after 2 seconds, the value of 'a' is",
                "options": ["2", "4", "6", "8"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Find the position of the first particle after 2s: $\\vec{r}_1(2) = \\vec{r}_1(0) + \\vec{v}_1 t = (3\\hat{i}+5\\hat{j}) + (4\\hat{i}-4\\hat{j})2 = (3+8)\\hat{i} + (5-8)\\hat{j} = 11\\hat{i} - 3\\hat{j}$.<br><b>Step 2:</b> Find the position of the second particle after 2s: $\\vec{r}_2(2) = \\vec{r}_2(0) + \\vec{v}_2 t = (-\\hat{i}+3\\hat{j}) + (a\\hat{i}-3\\hat{j})2 = (-1+2a)\\hat{i} + (3-6)\\hat{j} = (2a-1)\\hat{i} - 3\\hat{j}$.<br><b>Step 3:</b> For a collision to occur, their final position vectors must be identical: $11\\hat{i} - 3\\hat{j} = (2a-1)\\hat{i} - 3\\hat{j}$.<br><b>Step 4:</b> Equate the x-components: $11 = 2a - 1 \\implies 2a = 12$.<br><b>Step 5:</b> Solving for $a$ gives $a = 6$."
            },
            {
                "id": "MIP-TEST-135",
                "topic": "Addition and Resolution of Vectors",
                "difficulty": 2,
                "tags": ["Parametric Equations", "Roots"],
                "q": "A body is projected up such that its position vector varies with time as $\\vec{r}=(3t\\hat{i}+(4t-5t^2)\\hat{j})\\text{ m}$. Here t is in second. The time when its y-coordinate is zero is",
                "options": ["3 s", "1 s", "0.8 s", "1.25 s"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Extract the y-component from the position vector: $y = 4t - 5t^2$.<br><b>Step 2:</b> To find when the y-coordinate is zero, set the equation to zero: $4t - 5t^2 = 0$.<br><b>Step 3:</b> Factor out $t$: $t(4 - 5t) = 0$.<br><b>Step 4:</b> The roots are $t = 0\\text{ s}$ (the initial launch time) and $4 - 5t = 0$.<br><b>Step 5:</b> Solve for the later time: $5t = 4 \\implies t = \\frac{4}{5} = 0.8\\text{ s}$."
            },
            {
                "id": "MIP-TEST-136",
                "topic": "Relative Velocity in 2D",
                "difficulty": 2,
                "tags": ["Vector Addition", "Relative Speed"],
                "q": "An aeroplane is flying with the velocity of $V_1=800\\text{ kmph}$ relative to the air towards south. A wind with velocity of $V_2=15\\text{ ms}^{-1}$ is blowing from west to east. What is the velocity of the aeroplane with respect to the earth.",
                "options": ["$221.7\\text{ ms}^{-1}$", "$150\\text{ ms}^{-1}$", "$82\\text{ ms}^{-1}$", "$40\\text{ ms}^{-1}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Velocity of plane relative to air is $\\vec{v}_{pa} = 800\\text{ kmph}$ South. Convert to m/s: $800 \\times \\frac{5}{18} = 222.22\\text{ m/s}$. So, $\\vec{v}_{pa} = -222.22\\hat{j}$.<br><b>Step 2:</b> Velocity of air (wind) relative to earth is $\\vec{v}_{ae} = 15\\hat{i}\\text{ m/s}$ (East).<br><b>Step 3:</b> The true velocity of the plane relative to the earth is $\\vec{v}_{pe} = \\vec{v}_{pa} + \\vec{v}_{ae} = 15\\hat{i} - 222.22\\hat{j}$.<br><b>Step 4:</b> Calculate the magnitude: $|\\vec{v}_{pe}| = \\sqrt{15^2 + (-222.22)^2} = \\sqrt{225 + 49381.7} = \\sqrt{49606.7}$.<br><b>Step 5:</b> $|\\vec{v}_{pe}| \\approx 222.7\\text{ m/s}$. The closest given option is $221.7\\text{ ms}^{-1}$."
            },
            {
                "id": "MIP-TEST-137",
                "topic": "Relative Velocity in 2D",
                "difficulty": 2,
                "tags": ["River Boat Problem", "Downstream and Upstream"],
                "q": "A boat takes 4 hr upstream and 2 hr down the stream for covering the same distance. The ratio of velocity of boat to the water in river is.",
                "options": ["1:3", "3:1", "$1:\\sqrt{3}$", "$\\sqrt{3}:1$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Let the boat's velocity be $v$ and the river's velocity be $u$. Downstream speed is $v+u$ and upstream speed is $v-u$.<br><b>Step 2:</b> Time downstream is $t_d = \\frac{d}{v+u} = 2$. Time upstream is $t_u = \\frac{d}{v-u} = 4$.<br><b>Step 3:</b> From these, $d = 2(v+u)$ and $d = 4(v-u)$.<br><b>Step 4:</b> Equate the distances: $2(v+u) = 4(v-u) \\implies v + u = 2v - 2u$.<br><b>Step 5:</b> Rearrange the equation: $3u = v \\implies \\frac{v}{u} = \\frac{3}{1}$.<br><b>Step 6:</b> The ratio is 3:1."
            },
            {
                "id": "MIP-TEST-138",
                "topic": "Relative Velocity in 2D",
                "difficulty": 2,
                "tags": ["River Boat Problem", "Displacement Vector"],
                "q": "The width of a river is $2\\sqrt{3}\\text{ km}$. A boat is rowed in direction perpendicular to the banks of river. If the drift of the boat due to flow is 2 km, the displacement of the boat is.",
                "options": ["3 km", "6 km", "5 km", "4 km"],
                "correct": 3,
                "sol": "<b>Step 1:</b> The boat undergoes two independent motions: it crosses the river width and it drifts downstream.<br><b>Step 2:</b> The width of the river is the vertical displacement: $y = 2\\sqrt{3}\\text{ km}$.<br><b>Step 3:</b> The drift is the horizontal displacement: $x = 2\\text{ km}$.<br><b>Step 4:</b> Since the drift is perpendicular to the width, the total displacement $S$ is the hypotenuse: $S = \\sqrt{x^2 + y^2}$.<br><b>Step 5:</b> Substitute values: $S = \\sqrt{2^2 + (2\\sqrt{3})^2} = \\sqrt{4 + 4(3)} = \\sqrt{4 + 12} = \\sqrt{16}$.<br><b>Step 6:</b> The total displacement is 4 km."
            },
            {
                "id": "MIP-TEST-139",
                "topic": "Relative Velocity in 2D",
                "difficulty": 3,
                "tags": ["River Boat Problem", "Vector Resolution"],
                "q": "Person aiming to reach the exactly opposite point on the bank of a stream is swimming with a speed of $0.5\\text{ ms}^{-1}$ at an angle of $120^{\\circ}$ with the direction of flow of water. The speed of water in the stream is",
                "options": ["$1\\text{ ms}^{-1}$", "$0.25\\text{ ms}^{-1}$", "$0.67\\text{ ms}^{-1}$", "$3\\text{ ms}^{-1}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> An angle of $120^{\\circ}$ with the river flow means the person is swimming upstream at an angle of $120^{\\circ} - 90^{\\circ} = 30^{\\circ}$ with respect to the normal (perpendicular line to the banks).<br><b>Step 2:</b> To reach the exactly opposite point, the swimmer's upstream velocity component must perfectly balance the downstream river velocity.<br><b>Step 3:</b> The upstream component is $v_{swim} \\sin(30^{\\circ})$. Set it equal to $v_{river}$.<br><b>Step 4:</b> $0.5 \\sin(30^{\\circ}) = v_{river}$.<br><b>Step 5:</b> Since $\\sin(30^{\\circ}) = 0.5$, we get $v_{river} = 0.5 \\times 0.5 = 0.25\\text{ m/s}$."
            },
            {
                "id": "MIP-TEST-140",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Trajectory", "Kinematics"],
                "q": "A particle projected from the level ground just clears in its ascent a wall 30 m high and $120\\sqrt{3}\\text{ m}$ away measured horizontally. The time since projection to clear the wall is two second. It will strike the ground in the same horizontal plane from the wall on the other side at a distance of (in metres)",
                "options": ["$150\\sqrt{3}$", "$180\\sqrt{3}$", "$120\\sqrt{3}$", "$210\\sqrt{3}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Use the horizontal data to find $u_x$: $x = u_x t \\implies 120\\sqrt{3} = u_x(2) \\implies u_x = 60\\sqrt{3}\\text{ m/s}$.<br><b>Step 2:</b> Use the vertical data to find $u_y$: $y = u_y t - \\frac{1}{2}gt^2 \\implies 30 = u_y(2) - \\frac{1}{2}(10)(2^2)$.<br><b>Step 3:</b> $30 = 2u_y - 20 \\implies 50 = 2u_y \\implies u_y = 25\\text{ m/s}$.<br><b>Step 4:</b> Calculate the total time of flight $T = \\frac{2u_y}{g} = \\frac{2(25)}{10} = 5\\text{ s}$.<br><b>Step 5:</b> Calculate the total horizontal range $R = u_x T = 60\\sqrt{3} \\times 5 = 300\\sqrt{3}\\text{ m}$.<br><b>Step 6:</b> The distance from the wall to the landing point is $R - x = 300\\sqrt{3} - 120\\sqrt{3} = 180\\sqrt{3}\\text{ m}$."
            },
            {
                "id": "MIP-TEST-141",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Average Velocity", "Displacement"],
                "q": "A stone is projected with a velocity $20\\sqrt{2}\\text{ m/s}$ at an angle of $45^{\\circ}$ to the horizontal. The average velocity of stone during its motion from starting point to its maximum height is $(g=10\\text{ m/s}^2)$",
                "options": ["$10\\sqrt{5}\\text{ m/s}$", "$20\\sqrt{5}\\text{ m/s}$", "$5\\sqrt{5}\\text{ m/s}$", "$20\\text{ m/s}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Calculate components: $u_x = 20\\sqrt{2}\\cos 45^{\\circ} = 20\\text{ m/s}$ and $u_y = 20\\sqrt{2}\\sin 45^{\\circ} = 20\\text{ m/s}$.<br><b>Step 2:</b> Time to max height $t = \\frac{u_y}{g} = \\frac{20}{10} = 2\\text{ s}$.<br><b>Step 3:</b> Maximum height $H = \\frac{u_y^2}{2g} = \\frac{400}{20} = 20\\text{ m}$.<br><b>Step 4:</b> Horizontal distance to max height $x = u_x t = 20(2) = 40\\text{ m}$.<br><b>Step 5:</b> Total displacement $S = \\sqrt{x^2 + H^2} = \\sqrt{40^2 + 20^2} = \\sqrt{1600 + 400} = \\sqrt{2000} = 20\\sqrt{5}\\text{ m}$.<br><b>Step 6:</b> Average velocity $v_{avg} = \\frac{S}{t} = \\frac{20\\sqrt{5}}{2} = 10\\sqrt{5}\\text{ m/s}$."
            },
            {
                "id": "MIP-TEST-142",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Orthogonal Vectors", "Velocity Change"],
                "q": "A ball is thrown with velocity $8\\text{ ms}^{-1}$ making an angle $60^{\\circ}$ with the horizontal. Its velocity will be perpendicular to the direction of initial velocity of projection after a time of",
                "options": ["$\\frac{1.6}{\\sqrt{3}}\\text{ s}$", "$\\frac{4}{\\sqrt{3}}\\text{ s}$", "$0.6\\text{ s}$", "$1.6\\sqrt{3}\\text{ s}$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Initial velocity $\\vec{u} = u\\cos\\theta\\hat{i} + u\\sin\\theta\\hat{j}$. Velocity at time $t$ is $\\vec{v} = u\\cos\\theta\\hat{i} + (u\\sin\\theta - gt)\\hat{j}$.<br><b>Step 2:</b> For $\\vec{v}$ to be perpendicular to $\\vec{u}$, their dot product must be zero: $\\vec{u} \\cdot \\vec{v} = 0$.<br><b>Step 3:</b> $u^2\\cos^2\\theta + u\\sin\\theta(u\\sin\\theta - gt) = 0 \\implies u^2\\cos^2\\theta + u^2\\sin^2\\theta - ugt\\sin\\theta = 0$.<br><b>Step 4:</b> $u^2(1) = ugt\\sin\\theta \\implies t = \\frac{u}{g\\sin\\theta}$.<br><b>Step 5:</b> Substitute the values: $t = \\frac{8}{10\\sin 60^{\\circ}} = \\frac{8}{10(\\sqrt{3}/2)} = \\frac{16}{10\\sqrt{3}} = \\frac{1.6}{\\sqrt{3}}\\text{ s}$."
            },
            {
                "id": "MIP-TEST-143",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Range Calculation", "Kinematics"],
                "q": "The range of a projectile, when launched at an angle of $15^{\\circ}$ with the horizontal is 1.5km. The additional horizontal distance the projectile would cover when projected with same velocity at $45^{\\circ}$ is",
                "options": ["3 km", "4.5 km", "1.5 km", "2.5 km"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The range formula is $R = \\frac{u^2\\sin 2\\theta}{g}$.<br><b>Step 2:</b> Substitute $\\theta = 15^{\\circ}$: $R_{15} = \\frac{u^2\\sin 30^{\\circ}}{g} = 1.5\\text{ km}$.<br><b>Step 3:</b> Since $\\sin 30^{\\circ} = 0.5$, we have $\\frac{u^2}{g}(0.5) = 1.5 \\implies \\frac{u^2}{g} = 3.0\\text{ km}$.<br><b>Step 4:</b> Calculate range at $45^{\\circ}$: $R_{45} = \\frac{u^2\\sin 90^{\\circ}}{g} = \\frac{u^2}{g}(1) = 3.0\\text{ km}$.<br><b>Step 5:</b> The *additional* horizontal distance covered is $R_{45} - R_{15} = 3.0 - 1.5 = 1.5\\text{ km}$."
            },
            {
                "id": "MIP-TEST-144",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Linear Momentum", "Impulse"],
                "q": "A body is projected obliquely from the ground such that its horizontal range is maximum. If the change in its linear momentum, as it moves from half the maximum height to maximum height, is P, the change in its linear momentum as it travels from the point of projection to the landing point on the ground will be",
                "options": ["P", "$\\sqrt{2}P$", "2 P", "$2\\sqrt{2}P$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> For maximum range, $\\theta = 45^{\\circ}$. The horizontal momentum is constant, so only vertical momentum changes.<br><b>Step 2:</b> Vertical velocity at half max height ($H/2$): $v_{y1}^2 = u_y^2 - 2g(H/2)$. Since $H = \\frac{u_y^2}{2g}$, $v_{y1}^2 = u_y^2 - g(\\frac{u_y^2}{2g}) = \\frac{u_y^2}{2}$. Thus, $v_{y1} = \\frac{u_y}{\\sqrt{2}}$.<br><b>Step 3:</b> Vertical velocity at max height is $v_{y2} = 0$.<br><b>Step 4:</b> Magnitude of change in momentum $P = |m(0) - m(v_{y1})| = \\frac{mu_y}{\\sqrt{2}} = \\frac{mu\\sin 45^{\\circ}}{\\sqrt{2}} = \\frac{mu(1/\\sqrt{2})}{\\sqrt{2}} = \\frac{mu}{2}$.<br><b>Step 5:</b> Total change in momentum from launch to landing is strictly vertical: $\\Delta p_{total} = |m(-u_y) - m(u_y)| = 2mu_y = 2mu\\sin 45^{\\circ} = 2mu(1/\\sqrt{2}) = mu\\sqrt{2}$.<br><b>Step 6:</b> Substitute $mu = 2P$ into the total change: $\\Delta p_{total} = (2P)\\sqrt{2} = 2\\sqrt{2}P$."
            },
            {
        "id": "MIP-TEST-145",
        "topic": "Projectile Motion",
        "difficulty": 2,
        "tags": ["Time of Flight", "Maximum Height"],
        "q": "A projectile is thrown at angle $\\theta$ with vertical. It reaches a maximum height H. The time taken to reach the highest point of its path is",
        "options": ["$\\sqrt{\\frac{H}{g}}$", "$\\sqrt{\\frac{2H}{g}}$", "$\\sqrt{\\frac{H}{2g}}$", "$\\sqrt{\\frac{2H}{g \\cos \\theta}}$"],
        "correct": 1,
        "sol": "<b>Step 1:</b> The maximum height depends only on the initial vertical velocity: $H = \\frac{u_y^2}{2g}$.<br><b>Step 2:</b> Rearrange to solve for the initial vertical velocity: $u_y = \\sqrt{2gH}$.<br><b>Step 3:</b> The time taken to reach the highest point is when vertical velocity becomes zero: $v_y = u_y - gt = 0 \\implies t = \\frac{u_y}{g}$.<br><b>Step 4:</b> Substitute $u_y$ into the time equation: $t = \\frac{\\sqrt{2gH}}{g} = \\sqrt{\\frac{2H}{g}}$.<br><b>Step 5:</b> Note that this relation holds perfectly regardless of the angle of projection."
    },
            {
                "id": "MIP-TEST-146",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Maximum Height", "Proportionality"],
                "q": "The maximum height attained by a projectile is increased by 5%. Keeping the angle of projection constant, What is the percentage increase in horizontal range?",
                "options": ["5%", "10%", "15%", "20%"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The formula for maximum height is $H = \\frac{u^2\\sin^2\\theta}{2g}$.<br><b>Step 2:</b> The formula for horizontal range is $R = \\frac{u^2\\sin 2\\theta}{g}$.<br><b>Step 3:</b> If the angle of projection $\\theta$ is kept constant, both $H$ and $R$ are directly proportional to $u^2$.<br><b>Step 4:</b> Because $H \\propto u^2$ and $R \\propto u^2$, it follows that $R$ is directly proportional to $H$ ($R \\propto H$).<br><b>Step 5:</b> Therefore, a 5% increase in the maximum height $H$ corresponds exactly to a 5% increase in the horizontal range $R$."
            },
            {
                "id": "MIP-TEST-147",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Maximum Range", "Area Calculation"],
                "q": "A gardener wants to wet the garden without moving from his place with a water jet whose velocity is 20 m/s. the maximum area that he can wet $(g=10\\text{ m s}^{-2})$ (in metre$^2$)",
                "options": ["$1600\\pi$", "$40\\pi$", "$400\\pi$", "$200\\pi$"],
                "correct": 0,
                "sol": "<b>Step 1:</b> The maximum distance the water can reach is the maximum horizontal range of a projectile: $R_{max} = \\frac{u^2}{g}$.<br><b>Step 2:</b> Substitute the values: $R_{max} = \\frac{20^2}{10} = \\frac{400}{10} = 40\\text{ m}$.<br><b>Step 3:</b> The gardener can rotate 360 degrees, sweeping out a circular area with radius $R_{max}$.<br><b>Step 4:</b> The maximum area is $A = \\pi R_{max}^2$.<br><b>Step 5:</b> Substitute the radius: $A = \\pi (40)^2 = 1600\\pi\\text{ m}^2$."
            },
            {
        "id": "MIP-TEST-148",
        "topic": "Projectile Motion",
        "difficulty": 3,
        "tags": ["Radius of Curvature", "Trajectory"],
        "q": "A particle is projected with speed u at angle $\\theta$ to the horizontal. find the radius of curvature at highest point of its trajectory",
        "options": ["$\\frac{u^2\\cos^2\\theta}{2g}$", "$\\frac{\\sqrt{3}u^2\\cos^2\\theta}{2g}$", "$\\frac{u^2\\cos^2\\theta}{g}$", "$\\frac{\\sqrt{3}u^2\\cos^2\\theta}{g}$"],
        "correct": 2,
        "sol": "<b>Step 1:</b> The radius of curvature $\\rho$ is defined by $\\rho = \\frac{v^2}{a_n}$, where $v$ is the instantaneous speed and $a_n$ is the acceleration normal (perpendicular) to the velocity.<br><b>Step 2:</b> At the highest point, the velocity is entirely horizontal: $v = u\\cos \\theta$.<br><b>Step 3:</b> Also at the highest point, the acceleration due to gravity $g$ is pointing vertically down, which is strictly perpendicular to the horizontal velocity. Thus, $a_n = g$.<br><b>Step 4:</b> Substitute these into the formula: $\\rho = \\frac{(u\\cos \\theta)^2}{g} = \\frac{u^2\\cos^2 \\theta}{g}$."
    },
            {
                "id": "MIP-TEST-149",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Horizontal Projectile", "Relative Distance"],
                "q": "From the top of a tower of height 78.4 m two stones are projected horizontally with $10\\text{ m/s}$ and $20\\text{ m/s}$ in opposite directions. On reaching the ground, their separation is",
                "options": ["120 m", "100 m", "200 m", "150 m"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Both stones are projected horizontally from the same height, so they will share the exact same time of flight.<br><b>Step 2:</b> Calculate time of flight: $t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2(78.4)}{9.8}} = \\sqrt{16} = 4\\text{ s}$.<br><b>Step 3:</b> Calculate range of stone 1 (left): $R_1 = u_1 t = 10 \\times 4 = 40\\text{ m}$.<br><b>Step 4:</b> Calculate range of stone 2 (right): $R_2 = u_2 t = 20 \\times 4 = 80\\text{ m}$.<br><b>Step 5:</b> Since they were thrown in opposite directions, their total separation is $R_1 + R_2 = 40 + 80 = 120\\text{ m}$."
            },
            {
                "id": "MIP-TEST-150",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Conservation of Momentum", "Vector Dot Product"],
                "q": "A body is projected vertically upwards. At its highest point it explodes into two pieces of masses in the ratio of 2:3 and the lighter piece flies horizontally with a velocity of $6\\text{ ms}^{-1}$. The time after which the lines joining the point of explosion to the position of particles are perpendicular to each other is",
                "options": ["$\\sqrt{\\frac{6}{25}}\\text{s}$", "$\\sqrt{\\frac{12}{15}}\\text{s}$", "$\\sqrt{\\frac{24}{25}}\\text{s}$", "$2\\text{ s}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> At the highest point, initial momentum is zero. Apply conservation of momentum for the explosion: $2m(6) + 3m(v_2) = 0 \\implies v_2 = -4\\text{ m/s}$. The heavier piece moves horizontally in the opposite direction.<br><b>Step 2:</b> After explosion, both pieces are projectiles under gravity. Let the explosion point be the origin.<br><b>Step 3:</b> Position vector of lighter piece: $\\vec{r}_1 = 6t\\hat{i} - \\frac{1}{2}gt^2\\hat{j}$.<br><b>Step 4:</b> Position vector of heavier piece: $\\vec{r}_2 = -4t\\hat{i} - \\frac{1}{2}gt^2\\hat{j}$.<br><b>Step 5:</b> For the position vectors to be perpendicular, their dot product must be zero: $\\vec{r}_1 \\cdot \\vec{r}_2 = 0$.<br><b>Step 6:</b> $(6t)(-4t) + (-\\frac{1}{2}gt^2)(-\\frac{1}{2}gt^2) = 0 \\implies -24t^2 + \\frac{1}{4}g^2 t^4 = 0$.<br><b>Step 7:</b> Since $t \\neq 0$, we get $\\frac{1}{4}g^2 t^2 = 24 \\implies t^2 = \\frac{96}{g^2}$. Taking $g=10$, $t^2 = \\frac{96}{100} = \\frac{24}{25} \\implies t = \\sqrt{\\frac{24}{25}}\\text{ s}$."
            },
            {
                "id": "MIP-TEST-166",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Horizontal Projectile", "Kinematics"],
                "q": "From the top of a building 80 m high, a ball is thrown horizontally which hits the ground at a distance. The line joining the top of the building to the point where it hits the ground makes an angle of $45^{\\circ}$ with the ground. Initial velocity of projection of the ball is $(g=10\\text{ m/s}^{2})$",
                "options": ["10 m/s", "15 m/s", "20 m/s", "30 m/s"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The height of the building is $h = 80\\text{ m}$. The line of sight to the landing point makes $45^{\\circ}$ with the ground. Thus, the horizontal range $R$ equals the height: $\\tan 45^{\\circ} = \\frac{h}{R} \\implies R = 80\\text{ m}$.<br><b>Step 2:</b> Calculate the time of flight for a horizontal projectile: $t = \\sqrt{\\frac{2h}{g}}$.<br><b>Step 3:</b> Substitute the values: $t = \\sqrt{\\frac{2(80)}{10}} = \\sqrt{16} = 4\\text{ s}$.<br><b>Step 4:</b> The horizontal velocity is constant: $u = \\frac{R}{t}$.<br><b>Step 5:</b> Substitute the values: $u = \\frac{80\\text{ m}}{4\\text{ s}} = 20\\text{ m/s}$."
            },
            {
                "id": "MIP-TEST-167",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Time of Flight", "Quadratic Equation"],
                "q": "A stone is thrown from the top of a tower of height 50 m with a velocity of $30\\text{ ms}^{-1}$ at an angle of $30^{\\circ}$ above the horizontal. Find the time during which the stone will be in air $(g=10\\text{ m/s}^{2})$",
                "options": ["2 sec", "3 sec", "4 sec", "5 sec"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Set up the origin at the top of the tower. The ground is at a vertical displacement $S_y = -50\\text{ m}$.<br><b>Step 2:</b> Initial vertical velocity $u_y = u\\sin 30^{\\circ} = 30(0.5) = 15\\text{ m/s}$.<br><b>Step 3:</b> Use the kinematic equation: $S_y = u_y t - \\frac{1}{2}gt^2$.<br><b>Step 4:</b> Substitute values: $-50 = 15t - 5t^2$.<br><b>Step 5:</b> Divide by 5 and rearrange into a standard quadratic equation: $t^2 - 3t - 10 = 0$.<br><b>Step 6:</b> Factor the equation: $(t - 5)(t + 2) = 0$. Since time must be positive, $t = 5\\text{ sec}$."
            },
            {
                "id": "MIP-TEST-168",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Time of Flight", "Relative Kinematics"],
                "q": "From the top of a tower 40 m high a ball is projected upwards with a speed of $20\\text{ ms}^{-1}$ at an angle $30^{\\circ}$ with the horizontal. The ratio of the total time of flight to hit the ground to the time taken by it to come back to the same initial elevation is $(g=10\\text{ ms}^{-2})$",
                "options": ["2:1", "3:1", "3:2", "4:1"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Initial vertical velocity $u_y = 20\\sin 30^{\\circ} = 10\\text{ m/s}$.<br><b>Step 2:</b> The time taken to return to the *same elevation* is the standard time of flight on flat ground: $t_1 = \\frac{2u_y}{g} = \\frac{2(10)}{10} = 2\\text{ s}$.<br><b>Step 3:</b> To find the total time $t_2$ to hit the ground (displacement $S_y = -40\\text{ m}$), use the equation: $-40 = 10t_2 - 5t_2^2$.<br><b>Step 4:</b> Rearrange and divide by 5: $t_2^2 - 2t_2 - 8 = 0 \\implies (t_2 - 4)(t_2 + 2) = 0$.<br><b>Step 5:</b> The physical total time is $t_2 = 4\\text{ s}$.<br><b>Step 6:</b> The required ratio is $t_2 : t_1 = 4 : 2 = 2:1$."
            },
            {
                "id": "MIP-TEST-169",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Horizontal Projectile", "Displacement Vector"],
                "q": "A body is thrown horizontally with a velocity u from the top of a tower. The displacement of the stone when the horizontal and vertical velocities are equal is",
                "options": ["$\\frac{u^{2}}{g}$", "$\\frac{u^{2}}{2g}$", "$\\sqrt{5}(\\frac{u^{2}}{2g})$", "$\\frac{2u^{2}}{g}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Horizontal velocity is constant: $v_x = u$. Vertical velocity increases from zero: $v_y = gt$.<br><b>Step 2:</b> We are looking for the moment when $v_x = v_y$, so $u = gt \\implies t = \\frac{u}{g}$.<br><b>Step 3:</b> Calculate horizontal displacement at this time: $x = ut = u\\left(\\frac{u}{g}\\right) = \\frac{u^2}{g}$.<br><b>Step 4:</b> Calculate vertical displacement at this time: $y = \\frac{1}{2}gt^2 = \\frac{1}{2}g\\left(\\frac{u}{g}\\right)^2 = \\frac{u^2}{2g}$.<br><b>Step 5:</b> Total displacement $S = \\sqrt{x^2 + y^2} = \\sqrt{\\left(\\frac{u^2}{g}\\right)^2 + \\left(\\frac{u^2}{2g}\\right)^2} = \\frac{u^2}{g}\\sqrt{1 + \\frac{1}{4}}$.<br><b>Step 6:</b> $S = \\frac{u^2}{g}\\sqrt{\\frac{5}{4}} = \\frac{\\sqrt{5}u^2}{2g} = \\sqrt{5}\\left(\\frac{u^2}{2g}\\right)$."
            },
            {
                "id": "MIP-TEST-170",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Angular Velocity", "Highest Point"],
                "q": "A ball is projected with $20\\sqrt{2}\\text{ m/s}$ at angle $45^{\\circ}$ with horizontal. The angular velocity of the particle at highest point of its journey about point of projection is $(g=10\\text{ m/s}^{2})$",
                "options": ["$0.1\\text{ rad/s}$", "$0.2\\text{ rad/s}$", "$0.3\\text{ rad/s}$", "$0.4\\text{ rad/s}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Calculate initial components: $u_x = 20\\sqrt{2}\\cos 45^{\\circ} = 20\\text{ m/s}$ and $u_y = 20\\sqrt{2}\\sin 45^{\\circ} = 20\\text{ m/s}$.<br><b>Step 2:</b> At the highest point, the velocity is entirely horizontal: $\\vec{v} = 20\\hat{i}$.<br><b>Step 3:</b> The position of the highest point is $(x, y) = (\\frac{R}{2}, H)$. $H = \\frac{u_y^2}{2g} = \\frac{400}{20} = 20\\text{ m}$. $\\frac{R}{2} = \\frac{u_x u_y}{g} = \\frac{400}{10} = 40\\text{ m}$. Thus, $\\vec{r} = 40\\hat{i} + 20\\hat{j}$.<br><b>Step 4:</b> Angular velocity is $\\omega = \\frac{|\\vec{r} \\times \\vec{v}|}{r^2}$.<br><b>Step 5:</b> $|\\vec{r} \\times \\vec{v}| = |(40\\hat{i} + 20\\hat{j}) \\times (20\\hat{i})| = |-400\\hat{k}| = 400$.<br><b>Step 6:</b> $r^2 = 40^2 + 20^2 = 1600 + 400 = 2000$.<br><b>Step 7:</b> $\\omega = \\frac{400}{2000} = 0.2\\text{ rad/s}$."
            },
            {
                "id": "MIP-TEST-171",
                "topic": "Circular Motion",
                "difficulty": 3,
                "tags": ["Total Acceleration", "Coordinate Geometry"],
                "q": "A particle is moving along a circular path of radius 2m in xy-plane. When it crosses x-axis, it has an acceleration along the path of $1.5\\text{ m/s}^{2}$ and is moving with a speed of $10\\text{ m/s}$ in -ve y-direction. The total acceleration is",
                "options": ["$50\\hat{i}-1.5\\hat{j}\\text{ m/s}^{2}$", "$10\\hat{i}-1.5\\hat{j}\\text{ m/s}^{2}$", "$-50\\hat{i}-1.5\\hat{j}\\text{ m/s}^{2}$", "$1.5\\hat{i}-50\\hat{j}\\text{ m/s}^{2}$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The particle is crossing the positive x-axis (since it's moving in -ve y-direction around the origin). Its centripetal acceleration is directed *towards the center* (the origin), which is the negative x-direction: $\\vec{a}_c = -\\frac{v^2}{R}\\hat{i}$.<br><b>Step 2:</b> Substitute values: $\\vec{a}_c = -\\frac{10^2}{2}\\hat{i} = -\\frac{100}{2}\\hat{i} = -50\\hat{i}\\text{ m/s}^2$.<br><b>Step 3:</b> The tangential acceleration is along the path. Since it is moving in the negative y-direction, the path direction is $-\\hat{j}$. Thus, $\\vec{a}_t = -1.5\\hat{j}\\text{ m/s}^2$.<br><b>Step 4:</b> The total acceleration is the vector sum: $\\vec{a} = \\vec{a}_c + \\vec{a}_t = -50\\hat{i} - 1.5\\hat{j}\\text{ m/s}^2$."
            },
            {
                "id": "MIP-TEST-172",
                "topic": "Circular Motion",
                "difficulty": 1,
                "tags": ["Linear Speed", "Frequency"],
                "q": "An insect trapped in a circular groove of radius 12 cm moves along the groove steadily and complete 7 revolutions in 100 seconds. The linear speed of the motion in cm/s is",
                "options": ["5.3", "4", "3", "5"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Calculate the total distance covered in 7 revolutions: $D = 7 \\times 2\\pi R$.<br><b>Step 2:</b> Substitute $R = 12\\text{ cm}$: $D = 14\\pi(12) = 168\\pi\\text{ cm}$.<br><b>Step 3:</b> Calculate linear speed $v = \\frac{D}{t} = \\frac{168\\pi}{100}$.<br><b>Step 4:</b> Use the approximation $\\pi \\approx \\frac{22}{7}$ to simplify: $v \\approx \\frac{168 \\times 22}{7 \\times 100} = \\frac{24 \\times 22}{100}$.<br><b>Step 5:</b> $v = \\frac{528}{100} = 5.28\\text{ cm/s}$, which is approximately $5.3\\text{ cm/s}$."
            },
            {
                "id": "MIP-TEST-173",
                "topic": "Circular Motion",
                "difficulty": 2,
                "tags": ["Angular Velocity", "Linear Speed"],
                "q": "The length of minute hand in a pendulum clock is 10cm. The speed of tip of the hand is (in m/s)",
                "options": ["$\\frac{\\pi}{6000}$", "$\\frac{\\pi}{18000}$", "$\\frac{\\pi}{3600}$", "$\\frac{\\pi}{1200}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> A minute hand completes 1 full revolution ($2\\pi$ radians) every 60 minutes (1 hour).<br><b>Step 2:</b> Convert the time period to seconds: $T = 60 \\times 60 = 3600\\text{ s}$.<br><b>Step 3:</b> Calculate angular velocity: $\\omega = \\frac{2\\pi}{3600} = \\frac{\\pi}{1800}\\text{ rad/s}$.<br><b>Step 4:</b> Calculate linear speed using $v = r\\omega$. Convert radius to meters: $r = 10\\text{ cm} = 0.1\\text{ m}$.<br><b>Step 5:</b> $v = 0.1 \\times \\frac{\\pi}{1800} = \\frac{\\pi}{18000}\\text{ m/s}$."
            },
            {
                "id": "MIP-TEST-174",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Parametric Equations", "Angle of Projection"],
                "q": "Equations of motion of a projectile are given by $x=36t$ and $2y=96t-98t^2\\text{ m}$. The angle of projection is equal to",
                "options": ["$\\sin^{-1}(\\frac{3}{4})$", "$\\sin^{-1}(\\frac{4}{3})$", "$\\sin^{-1}(\\frac{4}{5})$", "$\\sin^{-1}(\\frac{3}{5})$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Differentiate the horizontal equation to find the initial horizontal velocity: $v_x = \\frac{dx}{dt} = 36$. Thus, $u_x = 36\\text{ m/s}$.<br><b>Step 2:</b> Simplify the vertical equation: $y = 48t - 49t^2$.<br><b>Step 3:</b> Differentiate to find initial vertical velocity: $v_y = \\frac{dy}{dt} = 48 - 98t$. At $t=0$, $u_y = 48\\text{ m/s}$.<br><b>Step 4:</b> The angle of projection $\\theta$ is $\\tan\\theta = \\frac{u_y}{u_x} = \\frac{48}{36} = \\frac{4}{3}$.<br><b>Step 5:</b> In a right triangle with opposite = 4 and adjacent = 3, the hypotenuse is 5.<br><b>Step 6:</b> Therefore, $\\sin\\theta = \\frac{4}{5} \\implies \\theta = \\sin^{-1}(\\frac{4}{5})$."
            },
            {
        "id": "MIP-TEST-175",
        "topic": "Addition and Resolution of Vectors",
        "difficulty": 2,
        "tags": ["Vector Addition", "Resultant Angle"],
        "q": "$\\vec{A}$ and $\\vec{B}$ are two vectors of equal magnitude and $\\theta$ is the angle between them. The angle between $\\vec{A}$ or $\\vec{B}$ with their resultant is",
        "options": ["$\\theta/4$", "$\\theta/2$", "$2\\theta$", "0"],
        "correct": 1,
        "sol": "<b>Step 1:</b> Let the magnitude of both vectors be $x$. The angle $\\alpha$ of the resultant with vector $\\vec{A}$ is given by $\\tan\\alpha = \\frac{B\\sin \\theta}{A + B\\cos \\theta}$.<br><b>Step 2:</b> Substitute $A = B = x$: $\\tan\\alpha = \\frac{x\\sin \\theta}{x + x\\cos \\theta} = \\frac{\\sin \\theta}{1 + \\cos \\theta}$.<br><b>Step 3:</b> Use half-angle trigonometric identities: $\\sin \\theta = 2\\sin(\\theta/2)\\cos(\\theta/2)$ and $1 + \\cos \\theta = 2\\cos^2(\\theta/2)$.<br><b>Step 4:</b> $\\tan\\alpha = \\frac{2\\sin(\\theta/2)\\cos(\\theta/2)}{2\\cos^2(\\theta/2)} = \\tan(\\theta/2)$.<br><b>Step 5:</b> Therefore, $\\alpha = \\theta/2$. The resultant of two equal vectors always bisects the angle between them perfectly."
    },
            {
        "id": "MIP-TEST-176",
        "topic": "Projectile Motion",
        "difficulty": 1,
        "tags": ["Velocity at Maximum Height", "Conceptual"],
        "q": "If a body is projected with an angle $\\theta$ to the horizontal then",
        "options": ["it's velocity always perpendicular to its acceleration", "its velocity becomes zero at its maximum height", "it's velocity makes zero angle with the horizontal at its maximum height", "the body just before hitting the ground, the direction of velocity coincides with the acceleration."],
        "correct": 2,
        "sol": "<b>Step 1:</b> Consider the velocity vector of a projectile at its maximum height.<br><b>Step 2:</b> At maximum height, the vertical component of the velocity ($u\\sin \\theta - gt$) becomes exactly zero.<br><b>Step 3:</b> The horizontal component of the velocity ($u\\cos \\theta$) remains constant and is the only velocity the object possesses.<br><b>Step 4:</b> Since the velocity vector is entirely horizontal, it makes an angle of zero degrees with the horizontal plane."
    },
            {
        "id": "MIP-TEST-177",
        "topic": "Projectile Motion",
        "difficulty": 3,
        "tags": ["Maximum Range", "Time of Flight"],
        "q": "A body is projected at an angle $\\theta$ so that its range is maximum. If T is the time of flight then the value of maximum range is (acceleration due to gravity = g)",
        "options": ["$\\frac{g^{2}T}{2}$", "$\\frac{gT}{2}$", "$\\frac{gT^{2}}{2}$", "$\\frac{g^{2}T^{2}}{2}$"],
        "correct": 2,
        "sol": "<b>Step 1:</b> For a projectile to achieve maximum range on a horizontal plane, the angle of projection must be $\\theta = 45^{\\circ}$.<br><b>Step 2:</b> The time of flight formula is $T = \\frac{2u\\sin 45^{\\circ}}{g} = \\frac{2u(1/\\sqrt{2})}{g} = \\frac{u\\sqrt{2}}{g}$.<br><b>Step 3:</b> Solve this equation for the initial velocity: $u = \\frac{gT}{\\sqrt{2}}$.<br><b>Step 4:</b> The formula for maximum range is $R_{max} = \\frac{u^2}{g}$.<br><b>Step 5:</b> Substitute the expression for $u$ into the range formula: $R_{max} = \\frac{(gT/\\sqrt{2})^2}{g} = \\frac{g^2 T^2 / 2}{g} = \\frac{gT^2}{2}$."
    },
            {
                "id": "MIP-TEST-178",
                "topic": "Projectile Motion",
                "difficulty": 3,
                "tags": ["Equation of Trajectory", "Maximum Height"],
                "q": "The path of projectile is given by the equation $y=ax-bx^{2}$, where 'a' and 'b' are constants and x and y are respectively horizontal and vertical distances of projectile from the point of projection. The maximum height attained by the projectile and the angle of projection are respectively.",
                "options": ["$\\frac{2a^{2}}{b}, \\tan^{-1}(a)$", "$\\frac{b^{2}}{2a}, \\tan^{-1}(b)$", "$\\frac{a^{2}}{b}, \\tan^{-1}(2b)$", "$\\frac{a^{2}}{4b}, \\tan^{-1}(a)$"],
                "correct": 3,
                "sol": "<b>Step 1:</b> Compare the given trajectory equation $y = ax - bx^2$ with the standard form $y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}$.<br><b>Step 2:</b> By equating the coefficients of the linear $x$ term, we find $\\tan\\theta = a$. Thus, the angle of projection is $\\theta = \\tan^{-1}(a)$.<br><b>Step 3:</b> The maximum height occurs at the vertex of the parabola. We find the x-coordinate by setting $\\frac{dy}{dx} = 0$.<br><b>Step 4:</b> $\\frac{dy}{dx} = a - 2bx = 0 \\implies x = \\frac{a}{2b}$.<br><b>Step 5:</b> Substitute this x back into the original equation to find the maximum height (y): $H = a(\\frac{a}{2b}) - b(\\frac{a}{2b})^2 = \\frac{a^2}{2b} - \\frac{a^2}{4b} = \\frac{a^2}{4b}$."
            },
            {
                "id": "MIP-TEST-179",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Horizontal Projectile", "Velocity Components"],
                "q": "A body is projected horizontally from the top of a tower with a velocity of $10\\text{ m/s}$. If it hits the ground at an angle $45^{\\circ}$, the vertical component of velocity when it hits ground in m/s is",
                "options": ["10", "$10\\sqrt{2}$", "$5\\sqrt{2}$", "5"],
                "correct": 0,
                "sol": "<b>Step 1:</b> In horizontal projection, the horizontal component of velocity remains constant. At impact, $v_x = u = 10\\text{ m/s}$.<br><b>Step 2:</b> The angle $\\theta$ the velocity vector makes with the ground is given by the relation $\\tan\\theta = \\frac{v_y}{v_x}$.<br><b>Step 3:</b> Substitute the known angle ($45^{\\circ}$) and horizontal velocity: $\\tan 45^{\\circ} = \\frac{v_y}{10}$.<br><b>Step 4:</b> Since $\\tan 45^{\\circ} = 1$, we get $1 = \\frac{v_y}{10} \\implies v_y = 10\\text{ m/s}$."
            },
            {
                "id": "MIP-TEST-180",
                "topic": "Projectile Motion",
                "difficulty": 2,
                "tags": ["Time of Flight", "Maximum Height"],
                "q": "A body is projected with an angle $\\theta$. The maximum height reached is h. If the time of flight is 4 sec and $g=10\\text{ m/s}^{2}$, then the value of h is",
                "options": ["10 m", "40 m", "20 m", "5 m"],
                "correct": 2,
                "sol": "<b>Step 1:</b> The formula for the time of flight is $T = \\frac{2u\\sin \\theta}{g}$.<br><b>Step 2:</b> Substitute the given values: $4 = \\frac{2u\\sin \\theta}{10} \\implies 40 = 2u\\sin \\theta$.<br><b>Step 3:</b> The initial vertical velocity is $u\\sin \\theta = 20\\text{ m/s}$.<br><b>Step 4:</b> The formula for maximum height is $h = \\frac{u^2\\sin^2 \\theta}{2g} = \\frac{(u\\sin \\theta)^2}{2g}$.<br><b>Step 5:</b> Substitute $u\\sin \\theta = 20$ into the height formula: $h = \\frac{20^2}{2(10)} = \\frac{400}{20} = 20\\text{ m}."
            }
        ]
    }
};
