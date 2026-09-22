/**
 * MathPulse K-12 - Core Curriculum Topics Database (2026 Edition)
 * Comprehensive English curriculum covering 52 topics across 5 grade bands.
 */

export const MATH_TOPICS = [
  // =========================================================================
  // GRADE BAND K-2: EARLY MATH & FOUNDATIONS (10 Topics)
  // =========================================================================
  {
    id: "k2-counting",
    title: "Counting & Number Sense (1 to 100)",
    gradeBand: "k-2",
    gradeText: "Grades K–2",
    category: "Number Sense",
    icon: "🔢",
    summary: "Discover how numbers work, count forward and backward, and group objects by tens and ones.",
    keyConcept: "Numbers represent quantities. When we count from 1 to 100, we count by ones, twos, fives, or tens to recognize patterns.",
    formula: "Pattern: 1, 2, 3... 10, 20, 30... 100",
    example: {
      problem: "Count by 10s: What number comes after 10, 20, 30, 40?",
      steps: [
        "Notice the pattern increases by 10 each time.",
        "Add 10 to 40: 40 + 10 = 50."
      ],
      answer: "50"
    },
    realWorld: "Counting coins in a piggy bank or tallying players on a playground.",
    practiceQuestions: [
      {
        question: "What number comes immediately after 49?",
        options: ["48", "50", "51", "60"],
        correct: 1,
        explanation: "Counting by ones, 49 + 1 = 50."
      },
      {
        question: "Count by 5s: 5, 10, 15, __?",
        options: ["16", "20", "25", "30"],
        correct: 1,
        explanation: "Adding 5 to 15 gives 20."
      },
      {
        question: "Which number has 3 tens and 7 ones?",
        options: ["73", "307", "37", "10"],
        correct: 2,
        explanation: "3 tens = 30, plus 7 ones = 37."
      }
    ]
  },
  {
    id: "k2-addition",
    title: "Addition Within 20",
    gradeBand: "k-2",
    gradeText: "Grades K–2",
    category: "Operations",
    icon: "➕",
    summary: "Learn to combine groups of objects and find the total sum using visual number bonds.",
    keyConcept: "Addition means putting two or more groups together to make one whole group (Part + Part = Whole).",
    formula: "a + b = sum",
    example: {
      problem: "Leo has 7 toy cars and gets 5 more for his birthday. How many does he have in total?",
      steps: [
        "Start at 7.",
        "Count up 5 steps: 8, 9, 10, 11, 12.",
        "7 + 5 = 12."
      ],
      answer: "12 toy cars"
    },
    realWorld: "Adding your score in a board game or combining apples in a grocery basket.",
    practiceQuestions: [
      {
        question: "What is 8 + 6?",
        options: ["13", "14", "15", "12"],
        correct: 1,
        explanation: "8 + 2 = 10, and 10 + 4 = 14."
      },
      {
        question: "Which pair adds up to 10?",
        options: ["4 + 5", "3 + 7", "2 + 9", "6 + 3"],
        correct: 1,
        explanation: "3 + 7 = 10 (Friends of 10)."
      },
      {
        question: "If 9 + 4 = 13, what is 4 + 9?",
        options: ["13", "14", "12", "15"],
        correct: 0,
        explanation: "The commutative property of addition means order does not change the sum."
      }
    ]
  },
  {
    id: "k2-subtraction",
    title: "Subtraction Within 20",
    gradeBand: "k-2",
    gradeText: "Grades K–2",
    category: "Operations",
    icon: "➖",
    summary: "Take away objects from a set or find the difference between two quantities.",
    keyConcept: "Subtraction represents taking items away or finding how much more one quantity is than another.",
    formula: "Total - Removed = Difference",
    example: {
      problem: "There are 15 birds on a fence. 6 fly away. How many remain?",
      steps: [
        "Start with 15.",
        "Subtract 6 by counting back: 14, 13, 12, 11, 10, 9.",
        "15 - 6 = 9."
      ],
      answer: "9 birds"
    },
    realWorld: "Finding how many cookies are left after snack time.",
    practiceQuestions: [
      {
        question: "What is 14 - 7?",
        options: ["6", "7", "8", "9"],
        correct: 1,
        explanation: "Since 7 + 7 = 14, 14 - 7 = 7 (doubles fact)."
      },
      {
        question: "What is 18 - 9?",
        options: ["8", "9", "10", "11"],
        correct: 1,
        explanation: "18 - 9 = 9."
      },
      {
        question: "Mia had 11 stickers and gave 3 to her friend. How many does she keep?",
        options: ["7", "8", "9", "14"],
        correct: 1,
        explanation: "11 - 3 = 8."
      }
    ]
  },
  {
    id: "k2-2d-shapes",
    title: "2D Shapes & Attributes",
    gradeBand: "k-2",
    gradeText: "Grades K–2",
    category: "Geometry",
    icon: "🔺",
    summary: "Explore triangles, squares, rectangles, hexagons, and circles by counting sides and vertices.",
    keyConcept: "2D shapes are flat figures defined by straight or curved sides and corners called vertices.",
    formula: "Triangle = 3 sides, Quadrilateral = 4 sides",
    example: {
      problem: "How many sides and vertices does a hexagon have?",
      steps: [
        "Count the boundary straight lines: 6 sides.",
        "Count the connecting corners: 6 vertices."
      ],
      answer: "6 sides and 6 vertices"
    },
    realWorld: "Road signs (stop sign = octagon, yield sign = triangle).",
    practiceQuestions: [
      {
        question: "Which shape has exactly 3 sides and 3 corners?",
        options: ["Square", "Triangle", "Pentagon", "Circle"],
        correct: 1,
        explanation: "A triangle always has 3 sides and 3 vertices."
      },
      {
        question: "How many vertices does a rectangle have?",
        options: ["2", "3", "4", "5"],
        correct: 2,
        explanation: "A rectangle has 4 corners (vertices)."
      },
      {
        question: "Which shape has 0 straight sides?",
        options: ["Circle", "Square", "Hexagon", "Rhombus"],
        correct: 0,
        explanation: "A circle is a curved closed loop with zero straight edges."
      }
    ]
  },
  {
    id: "k2-telling-time",
    title: "Telling Time (Hours & Half-Hours)",
    gradeBand: "k-2",
    gradeText: "Grades K–2",
    category: "Measurement",
    icon: "⏰",
    summary: "Read analog clocks with the short hour hand and long minute hand, and write digital times.",
    keyConcept: "The short hand points to the hour, while the long hand points to the minutes (60 minutes = 1 hour).",
    formula: "1 Hour = 60 Minutes, Half Hour = 30 Minutes",
    example: {
      problem: "The short hand is between 3 and 4, and the long hand points to 6. What time is it?",
      steps: [
        "Hour hand is past 3, so the hour is 3.",
        "Minute hand points to 6: 6 x 5 = 30 minutes.",
        "The time is 3:30."
      ],
      answer: "3:30 (half-past three)"
    },
    realWorld: "Knowing when school starts or when bedtime arrives.",
    practiceQuestions: [
      {
        question: "Where does the minute hand point when it is exactly 8:00?",
        options: ["At 12", "At 6", "At 8", "At 3"],
        correct: 0,
        explanation: "At the top of the hour (:00), the minute hand points directly at 12."
      },
      {
        question: "What time is shown when the long hand is at 6 and short hand is between 1 and 2?",
        options: ["1:00", "1:30", "2:30", "6:05"],
        correct: 1,
        explanation: "Hand past 1 and long hand at 6 means 1:30."
      },
      {
        question: "How many minutes are in one full hour?",
        options: ["10", "30", "60", "100"],
        correct: 2,
        explanation: "There are 60 minutes in 1 hour."
      }
    ]
  },
  {
    id: "k2-comparing-numbers",
    title: "Comparing Numbers (> , < , =)",
    gradeBand: "k-2",
    gradeText: "Grades K–2",
    category: "Number Sense",
    icon: "⚖️",
    summary: "Compare two amounts to see which is greater than, less than, or equal.",
    keyConcept: "The alligator symbol always opens its mouth toward the larger value: Greater than (>), Less than (<), Equal (=).",
    formula: "A > B, A < B, A = B",
    example: {
      problem: "Compare 42 and 38 using >, <, or =.",
      steps: [
        "Look at the tens digit: 4 tens vs 3 tens.",
        "4 tens (40) is greater than 3 tens (30).",
        "42 > 38."
      ],
      answer: "42 > 38"
    },
    realWorld: "Deciding which box has more crayons or comparing heights of two friends.",
    practiceQuestions: [
      {
        question: "Which symbol makes this true: 65 __ 71?",
        options: [">", "<", "=", "+"],
        correct: 1,
        explanation: "65 is less than 71, so 65 < 71."
      },
      {
        question: "Which comparison is correct?",
        options: ["19 > 21", "88 < 82", "50 = 50", "14 < 12"],
        correct: 2,
        explanation: "50 is equal to 50."
      },
      {
        question: "Which number is greater than 84?",
        options: ["79", "83", "84", "89"],
        correct: 3,
        explanation: "89 is greater than 84."
      }
    ]
  },
  {
    id: "k2-patterns",
    title: "Repeating & Growing Patterns",
    gradeBand: "k-2",
    gradeText: "Grades K–2",
    category: "Algebra",
    icon: "🔁",
    summary: "Identify pattern units (AB, AAB, ABC) and predict what comes next.",
    keyConcept: "A pattern is an arrangement of shapes, colors, or numbers that repeats in a predictable rule.",
    formula: "Rule: Identify Core Unit and Repeat",
    example: {
      problem: "What comes next in the pattern: Circle, Square, Circle, Square, Circle, ___?",
      steps: [
        "Identify the repeating core: [Circle, Square].",
        "The last shape was Circle.",
        "The next shape in the core is Square."
      ],
      answer: "Square"
    },
    realWorld: "Textile prints, music rhythms, traffic light cycles.",
    practiceQuestions: [
      {
        question: "In the pattern 2, 4, 6, 8, __, what is the next number?",
        options: ["9", "10", "11", "12"],
        correct: 1,
        explanation: "The rule is +2 each time. 8 + 2 = 10."
      },
      {
        question: "Complete the color pattern: Red, Blue, Blue, Red, Blue, Blue, Red, ___?",
        options: ["Red", "Blue", "Green", "Yellow"],
        correct: 1,
        explanation: "The core pattern is [Red, Blue, Blue]. After Red comes Blue."
      },
      {
        question: "What is the rule in: 10, 8, 6, 4?",
        options: ["Add 2", "Subtract 2", "Add 1", "Subtract 1"],
        correct: 1,
        explanation: "Each number decreases by 2."
      }
    ]
  },
  {
    id: "k2-money",
    title: "Money: Coins & Dollar Bills",
    gradeBand: "k-2",
    gradeText: "Grades K–2",
    category: "Measurement",
    icon: "🪙",
    summary: "Recognize pennies, nickels, dimes, and quarters and calculate total cents.",
    keyConcept: "Penny = 1¢, Nickel = 5¢, Dime = 10¢, Quarter = 25¢. 100 cents = $1.00.",
    formula: "100¢ = $1.00",
    example: {
      problem: "You have 2 dimes and 3 pennies. How much money do you have?",
      steps: [
        "2 dimes = 2 x 10¢ = 20¢.",
        "3 pennies = 3 x 1¢ = 3¢.",
        "20¢ + 3¢ = 23¢."
      ],
      answer: "23 cents"
    },
    realWorld: "Buying a sticker at the school shop or putting coins in a vending machine.",
    practiceQuestions: [
      {
        question: "How much is one quarter worth?",
        options: ["5¢", "10¢", "25¢", "50¢"],
        correct: 2,
        explanation: "A quarter is worth 25 cents."
      },
      {
        question: "How many dimes make 1 dollar ($1.00)?",
        options: ["5", "10", "20", "100"],
        correct: 1,
        explanation: "10 dimes x 10¢ = 100¢ = $1.00."
      },
      {
        question: "Which combination equals 15¢?",
        options: ["1 dime + 1 nickel", "2 nickels", "1 quarter", "3 pennies"],
        correct: 0,
        explanation: "1 dime (10¢) + 1 nickel (5¢) = 15¢."
      }
    ]
  },
  {
    id: "k2-place-value",
    title: "Place Value (Tens & Ones)",
    gradeBand: "k-2",
    gradeText: "Grades K–2",
    category: "Number Sense",
    icon: "🧱",
    summary: "Understand that two-digit numbers are bundles of tens and leftover ones.",
    keyConcept: "In a 2-digit number, the left digit tells how many groups of ten, and the right digit tells how many single units (ones).",
    formula: "Number = (Tens x 10) + Ones",
    example: {
      problem: "How can you decompose the number 58 into tens and ones?",
      steps: [
        "Look at the tens place: 5 tens = 50.",
        "Look at the ones place: 8 ones = 8.",
        "58 = 5 tens + 8 ones."
      ],
      answer: "5 tens and 8 ones (50 + 8)"
    },
    realWorld: "Packing items into boxes of 10 with individual items remaining.",
    practiceQuestions: [
      {
        question: "In the number 74, what is the value of the digit 7?",
        options: ["7", "70", "74", "14"],
        correct: 1,
        explanation: "The 7 is in the tens place, so its value is 70."
      },
      {
        question: "What number is equal to 6 tens and 0 ones?",
        options: ["6", "16", "60", "66"],
        correct: 2,
        explanation: "6 tens and 0 ones equals 60."
      },
      {
        question: "If you add 1 ten to 35, what is the new number?",
        options: ["36", "45", "55", "40"],
        correct: 1,
        explanation: "35 + 10 = 45."
      }
    ]
  },
  {
    id: "k2-measurements",
    title: "Basic Measurement (Length & Weight)",
    gradeBand: "k-2",
    gradeText: "Grades K–2",
    category: "Measurement",
    icon: "📏",
    summary: "Measure length using non-standard units (paper clips) and standard rulers (inches & centimeters).",
    keyConcept: "Length tells how long an object is from one end to the other. Weight tells how heavy it is.",
    formula: "Compare: Longer/Shorter, Heavier/Lighter",
    example: {
      problem: "A pencil measures 6 paperclips long. An eraser measures 2 paperclips. How much longer is the pencil?",
      steps: [
        "Subtract eraser length from pencil length.",
        "6 - 2 = 4 paperclips."
      ],
      answer: "4 paperclips longer"
    },
    realWorld: "Measuring your shoe size or checking your height as you grow.",
    practiceQuestions: [
      {
        question: "Which tool is best used to measure the length of a book?",
        options: ["Thermometer", "Ruler", "Scale", "Clock"],
        correct: 1,
        explanation: "A ruler measures linear length in inches or centimeters."
      },
      {
        question: "An elephant is _______ than a puppy.",
        options: ["Lighter", "Shorter", "Heavier", "Smaller"],
        correct: 2,
        explanation: "An elephant weighs significantly more than a puppy."
      },
      {
        question: "Which is longer: 10 centimeters or 2 centimeters?",
        options: ["10 centimeters", "2 centimeters", "They are equal", "Cannot tell"],
        correct: 0,
        explanation: "10 cm is 8 cm longer than 2 cm."
      }
    ]
  },

  // =========================================================================
  // GRADE BAND 3-5: ELEMENTARY MATH & MASTERY (10 Topics)
  // =========================================================================
  {
    id: "g35-multiplication",
    title: "Multiplication Mastery (Times Tables 1–12)",
    gradeBand: "3-5",
    gradeText: "Grades 3–5",
    category: "Operations",
    icon: "✖️",
    summary: "Master repeated addition, rectangular arrays, and fast mental multiplication up to 12 x 12.",
    keyConcept: "Multiplication represents equal groups. $a \\times b$ means $a$ groups of $b$ items.",
    formula: "Factor x Factor = Product",
    example: {
      problem: "A classroom has 6 tables. Each table has 4 chairs. How many chairs are in the room?",
      steps: [
        "Multiply number of groups by size of group.",
        "6 x 4 = 24."
      ],
      answer: "24 chairs"
    },
    realWorld: "Counting rows of seats in a theater or buying packs of juice boxes.",
    practiceQuestions: [
      {
        question: "What is 7 x 8?",
        options: ["54", "56", "64", "48"],
        correct: 1,
        explanation: "7 x 8 = 56."
      },
      {
        question: "Any number multiplied by 0 always equals:",
        options: ["The same number", "1", "0", "10"],
        correct: 2,
        explanation: "Zero Property of Multiplication: a x 0 = 0."
      },
      {
        question: "If 9 x 6 = 54, what is 54 / 9?",
        options: ["6", "7", "8", "9"],
        correct: 0,
        explanation: "Division is the inverse operation of multiplication."
      }
    ]
  },
  {
    id: "g35-division",
    title: "Division & Remainders",
    gradeBand: "3-5",
    gradeText: "Grades 3–5",
    category: "Operations",
    icon: "➗",
    summary: "Share quantities equally among groups and handle leftovers (remainders) in multi-digit division.",
    keyConcept: "Dividend / Divisor = Quotient with a possible Remainder.",
    formula: "Dividend = (Divisor x Quotient) + Remainder",
    example: {
      problem: "Divide 23 stickers equally among 5 friends. How many does each friend get, and how many are left over?",
      steps: [
        "Find the largest multiple of 5 <= 23: 5 x 4 = 20.",
        "Subtract: 23 - 20 = 3 remainder.",
        "23 / 5 = 4 R 3."
      ],
      answer: "4 stickers each, with 3 left over"
    },
    realWorld: "Splitting pizza slices evenly among your family members.",
    practiceQuestions: [
      {
        question: "What is 48 / 6?",
        options: ["7", "8", "9", "6"],
        correct: 1,
        explanation: "6 x 8 = 48, so 48 / 6 = 8."
      },
      {
        question: "What is 19 / 4?",
        options: ["4 R 3", "4 R 2", "5 R 1", "3 R 4"],
        correct: 0,
        explanation: "4 x 4 = 16. 19 - 16 = 3 remainder."
      },
      {
        question: "If 72 divided by a number is 8, what is the number?",
        options: ["6", "7", "8", "9"],
        correct: 3,
        explanation: "72 / 9 = 8."
      }
    ]
  },
  {
    id: "g35-fractions-intro",
    title: "Understanding Fractions & Number Lines",
    gradeBand: "3-5",
    gradeText: "Grades 3–5",
    category: "Fractions",
    icon: "🍰",
    summary: "Learn what numerators and denominators mean by splitting shapes and positioning values on number lines.",
    keyConcept: "Numerator (top) = parts you have. Denominator (bottom) = total equal parts that make one whole.",
    formula: "Fraction = Numerator / Denominator",
    example: {
      problem: "A chocolate bar is broken into 8 equal pieces. Alex eats 3 pieces. What fraction remains?",
      steps: [
        "Total parts in one whole = 8/8.",
        "Eaten parts = 3/8.",
        "Remaining: 8/8 - 3/8 = 5/8."
      ],
      answer: "5/8 of the bar"
    },
    realWorld: "Following baking recipes (e.g., 3/4 cup of sugar).",
    practiceQuestions: [
      {
        question: "In the fraction 3/5, what does the number 5 represent?",
        options: ["Parts chosen", "The denominator (total equal parts)", "The numerator", "The whole number"],
        correct: 1,
        explanation: "The bottom number is the denominator, representing total parts."
      },
      {
        question: "Which fraction is equal to 1 whole?",
        options: ["1/4", "3/4", "4/4", "5/4"],
        correct: 2,
        explanation: "When numerator equals denominator, the fraction equals 1."
      },
      {
        question: "Where is 1/2 located on a number line from 0 to 1?",
        options: ["Exactly at 0", "Exactly halfway", "At 1", "Near 3/4"],
        correct: 1,
        explanation: "1/2 is the midpoint between 0 and 1."
      }
    ]
  },
  {
    id: "g35-equivalent-fractions",
    title: "Equivalent & Comparing Fractions",
    gradeBand: "3-5",
    gradeText: "Grades 3–5",
    category: "Fractions",
    icon: "⚖️",
    summary: "Discover fractions that name the same amount by multiplying or dividing top and bottom by the same number.",
    keyConcept: "Multiplying or dividing both numerator and denominator by the same non-zero number produces an equivalent fraction.",
    formula: "a/b = (a x k) / (b x k)",
    example: {
      problem: "Find an equivalent fraction for 2/3 with a denominator of 12.",
      steps: [
        "Determine the multiplier: 12 / 3 = 4.",
        "Multiply numerator by 4: 2 x 4 = 8.",
        "2/3 = 8/12."
      ],
      answer: "8/12"
    },
    realWorld: "Comparing two pizza slices from different sized cuts.",
    practiceQuestions: [
      {
        question: "Which fraction is equivalent to 1/2?",
        options: ["2/3", "4/8", "3/8", "2/5"],
        correct: 1,
        explanation: "4/8 simplifies to 1/2 (divide top and bottom by 4)."
      },
      {
        question: "Which is greater: 3/4 or 2/4?",
        options: ["3/4", "2/4", "They are equal", "Cannot tell"],
        correct: 0,
        explanation: "When denominators are identical, the larger numerator is greater: 3/4 > 2/4."
      },
      {
        question: "Simplify 6/10 to its lowest terms:",
        options: ["1/2", "3/5", "2/5", "6/5"],
        correct: 1,
        explanation: "Divide numerator and denominator by their GCD (2): 6/2 = 3, 10/2 = 5 -> 3/5."
      }
    ]
  },
  {
    id: "g35-decimals",
    title: "Decimals (Tenths & Hundredths)",
    gradeBand: "3-5",
    gradeText: "Grades 3–5",
    category: "Number Sense",
    icon: "🎯",
    summary: "Connect fractions to decimals, read place values to hundredths, and add decimal numbers.",
    keyConcept: "A decimal point separates whole numbers from fractional parts: tenths (0.1) and hundredths (0.01).",
    formula: "0.1 = 1/10,  0.01 = 1/100",
    example: {
      problem: "Convert 3/10 to a decimal and add 0.45.",
      steps: [
        "3/10 = 0.30.",
        "Align decimal points: 0.30 + 0.45 = 0.75."
      ],
      answer: "0.75"
    },
    realWorld: "Handling US currency: $1.75 means 1 dollar and 75 hundredths of a dollar.",
    practiceQuestions: [
      {
        question: "What is 0.7 written as a fraction?",
        options: ["7/100", "7/10", "1/7", "70/10"],
        correct: 1,
        explanation: "The 7 is in the tenths place, so it equals 7/10."
      },
      {
        question: "Which decimal is larger: 0.6 or 0.58?",
        options: ["0.6", "0.58", "They are equal", "0.58 because it has more digits"],
        correct: 0,
        explanation: "0.6 is 0.60, which is greater than 0.58."
      },
      {
        question: "Calculate: 1.25 + 0.50 =",
        options: ["1.30", "1.75", "1.85", "2.00"],
        correct: 1,
        explanation: "1.25 + 0.50 = 1.75."
      }
    ]
  },
  {
    id: "g35-perimeter-area",
    title: "Perimeter & Area Calculation",
    gradeBand: "3-5",
    gradeText: "Grades 3–5",
    category: "Geometry",
    icon: "📐",
    summary: "Find the distance around a shape (perimeter) and the square units inside it (area).",
    keyConcept: "Perimeter is the rim (sum of sides). Area is the surface space inside (length x width for rectangles).",
    formula: "P = 2(l + w),  A = l x w",
    example: {
      problem: "Find the perimeter and area of a bedroom that is 8 ft long and 5 ft wide.",
      steps: [
        "Perimeter = 8 + 5 + 8 + 5 = 26 ft.",
        "Area = 8 x 5 = 40 sq ft."
      ],
      answer: "Perimeter = 26 ft, Area = 40 sq ft"
    },
    realWorld: "Putting a fence around a garden (perimeter) and installing carpet in a room (area).",
    practiceQuestions: [
      {
        question: "What is the area of a square with a side length of 6 cm?",
        options: ["24 cm²", "36 cm²", "12 cm²", "30 cm²"],
        correct: 1,
        explanation: "Area of a square = side x side = 6 x 6 = 36 cm²."
      },
      {
        question: "What is the perimeter of a rectangle with length 10 m and width 4 m?",
        options: ["40 m", "28 m", "14 m", "20 m"],
        correct: 1,
        explanation: "P = 2 x (10 + 4) = 2 x 14 = 28 m."
      },
      {
        question: "If a rectangle has an area of 30 sq ft and a length of 6 ft, what is its width?",
        options: ["4 ft", "5 ft", "6 ft", "24 ft"],
        correct: 1,
        explanation: "Width = Area / Length = 30 / 6 = 5 ft."
      }
    ]
  },
  {
    id: "g35-factors-primes",
    title: "Factors, Multiples & Prime Numbers",
    gradeBand: "3-5",
    gradeText: "Grades 3–5",
    category: "Number Sense",
    icon: "🧬",
    summary: "Identify prime vs. composite numbers, find factors, and list common multiples.",
    keyConcept: "A prime number has only two factors: 1 and itself (e.g. 2, 3, 5, 7, 11). Composite numbers have more.",
    formula: "Prime: Factors are {1, p}",
    example: {
      problem: "List all factors of 12 and identify whether it is prime or composite.",
      steps: [
        "Find factor pairs: 1 x 12, 2 x 6, 3 x 4.",
        "Factors of 12: {1, 2, 3, 4, 6, 12}.",
        "Since it has more than 2 factors, it is composite."
      ],
      answer: "Factors: 1, 2, 3, 4, 6, 12 (Composite)"
    },
    realWorld: "Arranging items in neat rectangular marching band formations.",
    practiceQuestions: [
      {
        question: "Which of the following is a prime number?",
        options: ["9", "13", "15", "21"],
        correct: 1,
        explanation: "13 is only divisible by 1 and 13."
      },
      {
        question: "What is the smallest positive prime number?",
        options: ["0", "1", "2", "3"],
        correct: 2,
        explanation: "2 is the smallest prime number (and the only even prime)."
      },
      {
        question: "What is the Least Common Multiple (LCM) of 4 and 6?",
        options: ["12", "24", "10", "2"],
        correct: 0,
        explanation: "Multiples of 4: 4, 8, 12... Multiples of 6: 6, 12... LCM is 12."
      }
    ]
  },
  {
    id: "g35-order-of-operations",
    title: "Order of Operations (PEMDAS Basics)",
    gradeBand: "3-5",
    gradeText: "Grades 3–5",
    category: "Algebra",
    icon: "🧮",
    summary: "Solve math expressions in the correct order: Parentheses, Exponents, Multiply/Divide, Add/Subtract.",
    keyConcept: "Without standard rules, expressions would have multiple answers. PEMDAS gives a single consistent answer.",
    formula: "PEMDAS: (P) -> E -> (M / D) -> (A / S)",
    example: {
      problem: "Evaluate: 5 + 3 x 4",
      steps: [
        "Multiplication comes before Addition.",
        "Calculate 3 x 4 = 12.",
        "Then add: 5 + 12 = 17."
      ],
      answer: "17"
    },
    realWorld: "Coding video game score calculations and banking interest formulas.",
    practiceQuestions: [
      {
        question: "What is the value of (10 - 2) x 3?",
        options: ["4", "16", "24", "30"],
        correct: 2,
        explanation: "Parentheses first: 10 - 2 = 8. Then 8 x 3 = 24."
      },
      {
        question: "Evaluate: 18 - 8 / 2",
        options: ["5", "14", "10", "13"],
        correct: 1,
        explanation: "Division before subtraction: 8 / 2 = 4. 18 - 4 = 14."
      },
      {
        question: "Evaluate: 2 + 3 x (4 + 1)",
        options: ["25", "17", "15", "11"],
        correct: 1,
        explanation: "(4 + 1) = 5. Then 3 x 5 = 15. Finally 2 + 15 = 17."
      }
    ]
  },
  {
    id: "g35-coordinate-plane",
    title: "Coordinate Plane (Quadrant 1)",
    gradeBand: "3-5",
    gradeText: "Grades 3–5",
    category: "Geometry",
    icon: "🗺️",
    summary: "Plot points on an (x, y) grid starting from the origin (0,0) by moving right and up.",
    keyConcept: "An ordered pair (x, y) tells your location: x moves horizontally (right), y moves vertically (up).",
    formula: "Ordered Pair: (x, y)",
    example: {
      problem: "Plot the point (4, 3) on the coordinate plane.",
      steps: [
        "Start at origin (0, 0).",
        "Move 4 units to the right along the x-axis.",
        "Move 3 units straight up parallel to the y-axis.",
        "Mark the point at (4, 3)."
      ],
      answer: "(4, 3)"
    },
    realWorld: "GPS navigation, satellite mapping, and video game character positions.",
    practiceQuestions: [
      {
        question: "What is the name of the starting point (0, 0)?",
        options: ["Intercept", "Origin", "Vertex", "Axis"],
        correct: 1,
        explanation: "(0, 0) is known as the origin."
      },
      {
        question: "In the ordered pair (5, 2), which number tells you how far to move right?",
        options: ["2", "5", "7", "3"],
        correct: 1,
        explanation: "The first coordinate, x = 5, represents horizontal rightward movement."
      },
      {
        question: "If you start at (2, 3) and move up 4 units, what is the new coordinate?",
        options: ["(6, 3)", "(2, 7)", "(4, 7)", "(6, 7)"],
        correct: 1,
        explanation: "Moving up increases the y-coordinate: (2, 3 + 4) = (2, 7)."
      }
    ]
  },
  {
    id: "g35-word-problems",
    title: "Multi-Step Word Problems",
    gradeBand: "3-5",
    gradeText: "Grades 3–5",
    category: "Operations",
    icon: "🧩",
    summary: "Break down real-world math stories into manageable equations and multi-step solutions.",
    keyConcept: "Identify the known facts, determine what question needs answering, and choose operations step by step.",
    formula: "Read -> Plan -> Solve -> Check",
    example: {
      problem: "Maya bought 3 packs of pens with 8 pens in each pack. She shared 9 pens with her friends. How many pens does she have left?",
      steps: [
        "Step 1: Total pens bought = 3 x 8 = 24 pens.",
        "Step 2: Pens remaining = 24 - 9 = 15 pens."
      ],
      answer: "15 pens"
    },
    realWorld: "Budgeting party supplies or calculating tournament points.",
    practiceQuestions: [
      {
        question: "A store has 4 boxes with 10 apples each. They sell 12 apples. How many apples are left?",
        options: ["28", "38", "18", "32"],
        correct: 0,
        explanation: "4 x 10 = 40. 40 - 12 = 28 apples."
      },
      {
        question: "Liam saves $5 every week for 6 weeks. Then he spends $14 on a book. How much does he have left?",
        options: ["$16", "$15", "$30", "$20"],
        correct: 0,
        explanation: "6 x $5 = $30. $30 - $14 = $16."
      },
      {
        question: "There are 50 students. 2 buses take 20 students each. How many students need another ride?",
        options: ["5", "10", "15", "20"],
        correct: 1,
        explanation: "2 x 20 = 40. 50 - 40 = 10 students remaining."
      }
    ]
  },

  // =========================================================================
  // GRADE BAND 6-8: MIDDLE SCHOOL MATH (10 Topics)
  // =========================================================================
  {
    id: "g68-ratios-rates",
    title: "Ratios, Rates & Unit Prices",
    gradeBand: "6-8",
    gradeText: "Grades 6–8",
    category: "Ratios & Proportions",
    icon: "🏷️",
    summary: "Compare quantities using ratios, calculate unit rates, and identify the best shopping deals.",
    keyConcept: "A ratio compares two quantities. A unit rate is a rate where the second quantity is 1 unit (e.g., miles per hour).",
    formula: "Unit Rate = Total Quantity / Number of Units",
    example: {
      problem: "A 12-pack of sparkling water costs $6.00. What is the unit price per can?",
      steps: [
        "Divide total cost by number of units: $6.00 / 12 cans.",
        "$6.00 / 12 = $0.50 per can."
      ],
      answer: "$0.50 per can"
    },
    realWorld: "Comparing unit prices at the grocery store to find the cheapest cereal.",
    practiceQuestions: [
      {
        question: "A car travels 180 miles in 3 hours. What is its unit speed?",
        options: ["50 mph", "60 mph", "70 mph", "55 mph"],
        correct: 1,
        explanation: "180 miles / 3 hours = 60 miles per hour."
      },
      {
        question: "If the ratio of boys to girls is 3:4 and there are 12 boys, how many girls are there?",
        options: ["14", "15", "16", "20"],
        correct: 2,
        explanation: "12 is 3 x 4. Multiply girls by 4: 4 x 4 = 16 girls."
      },
      {
        question: "Which ratio is equivalent to 2:5?",
        options: ["4:10", "5:2", "6:12", "3:6"],
        correct: 0,
        explanation: "Multiply both sides by 2: (2 x 2) : (5 x 2) = 4:10."
      }
    ]
  },
  {
    id: "g68-integers",
    title: "Integers & Negative Numbers",
    gradeBand: "6-8",
    gradeText: "Grades 6–8",
    category: "Number Sense",
    icon: "❄️",
    summary: "Add, subtract, multiply, and divide positive and negative numbers with confidence.",
    keyConcept: "Opposite signs when multiplied give a negative; matching signs give a positive. Subtracting a negative is adding a positive.",
    formula: "(-) x (-) = (+),  (-) x (+) = (-)",
    example: {
      problem: "Calculate: (-8) - (-14)",
      steps: [
        "Subtracting a negative becomes addition: (-8) + 14.",
        "Different signs: subtract absolute values: 14 - 8 = 6.",
        "Take the sign of the larger absolute value (+14): +6."
      ],
      answer: "6"
    },
    realWorld: "Sub-zero winter temperatures and bank account overdraft balances.",
    practiceQuestions: [
      {
        question: "What is (-7) x (-6)?",
        options: ["-42", "42", "-13", "13"],
        correct: 1,
        explanation: "Negative multiplied by negative gives positive 42."
      },
      {
        question: "What is (-15) + 9?",
        options: ["-6", "6", "-24", "24"],
        correct: 0,
        explanation: "-15 + 9 = -6."
      },
      {
        question: "What is the absolute value of -25? |-25| =",
        options: ["-25", "25", "0", "50"],
        correct: 1,
        explanation: "Absolute value is distance from zero on a number line, which is always non-negative: 25."
      }
    ]
  },
  {
    id: "g68-linear-equations",
    title: "One-Step & Two-Step Linear Equations",
    gradeBand: "6-8",
    gradeText: "Grades 6–8",
    category: "Algebra",
    icon: "⚖️",
    summary: "Isolate variables using inverse operations to solve for unknown values.",
    keyConcept: "Keep the equation balanced: whatever operation you perform on one side, you must perform on the other side.",
    formula: "ax + b = c  =>  x = (c - b) / a",
    example: {
      problem: "Solve for x:  3x + 7 = 22",
      steps: [
        "Subtract 7 from both sides: 3x = 22 - 7 => 3x = 15.",
        "Divide both sides by 3: x = 15 / 3.",
        "x = 5."
      ],
      answer: "x = 5"
    },
    realWorld: "Calculating how many hours you need to work to afford a new phone.",
    practiceQuestions: [
      {
        question: "Solve for x:  x - 9 = 15",
        options: ["6", "24", "135", "22"],
        correct: 1,
        explanation: "Add 9 to both sides: x = 15 + 9 = 24."
      },
      {
        question: "Solve for y:  4y = 36",
        options: ["8", "9", "12", "144"],
        correct: 1,
        explanation: "Divide both sides by 4: y = 36 / 4 = 9."
      },
      {
        question: "Solve for m:  2m - 5 = 11",
        options: ["8", "3", "6", "16"],
        correct: 0,
        explanation: "Add 5: 2m = 16. Divide by 2: m = 8."
      }
    ]
  },
  {
    id: "g68-percentages",
    title: "Percentages, Tax & Discounts",
    gradeBand: "6-8",
    gradeText: "Grades 6–8",
    category: "Ratios & Proportions",
    icon: "🛍️",
    summary: "Calculate sales tax, discounts, markups, tips, and percent change.",
    keyConcept: "Percent means 'out of 100'. Convert percent to decimal by dividing by 100 before multiplying.",
    formula: "Part = (Percent / 100) x Whole",
    example: {
      problem: "A jacket costs $60. It is on sale for 25% off. What is the sale price?",
      steps: [
        "Calculate the discount: 0.25 x $60 = $15.",
        "Subtract discount from original price: $60 - $15 = $45."
      ],
      answer: "$45.00"
    },
    realWorld: "Tipping your restaurant server or finding Black Friday discounts.",
    practiceQuestions: [
      {
        question: "What is 20% of 80?",
        options: ["16", "18", "20", "24"],
        correct: 0,
        explanation: "0.20 x 80 = 16."
      },
      {
        question: "What is 75% written as a simplified fraction?",
        options: ["1/4", "3/4", "7/10", "3/5"],
        correct: 1,
        explanation: "75/100 simplifies to 3/4."
      },
      {
        question: "A meal costs $40. If the sales tax is 8%, how much tax is paid?",
        options: ["$3.20", "$4.80", "$0.32", "$5.00"],
        correct: 0,
        explanation: "$40 x 0.08 = $3.20 tax."
      }
    ]
  },
  {
    id: "g68-exponents-roots",
    title: "Exponents & Square Roots",
    gradeBand: "6-8",
    gradeText: "Grades 6–8",
    category: "Number Sense",
    icon: "⚡",
    summary: "Work with powers, base numbers, and inverse radical square roots.",
    keyConcept: "An exponent indicates repeated multiplication of the base: $b^n = b \\times b \\times ...$ (n times). The square root asks what number squared equals the radicand.",
    formula: "b^n = b x b x ... (n times),  sqrt(x^2) = x",
    example: {
      problem: "Evaluate: 4^3 + sqrt(49)",
      steps: [
        "Calculate 4^3 = 4 x 4 x 4 = 64.",
        "Calculate sqrt(49) = 7 (since 7^2 = 49).",
        "Add: 64 + 7 = 71."
      ],
      answer: "71"
    },
    realWorld: "Computer memory sizes (powers of 2: 8GB, 16GB, 32GB, 64GB).",
    practiceQuestions: [
      {
        question: "What is 3^4?",
        options: ["12", "64", "81", "27"],
        correct: 2,
        explanation: "3 x 3 x 3 x 3 = 81."
      },
      {
        question: "What is the square root of 144?",
        options: ["11", "12", "14", "72"],
        correct: 1,
        explanation: "12 x 12 = 144, so sqrt(144) = 12."
      },
      {
        question: "What is 10^5?",
        options: ["50", "10,000", "100,000", "1,000,000"],
        correct: 2,
        explanation: "1 followed by 5 zeroes is 100,000."
      }
    ]
  },
  {
    id: "g68-probability",
    title: "Probability & Outcome Trees",
    gradeBand: "6-8",
    gradeText: "Grades 6–8",
    category: "Statistics",
    icon: "🎲",
    summary: "Measure the likelihood of events from 0 (impossible) to 1 (certain) using sample spaces.",
    keyConcept: "Theoretical probability is the ratio of favorable outcomes to the total number of possible outcomes.",
    formula: "P(Event) = (Favorable Outcomes) / (Total Outcomes)",
    example: {
      problem: "What is the probability of rolling an even number on a standard 6-sided die?",
      steps: [
        "Possible outcomes: {1, 2, 3, 4, 5, 6} (Total = 6).",
        "Favorable even outcomes: {2, 4, 6} (Favorable = 3).",
        "P(Even) = 3 / 6 = 1/2 or 50%."
      ],
      answer: "1/2 (50%)"
    },
    realWorld: "Weather forecasting (chance of rain) and game design odds.",
    practiceQuestions: [
      {
        question: "A bag has 3 red, 4 blue, and 5 green marbles. What is the probability of picking a blue marble?",
        options: ["4/12 (1/3)", "4/8 (1/2)", "3/12 (1/4)", "5/12"],
        correct: 0,
        explanation: "Total marbles = 3 + 4 + 5 = 12. P(Blue) = 4/12 = 1/3."
      },
      {
        question: "If you flip two coins, what is the probability of getting two Heads (HH)?",
        options: ["1/2", "1/4", "3/4", "1/8"],
        correct: 1,
        explanation: "Outcomes are HH, HT, TH, TT. Exactly 1 out of 4 is HH: 1/4."
      },
      {
        question: "An event that is impossible has a probability of:",
        options: ["0", "0.5", "1", "-1"],
        correct: 0,
        explanation: "Probability ranges from 0 (impossible) to 1 (certain)."
      }
    ]
  },
  {
    id: "g68-statistics",
    title: "Statistics: Mean, Median, Mode & Range",
    gradeBand: "6-8",
    gradeText: "Grades 6–8",
    category: "Statistics",
    icon: "📊",
    summary: "Summarize data sets with measures of central tendency and spread.",
    keyConcept: "Mean = average, Median = middle value when sorted, Mode = most frequent, Range = max minus min.",
    formula: "Mean = (Sum of Values) / (Count of Values)",
    example: {
      problem: "Find the mean and median of: 4, 8, 3, 9, 6",
      steps: [
        "Sort data: 3, 4, 6, 8, 9.",
        "Mean = (3 + 4 + 6 + 8 + 9) / 5 = 30 / 5 = 6.",
        "Median = middle value in sorted list = 6."
      ],
      answer: "Mean = 6, Median = 6"
    },
    realWorld: "Sports batting averages and calculating classroom grade averages.",
    practiceQuestions: [
      {
        question: "What is the mode of the data set: 5, 8, 5, 2, 9, 5, 8?",
        options: ["5", "8", "2", "9"],
        correct: 0,
        explanation: "5 appears 3 times, which is more frequent than any other number."
      },
      {
        question: "Find the range of the numbers: 12, 5, 19, 8, 24",
        options: ["12", "15", "19", "24"],
        correct: 2,
        explanation: "Range = Maximum - Minimum = 24 - 5 = 19."
      },
      {
        question: "What is the median of: 2, 7, 9, 14?",
        options: ["7", "8", "9", "8.5"],
        correct: 1,
        explanation: "Middle two numbers are 7 and 9. Average: (7 + 9) / 2 = 8."
      }
    ]
  },
  {
    id: "g68-slope-linear",
    title: "Slope & Linear Graphs (y = mx + b)",
    gradeBand: "6-8",
    gradeText: "Grades 6–8",
    category: "Algebra",
    icon: "📈",
    summary: "Understand rate of change (slope) and the y-intercept in slope-intercept form.",
    keyConcept: "Slope (m) is the steepness (rise over run). The y-intercept (b) is where the line crosses the vertical y-axis.",
    formula: "y = mx + b,  m = (y2 - y1) / (x2 - x1)",
    example: {
      problem: "Find the slope and y-intercept of the line: y = 4x - 5",
      steps: [
        "Compare with y = mx + b.",
        "m is the coefficient of x: m = 4.",
        "b is the constant term: b = -5."
      ],
      answer: "Slope m = 4, y-intercept b = (0, -5)"
    },
    realWorld: "Calculating mobile phone monthly subscription plans ($30 base + $5/GB).",
    practiceQuestions: [
      {
        question: "What is the slope of the line passing through (1, 3) and (3, 7)?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explanation: "m = (7 - 3) / (3 - 1) = 4 / 2 = 2."
      },
      {
        question: "In the equation y = -3x + 8, what is the y-intercept?",
        options: ["-3", "8", "(8, 0)", "-3/8"],
        correct: 1,
        explanation: "The constant b is 8, so the line crosses at (0, 8)."
      },
      {
        question: "A horizontal line has a slope of:",
        options: ["1", "Undefined", "0", "-1"],
        correct: 2,
        explanation: "Horizontal lines have zero rise, so the slope is 0."
      }
    ]
  },
  {
    id: "g68-pythagorean-theorem",
    title: "Pythagorean Theorem",
    gradeBand: "6-8",
    gradeText: "Grades 6–8",
    category: "Geometry",
    icon: "📐",
    summary: "Calculate missing side lengths in right triangles using the famous relationship a² + b² = c².",
    keyConcept: "In any right triangle, the square of the hypotenuse (longest side opposite the 90° angle) equals the sum of squares of the legs.",
    formula: "a^2 + b^2 = c^2",
    example: {
      problem: "A right triangle has legs of length a = 3 cm and b = 4 cm. What is the length of hypotenuse c?",
      steps: [
        "Use formula: c^2 = 3^2 + 4^2.",
        "c^2 = 9 + 16 = 25.",
        "c = sqrt(25) = 5 cm."
      ],
      answer: "c = 5 cm"
    },
    realWorld: "Construction workers checking if building corners are square (the 3-4-5 rule).",
    practiceQuestions: [
      {
        question: "If legs are a = 6 and b = 8, what is hypotenuse c?",
        options: ["10", "12", "14", "100"],
        correct: 0,
        explanation: "6^2 + 8^2 = 36 + 64 = 100. sqrt(100) = 10."
      },
      {
        question: "Which set of side lengths forms a right triangle?",
        options: ["3, 4, 6", "5, 12, 13", "4, 5, 7", "2, 3, 5"],
        correct: 1,
        explanation: "5^2 + 12^2 = 25 + 144 = 169 = 13^2."
      },
      {
        question: "The longest side of a right triangle is called the:",
        options: ["Altitude", "Leg", "Base", "Hypotenuse"],
        correct: 3,
        explanation: "The hypotenuse is the side opposite the 90-degree right angle."
      }
    ]
  },
  {
    id: "g68-surface-volume",
    title: "Surface Area & Volume of 3D Prisms",
    gradeBand: "6-8",
    gradeText: "Grades 6–8",
    category: "Geometry",
    icon: "📦",
    summary: "Measure the exterior surface and interior capacity of rectangular prisms and cylinders.",
    keyConcept: "Volume measures cubic capacity ($l \\times w \\times h$). Surface area sums the areas of all faces.",
    formula: "V = l x w x h,  SA = 2(lw + lh + wh)",
    example: {
      problem: "Find the volume of a box with length 5 m, width 3 m, and height 4 m.",
      steps: [
        "V = l x w x h.",
        "V = 5 x 3 x 4 = 60 m³."
      ],
      answer: "60 m³"
    },
    realWorld: "Packaging shipping containers and determining swimming pool water volume.",
    practiceQuestions: [
      {
        question: "What is the volume of a cube with side length 4 cm?",
        options: ["16 cm³", "48 cm³", "64 cm³", "96 cm³"],
        correct: 2,
        explanation: "Volume = s³ = 4 x 4 x 4 = 64 cm³."
      },
      {
        question: "What units are used to measure volume?",
        options: ["Square units (cm²)", "Cubic units (cm³)", "Linear units (cm)", "Degrees"],
        correct: 1,
        explanation: "Volume measures 3D space, so it is measured in cubic units."
      },
      {
        question: "Find the surface area of a cube with side length 3 in:",
        options: ["27 in²", "54 in²", "36 in²", "18 in²"],
        correct: 1,
        explanation: "Each face has area 3 x 3 = 9 in². 6 faces x 9 = 54 in²."
      }
    ]
  },

  // =========================================================================
  // GRADE BAND 9-10: HIGH SCHOOL MATH I (11 Topics)
  // =========================================================================
  {
    id: "g910-quadratic-equations",
    title: "Solving Quadratic Equations",
    gradeBand: "9-10",
    gradeText: "Grades 9–10",
    category: "Algebra",
    icon: "🎢",
    summary: "Solve degree-2 polynomials using factoring, completing the square, and the Quadratic Formula.",
    keyConcept: "A quadratic equation $ax^2 + bx + c = 0$ yields parabolic curves and up to two real solutions determined by the discriminant $b^2 - 4ac$.",
    formula: "x = (-b ± sqrt(b^2 - 4ac)) / (2a)",
    example: {
      problem: "Solve: x^2 - 5x + 6 = 0",
      steps: [
        "Find two numbers that multiply to 6 and add to -5: -2 and -3.",
        "Factor into binomials: (x - 2)(x - 3) = 0.",
        "Set each factor to zero: x = 2 or x = 3."
      ],
      answer: "x = 2, x = 3"
    },
    realWorld: "Trajectory of a thrown basketball or a launched rocket.",
    practiceQuestions: [
      {
        question: "What are the roots of x^2 - 9 = 0?",
        options: ["x = 3 only", "x = ±3", "x = 9", "x = ±9"],
        correct: 1,
        explanation: "(x - 3)(x + 3) = 0 gives x = 3 and x = -3."
      },
      {
        question: "If the discriminant b^2 - 4ac is greater than 0, the equation has:",
        options: ["No real solutions", "One real solution", "Two distinct real solutions", "Infinite solutions"],
        correct: 2,
        explanation: "Positive discriminant yields two real solutions."
      },
      {
        question: "What is the vertex of the parabola y = x^2 - 4x + 7?",
        options: ["(2, 3)", "(4, 7)", "(-2, 19)", "(2, 7)"],
        correct: 0,
        explanation: "x = -b/(2a) = 4/2 = 2. y = 2^2 - 4(2) + 7 = 3. Vertex is (2, 3)."
      }
    ]
  },
  {
    id: "g910-factoring-polynomials",
    title: "Factoring Polynomials & Special Products",
    gradeBand: "9-10",
    gradeText: "Grades 9–10",
    category: "Algebra",
    icon: "🧱",
    summary: "Factor out greatest common factors, group terms, and apply difference of squares formulas.",
    keyConcept: "Factoring rewrites an algebraic expression as a product of simpler polynomials.",
    formula: "a^2 - b^2 = (a - b)(a + b),  (a + b)^2 = a^2 + 2ab + b^2",
    example: {
      problem: "Factor completely: 4x^2 - 25",
      steps: [
        "Notice this is a Difference of Squares.",
        "4x^2 = (2x)^2 and 25 = 5^2.",
        "Apply (a - b)(a + b) => (2x - 5)(2x + 5)."
      ],
      answer: "(2x - 5)(2x + 5)"
    },
    realWorld: "Optimizing architectural dimensions and engineering tolerances.",
    practiceQuestions: [
      {
        question: "Factor: x^2 + 6x + 9",
        options: ["(x + 3)^2", "(x - 3)^2", "(x + 9)(x + 1)", "(x + 6)(x + 3)"],
        correct: 0,
        explanation: "This is a perfect square trinomial: (x + 3)^2."
      },
      {
        question: "Factor out the GCF: 6x^3 + 12x^2",
        options: ["6x(x^2 + 2x)", "6x^2(x + 2)", "3x^2(2x + 4)", "x^2(6x + 12)"],
        correct: 1,
        explanation: "The greatest common factor is 6x^2, leaving (x + 2)."
      },
      {
        question: "Factor: x^2 - 16",
        options: ["(x - 4)^2", "(x - 8)(x + 2)", "(x - 4)(x + 4)", "(x + 16)(x - 1)"],
        correct: 2,
        explanation: "Difference of squares: (x - 4)(x + 4)."
      }
    ]
  },
  {
    id: "g910-systems-equations",
    title: "Systems of Linear Equations",
    gradeBand: "9-10",
    gradeText: "Grades 9–10",
    category: "Algebra",
    icon: "✂️",
    summary: "Find intersection points of two linear relationships using graphing, substitution, and elimination.",
    keyConcept: "A solution to a system of equations is an ordered pair (x, y) that satisfies both equations simultaneously.",
    formula: "Methods: Substitution, Elimination, Graphing",
    example: {
      problem: "Solve: x + y = 10  and  x - y = 4",
      steps: [
        "Add the two equations together (elimination): (x + x) + (y - y) = 10 + 4.",
        "2x = 14 => x = 7.",
        "Substitute x = 7 into first equation: 7 + y = 10 => y = 3."
      ],
      answer: "(7, 3)"
    },
    realWorld: "Economics supply-and-demand market equilibrium points.",
    practiceQuestions: [
      {
        question: "What does the point of intersection of two lines represent?",
        options: ["The y-intercept", "The solution to the system", "The slope", "An asymptote"],
        correct: 1,
        explanation: "The intersection point satisfies both linear equations simultaneously."
      },
      {
        question: "If two lines are parallel, how many solutions does the system have?",
        options: ["One", "Two", "Infinite", "No solution (0)"],
        correct: 3,
        explanation: "Parallel lines never intersect, so there is no solution."
      },
      {
        question: "Solve: y = 2x and x + y = 9",
        options: ["(3, 6)", "(6, 3)", "(2, 7)", "(4, 5)"],
        correct: 0,
        explanation: "Substitute y = 2x: x + 2x = 9 => 3x = 9 => x = 3, y = 6."
      }
    ]
  },
  {
    id: "g910-inequalities",
    title: "Linear Inequalities & Shaded Regions",
    gradeBand: "9-10",
    gradeText: "Grades 9–10",
    category: "Algebra",
    icon: "🌓",
    summary: "Graph inequalities on coordinate planes with solid/dashed boundary lines and shaded feasible regions.",
    keyConcept: "A dashed line is used for strictly < or >, while a solid line is used for <= or >=. Shading indicates the set of all valid coordinates.",
    formula: "y <= mx + b,  y > mx + b",
    example: {
      problem: "Determine if (0, 0) is a solution to y > 2x - 3.",
      steps: [
        "Substitute x = 0, y = 0 into inequality.",
        "0 > 2(0) - 3 => 0 > -3.",
        "This statement is True, so (0, 0) is in the shaded solution region."
      ],
      answer: "Yes, (0, 0) is a solution."
    },
    realWorld: "Manufacturing constraints and nutritional daily limit guidelines.",
    practiceQuestions: [
      {
        question: "When multiplying or dividing both sides of an inequality by a negative number, you must:",
        options: ["Keep sign the same", "Flip the inequality sign", "Change variables", "Square both sides"],
        correct: 1,
        explanation: "Multiplying or dividing by a negative reverses the direction of the inequality."
      },
      {
        question: "Which boundary line type is used for y >= 3x + 1?",
        options: ["Dashed line", "Solid line", "Dotted circle", "Double line"],
        correct: 1,
        explanation: "The 'or equal to' condition (>=) includes the boundary line, requiring a solid line."
      },
      {
        question: "Solve: -2x < 8",
        options: ["x < -4", "x > -4", "x > 4", "x < 4"],
        correct: 1,
        explanation: "Divide by -2 and flip sign: x > -4."
      }
    ]
  },
  {
    id: "g910-triangle-proofs",
    title: "Triangle Congruence & Similarity Proofs",
    gradeBand: "9-10",
    gradeText: "Grades 9–10",
    category: "Geometry",
    icon: "🔺",
    summary: "Prove geometric relationships using SSS, SAS, ASA, AAS, and HL congruence criteria.",
    keyConcept: "Congruent triangles are identical in shape and size (CPCTC: Corresponding Parts of Congruent Triangles are Congruent).",
    formula: "Criteria: SSS, SAS, ASA, AAS, HL",
    example: {
      problem: "Triangle ABC has sides 5, 7, 8. Triangle DEF has sides 5, 7, 8. What theorem proves they are congruent?",
      steps: [
        "All three corresponding pairs of sides are equal in length.",
        "Apply SSS (Side-Side-Side) Congruence Postulate."
      ],
      answer: "SSS Postulate"
    },
    realWorld: "Bridge truss design and triangular architectural supports.",
    practiceQuestions: [
      {
        question: "Which of the following is NOT a valid congruence theorem?",
        options: ["SAS", "SSS", "AAA", "ASA"],
        correct: 2,
        explanation: "AAA only proves triangles are similar (same shape), not necessarily congruent (same size)."
      },
      {
        question: "What does CPCTC stand for?",
        options: ["Corresponding Parts of Congruent Triangles are Congruent", "Circle Points Can Touch Curves", "Calculate Perimeter Correctly To Center", "Congruent Pairs Create Triangle Corners"],
        correct: 0,
        explanation: "Corresponding Parts of Congruent Triangles are Congruent."
      },
      {
        question: "Two triangles have angles 40°, 60°, 80°. What can we conclude?",
        options: ["They are congruent", "They are similar", "They are right triangles", "They have equal areas"],
        correct: 1,
        explanation: "Having identical angle measures ensures the triangles are similar."
      }
    ]
  },
  {
    id: "g910-circle-theorems",
    title: "Circle Theorems: Arcs, Chords & Inscribed Angles",
    gradeBand: "9-10",
    gradeText: "Grades 9–10",
    category: "Geometry",
    icon: "⭕",
    summary: "Explore tangents, secants, central angles, and inscribed angle relationships in circles.",
    keyConcept: "An inscribed angle is always half the measure of the central angle that intercepts the same arc.",
    formula: "Inscribed Angle = (1/2) x Central Arc",
    example: {
      problem: "A central angle intercepts an arc of 80°. What is the measure of an inscribed angle intercepting the same arc?",
      steps: [
        "Inscribed angle formula: Angle = Arc / 2.",
        "80° / 2 = 40°."
      ],
      answer: "40°"
    },
    realWorld: "Designing circular gears, Ferris wheels, and optical lenses.",
    practiceQuestions: [
      {
        question: "A line that touches a circle at exactly one point is called a:",
        options: ["Secant", "Chord", "Tangent", "Diameter"],
        correct: 2,
        explanation: "A tangent line intersects the circle at exactly one point of tangency."
      },
      {
        question: "What is the measure of an inscribed angle intercepting a semicircle (180° arc)?",
        options: ["45°", "60°", "90°", "180°"],
        correct: 2,
        explanation: "180° / 2 = 90° (Thales's Theorem: triangle inscribed in a semicircle is a right triangle)."
      },
      {
        question: "What is the angle between a radius and a tangent line at the point of contact?",
        options: ["45°", "90°", "180°", "60°"],
        correct: 1,
        explanation: "A radius and a tangent line are always perpendicular (90°)."
      }
    ]
  },
  {
    id: "g910-trig-intro",
    title: "Intro to Trigonometry (Sin, Cos, Tan)",
    gradeBand: "9-10",
    gradeText: "Grades 9–10",
    category: "Trigonometry",
    icon: "📐",
    summary: "Define trigonometric ratios in right triangles using SOH-CAH-TOA.",
    keyConcept: "Sine = Opposite / Hypotenuse, Cosine = Adjacent / Hypotenuse, Tangent = Opposite / Adjacent.",
    formula: "sin(θ) = O/H,  cos(θ) = A/H,  tan(θ) = O/A",
    example: {
      problem: "In a right triangle, angle θ has an opposite leg of 3 and an adjacent leg of 4. Find tan(θ).",
      steps: [
        "Recall TOA: tan(θ) = Opposite / Adjacent.",
        "Substitute values: tan(θ) = 3 / 4."
      ],
      answer: "tan(θ) = 3/4 (0.75)"
    },
    realWorld: "Surveyors measuring mountain heights and navigation course calculation.",
    practiceQuestions: [
      {
        question: "What is sin(30°)?",
        options: ["0.5 (1/2)", "sqrt(2)/2", "sqrt(3)/2", "1"],
        correct: 0,
        explanation: "sin(30°) = 1/2 = 0.5."
      },
      {
        question: "In SOH-CAH-TOA, what does CAH stand for?",
        options: ["Cosine = Adjacent / Hypotenuse", "Cosine = Angle / Height", "Circle = Area / Height", "Cosine = Altitude / Hypotenuse"],
        correct: 0,
        explanation: "Cos(θ) = Adjacent / Hypotenuse."
      },
      {
        question: "If sin(θ) = 4/5 in a right triangle, what is cos(θ)?",
        options: ["3/5", "5/4", "3/4", "1/5"],
        correct: 0,
        explanation: "In a 3-4-5 right triangle, adjacent side is 3, so cos(θ) = 3/5."
      }
    ]
  },
  {
    id: "g910-transformations",
    title: "Geometric Transformations",
    gradeBand: "9-10",
    gradeText: "Grades 9–10",
    category: "Geometry",
    icon: "🔄",
    summary: "Translate (slide), reflect (flip), rotate (turn), and dilate (scale) figures on the Cartesian plane.",
    keyConcept: "Rigid motions (translations, reflections, rotations) preserve shape and size. Dilations preserve shape but scale size by scale factor k.",
    formula: "Translation: (x + a, y + b),  Dilation: (kx, ky)",
    example: {
      problem: "Reflect the point (3, -5) across the x-axis.",
      steps: [
        "Rule for reflection over x-axis: (x, y) -> (x, -y).",
        "Keep x the same: 3.",
        "Negate y: -(-5) = 5.",
        "New coordinate is (3, 5)."
      ],
      answer: "(3, 5)"
    },
    realWorld: "Computer graphics rendering, 3D character animation, and video game cameras.",
    practiceQuestions: [
      {
        question: "What happens to the coordinates under a 180° rotation around the origin?",
        options: ["(x, y) -> (-x, -y)", "(x, y) -> (y, x)", "(x, y) -> (-y, x)", "(x, y) -> (x, -y)"],
        correct: 0,
        explanation: "Rotating 180 degrees changes the sign of both coordinates: (-x, -y)."
      },
      {
        question: "If a shape is dilated by a scale factor of k = 3, its perimeter is multiplied by:",
        options: ["3", "6", "9", "27"],
        correct: 0,
        explanation: "Linear dimensions like perimeter scale directly by k = 3."
      },
      {
        question: "Which transformation changes the size of the shape?",
        options: ["Reflection", "Translation", "Rotation", "Dilation"],
        correct: 3,
        explanation: "Dilation is a non-rigid transformation that resizes the figure."
      }
    ]
  },
  {
    id: "g910-functions",
    title: "Function Notation, Domain & Range",
    gradeBand: "9-10",
    gradeText: "Grades 9–10",
    category: "Algebra",
    icon: "⚙️",
    summary: "Evaluate functions in f(x) notation, test with the vertical line test, and define domain and range.",
    keyConcept: "A relation is a function if every input (x) has exactly one unique output (y). Domain is all possible inputs; Range is all outputs.",
    formula: "f(x) = output for input x",
    example: {
      problem: "Given f(x) = 2x^2 - 3, find f(-2).",
      steps: [
        "Substitute -2 for x: f(-2) = 2(-2)^2 - 3.",
        "Calculate exponent: (-2)^2 = 4.",
        "Multiply: 2 x 4 = 8.",
        "Subtract: 8 - 3 = 5."
      ],
      answer: "f(-2) = 5"
    },
    realWorld: "Programming functions in computer science (input parameters returning values).",
    practiceQuestions: [
      {
        question: "Does the set of points {(1, 2), (2, 5), (1, 7)} represent a function?",
        options: ["Yes", "No, because input 1 has two different outputs", "Only if graphed", "Cannot tell"],
        correct: 1,
        explanation: "Input 1 produces both 2 and 7, violating the single-output rule."
      },
      {
        question: "What test determines if a graph represents a function?",
        options: ["Horizontal line test", "Vertical line test", "Quadrant test", "Origin test"],
        correct: 1,
        explanation: "A vertical line intersecting a graph at most once proves it is a function."
      },
      {
        question: "What is the domain of f(x) = sqrt(x - 3)?",
        options: ["x >= 0", "x >= 3", "x <= 3", "All real numbers"],
        correct: 1,
        explanation: "The value under the square root must be non-negative: x - 3 >= 0 => x >= 3."
      }
    ]
  },
  {
    id: "g910-exponential-models",
    title: "Exponential Growth & Decay Models",
    gradeBand: "9-10",
    gradeText: "Grades 9–10",
    category: "Algebra",
    icon: "🌱",
    summary: "Model rapid population growth, radioactive decay, and compound interest using exponential curves.",
    keyConcept: "Unlike linear equations that add a constant amount, exponential functions multiply by a constant factor in each time step.",
    formula: "y = a(1 ± r)^t,  A = P(1 + r/n)^(nt)",
    example: {
      problem: "A bacteria culture starts with 100 cells and doubles every hour. How many cells after 4 hours?",
      steps: [
        "Formula: y = 100 x 2^t.",
        "For t = 4: y = 100 x 2^4.",
        "2^4 = 16. y = 100 x 16 = 1,600."
      ],
      answer: "1,600 cells"
    },
    realWorld: "Investment savings growth and viral transmission dynamics.",
    practiceQuestions: [
      {
        question: "In the function y = 500(1.05)^t, what is the annual growth rate?",
        options: ["50%", "5%", "1.05%", "0.5%"],
        correct: 1,
        explanation: "1.05 = 1 + 0.05, which corresponds to 5% growth."
      },
      {
        question: "Which of the following functions represents exponential decay?",
        options: ["y = 2(1.2)^x", "y = 100(0.85)^x", "y = 4x + 10", "y = x^2"],
        correct: 1,
        explanation: "The base is 0.85, which is between 0 and 1, representing decay."
      },
      {
        question: "What is the y-intercept of any basic exponential function y = a x b^x?",
        options: ["(0, 0)", "(0, a)", "(0, b)", "(0, 1)"],
        correct: 1,
        explanation: "When x = 0, b^0 = 1, so y = a(1) = a -> (0, a)."
      }
    ]
  },
  {
    id: "g910-radicals",
    title: "Radical Expressions & Rational Exponents",
    gradeBand: "9-10",
    gradeText: "Grades 9–10",
    category: "Algebra",
    icon: "√",
    summary: "Simplify square roots, cube roots, and convert between radical forms and fractional exponents.",
    keyConcept: "A fractional exponent x^(m/n) represents the n-th root of x raised to the power m.",
    formula: "x^(m/n) = n-th root of (x^m)",
    example: {
      problem: "Evaluate: 27^(2/3)",
      steps: [
        "Take the cube root of 27: 3.",
        "Square the result: 3^2 = 9."
      ],
      answer: "9"
    },
    realWorld: "Calculating planetary orbital periods using Kepler's Third Law.",
    practiceQuestions: [
      {
        question: "Simplify sqrt(75):",
        options: ["5 sqrt(3)", "3 sqrt(5)", "15", "25 sqrt(3)"],
        correct: 0,
        explanation: "sqrt(75) = sqrt(25 x 3) = 5 sqrt(3)."
      },
      {
        question: "What is 16^(1/2) equal to?",
        options: ["8", "4", "2", "32"],
        correct: 1,
        explanation: "An exponent of 1/2 is the square root: sqrt(16) = 4."
      },
      {
        question: "Simplify: sqrt(x^6)",
        options: ["x^2", "x^3", "x^4", "x^12"],
        correct: 1,
        explanation: "(x^6)^(1/2) = x^(6/2) = x^3."
      }
    ]
  },

  // =========================================================================
  // GRADE BAND 11-12: ADVANCED MATH & PRE-CALCULUS (11 Topics)
  // =========================================================================
  {
    id: "g1112-complex-numbers",
    title: "Complex Numbers & Operations (i = √-1)",
    gradeBand: "11-12",
    gradeText: "Grades 11–12",
    category: "Algebra",
    icon: "🌌",
    summary: "Work in the complex plane with imaginary unit i, conjugates, and roots of negative numbers.",
    keyConcept: "The imaginary unit i is defined such that $i^2 = -1$. Complex numbers are written in standard form $a + bi$.",
    formula: "i = sqrt(-1),  i^2 = -1,  (a + bi)(a - bi) = a^2 + b^2",
    example: {
      problem: "Multiply: (3 + 2i)(1 - 4i)",
      steps: [
        "FOIL: 3(1) + 3(-4i) + 2i(1) + 2i(-4i).",
        "= 3 - 12i + 2i - 8i^2.",
        "Since i^2 = -1: -8(-1) = +8.",
        "Combine real and imaginary: (3 + 8) + (-12i + 2i) = 11 - 10i."
      ],
      answer: "11 - 10i"
    },
    realWorld: "Electrical engineering AC circuit impedance and quantum mechanics wave functions.",
    practiceQuestions: [
      {
        question: "What is i^4 equal to?",
        options: ["-1", "1", "i", "-i"],
        correct: 1,
        explanation: "i^4 = (i^2)^2 = (-1)^2 = 1."
      },
      {
        question: "What is the complex conjugate of 5 - 3i?",
        options: ["-5 + 3i", "5 + 3i", "-5 - 3i", "3 - 5i"],
        correct: 1,
        explanation: "Change the sign of the imaginary part: 5 + 3i."
      },
      {
        question: "Simplify: sqrt(-64)",
        options: ["-8", "8", "8i", "-8i"],
        correct: 2,
        explanation: "sqrt(-64) = sqrt(64) x sqrt(-1) = 8i."
      }
    ]
  },
  {
    id: "g1112-logarithms",
    title: "Logarithmic Functions & Properties",
    gradeBand: "11-12",
    gradeText: "Grades 11–12",
    category: "Algebra",
    icon: "🪵",
    summary: "Master the inverse of exponential functions, logarithmic laws, and natural logs (ln).",
    keyConcept: "A logarithm asks the question: 'To what power must the base be raised to produce this value?'",
    formula: "log_b(x) = y <=> b^y = x,  log(ab) = log a + log b",
    example: {
      problem: "Solve for x: log_2(x) = 5",
      steps: [
        "Convert logarithmic form to exponential form: x = 2^5.",
        "Calculate 2^5 = 32."
      ],
      answer: "x = 32"
    },
    realWorld: "The Richter earthquake magnitude scale and pH acidity calculations.",
    practiceQuestions: [
      {
        question: "What is log_10(1,000)?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation: "10^3 = 1,000, so log_10(1,000) = 3."
      },
      {
        question: "Expand: log(x^3 / y)",
        options: ["3 log(x) - log(y)", "3 log(x) + log(y)", "log(3x) - log(y)", "3(log x / log y)"],
        correct: 0,
        explanation: "Power rule and quotient rule: 3 log(x) - log(y)."
      },
      {
        question: "What is ln(e^7)?",
        options: ["1", "e", "7", "14"],
        correct: 2,
        explanation: "Natural log and base e are inverse functions, so ln(e^7) = 7."
      }
    ]
  },
  {
    id: "g1112-unit-circle",
    title: "The Unit Circle & Radian Measure",
    gradeBand: "11-12",
    gradeText: "Grades 11–12",
    category: "Trigonometry",
    icon: "⭕",
    summary: "Navigate the radius-1 circle, convert between degrees and radians, and evaluate exact trig values.",
    keyConcept: "On the unit circle (radius r = 1), any point has coordinates (cos θ, sin θ). One full revolution is 2π radians = 360°.",
    formula: "Radians = Degrees x (π / 180°),  x = cos θ, y = sin θ",
    example: {
      problem: "Convert 120° into radians.",
      steps: [
        "Multiply by π / 180°: 120 x (π / 180).",
        "Simplify the fraction: 120/180 = 2/3.",
        "= (2π / 3) radians."
      ],
      answer: "2π/3 radians"
    },
    realWorld: "Robotics arm kinematics and cyclical rotating engine components.",
    practiceQuestions: [
      {
        question: "How many radians are in 180 degrees?",
        options: ["π / 2", "π", "2π", "3π / 2"],
        correct: 1,
        explanation: "180° corresponds to exactly π radians."
      },
      {
        question: "On the unit circle, what are the coordinates of the point at 90° (π/2)?",
        options: ["(1, 0)", "(0, 1)", "(-1, 0)", "(0, -1)"],
        correct: 1,
        explanation: "At 90°, cos(90°) = 0 and sin(90°) = 1, giving (0, 1)."
      },
      {
        question: "What is cos(60°)?",
        options: ["1/2", "sqrt(3)/2", "sqrt(2)/2", "0"],
        correct: 0,
        explanation: "cos(60°) = cos(π/3) = 1/2."
      }
    ]
  },
  {
    id: "g1112-trig-identities",
    title: "Trigonometric Identities & Equations",
    gradeBand: "11-12",
    gradeText: "Grades 11–12",
    category: "Trigonometry",
    icon: "♾️",
    summary: "Simplify and prove complex trigonometric expressions using Pythagorean, double-angle, and reciprocal identities.",
    keyConcept: "Identities are equations true for all defined angles, anchored by the fundamental Pythagorean identity.",
    formula: "sin^2(θ) + cos^2(θ) = 1,  tan(θ) = sin(θ) / cos(θ)",
    example: {
      problem: "Simplify: (1 - sin^2(θ)) / cos(θ)",
      steps: [
        "Use Pythagorean identity: 1 - sin^2(θ) = cos^2(θ).",
        "Substitute into fraction: cos^2(θ) / cos(θ).",
        "Simplify: cos(θ)."
      ],
      answer: "cos(θ)"
    },
    realWorld: "Digital signal processing, audio waveform synthesis, and telecommunications.",
    practiceQuestions: [
      {
        question: "What is 1 + tan^2(θ) equal to?",
        options: ["sin^2(θ)", "sec^2(θ)", "csc^2(θ)", "cos^2(θ)"],
        correct: 1,
        explanation: "The Pythagorean identity states 1 + tan^2(θ) = sec^2(θ)."
      },
      {
        question: "What is the reciprocal of sin(θ)?",
        options: ["cos(θ)", "tan(θ)", "csc(θ)", "sec(θ)"],
        correct: 2,
        explanation: "Cosecant is the reciprocal of sine: csc(θ) = 1 / sin(θ)."
      },
      {
        question: "What is sin(2θ) equal to?",
        options: ["2 sin(θ)", "2 sin(θ) cos(θ)", "cos^2(θ) - sin^2(θ)", "sin^2(θ)"],
        correct: 1,
        explanation: "Double-angle formula for sine: sin(2θ) = 2 sin(θ) cos(θ)."
      }
    ]
  },
  {
    id: "g1112-polynomial-division",
    title: "Polynomial Long Division & Remainder Theorem",
    gradeBand: "11-12",
    gradeText: "Grades 11–12",
    category: "Algebra",
    icon: "➗",
    summary: "Divide high-degree polynomials and quickly evaluate functions using synthetic division.",
    keyConcept: "The Remainder Theorem states that when a polynomial P(x) is divided by (x - c), the remainder equals P(c).",
    formula: "P(x) = D(x) x Q(x) + R",
    example: {
      problem: "Find the remainder when P(x) = x^3 - 4x + 6 is divided by (x - 2).",
      steps: [
        "By the Remainder Theorem, calculate P(2).",
        "P(2) = (2)^3 - 4(2) + 6.",
        "= 8 - 8 + 6 = 6."
      ],
      answer: "Remainder = 6"
    },
    realWorld: "Cryptography error-checking codes (CRC) and polynomial data hashing.",
    practiceQuestions: [
      {
        question: "If P(3) = 0 for a polynomial P(x), what must be a factor of P(x)?",
        options: ["(x + 3)", "(x - 3)", "(3x - 1)", "3x"],
        correct: 1,
        explanation: "By the Factor Theorem, P(c) = 0 implies (x - c) is a factor."
      },
      {
        question: "When dividing a degree 3 polynomial by a degree 1 polynomial, the quotient has degree:",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explanation: "Subtract exponents: 3 - 1 = 2 (a quadratic quotient)."
      },
      {
        question: "Synthetic division can be used when the divisor is of the form:",
        options: ["x - c", "ax^2 + bx", "x^3", "Any polynomial"],
        correct: 0,
        explanation: "Synthetic division is optimized for linear divisors of the form (x - c)."
      }
    ]
  },
  {
    id: "g1112-rational-functions",
    title: "Rational Functions & Asymptotes",
    gradeBand: "11-12",
    gradeText: "Grades 11–12",
    category: "Algebra",
    icon: "📈",
    summary: "Analyze fractions of polynomials, vertical asymptotes, horizontal end-behavior, and holes.",
    keyConcept: "Vertical asymptotes occur where the denominator equals zero (and numerator != 0). Horizontal asymptotes depend on degrees of numerator and denominator.",
    formula: "f(x) = P(x) / Q(x)",
    example: {
      problem: "Find the vertical asymptote of f(x) = 1 / (x - 4).",
      steps: [
        "Set denominator to zero: x - 4 = 0.",
        "Solve for x: x = 4.",
        "Since the numerator is not zero at x = 4, x = 4 is a vertical asymptote."
      ],
      answer: "Vertical Asymptote: x = 4"
    },
    realWorld: "Modeling concentration of medicine in a patient's bloodstream over time.",
    practiceQuestions: [
      {
        question: "What is the horizontal asymptote of f(x) = (3x + 1) / (x - 2)?",
        options: ["y = 0", "y = 3", "y = -2", "No asymptote"],
        correct: 1,
        explanation: "Since degrees are equal (1/1), the horizontal asymptote is ratio of leading coefficients: 3/1 = 3."
      },
      {
        question: "What creates a 'hole' (removable discontinuity) in a rational graph?",
        options: ["Common factor cancelled in numerator and denominator", "Dividing by zero in numerator only", "High degree in denominator", "Negative numbers"],
        correct: 0,
        explanation: "When a factor (x - c) cancels from both top and bottom, it produces a hole at x = c."
      },
      {
        question: "What is the horizontal asymptote of f(x) = 5 / (x^2 + 1)?",
        options: ["y = 5", "y = 1", "y = 0", "y = 2"],
        correct: 2,
        explanation: "When denominator degree is strictly higher than numerator degree, y = 0."
      }
    ]
  },
  {
    id: "g1112-sequences-series",
    title: "Arithmetic & Geometric Sequences and Series",
    gradeBand: "11-12",
    gradeText: "Grades 11–12",
    category: "Algebra",
    icon: "🔢",
    summary: "Calculate explicit terms, common differences/ratios, and sums using sigma notation.",
    keyConcept: "Arithmetic sequences add a common difference (d). Geometric sequences multiply by a common ratio (r).",
    formula: "Arithmetic: a_n = a_1 + (n - 1)d,  Geometric: a_n = a_1 x r^(n - 1)",
    example: {
      problem: "Find the 10th term of the arithmetic sequence: 4, 7, 10, 13...",
      steps: [
        "First term a1 = 4.",
        "Common difference d = 7 - 4 = 3.",
        "Use formula: a_10 = 4 + (10 - 1)(3) = 4 + 27 = 31."
      ],
      answer: "31"
    },
    realWorld: "Mortgage loan amortization schedules and calculating population generational growth.",
    practiceQuestions: [
      {
        question: "What is the common ratio of the geometric sequence: 3, 6, 12, 24...?",
        options: ["2", "3", "4", "6"],
        correct: 0,
        explanation: "6 / 3 = 2, so the common ratio r is 2."
      },
      {
        question: "What is the sum of an infinite geometric series with a1 = 8 and r = 1/2?",
        options: ["12", "16", "24", "Does not exist"],
        correct: 1,
        explanation: "S = a1 / (1 - r) = 8 / (1 - 0.5) = 8 / 0.5 = 16."
      },
      {
        question: "Sigma notation Σ represents:",
        options: ["Multiplication", "Summation (adding terms)", "Division", "Square root"],
        correct: 1,
        explanation: "The Greek capital letter Sigma (Σ) denotes the sum of a sequence."
      }
    ]
  },
  {
    id: "g1112-limits-intro",
    title: "Introduction to Limits & Continuity",
    gradeBand: "11-12",
    gradeText: "Grades 11–12",
    category: "Calculus",
    icon: "🎯",
    summary: "Examine function behavior as inputs approach a point from the left and right.",
    keyConcept: "A limit describes the value a function approaches as x gets arbitrarily close to a target value c, regardless of whether f(c) is defined.",
    formula: "lim (x -> c) f(x) = L",
    example: {
      problem: "Evaluate: lim (x -> 3) [(x^2 - 9) / (x - 3)]",
      steps: [
        "Direct substitution gives 0/0 (indeterminate form).",
        "Factor numerator: (x - 3)(x + 3) / (x - 3).",
        "Cancel (x - 3) for x != 3: leaves (x + 3).",
        "Evaluate limit: 3 + 3 = 6."
      ],
      answer: "6"
    },
    realWorld: "Determining instantaneous speed in physics from average velocity intervals.",
    practiceQuestions: [
      {
        question: "Evaluate: lim (x -> 2) (3x + 4)",
        options: ["8", "10", "12", "6"],
        correct: 1,
        explanation: "Continuous polynomial: substitute directly: 3(2) + 4 = 10."
      },
      {
        question: "For a limit to exist at x = c:",
        options: ["Left-hand and right-hand limits must be equal", "f(c) must equal zero", "The function must be a straight line", "The limit must be infinite"],
        correct: 0,
        explanation: "The two one-sided limits must converge to the same finite value L."
      },
      {
        question: "What is lim (x -> 0) [1 / x^2]?",
        options: ["0", "1", "Does not exist (+infinity)", "-1"],
        correct: 2,
        explanation: "As x approaches 0 from both sides, 1/x^2 grows without bound toward positive infinity."
      }
    ]
  },
  {
    id: "g1112-vectors",
    title: "Vectors & Direction Angles",
    gradeBand: "11-12",
    gradeText: "Grades 11–12",
    category: "Trigonometry",
    icon: "🏹",
    summary: "Represent quantities with both magnitude and direction, add components, and compute dot products.",
    keyConcept: "A vector has length (magnitude) and orientation (direction). Component form <x, y> breaks it into horizontal and vertical parts.",
    formula: "|v| = sqrt(x^2 + y^2),  u · v = x1x2 + y1y2",
    example: {
      problem: "Find the magnitude of vector v = <6, 8>.",
      steps: [
        "|v| = sqrt(6^2 + 8^2).",
        "|v| = sqrt(36 + 64) = sqrt(100) = 10."
      ],
      answer: "Magnitude = 10"
    },
    realWorld: "Aircraft flight navigation accounting for crosswinds and physics force diagrams.",
    practiceQuestions: [
      {
        question: "What is the dot product of <2, 3> and <4, -1>?",
        options: ["5", "8", "11", "-5"],
        correct: 0,
        explanation: "Dot product = (2 x 4) + (3 x -1) = 8 - 3 = 5."
      },
      {
        question: "Two vectors are perpendicular (orthogonal) when their dot product is:",
        options: ["1", "0", "-1", "Infinity"],
        correct: 1,
        explanation: "When u · v = 0, the angle between them is 90 degrees."
      },
      {
        question: "If vector u = <3, 2> and v = <1, 4>, find u + v:",
        options: ["<4, 6>", "<2, -2>", "<3, 8>", "<4, 2>"],
        correct: 0,
        explanation: "Add corresponding components: <3 + 1, 2 + 4> = <4, 6>."
      }
    ]
  },
  {
    id: "g1112-matrices",
    title: "Matrices & Matrix Operations",
    gradeBand: "11-12",
    gradeText: "Grades 11–12",
    category: "Algebra",
    icon: "🧮",
    summary: "Add, subtract, and multiply 2D matrices, compute 2x2 determinants, and solve multi-variable systems.",
    keyConcept: "Matrices organize numbers into rows and columns. Matrix multiplication rows-by-columns is only defined when inner dimensions match.",
    formula: "det [a, b; c, d] = ad - bc",
    example: {
      problem: "Find the determinant of matrix A = [[3, 2], [1, 4]].",
      steps: [
        "Formula: ad - bc.",
        "a = 3, d = 4, b = 2, c = 1.",
        "det(A) = (3 x 4) - (2 x 1) = 12 - 2 = 10."
      ],
      answer: "10"
    },
    realWorld: "Modern 3D gaming graphics rendering engines and machine learning neural networks.",
    practiceQuestions: [
      {
        question: "Can you multiply a 2x3 matrix by a 3x2 matrix?",
        options: ["Yes, resulting in a 2x2 matrix", "Yes, resulting in a 3x3 matrix", "No, dimensions are incompatible", "Only if square"],
        correct: 0,
        explanation: "Inner dimensions match (3 = 3); the resulting dimension is outer: 2x2."
      },
      {
        question: "What is the determinant of [[5, 2], [10, 4]]?",
        options: ["0", "20", "40", "-20"],
        correct: 0,
        explanation: "(5 x 4) - (2 x 10) = 20 - 20 = 0 (singular matrix)."
      },
      {
        question: "The identity matrix for 2x2 multiplication is:",
        options: ["[[1, 0], [0, 1]]", "[[0, 1], [1, 0]]", "[[1, 1], [1, 1]]", "[[0, 0], [0, 0]]"],
        correct: 0,
        explanation: "Diagonal of ones and off-diagonals of zero defines the identity matrix."
      }
    ]
  },
  {
    id: "g1112-derivatives-intro",
    title: "Introduction to Derivatives & Tangent Slopes",
    gradeBand: "11-12",
    gradeText: "Grades 11–12",
    category: "Calculus",
    icon: "⚡",
    summary: "Discover the instantaneous rate of change, power rule shortcuts, and tangent line slopes.",
    keyConcept: "The derivative f'(x) gives the exact slope of the tangent line at any point along a curve.",
    formula: "Power Rule: d/dx [x^n] = n x^(n-1)",
    example: {
      problem: "Find the derivative of f(x) = 3x^4 - 5x + 2.",
      steps: [
        "Apply power rule to 3x^4: 3 x (4x^3) = 12x^3.",
        "Apply power rule to -5x: -5(1) = -5.",
        "Constant derivative is 0.",
        "f'(x) = 12x^3 - 5."
      ],
      answer: "f'(x) = 12x^3 - 5"
    },
    realWorld: "Calculating instantaneous acceleration in electric vehicles and profit maximization curves in business.",
    practiceQuestions: [
      {
        question: "What is the derivative of f(x) = x^3?",
        options: ["3x", "3x^2", "x^2", "3x^3"],
        correct: 1,
        explanation: "Power rule: bring down 3 and decrease power by 1 -> 3x^2."
      },
      {
        question: "What is the derivative of any constant number (e.g., f(x) = 7)?",
        options: ["7", "1", "0", "undefined"],
        correct: 2,
        explanation: "Constants do not change, so their rate of change is 0."
      },
      {
        question: "Find the slope of the tangent line to y = x^2 at x = 3:",
        options: ["3", "6", "9", "12"],
        correct: 1,
        explanation: "Derivative is y' = 2x. At x = 3, y'(3) = 2(3) = 6."
      }
    ]
  }
];

export const GRADE_BANDS = [
  { id: "all", label: "All Grades (K–12)", count: 52, icon: "🎓" },
  { id: "k-2", label: "Grades K–2 (Foundations)", count: 10, icon: "🧸" },
  { id: "3-5", label: "Grades 3–5 (Elementary)", count: 10, icon: "🚀" },
  { id: "6-8", label: "Grades 6–8 (Middle School)", count: 10, icon: "⚡" },
  { id: "9-10", label: "Grades 9–10 (High School I)", count: 11, icon: "🔬" },
  { id: "11-12", label: "Grades 11–12 (Pre-Calc & Adv)", count: 11, icon: "🌌" }
];

export const CATEGORIES = [
  "All",
  "Number Sense",
  "Operations",
  "Geometry",
  "Measurement",
  "Algebra",
  "Ratios & Proportions",
  "Statistics",
  "Trigonometry",
  "Calculus"
];
