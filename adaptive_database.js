// ==========================================
// ADAPTIVE LEARNING DATABASE (JEE / NEET)
// Difficulty Legend: 1 = Easy (NEET/Board), 2 = Moderate (JEE Main), 3 = Hard (JEE Advanced)
// ==========================================

const adaptiveDatabase = {
  "Electrostatics": {
    "classTarget": "Class 12",
    "topics": ["Coulomb's Law", "Electric Field", "Electric Potential", "Dipole"],
    "questions": [
      // --- LEVEL 1: EASY (C.U.Q & LEVEL I) ---
      {
        "id": "ADP-ES-001",
        "topic": "Coulomb's Law",
        "difficulty": 1, 
        "tags": ["Conservation of Mass & Charge", "Conceptual"],
        "q": "Two identical metallic spheres A and B of exactly equal masses are given equal positive and negative charges respectively. Then:",
        "imgUrl": "", // No image needed
        "options": [
          "Mass of A > Mass of B",
          "Mass of A < Mass of B",
          "Mass of A = Mass of B",
          "Data insufficient"
        ],
        "correct": 1,
        "sol": "<b>Step 1: Understand Charging</b><br>Giving a positive charge to sphere A means <b>removing</b> electrons from it. Giving a negative charge to sphere B means <b>adding</b> electrons to it.<br><br><b>Step 2: Conclusion</b><br>Since electrons have a definite mass (\\( 9.1 \\times 10^{-31} \\text{ kg} \\)), adding electrons to B increases its mass, while removing electrons from A decreases its mass. Therefore, the mass of A becomes less than the mass of B."
      },
      {
        "id": "ADP-ES-002",
        "topic": "Electric Field",
        "difficulty": 1,
        "tags": ["Force on Charge", "Electron Kinematics"],
        "q": "An electron is projected with a certain velocity into a uniform electric field in a direction opposite to the field. Then it is:",
        "imgUrl": "",
        "options": [
          "Accelerated",
          "Retarded",
          "Neither accelerated nor retarded",
          "Either accelerated or retarded"
        ],
        "correct": 0,
        "sol": "<b>Step 1: Direction of Force</b><br>An electron is a negatively charged particle. The electrostatic force on a negative charge is always in the <b>opposite</b> direction of the electric field (\\( \\vec{F} = -e\\vec{E} \\)).<br><br><b>Step 2: Conclusion</b><br>Since the electron is already moving opposite to the field, the force acting on it is in the <i>same direction</i> as its velocity. Therefore, its speed will increase, meaning it is <b>accelerated</b>."
      },
      {
        "id": "ADP-ES-003",
        "topic": "Coulomb's Law",
        "difficulty": 1,
        "tags": ["Conduction", "Conservation of Charge"],
        "q": "Two identical metal spheres possess \\( +60 \\text{ C} \\) and \\( -20 \\text{ C} \\) of charges. They are brought in contact and then separated by \\( 10 \\text{ cm} \\). The force between them is:",
        "imgUrl": "",
        "options": [
          "\\( 36 \\times 10^{13} \\text{ N} \\)",
          "\\( 36 \\times 10^{14} \\text{ N} \\)",
          "\\( 36 \\times 10^{12} \\text{ N} \\)",
          "\\( 3.6 \\times 10^{12} \\text{ N} \\)"
        ],
        "correct": 0,
        "sol": "<b>Step 1: Charge after contact</b><br>When identical conducting spheres are brought in contact, they share the total net charge equally.<br>\\[ \\begin{aligned} Q_{net} &= +60 + (-20) = +40 \\text{ C} \\\\ q_1' = q_2' &= \\frac{40}{2} = +20 \\text{ C} \\end{aligned} \\]<br><br><b>Step 2: Calculate New Force</b><br>Given separation \\( r = 10 \\text{ cm} = 0.1 \\text{ m} \\).<br>\\[ \\begin{aligned} F &= \\frac{1}{4\\pi\\epsilon_0} \\frac{q_1' q_2'}{r^2} \\\\ &= \\frac{9 \\times 10^9 \\times (20 \\times 20)}{(0.1)^2} \\\\ &= \\frac{9 \\times 10^9 \\times 400}{0.01} \\\\ &= 36 \\times 10^{13} \\text{ N} \\end{aligned} \\]"
      },
      {
        "id": "ADP-ES-004",
        "topic": "Electric Field",
        "difficulty": 1,
        "tags": ["Electric Lines of Force", "Dipole System"],
        "q": "Figure shows lines of force for a system of two point charges. The possible choice for the charges is:",
        "imgUrl": "PLACEHOLDER_IMAGE_LINK_HERE_(LINES_OF_FORCE)", 
        "options": [
          "\\( q_1 = 4\\mu\\text{C}, q_2 = -1.0\\mu\\text{C} \\)",
          "\\( q_1 = 1\\mu\\text{C}, q_2 = -4\\mu\\text{C} \\)",
          "\\( q_1 = -2\\mu\\text{C}, q_2 = +4\\mu\\text{C} \\)",
          "\\( q_1 = 3\\mu\\text{C}, q_2 = 2\\mu\\text{C} \\)"
        ],
        "correct": 0,
        "sol": "<b>Step 1: Analyze the Lines of Force</b><br>Looking at the diagram, the lines of force are originating from \\( q_1 \\) and terminating at \\( q_2 \\). This means \\( q_1 \\) is positive and \\( q_2 \\) is negative.<br><br><b>Step 2: Compare Magnitudes</b><br>The number of field lines originating or terminating is directly proportional to the magnitude of the charge (\\( N \\propto |q| \\)). Since many more lines originate from \\( q_1 \\) than terminate at \\( q_2 \\), the magnitude of \\( q_1 \\) must be significantly larger than \\( q_2 \\). Option A perfectly fits this condition."
      },

      // --- LEVEL 2: MODERATE (LEVEL II C.W / H.W) ---
      {
        "id": "ADP-ES-005",
        "topic": "Coulomb's Law",
        "difficulty": 2,
        "tags": ["Dielectric Constant", "Distance Variation"],
        "q": "Two charges when kept at a distance of \\( 1 \\text{ m} \\) apart in vacuum have some force of repulsion. If the force of repulsion between these two charges be same, when placed in an oil of dielectric constant 4, the distance of separation is:",
        "imgUrl": "",
        "options": [
          "\\( 0.25 \\text{ m} \\)",
          "\\( 0.4 \\text{ m} \\)",
          "\\( 0.5 \\text{ m} \\)",
          "\\( 0.6 \\text{ m} \\)"
        ],
        "correct": 2,
        "sol": "<b>Step 1: Set up equations</b><br>Force in vacuum: \\( F_{vac} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_1 q_2}{r_1^2} \\)<br>Force in medium: \\( F_{med} = \\frac{1}{4\\pi\\epsilon_0 K} \\frac{q_1 q_2}{r_2^2} \\)<br><br><b>Step 2: Equate and Solve</b><br>We are given that the forces are equal (\\( F_{vac} = F_{med} \\)) and \\( r_1 = 1 \\text{ m}, K = 4 \\).<br>\\[ \\begin{aligned} \\frac{1}{r_1^2} &= \\frac{1}{K r_2^2} \\\\ \\frac{1}{1^2} &= \\frac{1}{4 \\times r_2^2} \\\\ 4 r_2^2 &= 1 \\\\ r_2^2 &= 0.25 \\\\ r_2 &= 0.5 \\text{ m} \\end{aligned} \\]"
      },
      {
        "id": "ADP-ES-006",
        "topic": "Electric Field",
        "difficulty": 2,
        "tags": ["Null Point", "Equilibrium"],
        "q": "Two point charges of magnitude \\( 4 \\mu\\text{C} \\) (at point A) and \\( -9 \\mu\\text{C} \\) (at point B) are \\( 0.5 \\text{ m} \\) apart. The electric intensity is zero at a distance \\( x \\text{ m} \\) from A and \\( y \\text{ m} \\) from B. The values of \\( x \\) and \\( y \\) are respectively:",
        "imgUrl": "",
        "options": [
          "0.5m, 1.0m",
          "1.0m, 1.5m",
          "2.0m, 1.5m",
          "1.5m, 2.0m"
        ],
        "correct": 1,
        "sol": "<b>Step 1: Locate the Null Point</b><br>For opposite charges, the null point lies <b>outside</b> the region between them, closer to the charge with the smaller magnitude (\\( 4 \\mu\\text{C} \\)).<br>Let the null point be at distance \\( x \\) from A. Then its distance from B is \\( y = x + 0.5 \\).<br><br><b>Step 2: Equate the Electric Fields</b><br>\\[ \\begin{aligned} E_A &= E_B \\\\ \\frac{k \\times 4}{x^2} &= \\frac{k \\times 9}{(x + 0.5)^2} \\\\ \\frac{2}{x} &= \\frac{3}{x + 0.5} \\\\ 2x + 1.0 &= 3x \\\\ x &= 1.0 \\text{ m} \\end{aligned} \\]<br><br><b>Step 3: Find y</b><br>\\[ \\begin{aligned} y &= x + 0.5 \\\\ y &= 1.0 + 0.5 = 1.5 \\text{ m} \\end{aligned} \\]"
      },
      {
        "id": "ADP-ES-007",
        "topic": "Electric Potential",
        "difficulty": 2,
        "tags": ["Common Potential", "Capacitance Ratio"],
        "q": "Two metal spheres A and B have their capacities in the ratio 3:4. They are put in contact with each other and an amount of charge \\( 7 \\times 10^{-6} \\text{ C} \\) is given to the combination. Next, the two spheres are separated. The potential due to the smaller sphere at a distance of 50m from its center is:",
        "imgUrl": "",
        "options": [
          "540 V",
          "270 V",
          "1180 V",
          "zero"
        ],
        "correct": 0,
        "sol": "<b>Step 1: Charge Distribution</b><br>When connected, charge distributes in the ratio of their capacities. \\( q_A : q_B = C_A : C_B = 3:4 \\).<br>Charge on smaller sphere (A):<br>\\[ \\begin{aligned} q_A &= \\frac{3}{3+4} \\times Q_{total} \\\\ &= \\frac{3}{7} \\times 7 \\times 10^{-6} \\\\ &= 3 \\times 10^{-6} \\text{ C} \\end{aligned} \\]<br><br><b>Step 2: Calculate Potential at a Distance</b><br>The potential at a distance \\( r = 50 \\text{ m} \\) from the center of sphere A is:<br>\\[ \\begin{aligned} V &= \\frac{1}{4\\pi\\epsilon_0} \\frac{q_A}{r} \\\\ &= \\frac{9 \\times 10^9 \\times 3 \\times 10^{-6}}{50} \\\\ &= \\frac{27000}{50} \\\\ &= 540 \\text{ V} \\end{aligned} \\]"
      },
      {
        "id": "ADP-ES-008",
        "topic": "Electric Potential",
        "difficulty": 2,
        "tags": ["Concentric Shells", "Potential Difference"],
        "q": "A solid conducting sphere having a charge Q is surrounded by an uncharged concentric conducting spherical shell. The potential difference between the surface of the solid sphere and the shell is V. The shell is now given a charge -3Q. The new potential difference between the same surfaces will be:",
        "imgUrl": "",
        "options": [
          "2V",
          "4V",
          "V",
          "-2V"
        ],
        "correct": 2,
        "sol": "<b>Step 1: Analyze Potential Difference</b><br>The potential difference between two concentric spherical conducting shells depends <b>only</b> on the charge of the inner sphere.<br>\\[ \\begin{aligned} \\Delta V &= V_{inner} - V_{outer} \\\\ &= \\frac{Q}{4\\pi\\epsilon_0} \\left( \\frac{1}{r_{inner}} - \\frac{1}{r_{outer}} \\right) \\end{aligned} \\]<br><br><b>Step 2: Conclusion</b><br>Adding charge (like \\( -3Q \\)) to the outer shell changes the absolute potential of both the inner sphere and the outer shell by the exact same amount. Therefore, the <i>difference</i> between them remains unchanged. The new potential difference is still \\( V \\)."
      }
    ]
  }
};
