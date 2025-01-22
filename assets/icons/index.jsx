import React from 'react';
import {theme} from '../../constants/theme'

// Import all icons
import Home from './Home';
import ArrowLeft from './Arrowleft';
import Call from './Call';
import Camera from './Camera';
import Delete from './Delete';
import Edit from './Edit';
import Heart from './Heart';
import Image from './Image';
import Location from './Location';
import Lock from './Lock';
import Logout from './Logout';
import Mail from './Mail';
import Plus from './Plus';
import Search from './Search';
import Send from './Send';
import Share from './Share';
import ThreeDotsCircle from './ThreeDotsCircle';
import ThreeDotsHorizontal from './ThreeDotsHorizontal';
import User from './User';
import Video from './Video';

const icons = {
    home: Home,
    arrowLeft: ArrowLeft,
    call: Call,
    camera: Camera,
    delete: Delete,
    edit: Edit,
    heart: Heart,
    image: Image,
    location: Location,
    lock: Lock,
    logout: Logout,
    mail: Mail,
    plus: Plus,
    search: Search,
    send: Send,
    share: Share,
    user: User,
    video: Video,
    threeDotsCircle: ThreeDotsCircle,
    threeDotsHorizontal: ThreeDotsHorizontal,
};

const Icon = ({ name, size = 24, strokeWidth = 1.9, color, ...props }) => {
    const IconComponent = icons[name];

    if (!IconComponent) {
        console.error(`Icon "${name}" does not exist in the icons object.`);
        return null;
    }

    return (
        <IconComponent
            height={size}
            width={size}
            strokeWidth={strokeWidth}
            color={color || theme.colors.textLight}
            {...props}
        />
    );
};

export default Icon;


