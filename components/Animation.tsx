"use client"
import React, { Children, cloneElement, ReactElement, useEffect, useState } from 'react'

interface AnimationChildProps {
    children: ReactElement;
    duration?: number;
    delay?: number;
    movement?: number;
    direction?: string;
}

interface AnimationProps {
    children: ReactElement | ReactElement[];
    duration?: number;
    initialDelay?: number;
    staggerDelay?: number;
    movement?: number;
    direction?: string;
}

const AnimationChild: React.FC<AnimationChildProps> = (
    { children, duration, delay, movement, direction }: AnimationChildProps) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), delay);
        return (() => clearTimeout(timer))
    }, [delay])

  return cloneElement(children, {
      style: {
        ...children.props.style,
        opacity: visible ? 1 : 0,
        transform: visible ? `translate${direction}(0)` : `translate${direction}(${movement}px)`,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        willChange: 'opacity, transform'
      },
    });
}

const Animation: React.FC<AnimationProps> = ({ 
    children, 
    duration=1000, 
    initialDelay=0, 
    staggerDelay=400, 
    movement=20, 
    direction='Y' 
}) => {
    const childrenArray =Children.toArray(children) as ReactElement[];

    return (
        <>
            {childrenArray.map((child, index)=> (
                <AnimationChild 
                    key={child.key || index} 
                    duration={duration} 
                    delay={initialDelay + staggerDelay * index}
                    movement={movement}
                    direction={direction}>
                    {child}
                </AnimationChild>
            ))}
        </>
    )
}

export default Animation