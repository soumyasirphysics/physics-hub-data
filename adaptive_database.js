const adaptiveDatabase = {
    "Work, Energy & Power": {
        "classTarget": "Class 11",
        "topics": ["Work Done", "Mechanical Energy", "Power"],
        "questions": [
            {
                "id": "WEP-TEST-001",
                "topic": "Work Done",
                "difficulty": 1,
                "tags": ["Vector Resolution", "Dot Product"],
                "q": "A force $F = (3i + 4j)$ N acts on a particle moving it from origin to point $(2i + 2j)$ m. What is the work done?",
                "imgUrl": "",
                "options": ["10 J", "14 J", "24 J", "7 J"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Use dot product $W = F \\cdot d$<br><b>Step 2:</b> $W = (3)(2) + (4)(2) = 6 + 8 = 14$ J."
            },
            {
                "id": "WEP-TEST-002",
                "topic": "Mechanical Energy",
                "difficulty": 2,
                "tags": ["Conservation of Energy", "Kinematics Mix"],
                "q": "A block of mass $m$ is dropped from height $h$. What is its velocity just before hitting the ground?",
                "imgUrl": "",
                "options": ["$\\sqrt{gh}$", "$\\sqrt{2gh}$", "$2gh$", "$gh$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Equate Potential and Kinetic Energy.<br><b>Step 2:</b> $mgh = \\frac{1}{2}mv^2$<br><b>Step 3:</b> Solve for $v = \\sqrt{2gh}$."
            },
            {
                "id": "WEP-TEST-003",
                "topic": "Work Done",
                "difficulty": 3,
                "tags": ["Calculus Based", "Variable Force"],
                "q": "A variable force $F = 2x$ acts on a particle. Find the work done moving it from $x=0$ to $x=2$ m.",
                "imgUrl": "",
                "options": ["2 J", "4 J", "8 J", "16 J"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Integrate $W = \\int F dx$<br><b>Step 2:</b> $W = \\int_0^2 2x dx = [x^2]_0^2 = 4 - 0 = 4$ J."
            },
            {
                "id": "WEP-TEST-004",
                "topic": "Power",
                "difficulty": 1,
                "tags": ["Kinematics Mix", "Formulas"],
                "q": "An engine lifts a 100 kg water tank through a height of 10 m in 10 s. What is the power of the engine? (Take $g = 10$ m/s²)",
                "imgUrl": "",
                "options": ["100 W", "1000 W", "10000 W", "10 W"],
                "correct": 1,
                "sol": "<b>Step 1:</b> $P = \\frac{W}{t} = \\frac{mgh}{t}$<br><b>Step 2:</b> $P = \\frac{100 \\times 10 \\times 10}{10} = 1000$ W."
            },
            {
                "id": "WEP-TEST-005",
                "topic": "Mechanical Energy",
                "difficulty": 3,
                "tags": ["Conservation of Energy", "Vector Resolution"],
                "q": "A pendulum bob is released from a horizontal position. Tension in the string at the lowest point is:",
                "imgUrl": "",
                "options": ["$mg$", "$2mg$", "$3mg$", "$0$"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Find velocity at bottom using Energy Conservation: $v^2 = 2gl$<br><b>Step 2:</b> Apply circular motion forces: $T - mg = \\frac{mv^2}{l}$<br><b>Step 3:</b> $T = mg + m(2g) = 3mg$."
            }
        ]
    },
    "Electrostatics": {
        "classTarget": "Class 12",
        "topics": ["Electric Force", "Electric Potential", "Electric Field"],
        "questions": [
            {
                "id": "ES-TEST-001",
                "topic": "Electric Force",
                "difficulty": 2,
                "tags": ["Vector Resolution", "Superposition"],
                "q": "Two equal charges $+q$ are placed on the y-axis at $y=+a$ and $y=-a$. What is the direction of the net force on a third charge $+Q$ placed on the positive x-axis?",
                "imgUrl": "",
                "options": ["Along +x axis", "Along -x axis", "Along +y axis", "Along -y axis"],
                "correct": 0,
                "sol": "<b>Step 1:</b> Draw the force vectors.<br><b>Step 2:</b> The y-components cancel out due to symmetry.<br><b>Step 3:</b> The x-components add up, pointing strictly along the +x axis."
            },
            {
                "id": "ES-TEST-002",
                "topic": "Electric Potential",
                "difficulty": 3,
                "tags": ["Conservation of Energy", "Kinematics Mix"],
                "q": "An electron is released from rest in a uniform electric field $E$. What is its velocity after traveling a distance $d$?",
                "imgUrl": "",
                "options": ["$\\sqrt{\\frac{eEd}{m}}$", "$\\sqrt{\\frac{2eEd}{m}}$", "$\\frac{2eEd}{m}$", "$\\frac{eEd}{m}$"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Work done by field = Change in Kinetic Energy.<br><b>Step 2:</b> $eEd = \\frac{1}{2}mv^2$<br><b>Step 3:</b> Solve for $v = \\sqrt{\\frac{2eEd}{m}}$."
            },
            {
                "id": "ES-TEST-003",
                "topic": "Electric Field",
                "difficulty": 3,
                "tags": ["Calculus Based", "Continuous Charge"],
                "q": "To find the electric field due to a finite charged rod at a point on its axis, which mathematical operation is strictly required?",
                "imgUrl": "",
                "options": ["Cross Product", "Dot Product", "Integration", "Differentiation"],
                "correct": 2,
                "sol": "<b>Step 1:</b> A finite rod is a continuous charge distribution.<br><b>Step 2:</b> You must break it into point charges $dq$ and use <b>Integration</b> to sum the field components."
            },
            {
                "id": "ES-TEST-004",
                "topic": "Electric Force",
                "difficulty": 1,
                "tags": ["Conceptual"],
                "q": "If the distance between two point charges is doubled, the electrostatic force between them becomes:",
                "imgUrl": "",
                "options": ["Half", "Double", "One-fourth", "Four times"],
                "correct": 2,
                "sol": "<b>Step 1:</b> Coulomb's Law states $F \\propto \\frac{1}{r^2}$.<br><b>Step 2:</b> If $r \\rightarrow 2r$, then $F \\rightarrow \\frac{1}{(2)^2} = \\frac{1}{4}$."
            },
            {
                "id": "ES-TEST-005",
                "topic": "Electric Potential",
                "difficulty": 2,
                "tags": ["Conservation of Energy", "Vector Resolution"],
                "q": "An electric dipole of moment $p$ is placed in a uniform electric field $E$. What is the work done in rotating it from a stable equilibrium position to an unstable equilibrium position?",
                "imgUrl": "",
                "options": ["$pE$", "$2pE$", "$-pE$", "Zero"],
                "correct": 1,
                "sol": "<b>Step 1:</b> Stable equilibrium $\\theta_1 = 0^\\circ$, Unstable $\\theta_2 = 180^\\circ$.<br><b>Step 2:</b> $W = pE(\\cos\\theta_1 - \\cos\\theta_2)$<br><b>Step 3:</b> $W = pE(1 - (-1)) = 2pE$."
            }
        ]
    }
};
