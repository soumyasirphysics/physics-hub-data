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
      }
    ]
  }
};
