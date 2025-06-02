// This file provides mock implementations for lucide-react icons
import React from 'react';

// Create a basic icon component factory
const createIcon = (name) => {
  return function Icon(props) {
    return React.createElement('svg', {
      ...props,
      width: props.size || 24,
      height: props.size || 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: `<!-- ${name} icon -->`
    });
  };
};

// Export commonly used icons
export const Home = createIcon('Home');
export const Menu = createIcon('Menu');
export const X = createIcon('X');
export const User = createIcon('User');
export const UserPlus = createIcon('UserPlus');
export const Search = createIcon('Search');
export const ChevronDown = createIcon('ChevronDown');
export const ChevronUp = createIcon('ChevronUp');
export const ChevronLeft = createIcon('ChevronLeft');
export const ChevronRight = createIcon('ChevronRight');
export const Mail = createIcon('Mail');
export const Phone = createIcon('Phone');
export const MapPin = createIcon('MapPin');
export const Calendar = createIcon('Calendar');
export const Clock = createIcon('Clock');
export const Heart = createIcon('Heart');
export const Star = createIcon('Star');
export const Check = createIcon('Check');
export const Info = createIcon('Info');
export const AlertCircle = createIcon('AlertCircle');
export const ArrowRight = createIcon('ArrowRight');
export const ArrowLeft = createIcon('ArrowLeft');
export const LogOut = createIcon('LogOut');
export const Building = createIcon('Building');
export const Users = createIcon('Users');
export const MessageCircle = createIcon('MessageCircle');
export const Sparkles = createIcon('Sparkles');
export const BotMessageSquare = createIcon('BotMessageSquare');
export const Loader = createIcon('Loader');
export const Lock = createIcon('Lock');
export const Shield = createIcon('Shield');
export const MessageSquare = createIcon('MessageSquare');

// Default export for compatibility
export default {
  Home,
  Menu,
  X,
  User,
  UserPlus,
  Search,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Heart,
  Star,
  Check,
  Info,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  LogOut,
  Building,
  Users,
  MessageCircle,
  Sparkles,
  BotMessageSquare,
  Loader,
  Lock,
  Shield,
  MessageSquare
};