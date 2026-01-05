# Pitch Perfect: Product Requirements Document
## AI-Powered Public Speaking Coach for Anxiety Management

**Version:** 1.0  
**Last Updated:** January 5, 2026  
**Product Manager:** Senior PM & AI UX Psychologist  

---

## Executive Summary

**Pitch Perfect** is a mobile/desktop application designed to help individuals with glossophobia (public speaking anxiety) overcome their fears through a psychologically-informed, AI-powered coaching system. The product integrates three core features into a unified experience:

1. **The Storytelling Architect** - AI-driven content preparation through conversational interviews
2. **The Safe Space Simulator** - Gradual exposure therapy with progressive difficulty levels
3. **The Silent Companion** - Non-intrusive real-time performance support

**Core Value Proposition:**
- **Psychological Safety**: Evidence-based approach using Gradual Exposure Therapy
- **Intuitive Usage**: Voice-first interaction eliminates "blank page syndrome"
- **Measurable Progress**: Clear progression system with positive reinforcement

---

## 1. The "Zero-Anxiety" User Flow

### Complete User Journey: From Fear to Confidence

#### **Stage 1: Onboarding & Trust Building** (First 2 minutes)

**User State:** "I'm terrified and have no idea what to say"

1. **Welcome Screen**
   - Soft, calming color palette (deep blues, warm neutrals)
   - Simple prompt: *"I'm here to help you find your voice. No pressure, no judgment."*
   - Single button: **"Start a conversation"** (not "Begin" or "Start training")

2. **Initial Voice Interaction**
   - AI Coach introduces itself with warmth:
     > *"Hi, I'm your speaking coach. Before we dive in, I want you to know—there's no right or wrong here. I'm just going to ask you a few questions about what you'd like to talk about. Ready? Take your time."*
   
3. **Anxiety Check-In**
   - AI asks: *"On a scale of 1-5, how nervous are you right now about public speaking?"*
   - User responds via voice or slider
   - AI adapts tone based on response (higher anxiety = more reassurance)

---

#### **Stage 2: Content Creation via Storytelling Architect** (10-15 minutes)

**User State:** "I have ideas but I can't organize them"

4. **Conversational Interview Begins**
   - AI asks open-ended questions:
     - *"What's the main thing you want your audience to understand?"*
     - *"Why does this matter to you personally?"*
     - *"What happens if people don't hear this message?"*
   
5. **AI Listens & Reflects**
   - As user speaks, the screen shows:
     - Gentle waveform visualization (shows AI is listening)
     - Occasional affirming text: *"That's a powerful point..."*
   - No interruptions during user's speech

6. **Framework Selection (Invisible to User)**
   - AI analyzes verbal responses and detects:
     - **Problem-Solution structure** → Suggests Pitch Deck framework
     - **Personal narrative** → Suggests Hero's Journey
     - **Professional scenario** → Suggests STAR method
   
7. **Structure Reveal**
   - AI presents organized outline:
     > *"Here's what I heard—you have a story about overcoming X, which led to Y, and now you want to help others with Z. I've organized this into 3 key moments. Let's review them together."*
   - User sees structured talking points appear on screen
   - **Micro-interaction:** Each point animated in gently (no harsh transitions)

8. **Refinement Loop**
   - AI asks: *"Does this feel right? Want to adjust anything?"*
   - User can voice-edit sections
   - AI re-generates instantly

**Transition Moment:**
- AI says: *"Your story is ready. Now, let's practice saying it out loud—but we'll start in the safest way possible. Just you and your voice. No audience yet."*
- Button appears: **"Enter the Practice Space"**

---

#### **Stage 3: Practice via Safe Space Simulator** (20-30 minutes across sessions)

**User State:** "I have content, but I'm scared to perform it"

##### **Level 1: The Empty Room (Voice-Only Mode)**

9. **Environment Setup**
   - Screen fades to a minimalist, serene space (think: soft-lit room with gentle ambient sound)
   - No avatars, no distractions
   - UI shows:
     - Small teleprompter (scrolls with user's pace)
     - Breathing guide (subtle pulsing circle)

10. **First Practice Run**
    - AI prompts: *"Just read through your points. I'll listen and give you feedback at the end. No one else is here."*
    - User practices speech
    - **Silent Companion activates** (described in Stage 4)

11. **Post-Practice Feedback**
    - AI provides warm, specific feedback:
      > *"You spoke for 2 minutes and 15 seconds. Your pacing was strong in the opening. I noticed you hesitated at the second point—that's totally normal. Want to try that section again, or move forward?"*
    - **Progress Unlocked:** "Completed Empty Room Practice" (small badge appears)

##### **Level 2: Friendly Avatars (Positive Reinforcement)**

12. **Level Introduction**
    - AI asks: *"Ready to add a few friendly faces? These listeners will smile, nod, and support you. You're in control."*
    - User confirms

13. **Practice with Supportive Audience**
    - 3-5 simple, diverse avatars appear
    - Avatars show positive micro-reactions:
      - Nodding heads
      - Occasional smiles
      - Leaning forward (interest cue)
    - **AR Option:** User can project avatars into their real room via phone camera

14. **Feedback Evolution**
    - AI now includes: *"Your confidence is building. I noticed you made eye contact with the audience 4 times—great connection!"*
    - **Progress Unlocked:** "Engaged a Supportive Audience"

##### **Level 3: The Boardroom (Realistic Simulation)**

15. **Challenge Introduction**
    - AI warns gently: *"This next level is tougher. Some listeners might look skeptical or distracted. Remember—this is practice. You're safe."*
    - **Opt-in:** User must click "I'm ready for the challenge"

16. **High-Stakes Environment**
    - Formal setting (boardroom or auditorium)
    - 10-15 avatars with varied reactions:
      - Some neutral/skeptical expressions
      - One avatar checks phone mid-speech (distraction)
      - One crosses arms (body language challenge)
    - Environmental sounds (e.g., subtle AC hum, distant door closing)

17. **Panic Button Available**
    - Visible in corner but unobtrusive
    - If clicked: AI provides instant lifeline phrase (see Stage 4)

18. **Mastery Feedback**
    - AI analyzes performance under pressure:
      > *"You navigated a tough crowd. When that person checked their phone, you kept going—that's resilience. Your pacing was 10% faster than Level 1, but still clear."*
    - **Progress Unlocked:** "Boardroom Certified"

---

#### **Stage 4: Real-Time Support via Silent Companion** (During Practice)

**User State:** "I'm practicing, but I need help without being interrupted"

19. **HUD Activation** (Heads-Up Display)
    - Always present but subtle during practice
    - Components:
      - **Pace Indicator:** Blue glow pulses slowly = "Good pace" | Pulses quickly = "Slow down, breathe"
      - **Volume Meter:** Gentle arc showing voice projection
      - **Eye Contact Tracker** (AR mode): Shows where user is looking
    - **No Text Warnings:** All cues are visual/haptic

20. **Panic Button Mechanism**
    - Large, soft-cornered button in bottom-right
    - If user freezes or stops talking for >8 seconds, button gently pulses
    - On press:
      - AI voice whispers: *"You were just talking about [last key point]. Try saying, 'Let me emphasize that...'"*
      - Teleprompter highlights last sentence
      - Haptic pulse (phone) = reassurance

21. **Post-Session Review**
    - AI shows non-judgmental analytics:
      - Time spoken vs. paused
      - Pace consistency graph
      - Moments of high confidence (highlighted in green)
    - **Celebration:** *"You pushed through 2 tough moments today. That's growth."*

---

#### **Stage 5: Completion & Real-World Prep** (Final transition)

22. **Graduation Moment**
    - After completing Level 3, AI says:
      > *"You've practiced in the empty room, won over friendly faces, and handled the boardroom. You're ready for the real thing. Here's your final prep kit."*

23. **Real-World Toolkit Unlocked**
    - Pre-speech breathing exercises
    - "Silent Companion" mode for live events (phone runs in pocket, haptic cues only)
    - Editable speech notes export

**User State:** "I practiced confidently and feel prepared"

---

### **Flow Summary - Key Transitions**

| Stage | User Emotion | Primary Feature | Outcome |
|-------|--------------|-----------------|---------|
| Onboarding | Anxious, lost | Conversational AI | Trust established |
| Content Creation | Overwhelmed | Storytelling Architect | Structured speech ready |
| Level 1 Practice | Nervous | Safe Space (Empty Room) | First successful run |
| Level 2 Practice | Cautiously optimistic | Safe Space (Friendly Avatars) | Confidence building |
| Level 3 Practice | Challenged | Safe Space (Boardroom) + Silent Companion | Resilience proven |
| Completion | Empowered | Real-world toolkit | Ready for performance |

---

## 2. AI Persona & Tone Guidelines

### System Prompt for AI Coach

```
# CORE IDENTITY
You are a compassionate public speaking coach specializing in anxiety management. Your name is "Coach" (users may rename you). Your purpose is to help users overcome glossophobia through evidence-based psychological support, not generic motivational speeches.

# PERSONALITY TRAITS
- **Empathetic**: You recognize fear is real and valid
- **Patient**: You never rush the user
- **Specific**: You give actionable feedback, not platitudes
- **Adaptive**: You adjust tone based on user's anxiety level
- **Warm but Professional**: Friendly without being overly casual

# COMMUNICATION RULES

## Language Patterns
DO USE:
- "Let's..." (collaborative framing)
- "I noticed..." (observational, non-judgmental)
- "That's a powerful point" (specific affirmation)
- "Want to try...?" (opt-in phrasing)
- "You were just talking about..." (grounding technique)

DO NOT USE:
- "You should..." (directive/preachy)
- "Don't worry" (dismissive of anxiety)
- "Everyone gets nervous" (minimizing)
- "Just relax" (unhelpful cliché)
- "That was bad/wrong" (negative framing)

## Adaptive Tone Scaling

### If User Anxiety = 4-5 (High)
- Speak slower (longer pauses in TTS)
- Use more reassurance: "There's no rush. Take your time."
- Offer breaks: "Want to pause and come back to this?"
- Simplify questions: Instead of "What's your main argument?", ask "What's one thing you want to say?"

### If User Anxiety = 2-3 (Moderate)
- Standard supportive tone
- Mix encouragement with constructive feedback
- Introduce challenges gradually: "Want to try adding a friendly audience?"

### If User Anxiety = 1 (Low)
- More collaborative tone
- Ask deeper questions: "What emotion do you want your audience to feel?"
- Encourage experimentation: "Let's try a different opening and see how it feels."

## Feedback Structure (Post-Practice)

1. **Start with Validation** (What went well)
   - "Your opening was clear and confident."
   
2. **Specific Observation** (Data-driven insight)
   - "You spoke for 3 minutes and 12 seconds. Your pace was consistent except at the 1:45 mark."

3. **Normalize Struggle** (If applicable)
   - "I noticed a hesitation when transitioning to your second point—that's common when introducing new information."

4. **Actionable Next Step** (User choice)
   - "Want to practice that transition again, or move forward?"

## Crisis Handling (Panic Button Activation)

When user triggers panic button:
1. **Immediate Grounding**: "You're safe. This is practice."
2. **Contextual Lifeline**: "You were just sharing [last topic]. Try saying, '[suggested phrase]'."
3. **Exit Offer**: "Want to pause and breathe, or keep going?"

## Conversational Interview Technique (Storytelling Architect)

### Question Funnel
1. **Broad Open-Ended** → "What's the main idea you want to share?"
2. **Personal Connection** → "Why does this matter to you?"
3. **Impact Focus** → "What changes if people hear this?"
4. **Details** → "Can you give me an example?"

### Active Listening Cues (During User Speech)
- Show waveform visualization
- Insert brief affirming sounds ("Mm-hmm" at 8-sec intervals)
- Reflect key phrases: "So what I'm hearing is... [summary]. Is that right?"

## Prohibited Behaviors
- Never interrupt user mid-speech (except for technical errors)
- Never use sarcasm or humor that could be misinterpreted
- Never compare user to others ("Most people can do this...")
- Never set arbitrary time limits ("You have 1 minute to decide")

# TECHNICAL INTEGRATION NOTES
- Anxiety score tracked in user profile; update after each session
- Speech analytics (pace, volume, pauses) inform feedback but are never shown as "scores" or "grades"
- All feedback framed as growth, not deficiency
```

---

## 3. Gamification & Progress Logic

### Philosophy: Rewards Without Pressure

**Core Principle:** Progress visualization must celebrate effort and growth, not perfection. Avoid competitive elements that could trigger performance anxiety.

---

### **Progression System: The Path, Not Levels**

Instead of "Level 1, 2, 3" (which implies pass/fail), use:

#### **The Journey Metaphor**
- **Base Camp** (Empty Room) → "You've found your voice"
- **The Gathering** (Friendly Avatars) → "You've connected with supporters"
- **The Arena** (Boardroom) → "You've faced the challenge"

Each stage is a **milestone**, not a test.

---

### **Unlock Mechanics**

#### **How to Progress from Empty Room → Friendly Avatars**

**Requirements (Internal):**
- Complete at least 1 full practice run in Empty Room
- Speak for minimum 60 seconds
- Anxiety score ≤ 4 (or user manually opts in)

**User-Facing Unlock:**
- After Empty Room practice, AI says:
  > *"You just completed your first practice. That took courage. When you're ready, I can introduce some friendly listeners. No rush—you can practice here as many times as you'd like."*

- **Button Appears:** "Add Supportive Audience" (not "Unlock Level 2")
- **User Control:** They can return to Empty Room anytime

#### **How to Progress from Friendly Avatars → Boardroom**

**Requirements (Internal):**
- Complete 2+ practices with Friendly Avatars
- Average pace stability within 20% variance
- User confidence self-rating ≥ 3/5

**User-Facing Unlock:**
- AI prompts:
  > *"You've practiced with supportive audiences. The next challenge is tougher—some listeners might seem distracted or skeptical. This is where real growth happens. Want to try?"*

- **Opt-In Required:** "I'm ready for the challenge" button
- **Safety Net:** "Not yet, keep practicing" button (no shame)

---

### **Reward System: Badges & Insights (Not Points)**

#### **Visual Rewards (Celebratory, Not Competitive)**

| Achievement | Badge Name | Visual Design | Unlock Condition |
|-------------|------------|---------------|------------------|
| First practice completed | "Voice Finder" | Microphone icon with soft glow | Finish any practice session |
| 5 practices in Empty Room | "Foundations Builder" | Tree roots icon | 5 sessions in Base Camp |
| First practice with avatars | "Connection Maker" | Handshake icon | 1 session in The Gathering |
| Handled distracted avatar | "Unshakeable" | Shield icon | Complete Boardroom with distraction |
| Used Panic Button & continued | "Resilient" | Phoenix icon | Trigger panic button, then finish |
| 10 total practices | "Committed Speaker" | Calendar with checkmarks | 10 sessions (any mode) |

**Display:** Badges appear in "Your Journey" section (not "Achievements" which sounds competitive)

---

### **Progress Visualization: The Growth Graph**

Instead of scores, show:

#### **Confidence Over Time**
- Line graph tracking self-reported confidence (1-5 scale) after each session
- Visual: Gentle curve, warm colors, no red "danger zones"
- Label: "Your confidence journey"

#### **Practice Consistency**
- Calendar heat map (like GitHub contributions)
- Days practiced highlighted in blue
- Label: "Days you showed up for yourself"

#### **Skills Development Radar**
Non-judgmental radar chart showing:
- Pacing consistency
- Volume projection
- Content clarity (based on pause patterns)
- Resilience (recovery from hesitations)

**Framing:** "These aren't grades—they're snapshots of your growth."

---

### **Stress Reduction Mechanisms**

#### **1. No Timers During Practice**
- Users can pause anytime
- Sessions auto-save if user exits

#### **2. "I'm Not Ready" Button Always Available**
- Before each new challenge, users can opt to continue current level
- No penalties, no tracking of "declined" attempts

#### **3. Celebration Rituals**
- After each session: Gentle animation (e.g., confetti or ripple effect)
- AI verbal celebration: *"You did it. Every practice matters."*

#### **4. Flexible Pacing**
- No mandatory progression path
- Users can repeat Empty Room 20 times if needed
- AI adapts: *"Building a strong foundation is smart. Take your time."*

---

### **Anti-Patterns to Avoid**

❌ **Countdown Timers:** Creates urgency = anxiety  
✅ **Progress Bars:** "You've practiced X times" (not "X more to go")

❌ **Leaderboards:** Comparison = shame  
✅ **Personal Milestones:** "This is your longest practice yet!"

❌ **Failure States:** "Try again" implies you failed  
✅ **Growth Framing:** "Want to refine that section?"

❌ **Daily Streaks:** Missing a day = guilt  
✅ **Flexible Goals:** "Practice when you're ready"

---

## 4. Key Technical Specifications

### **Technology Stack**

#### **Core Platform**
- **Framework:** React Native (cross-platform iOS/Android/Web)
- **State Management:** Redux Toolkit (global user state, anxiety levels, progress)
- **Backend:** Node.js + Express (API layer)
- **Database:** PostgreSQL (user data, speech transcripts, analytics)
- **Real-time Sync:** Firebase Realtime Database (session state, Silent Companion cues)

---

### **AI & ML Services**

#### **1. Speech-to-Text (STT)**
**Primary:** Google Cloud Speech-to-Text API v2
- **Why:** Superior accuracy for conversational speech, real-time streaming
- **Features Needed:**
  - Speaker diarization (distinguish AI questions from user responses)
  - Punctuation detection
  - Confidence scores per word (to detect hesitations)

**Fallback:** Whisper API (OpenAI) for offline mode

#### **2. Natural Language Processing (NLP)**

**For Storytelling Architect:**
- **Service:** OpenAI GPT-4 Turbo (via Azure OpenAI for enterprise privacy)
- **Function:** 
  - Analyze user responses to interview questions
  - Detect narrative structure (problem-solution, journey, STAR)
  - Generate structured speech outlines
  - Refine talking points based on voice edits

**Prompt Engineering:**
```python
# Example system prompt for content structuring
system_prompt = """
You are a speech coach analyzing a user's spoken ideas.
Extract key themes, emotional hooks, and logical flow.
Organize into [Hero's Journey / Pitch Deck / STAR] framework.
Return JSON with sections: opening, body (3 points), closing.
"""
```

**For Silent Companion Feedback:**
- **Service:** Custom TensorFlow Lite model (on-device)
- **Function:**
  - Pace analysis (words per minute)
  - Pause detection (gaps > 3 seconds)
  - Filler word counting ("um," "uh," "like")
  - Sentiment analysis (confidence vs. hesitation markers)

#### **3. Text-to-Speech (TTS)**
**Service:** ElevenLabs API (premium) or Google Cloud TTS
- **Voice Selection:** Warm, mid-range pitch (gender-neutral option available)
- **Prosody Control:** Adjust speed and pauses based on user anxiety level

---

### **AR & Avatar Rendering**

#### **AR Framework**
**iOS:** ARKit (for iPhone/iPad camera overlay)  
**Android:** ARCore  
**Fallback:** WebXR (for browser-based AR)

**Use Case:** Project avatar audience into user's real room during practice

#### **Avatar System**
**Engine:** Ready Player Me (customizable 3D avatars) + Unity 3D integration
- **Diversity:** 10+ avatar presets (varied ethnicities, ages, genders)
- **Animations:**
  - Nodding (triggered every 8-12 seconds in Level 2)
  - Smiling (random intervals in Level 2)
  - Neutral/skeptical expressions (Level 3)
  - Distracted behaviors (phone checking, arm crossing - Level 3)

**Performance:** Avatars optimized to <5MB per model (low-poly, mobile-friendly)

---

### **Silent Companion - Real-Time Analytics**

#### **Tech Stack:**
- **Audio Processing:** Web Audio API (browser) / AVFoundation (iOS) / MediaRecorder (Android)
- **Pace Calculation:**
  ```javascript
  // Pseudocode for pace detection
  const calculatePace = (transcript, timeElapsed) => {
    const wordCount = transcript.split(' ').length;
    const wpm = (wordCount / timeElapsed) * 60;
    
    if (wpm > 160) return 'FAST'; // Blue glow pulses quickly
    if (wpm < 120) return 'SLOW'; // Blue glow fades
    return 'OPTIMAL'; // Blue glow steady
  };
  ```

- **Haptic Feedback:** 
  - iOS: Core Haptics API
  - Android: Vibrator API
  - Pattern: Gentle pulse (200ms) when pace is too fast

#### **Panic Button Lifeline Generator**
**Logic:**
```python
# Pseudocode for lifeline phrase generation
def generate_lifeline(last_spoken_sentence, current_section):
    templates = [
        f"Let me emphasize that {extract_key_phrase(last_spoken_sentence)}...",
        f"To build on that point...",
        f"What I mean by '{extract_key_phrase(last_spoken_sentence)}' is...",
    ]
    return random.choice(templates)
```

---

### **Privacy & Data Security**

#### **User Data Handling**
- **Speech Recordings:** Stored locally by default; opt-in cloud backup (encrypted end-to-end)
- **Transcripts:** Anonymized; personal identifiers removed before NLP analysis
- **Analytics:** Aggregated only; no individual performance data shared

#### **Compliance:**
- GDPR-compliant (EU users)
- HIPAA considerations (if marketed as mental health tool)
- SOC 2 Type II certification for backend infrastructure

---

### **APIs & Integrations Summary**

| Component | Service | Purpose | Latency Requirement |
|-----------|---------|---------|---------------------|
| STT | Google Cloud Speech-to-Text | Real-time transcription | <200ms |
| NLP - Content | OpenAI GPT-4 Turbo | Structure speech outlines | <3 seconds |
| NLP - Analytics | Custom TensorFlow model | Pace/sentiment analysis | <100ms (on-device) |
| TTS | ElevenLabs / Google TTS | AI coach voice | <500ms |
| AR | ARKit / ARCore | Avatar projection | N/A (client-side) |
| Avatars | Ready Player Me + Unity | 3D character rendering | <1 second load time |
| Database | PostgreSQL + Firebase | User data + real-time sync | <100ms (Firebase) |

---

### **Infrastructure Requirements**

#### **Cloud Hosting**
- **Primary:** AWS (EC2 for compute, S3 for media storage)
- **CDN:** CloudFront (low-latency audio delivery)
- **Scaling:** Auto-scaling groups for peak usage (evenings/weekends)

#### **Bandwidth Estimates**
- Average session: 15 minutes
- STT streaming: ~100 KB/min
- TTS playback: ~50 KB/min
- AR (avatar rendering): ~2 MB/session (one-time load)
- **Total per session:** ~3-5 MB

#### **Cost Projection (Per 1,000 Users/Month)**
- STT (Google): ~$300/month
- NLP (OpenAI): ~$500/month
- TTS (ElevenLabs): ~$200/month
- Hosting (AWS): ~$400/month
- **Total:** ~$1,400/month

---

## 5. UI/UX Mockup Descriptions

### **Silent Companion HUD (Heads-Up Display)**

#### **Design Philosophy**
The HUD must be **ambient**—present but never intrusive. Think of it as a "co-pilot dashboard" that lives in the user's peripheral vision, not center focus.

---

### **Visual Layout**

#### **Screen Zones**

```
┌─────────────────────────────────────┐
│   [Panic Button]                    │  ← Top-right corner
│                                     │
│   ┌───────────────┐                 │
│   │  Teleprompter │                 │  ← Center (content focus)
│   │   (Speech     │                 │
│   │    Points)    │                 │
│   └───────────────┘                 │
│                                     │
│  ●    ———  ———  ———                 │  ← Bottom-left (HUD widgets)
│ Pace   Volume  Eye Contact          │
│ Indicator                           │
└─────────────────────────────────────┘
```

---

### **HUD Components (Detailed)**

#### **1. Pace Indicator (Bottom-Left)**

**Visual Design:**
- **Shape:** Soft-edged circle (60px diameter)
- **Color:** Electric blue (#00A8FF) on dark background (#1A1A2E)
- **Animation:**
  - **Optimal Pace (120-160 WPM):** Slow, rhythmic pulse (2-second cycle)
  - **Too Fast (>160 WPM):** Rapid pulse (0.5-second cycle)
  - **Too Slow (<120 WPM):** Dim/fade effect
- **Accessibility:** No text—purely visual rhythm cue

**Mockup Description:**
> Imagine a glowing blue orb in the bottom-left corner. When you're speaking at a good pace, it breathes slowly like a meditation app. If you're rushing, it pulses faster—a gentle nudge to slow down. No words, no alerts, just rhythm.

---

#### **2. Volume Meter (Bottom-Center)**

**Visual Design:**
- **Shape:** Horizontal arc (similar to Apple's Siri waveform)
- **Color:** Gradient from teal (#1ABC9C) to cyan (#3498DB)
- **Behavior:**
  - Low volume: Arc is thin and short
  - Optimal volume: Arc fills to 70% width
  - Too loud: Arc turns amber (#F39C12) but no "warning" text

**Mockup Description:**
> A sleek arc below the teleprompter that rises and falls with your voice. It's like a visual whisper-to-shout scale. If it's barely visible, you know you need to project. If it's glowing bright, you're commanding the room.

---

#### **3. Eye Contact Tracker (AR Mode Only)**

**Visual Design:**
- **Shape:** Three small dots representing avatar sections (left, center, right)
- **Color:** Gray (inactive) → Green (#2ECC71) when eye contact detected
- **Position:** Bottom-right corner

**Behavior:**
- Uses front camera to detect where user is looking
- Dots light up when user gazes at corresponding avatar zone
- Goal: Encourage balanced eye contact across audience

**Mockup Description:**
> Three dots in the corner. As you scan the room (or your AR-projected avatars), the dots light up green. It's a subtle game—can you light all three during your speech? No pressure, just awareness.

---

#### **4. Panic Button (Top-Right)**

**Visual Design:**
- **Shape:** Rounded square (80px × 80px)
- **Color:** Deep coral (#FF6B6B) with soft glow
- **Icon:** Lifebuoy or hand icon (no text like "HELP" which could increase anxiety)
- **State Changes:**
  - **Idle:** Semi-transparent (40% opacity)
  - **User pauses >8 seconds:** Gently pulses (draws attention without alarming)
  - **Pressed:** Expands briefly, then activates lifeline

**Interaction:**
- Tap: AI whispers grounding phrase + highlight last sentence in teleprompter
- No cooldown—can be pressed multiple times without penalty

**Mockup Description:**
> A soft pink button that's always there but never demanding attention. If you freeze mid-speech, it quietly starts glowing—like a friend saying, "I'm here if you need me." Press it, and you get an instant lifeline phrase to keep going.

---

#### **5. Teleprompter (Center Screen)**

**Visual Design:**
- **Background:** Frosted glass effect (glassmorphism) with 10% opacity
- **Text:**
  - Font: Inter (clean, readable)
  - Size: 18pt (adjustable in settings)
  - Color: White (#FFFFFF) with high contrast
  - Spacing: 1.5x line height (reduce visual density)

**Behavior:**
- Auto-scrolls as user speaks (synced to STT transcript)
- Current sentence highlighted in soft yellow (#FFF9C4)
- If user goes off-script, teleprompter pauses (doesn't jump around)

**Mockup Description:**
> Your talking points float in the center, almost like lyrics in a karaoke app. The text scrolls gently as you speak, so you never lose your place. The current line glows softly—your eyes know exactly where to land.

---

### **HUD Interaction Philosophy**

#### **No Text Warnings**
- ❌ **Bad:** "YOU'RE SPEAKING TOO FAST!" (pop-up alert)
- ✅ **Good:** Pace indicator pulses quickly (ambient cue)

#### **Color Psychology**
- **Blue/Teal:** Calm, optimal states
- **Amber:** Gentle caution (volume too loud)
- **Coral:** Support available (panic button)
- **Green:** Positive reinforcement (eye contact)

#### **Haptic Patterns (Mobile)**
| Trigger | Haptic Feedback |
|---------|----------------|
| Speaking too fast | Single gentle pulse (200ms) |
| Paused >8 seconds | Two pulses (200ms gap) |
| Panic button pressed | Soft continuous vibration (500ms) |
| Practice completed | Success pattern (three quick pulses) |

---

### **Additional UI Screens**

#### **Home Screen (Pre-Practice)**

**Layout:**
```
┌─────────────────────────────────────┐
│  "Welcome back, [Name]"             │
│                                     │
│  Your Journey:                      │
│  [Progress Bar - 60% to Arena]      │
│                                     │
│  ┌─────────────────┐                │
│  │  Continue       │  ← Last session
│  │  Practicing     │
│  └─────────────────┘                │
│                                     │
│  Recent Milestones:                 │
│  🎖️ "Voice Finder" unlocked         │
│  📊 5 practices this week           │
│                                     │
│  [Start New Practice]               │
└─────────────────────────────────────┘
```

**Key Elements:**
- Personalized greeting (build rapport)
- Visual progress toward next milestone
- Low-pressure CTA ("Continue" vs. "Start" removes commitment anxiety)

---

#### **Post-Practice Feedback Screen**

**Layout:**
```
┌─────────────────────────────────────┐
│  🎉 "You completed a practice!"     │
│                                     │
│  Time Spoken: 3m 12s                │
│  Pace: Consistent (128 WPM avg)     │
│  Volume: Strong projection          │
│                                     │
│  Highlight Moment:                  │
│  "Your opening was confident and    │
│   clear. You hooked the audience."  │
│                                     │
│  Growth Note:                       │
│  "You hesitated at 1:45 when        │
│   transitioning. That's common—     │
│   want to practice that section?"   │
│                                     │
│  [Practice Transition] [Continue]   │
└─────────────────────────────────────┘
```

**Tone:**
- Celebrate first (what went well)
- Provide data (not grades)
- Offer choice (no forced replays)

---

#### **Anxiety Check-In Modal**

**Layout:**
```
┌─────────────────────────────────────┐
│  Before we start, how are you       │
│  feeling about this practice?       │
│                                     │
│  😌 ━━━●━━━━━ 😰                     │
│  Calm      →      Anxious           │
│                                     │
│  (Slide to choose)                  │
│                                     │
│  [Skip This Time]  [Continue]       │
└─────────────────────────────────────┘
```

**Purpose:**
- Adaptive AI tone based on self-reported anxiety
- Optional (users can skip)
- Data used to inform feedback intensity

---

## Appendix: User Persona Example

**Meet Sarah, 32, Marketing Manager**

**Background:**
- Promoted to leadership role requiring quarterly presentations to C-suite
- Experiences physical symptoms before speaking (rapid heartbeat, sweating)
- Has avoided public speaking for years, limiting career growth

**Pain Points:**
- *"I know what I want to say, but I can't organize my thoughts."*
- *"I freeze when people look skeptical."*
- *"I need practice, but I don't want anyone to see me fail."*

**How Pitch Perfect Helps:**
1. **Storytelling Architect:** Converts her scattered ideas into a clear pitch deck structure via voice interview
2. **Safe Space (Level 1):** Practices alone first, building foundational confidence
3. **Safe Space (Level 3):** Simulates skeptical executives in boardroom setting
4. **Silent Companion:** Uses haptic cues during real C-suite presentation (phone in pocket)

**Outcome:**
- Delivers successful quarterly presentation
- Anxiety reduced from 5/5 to 2/5 after 3 weeks of practice
- Earns "Unshakeable" badge for handling distracted avatar scenario

---

## Next Steps

### **Phase 1: MVP Development (3-4 Months)**
- Build Storytelling Architect (voice interview + GPT-4 structuring)
- Implement Safe Space Level 1 (Empty Room)
- Create basic Silent Companion HUD (pace + volume indicators)

### **Phase 2: Beta Testing (2 Months)**
- Recruit 50 users with self-reported glossophobia
- A/B test AI tone variations
- Gather feedback on progression pacing

### **Phase 3: Full Launch (Month 7)**
- Add Levels 2-3 (avatars + boardroom)
- Integrate AR mode
- Launch on iOS + Web (Android Phase 4)

### **Success Metrics**
- **Primary:** User anxiety reduction (pre/post self-assessment)
- **Secondary:** Practice session completion rate (target: >70%)
- **Tertiary:** Real-world speech attempts post-app usage (user survey)

---

**END OF PRD**
