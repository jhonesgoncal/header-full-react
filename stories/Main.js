import React from 'react';
import FullHeader from '../src/Main'; // This is our FullHeader
import { storiesOf } from '@storybook/react';

storiesOf('FullHeader', module)
    .add('with title', () => (
        <FullHeader title="TDD"/>
    ))
    .add('with title and subtitle', () => (
        <FullHeader title="TDD" subtitle="Whats is tested may never break." />
    ))
    .add('with title, subtitle, bgColor', () => (
        <FullHeader title="TDD" subtitle="Whats is tested may never break." bgColor="#3299BB" />
    ))
    .add('with title, subtitle, bgColor, textColor', () => (
        <FullHeader title="TDD" subtitle="Whats is tested may never break." bgColor="orange"  textColor="black" />
    ))
    .add('with title, subtitle, font', () => (
        <FullHeader title="TDD" subtitle="Whats is tested may never break." font="cursive" />
    ))
    .add('with title, subtitle,  bgImg', () => (
        <FullHeader title="TDD" subtitle="Whats is tested may never break." 
        bgImg="https://raw.githubusercontent.com/willianjusten/photo-examples/master/iceland-glacier.jpg"/>
    ))
    .add('with title, subtitle,textColor video', () => (
        <FullHeader title="TDD" subtitle="Whats is tested may never break."  textColor="blue"
        video="https://www.w3schools.com/html/mov_bbb.mp4" />
    ))