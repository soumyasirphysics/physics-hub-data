const chapterDatabase2 = {
  "Sound": {
    classTarget: "Class 10",
    totalQs: 40,
    topics: [
      "Reflection of Sound & Echoes",
      "Vibrations: Natural, Damped & Forced",
      "Resonance",
      "Characteristics: Loudness, Pitch & Quality"
    ],
    questions: [
      {
        "id": "SND_001",
        "topic": "Reflection of Sound & Echoes",
        "q": "What is the primary physical phenomenon responsible for the production of an echo?",
        "options": [
          "Refraction of sound",
          "Absorption of sound",
          "Reflection of sound",
          "Interference of sound"
        ],
        "correct": 2,
        "sol": "<b>Explanation:</b> An echo is simply the sound heard after it hits a distant rigid obstacle (like a cliff or a wall) and bounces back to the listener. This 'bouncing back' of a wave upon striking a surface is known as <b>Reflection</b>."
      },
      {
        "id": "SND_002",
        "topic": "Reflection of Sound & Echoes",
        "q": "The sensation of sound persists in the human brain for approximately how long after the original sound has ceased?",
        "options": [
          "1.0 second",
          "0.1 second",
          "0.01 second",
          "0.5 second"
        ],
        "correct": 1,
        "sol": "<b>Explanation:</b> This is known as the 'Persistence of Hearing'. For a human ear to distinguish two sounds as separate, there must be a time interval of at least <b>0.1 second</b> between them. If the reflected sound arrives earlier than 0.1s, it overlaps with the original sound and no distinct echo is heard."
      },
      {
        "id": "SND_003",
        "topic": "Reflection of Sound & Echoes",
        "q": "Taking the speed of sound in air as 340 m/s, what is the minimum distance required between a source of sound and a reflecting surface to hear a distinct echo?",
        "options": [
          "1.7 m",
          "34 m",
          "17 m",
          "0.1 m"
        ],
        "correct": 2,
        "sol": "<b>Step 1: Use the Echo Formula.</b> Distance \\( d = \\frac{V \\times t}{2} \\).<br><b>Step 2: Substitute minimum values.</b> Minimum time \\( t = 0.1 \\text{ s} \\) and speed \\( V = 340 \\text{ m/s} \\).<br><b>Step 3: Calculate.</b> \\( d = \\frac{340 \\times 0.1}{2} = \\frac{34}{2} = 17 \\text{ m} \\).<br><b>Conclusion:</b> The reflector must be at least <b>17 m</b> away."
      },
      {
        "id": "SND_004",
        "topic": "Reflection of Sound & Echoes",
        "q": "A person stands between two parallel cliffs and fires a gun. He hears the first echo after 2 seconds and the second echo after 3 seconds. If the speed of sound is 340 m/s, what is the distance between the two cliffs?",
        "options": [
          "340 m",
          "510 m",
          "850 m",
          "1020 m"
        ],
        "correct": 2,
        "sol": "<b>Step 1: Find distance to Cliff 1.</b> \\( d_1 = \\frac{V \\times t_1}{2} = \\frac{340 \\times 2}{2} = 340 \\text{ m} \\).<br><b>Step 2: Find distance to Cliff 2.</b> \\( d_2 = \\frac{V \\times t_2}{2} = \\frac{340 \\times 3}{2} = 510 \\text{ m} \\).<br><b>Step 3: Total distance.</b> \\( D = d_1 + d_2 = 340 + 510 = 850 \\text{ m} \\)."
      },
      {
        "id": "SND_005",
        "topic": "Reflection of Sound & Echoes",
        "q": "Why is an echo generally heard more clearly and distinctly on a cold day compared to a very hot day?",
        "options": [
          "The speed of sound is higher on a cold day.",
          "The density of air is lower on a cold day.",
          "Sound travels slower in cold air, increasing the time gap between the original sound and the reflection.",
          "Cold air absorbs sound better."
        ],
        "correct": 2,
        "sol": "<b>Concept:</b> Speed of sound \\( V \\propto \\sqrt{T} \\).<br><b>Explanation:</b> On a cold day, the speed of sound is lower. Since speed is lower, the sound takes more time to travel to the obstacle and back. This makes it easier for the time interval to exceed 0.1 seconds, resulting in a more distinct and <b>clearer echo</b>."
      },
      {
        "id": "SND_006",
        "topic": "Reflection of Sound & Echoes",
        "q": "Which type of sound waves are utilized in 'Sound Ranging' by animals like bats and dolphins to detect obstacles or prey?",
        "options": [
          "Infrasonic waves",
          "Audible sound waves",
          "Ultrasonic waves",
          "Electromagnetic waves"
        ],
        "correct": 2,
        "sol": "<b>Explanation:</b> <b>Ultrasonic waves</b> (frequency > 20,000 Hz) are used because they are highly energetic and can travel long distances without being significantly scattered. They can also detect very small obstacles due to their short wavelengths."
      },
      {
        "id": "SND_007",
        "topic": "Reflection of Sound & Echoes",
        "q": "What is the full form of 'SONAR', and what is the physical principle it is based on?",
        "options": [
          "Sound Navigation and Ranging; Echo",
          "Solar Navigation and Radio; Refraction",
          "Sound Note and Range; Resonance",
          "Sonic Navigation and Radar; Reflection"
        ],
        "correct": 0,
        "sol": "<b>Explanation:</b> SONAR stands for <b>Sound Navigation and Ranging</b>. It works on the principle of <b>Echo</b> (reflection of ultrasonic waves). It is used in ships and submarines to determine the depth of the sea or locate underwater objects like shipwrecks."
      },
      {
        "id": "SND_008",
        "topic": "Reflection of Sound & Echoes",
        "q": "An ultrasonic signal sent from a ship returns from the seabed after 4 seconds. If the speed of sound in seawater is 1500 m/s, calculate the depth of the sea.",
        "options": [
          "6000 m",
          "3000 m",
          "1500 m",
          "750 m"
        ],
        "correct": 1,
        "sol": "<b>Step 1: Use Depth Formula.</b> \\( \text{Depth} = \frac{V \times t}{2} \\).<br><b>Step 2: Substitute values.</b> \\( V = 1500 \\text{ m/s} \\), \\( t = 4 \\text{ s} \\).<br><b>Step 3: Solve.</b> \\( \text{Depth} = \frac{1500 \times 4}{2} = 3000 \\text{ m} \\)."
      },
      {
        "id": "SND_009",
        "topic": "Reflection of Sound & Echoes",
        "q": "Which of the following conditions is NOT essential for hearing a distinct echo?",
        "options": [
          "The reflector must be large enough.",
          "The source and reflector must be at least 17m apart in air.",
          "The sound must be produced in a vacuum.",
          "The intensity of sound must be sufficient to reach the ear after reflection."
        ],
        "correct": 2,
        "sol": "<b>Explanation:</b> Sound is a mechanical wave and requires a material medium (air, water, etc.) to travel. It <b>cannot travel in a vacuum</b>, so no echo (or sound of any kind) can be heard in space or a vacuum chamber."
      },
      {
        "id": "SND_010",
        "topic": "Reflection of Sound & Echoes",
        "q": "<b>[Topper Challenge]</b> A man standing between two cliffs produces a sound and hears the first echo after 1.5 s and the second echo after 2.5 s. If the speed of sound is 330 m/s, what is the distance between the two cliffs?",
        "options": [
          "660 m",
          "495 m",
          "825 m",
          "990 m"
        ],
        "correct": 0,
        "sol": "<b>Step 1: Find distance to Cliff 1.</b> \\( d_1 = \frac{330 \times 1.5}{2} = 247.5 \\text{ m} \\).<br><b>Step 2: Find distance to Cliff 2.</b> \\( d_2 = \frac{330 \times 2.5}{2} = 412.5 \\text{ m} \\).<br><b>Step 3: Add the distances.</b> \\( \text{Total distance} = 247.5 + 412.5 = 660 \\text{ m} \\)."
      },
      {
        "id": "SND_011",
        "topic": "Vibrations: Natural, Damped & Forced",
        "q": "The periodic vibrations of a body of constant amplitude in the complete absence of any external resistive force (like friction or air resistance) are known as:",
        "options": [
          "Forced vibrations",
          "Damped vibrations",
          "Resonant vibrations",
          "Natural (or Free) vibrations"
        ],
        "correct": 3,
        "sol": "<b>Explanation:</b> When a body is displaced from its mean position and released in a perfect vacuum (where there is no friction or air resistance to steal its energy), it vibrates with a constant amplitude and a single, unique frequency forever. These are called <b>Natural or Free vibrations</b>."
      },
      {
        "id": "SND_012",
        "topic": "Vibrations: Natural, Damped & Forced",
        "q": "In reality, when a simple pendulum is displaced and left to oscillate in a normal classroom, its amplitude gradually decreases over time and it eventually stops. What physical factor is directly responsible for this?",
        "options": [
          "The continuous decrease in the mass of the bob.",
          "The decrease in acceleration due to gravity over time.",
          "The frictional force of the surrounding air dissipating its energy.",
          "The restoring force of the string becoming zero immediately."
        ],
        "correct": 2,
        "sol": "<b>Explanation:</b> In a real-world environment, a vibrating body constantly does work against the <b>frictional force of the surrounding medium (air)</b>. Because it uses up its mechanical energy to overcome this friction, its total energy—and consequently its amplitude—gradually decreases until it stops. These are called Damped vibrations."
      },
      {
        "id": "SND_013",
        "topic": "Vibrations: Natural, Damped & Forced",
        "q": "Which two physical quantities of a vibrating body continuously decrease when it is undergoing damped vibrations?",
        "options": [
          "Frequency and Wavelength",
          "Amplitude and Mechanical Energy",
          "Mass and Time Period",
          "Restoring force and Pitch"
        ],
        "correct": 1,
        "sol": "<b>Explanation:</b> During damped vibrations, the body loses mechanical energy to the surrounding medium due to friction. Since energy is proportional to the square of the amplitude (\\( E \\propto A^2 \\)), both the <b>Mechanical Energy and the Amplitude</b> continuously decrease. (Note: The frequency and time period remain practically constant)."
      },
      {
        "id": "SND_014",
        "topic": "Vibrations: Natural, Damped & Forced",
        "q": "When a body vibrates under the continuous influence of an external periodic force, the resulting vibrations are termed as:",
        "options": [
          "Free vibrations",
          "Damped vibrations",
          "Forced vibrations",
          "Natural vibrations"
        ],
        "correct": 2,
        "sol": "<b>Explanation:</b> If an external force is applied repeatedly (periodically) to a vibrating body to keep it moving and compensate for the energy lost to friction, the body is said to be executing <b>Forced vibrations</b>."
      },
      {
        "id": "SND_015",
        "topic": "Vibrations: Natural, Damped & Forced",
        "q": "A tuning fork has a natural frequency of 256 Hz. It is placed on a wooden table, and an external mechanical vibrator applies a continuous periodic force to the fork at a frequency of 200 Hz. At what frequency will the tuning fork actually vibrate?",
        "options": [
          "256 Hz",
          "200 Hz",
          "456 Hz",
          "56 Hz"
        ],
        "correct": 1,
        "sol": "<b>Concept:</b> Frequency of forced vibrations.<br><b>Explanation:</b> When a body executes forced vibrations, it completely surrenders to the external force. It stops vibrating at its own natural frequency and is forced to vibrate with the <b>exact frequency of the applied external force</b>. Therefore, it will vibrate at exactly <b>200 Hz</b>."
      },
      {
        "id": "SND_016",
        "topic": "Vibrations: Natural, Damped & Forced",
        "q": "When the stem of a vibrating tuning fork is pressed against a large tabletop, a loud sound is heard. What type of vibration does the tabletop execute in this scenario?",
        "options": [
          "Natural vibration",
          "Damped vibration",
          "Forced vibration",
          "Free vibration"
        ],
        "correct": 2,
        "sol": "<b>Explanation:</b> The tabletop normally would not vibrate. However, the vibrating tuning fork acts as an external periodic force, forcing the large surface area of the tabletop into vibration. Because the table is vibrating under the influence of the fork's external force, it executes <b>Forced vibrations</b>, which sets a larger volume of air into motion, producing a louder sound."
      },
      {
        "id": "SND_017",
        "topic": "Vibrations: Natural, Damped & Forced",
        "q": "Observe the given displacement-time graph of a vibrating body. Which specific type of vibration does this waveform represent?",
        "imgUrl": "A clean 2D physics graph showing a displacement-time waveform. The horizontal axis is 'Time (t)' and the vertical axis is 'Displacement (y)'. A sine wave is drawn, but instead of maintaining a constant height, the peaks and troughs of the wave progressively get smaller and smaller as time goes on, eventually flattening out towards zero. Dashed envelope lines show the exponential decay of the amplitude. Standard textbook style, clean black lines on a white background.",
        "options": [
          "Natural (Free) Vibration",
          "Undamped Forced Vibration",
          "Damped Vibration",
          "Resonant Vibration"
        ],
        "correct": 2,
        "sol": "<b>Explanation:</b> In the graph, the maximum displacement from the mean position (the amplitude) is continuously decreasing over time, creating a shrinking envelope. This exponential decay of amplitude due to resistive forces is the universal signature of a <b>Damped Vibration</b>."
      },
      {
        "id": "SND_018",
        "topic": "Vibrations: Natural, Damped & Forced",
        "q": "In forced vibrations, the amplitude of the driven body depends heavily on the difference between its natural frequency and the frequency of the external driving force. If this difference is very large, how will the amplitude of the forced vibrations be affected?",
        "options": [
          "The amplitude will be infinitely large.",
          "The amplitude will be very small.",
          "The amplitude will be exactly equal to the body's physical length.",
          "The amplitude will rapidly alternate between zero and maximum."
        ],
        "correct": 1,
        "sol": "<b>Explanation:</b> In forced vibrations, the body naturally resists vibrating at a frequency different from its own. If the frequency of the applied external force is vastly different from the natural frequency of the body, the body will only vibrate with a <b>very small amplitude</b>. (The amplitude only becomes large when the frequencies match closely)."
      },
      {
        "id": "SND_019",
        "topic": "Vibrations: Natural, Damped & Forced",
        "q": "<b>[Topper Challenge]</b> A simple pendulum normally oscillates in air. If it is entirely submerged in water and allowed to oscillate, it experiences heavy damping. Physically, how does this heavy damping affect the natural time period (and frequency) of the pendulum compared to when it was in the air?",
        "options": [
          "The time period strictly remains unchanged.",
          "The time period decreases (frequency increases).",
          "The time period increases (frequency decreases).",
          "The pendulum will vibrate with infinite frequency."
        ],
        "correct": 2,
        "sol": "<b>Step 1: Understand damping's effect on speed.</b> Water is much denser and more viscous than air. It applies a massive frictional drag on the bob, causing it to move much slower.<br><b>Step 2: Relate speed to time period.</b> Because it is moving slower, it takes a longer time to complete one full oscillation.<br><b>Conclusion:</b> Therefore, heavy damping causes the <b>time period to increase</b>, which means its actual frequency of oscillation slightly decreases compared to its true natural frequency in a vacuum."
      },
      {
        "id": "SND_020",
        "topic": "Vibrations: Natural, Damped & Forced",
        "q": "<b>[Topper Challenge]</b> In forced vibrations, a driven body is continuously subjected to friction, yet it maintains a constant amplitude instead of dying out. According to the law of conservation of energy, how is this physically possible?",
        "options": [
          "Friction does not act on bodies undergoing forced vibrations.",
          "The mass of the body continuously decreases to conserve energy.",
          "The external periodic force constantly supplies energy to exactly compensate for the energy dissipated by friction.",
          "The body completely absorbs the surrounding air molecules to gain energy."
        ],
        "correct": 2,
        "sol": "<b>Explanation:</b> Friction is always present and is constantly draining mechanical energy from the vibrating body. However, the body does not stop because the <b>external periodic force (the driver) acts as a continuous energy source</b>. It pumps exactly enough energy into the body to replace what is lost to friction, allowing the driven body to maintain a constant amplitude."
      },
      {
        "id": "SND_021",
        "topic": "Resonance",
        "q": "In the study of sound and vibrations, Resonance is fundamentally defined as a very special mathematical case of which of the following phenomena?",
        "options": [
          "Forced vibrations",
          "Damped vibrations",
          "Free vibrations",
          "Transverse vibrations"
        ],
        "correct": 0,
        "sol": "<b>Explanation:</b> Resonance is not a completely separate phenomenon; it is a <b>special case of forced vibrations</b>. When the frequency of the external applied force happens to exactly match the natural frequency of the driven body, the forced vibrations undergo a dramatic increase in amplitude, which we call Resonance."
      },
      {
        "id": "SND_022",
        "topic": "Resonance",
        "q": "What is the primary physical condition that MUST be satisfied for Resonance to occur between two vibrating bodies?",
        "options": [
          "Both bodies must have the exact same mass and density.",
          "The amplitude of the external force must be infinitely large.",
          "The frequency of the external periodic force must be exactly equal to the natural frequency of the driven body.",
          "Both bodies must be placed in a complete vacuum."
        ],
        "correct": 2,
        "sol": "<b>Explanation:</b> For resonance to take place, the driving force must push the driven body at the exact moment it naturally wants to move in that direction. This perfect timing only happens when the <b>frequency of the external driving force exactly equals the natural frequency</b> of the body."
      },
      {
        "id": "SND_023",
        "topic": "Resonance",
        "q": "When a vibrating body enters a state of true resonance, what happens to the amplitude of its vibrations?",
        "options": [
          "It decreases to zero.",
          "It becomes extremely large (maximum).",
          "It remains completely unchanged.",
          "It alternates between zero and maximum every second."
        ],
        "correct": 1,
        "sol": "<b>Explanation:</b> Because the frequencies match perfectly during resonance, the external force continuously transfers energy to the driven body without any opposition. This continuous, perfectly-timed energy transfer causes the body to absorb maximum energy, making its <b>amplitude extremely large</b>."
      },
      {
        "id": "SND_024",
        "topic": "Resonance",
        "q": "Why are marching soldiers strictly ordered to 'break step' (stop marching in unison) when they are crossing a suspended bridge?",
        "options": [
          "To reduce the total weight acting on the bridge.",
          "To prevent the sound of their boots from causing an echo.",
          "To avoid creating static electricity on the metal cables.",
          "To prevent the frequency of their marching steps from matching the bridge's natural frequency, which could cause a resonant collapse."
        ],
        "correct": 3,
        "sol": "<b>Explanation:</b> A bridge has its own natural frequency of vibration. If soldiers march in perfect rhythm, they apply a periodic force. If the frequency of their footsteps accidentally matches the natural frequency of the bridge, <b>resonance will occur</b>. The bridge will vibrate with a massive amplitude and could structurally shatter or collapse."
      },
      {
        "id": "SND_025",
        "topic": "Resonance",
        "q": "When you turn the dial on a radio to listen to a specific FM station, which physical phenomenon are you utilizing to isolate that specific station's signal from the thousands of other signals in the air?",
        "options": [
          "Acoustic Reflection",
          "Electrical Resonance",
          "Electromagnetic Damping",
          "Total Internal Reflection"
        ],
        "correct": 1,
        "sol": "<b>Explanation:</b> By turning the dial, you are changing the capacitance/inductance of the radio's internal electrical circuit, which changes its natural frequency. When the circuit's natural frequency exactly matches the frequency of the incoming radio waves from the station, <b>Electrical Resonance</b> occurs. The circuit absorbs maximum energy from that specific wave, allowing you to hear the station loudly and clearly."
      },
      {
        "id": "SND_026",
        "topic": "Resonance",
        "q": "Observe the diagram showing four pendulums (A, B, C, and D) suspended from the same elastic rubber string. Pendulums A and C have the exact same length, while B is shorter and D is longer. If pendulum A is displaced and set into vibration, what will be the resulting behavior of the other three pendulums?",
        "imgUrl": "A clean 2D physics diagram showing a horizontal elastic string tied tightly between two rigid supports. Four simple pendulums are hanging vertically from this horizontal string, labeled A, B, C, and D from left to right. Pendulums A and C have identical string lengths. Pendulum B is noticeably shorter than A. Pendulum D is noticeably longer than A. The bobs are simple circles. Standard textbook style, clean black lines on a pure white background.",
        "options": [
          "All pendulums will vibrate with the exact same amplitude.",
          "Only B and D will vibrate, while C remains stationary.",
          "C will vibrate with maximum amplitude, while B and D vibrate with very small amplitudes.",
          "None of the other pendulums will move because they are separate."
        ],
        "correct": 2,
        "sol": "<b>Step 1: Understand energy transfer.</b> When A vibrates, it sends a periodic forced vibration through the rubber string to B, C, and D.<br><b>Step 2: Apply the condition for resonance.</b> The natural frequency of a pendulum depends strictly on its length. Since A and C have the <b>same length</b>, they have the <b>same natural frequency</b>.<br><b>Conclusion:</b> Because their frequencies match, resonance occurs between A and C. Therefore, <b>C will vibrate with maximum amplitude</b>. B and D have different lengths (different frequencies), so they will only execute forced vibrations with very small amplitudes."
      },
      {
        "id": "SND_027",
        "topic": "Resonance",
        "q": "A driver notices that his car's steering wheel only vibrates violently when the car reaches an exact speed of 65 km/h, but the vibration completely disappears at 60 km/h or 70 km/h. What is the scientific explanation for this?",
        "options": [
          "At 65 km/h, the frequency of the engine's vibrations exactly matches the natural frequency of the steering wheel.",
          "At 65 km/h, the air resistance reaches a resonant vacuum state.",
          "At 65 km/h, the car's tires undergo total internal reflection of sound.",
          "The steering wheel acts as an ultrasonic receiver at that exact speed."
        ],
        "correct": 0,
        "sol": "<b>Explanation:</b> This is a classic mechanical resonance problem. Every car part has a natural frequency. The engine produces forced vibrations whose frequency increases with speed. At exactly 65 km/h, the <b>engine's vibration frequency perfectly matches the natural frequency of the steering wheel</b>. This resonance causes the steering wheel to absorb maximum energy and vibrate violently (rattle)."
      },
      {
        "id": "SND_028",
        "topic": "Resonance",
        "q": "Two identical tuning forks, X and Y, are mounted on identical hollow wooden sound boxes placed facing each other. If fork X is struck hard with a rubber pad and then quickly muted by hand, fork Y will be heard producing a loud sound. What is this specific demonstration called?",
        "options": [
          "Acoustic Damping",
          "Sympathetic Resonance",
          "Ultrasonic Ranging",
          "Forced Echoing"
        ],
        "correct": 1,
        "sol": "<b>Explanation:</b> Because the tuning forks are absolutely identical, they share the exact same natural frequency. The sound waves from X force Y to vibrate. Since their frequencies match perfectly, Y enters a state of resonance and vibrates with a large amplitude, producing a loud sound even after X is stopped. This specific phenomenon between identical acoustic bodies is called <b>Sympathetic Resonance</b>."
      },
      {
        "id": "SND_029",
        "topic": "Resonance",
        "q": "<b>[Topper Challenge]</b> The 'Sharpness of Resonance' defines how rapidly the amplitude of vibration drops off when the external driving frequency is slightly changed away from the natural frequency. How does increasing the physical damping (friction) in a system affect the sharpness of its resonance?",
        "options": [
          "It makes the resonance infinitely sharp.",
          "It decreases the peak amplitude and makes the resonance curve flatter (less sharp).",
          "It has absolutely no effect on the resonance curve.",
          "It shifts the resonant frequency to a much higher value."
        ],
        "correct": 1,
        "sol": "<b>Concept:</b> The relationship between Damping and Resonance.<br><b>Explanation:</b> In a system with very low damping (low friction), resonance is very 'sharp'—the amplitude spikes massively only at the exact matching frequency. However, if you add heavy damping (high friction), the body loses a lot of energy. This <b>lowers the maximum peak amplitude</b> and spreads the energy out, resulting in a much <b>flatter, wider, and less sharp resonance curve</b>."
      },
      {
        "id": "SND_030",
        "topic": "Resonance",
        "q": "<b>[Topper Challenge]</b> A student holds a vibrating tuning fork of 512 Hz over a tall measuring cylinder. She slowly pours water into the cylinder, decreasing the length of the air column inside. At one specific water level, a sudden, booming loud sound is produced. Why did the sound suddenly become loud at that exact water level?",
        "options": [
          "The water suddenly reflected all the sound waves like a perfect mirror.",
          "The density of the air inside the tube suddenly became equal to the density of the water.",
          "The tuning fork accidentally touched the glass wall, causing a loud rattle.",
          "The shortened length of the air column caused its natural frequency to perfectly match the 512 Hz of the tuning fork."
        ],
        "correct": 3,
        "sol": "<b>Step 1: Understand air column vibrations.</b> The air column inside the tube can vibrate, and its natural frequency is inversely proportional to its length. (Shorter length = higher frequency).<br><b>Step 2: Analyze the pouring.</b> As water is poured, the air column gets shorter, so its natural frequency slowly increases.<br><b>Conclusion:</b> At one specific length, the <b>natural frequency of the air column became exactly 512 Hz</b>. This perfectly matched the tuning fork, causing Acoustic Resonance, which dramatically amplified the sound wave, producing the sudden loud boom."
      },
      {
        "id": "SND_031",
        "topic": "Characteristics: Loudness, Pitch & Quality",
        "q": "If a drummer hits a drum skin much harder, the sound produced is significantly louder. Which physical characteristic of the sound wave has been primarily increased?",
        "options": [
          "Frequency",
          "Wavelength",
          "Amplitude",
          "Speed"
        ],
        "correct": 2,
        "sol": "<b>Explanation:</b> Striking the drum harder displaces the drum skin further from its resting position. This increases the maximum displacement of the vibrating particles, which is known as the <b>Amplitude</b>. Loudness is directly dependent on the amplitude of the wave."
      },
      {
        "id": "SND_032",
        "topic": "Characteristics: Loudness, Pitch & Quality",
        "q": "The loudness of a sound is mathematically related to the amplitude (\\( a \\)) of the vibrating body. If the amplitude of a sound wave is artificially tripled, how will its loudness change?",
        "options": [
          "It will increase by 3 times.",
          "It will increase by 6 times.",
          "It will increase by 9 times.",
          "It will remain unchanged."
        ],
        "correct": 2,
        "sol": "<b>Concept:</b> Loudness \\( \\propto (\\text{Amplitude})^2 \\).<br><b>Explanation:</b> Since loudness is strictly proportional to the square of the amplitude, if the amplitude becomes 3 times larger, the new loudness becomes \\( (3)^2 = 9 \\). Therefore, the loudness <b>increases by 9 times</b>."
      },
      {
        "id": "SND_033",
        "topic": "Characteristics: Loudness, Pitch & Quality",
        "q": "A musician plays the exact same musical note (e.g., Middle C) at the exact same volume on both a violin and a piano. A blindfolded listener can still easily identify which instrument is playing. Which characteristic of sound enables this distinction?",
        "options": [
          "Pitch",
          "Loudness",
          "Intensity",
          "Quality (Timbre)"
        ],
        "correct": 3,
        "sol": "<b>Explanation:</b> When two sounds have the exact same pitch (frequency) and the exact same loudness (amplitude), the only way the human ear can distinguish between them is by their <b>Quality or Timbre</b>. Quality depends on the unique mixture of secondary harmonics produced by the specific instrument."
      },
      {
        "id": "SND_034",
        "topic": "Characteristics: Loudness, Pitch & Quality",
        "q": "In physics, 'Loudness' is a subjective sensation in the human ear, while 'Intensity' is an objective, measurable physical quantity. What is the standard SI unit used to measure the physical Intensity of a sound wave?",
        "options": [
          "Decibel (dB)",
          "Hertz (Hz)",
          "Watt per square metre (W/m²)",
          "Joule per second (J/s)"
        ],
        "correct": 2,
        "sol": "<b>Explanation:</b> Intensity is defined as the amount of sound energy passing per second normally through a unit area. Energy per second is Power (measured in Watts), and area is in square metres. Therefore, the SI unit for objective physical intensity is <b>Watt per square metre (W/m²)</b>."
      },
      {
        "id": "SND_035",
        "topic": "Characteristics: Loudness, Pitch & Quality",
        "q": "When a person fills a tall glass bottle with water from a tap, the sound produced by the water falling into the bottle gradually becomes 'shriller' as the bottle fills up. What is the physics reason behind this?",
        "options": [
          "The water absorbs the low-frequency sounds.",
          "The amplitude of the water droplets increases as the bottle fills.",
          "The length of the vibrating air column decreases, causing its natural frequency (and pitch) to increase.",
          "The density of the air inside the bottle increases, slowing down the sound waves."
        ],
        "correct": 2,
        "sol": "<b>Explanation:</b> The sound is actually produced by the vibration of the column of air remaining inside the bottle above the water. As the water level rises, the <b>length of this air column continuously decreases</b>. A shorter air column has a higher natural frequency. Higher frequency directly results in a higher, shriller <b>pitch</b>."
      },
      {
        "id": "SND_036",
        "topic": "Characteristics: Loudness, Pitch & Quality",
        "q": "According to the World Health Organization (WHO), while normal conversation happens at about 60 dB, prolonged exposure to sound levels above what approximate threshold is considered physically painful and can cause permanent damage to the human ear?",
        "options": [
          "30 dB",
          "80 dB",
          "120 dB",
          "200 dB"
        ],
        "correct": 2,
        "sol": "<b>Explanation:</b> The human ear can safely tolerate sound up to about 80 dB (safe limit). However, when the sound level reaches or exceeds <b>120 dB</b> (the threshold of pain, roughly the noise of a jet engine taking off nearby), it causes physical pain and can instantly rupture the eardrum or cause permanent hearing loss."
      },
      {
        "id": "SND_037",
        "topic": "Characteristics: Loudness, Pitch & Quality",
        "q": "Observe the diagram described below: Two sound waveforms, 'Wave A' and 'Wave B', are displayed on an oscilloscope. Both waves have the exact same vertical peak height and the exact same horizontal width per cycle. However, Wave A is a perfectly smooth sine curve, while Wave B has a jagged, sharp 'sawtooth' shape. How will these two sounds compare to a listener?",
        "imgUrl": "A clean 2D physics diagram showing an oscilloscope screen with two sound waveforms, labeled 'Wave A' and 'Wave B', drawn one above the other. Both waves have the exact same vertical height (amplitude) and the exact same horizontal wavelength (frequency). However, Wave A is a perfectly smooth sine wave, while Wave B has a jagged, complex 'sawtooth' shape. Standard textbook style, clean black lines on a white background.",
        "options": [
          "They will have different loudness, but the same pitch and quality.",
          "They will have different pitch, but the same loudness and quality.",
          "They will have the same loudness and pitch, but different quality.",
          "They will sound completely identical."
        ],
        "correct": 2,
        "sol": "<b>Step 1: Analyze Amplitude.</b> Same vertical height = Same Amplitude = <b>Same Loudness</b>.<br><b>Step 2: Analyze Frequency.</b> Same horizontal width per cycle = Same Frequency = <b>Same Pitch</b>.<br><b>Step 3: Analyze Waveform.</b> One is smooth, the other is jagged. This means they have different waveforms (different harmonics). Different waveforms result in a <b>different Quality (Timbre)</b>."
      },
      {
        "id": "SND_038",
        "topic": "Characteristics: Loudness, Pitch & Quality",
        "q": "A woman's voice is generally universally distinguishable from a man's voice, primarily because a woman's voice tends to be 'shriller'. Which physical characteristic of the sound wave dictates this difference?",
        "options": [
          "A woman's voice has a higher amplitude.",
          "A woman's voice has a higher frequency (higher pitch).",
          "A woman's voice travels at a higher speed.",
          "A woman's voice has a longer wavelength."
        ],
        "correct": 1,
        "sol": "<b>Explanation:</b> Women generally have shorter vocal cords than men. Shorter vibrating bodies naturally vibrate at a <b>higher frequency</b>. Because pitch is directly dependent on frequency, a higher frequency results in a higher, shriller pitch. (Loudness and speed are irrelevant here)."
      },
      {
        "id": "SND_039",
        "topic": "Characteristics: Loudness, Pitch & Quality",
        "q": "<b>[Topper Challenge]</b> A guitarist is tuning his instrument. He turns the tuning peg to tighten a specific string, increasing the mechanical tension in the string by exactly 4 times its original value. Assuming the length and thickness of the string remain unchanged, what will happen to the pitch of the sound produced when plucked?",
        "options": [
          "The pitch will remain exactly the same.",
          "The pitch will become half of its original value.",
          "The pitch will become exactly double its original value.",
          "The pitch will become 4 times its original value."
        ],
        "correct": 2,
        "sol": "<b>Step 1: Recall the string frequency formula.</b> The frequency (pitch) of a stretched string is directly proportional to the square root of its tension: \\( f \\propto \\sqrt{T} \\).<br><b>Step 2: Apply the change.</b> If the new tension \\( T' = 4T \\), then the new frequency \\( f' \\propto \\sqrt{4T} = 2\\sqrt{T} \\).<br><b>Conclusion:</b> Because the frequency scales with the square root of the tension, increasing the tension by 4 times causes the frequency (and therefore the pitch) to become exactly <b>double</b>."
      },
      {
        "id": "SND_040",
        "topic": "Characteristics: Loudness, Pitch & Quality",
        "q": "<b>[Topper Challenge]</b> Two identical sound sources, A and B, emit identical sound waves in an open field. A student stands at a distance of \\( d \\) from source A, and a distance of \\( 3d \\) from source B. Assuming no sound is absorbed by the air, how does the physical intensity of the sound from source A compare to the intensity from source B at the student's exact location?",
        "options": [
          "The intensity of A is 3 times the intensity of B.",
          "The intensity of A is 9 times the intensity of B.",
          "The intensity of A is 1/3 the intensity of B.",
          "The intensities are exactly equal."
        ],
        "correct": 1,
        "sol": "<b>Step 1: Recall the Inverse Square Law.</b> The intensity (\\( I \\)) of sound in an open space is inversely proportional to the square of the distance (\\( d \\)) from the source: \\( I \\propto \\frac{1}{d^2} \\).<br><b>Step 2: Compare the distances.</b> The distance to source B is 3 times greater than the distance to source A (\\( 3d \\) vs \\( d \\)).<br><b>Step 3: Calculate the ratio.</b> Because B is 3 times further away, its intensity drops by a factor of \\( 3^2 = 9 \\). Therefore, the closer source (A) will have an intensity exactly <b>9 times greater</b> than source B."
      }
    ]
  }
};
