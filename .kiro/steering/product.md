---
inclusion: always
---

# Product Overview

OnlineDraft is a real-time multiplayer draft game where players strategically select items across multiple rounds. When players choose the same item, they compete through animated mini-games to determine the winner.

## Core Gameplay Mechanics
- **Draft Rounds**: Players simultaneously select from available items
- **Conflict Resolution**: Overlapping selections trigger competitive mini-games (slot machine, card reveal, typing challenges)
- **Strategic Elements**: Past round data informs future selection decisions
- **Real-time Synchronization**: All player actions sync instantly via Firebase

## Key Features
- **Room Management**: Create/join rooms via URL or QR code sharing
- **Avatar System**: 18 unique avatars for player identification
- **Live Chat**: Real-time messaging during gameplay
- **Result Tracking**: Historical data of past draft outcomes
- **Responsive UI**: Mobile-first design with desktop optimization
- **Theme Support**: Light/dark mode switching

## User Experience Principles
- **Immediate Feedback**: All actions provide instant visual/audio responses
- **Social Interaction**: Chat and avatar systems encourage group engagement
- **Progressive Disclosure**: Complex game states revealed gradually
- **Accessibility**: Keyboard navigation and screen reader support
- **Performance**: Sub-100ms response times for critical interactions

## Business Rules
- **Room Capacity**: Maximum 8 players per room
- **Session Duration**: No time limits, rooms persist until manually closed
- **Anonymous Play**: No account creation required, uses Firebase anonymous auth
- **Data Persistence**: Game state and chat history maintained during sessions
- **Conflict Priority**: First-come-first-served for simultaneous selections

## Technical Constraints
- **Real-time Requirements**: All state changes must propagate within 200ms
- **Mobile Performance**: 60fps animations on devices with 2GB+ RAM
- **Offline Handling**: Graceful degradation when connection is lost
- **Browser Support**: Modern browsers with WebSocket support required