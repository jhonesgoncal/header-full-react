import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

chai.use(chaiEnzyme());

describe('<FullHeader />', () => {
   it('should have header tag when mount', () => {
        const wrapper = shallow(<FullHeader />)
        expect(wrapper.find('header')).to.have.length(1);
   });

   context('title', () => {
       it('should have h1 tag when title passed', () => {
        const wrapper = shallow(<FullHeader title="TDD" />)
        expect(wrapper.find('h1')).to.have.length(1);
       });
    
       it('should have h1 tag when title not passed', () => {
        const wrapper = shallow(<FullHeader />)
        expect(wrapper.find('h1')).to.have.length(0);
       });
    
       it('should have h1 tag with title passed', () => {
        const wrapper = shallow(<FullHeader title="TDD"/>)
        expect(wrapper.find('h1').props().children).to.be.eql("TDD");
       });
   });

   context('subtitle', () => {
       it('should have h2 tag when subtitle passed', () => {
        const wrapper = shallow(<FullHeader subtitle="TDD" />)
        expect(wrapper.find('h2')).to.have.length(1);
       });

       it('should have h2 tag when title not passed', () => {
        const wrapper = shallow(<FullHeader />)
        expect(wrapper.find('h2')).to.have.length(0);
       });

       it('should have h2 tag with title passed', () => {
        const wrapper = shallow(<FullHeader subtitle="TDD"/>)
        expect(wrapper.find('h2').props().children).to.be.eql("TDD");
       });
   });
 
   context('bgColor', () => {
        it('should have background-color equal #ccc when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD"/>)
            expect(wrapper).to.have.style('background-color').equal('#ccc');
        });

        it('should have background-color equal #000 when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" bgColor="#000"/>)
            expect(wrapper).to.have.style('background-color').equal('#000');
        });
   });

   context('textColor', () => {
        it('should have color equal #fff when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD"/>)
            expect(wrapper).to.have.style('color').equal('#fff');
        });

        it('should have color equal #ff0000 when  is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" textColor="#ff0000"/>)
            expect(wrapper).to.have.style('color').equal('#ff0000');
        });
    });

    context('font', () => {
        it('should have font equal sans-serif when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD"/>)
            expect(wrapper).to.have.style('font-family').equal('sans-serif');
        });

        it('should have font equal arial when  is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" font="arial"/>)
            expect(wrapper).to.have.style('font-family').equal('arial');
        });
    });

    context('bgImg', () => {
        it('should hava background-image equal empty when none is passed', () => {
            const wrapper = shallow(<FullHeader />)
            expect(wrapper).to.have.style("background-image").equal("url()");
        });

        it('should hava background-image equal bg.jpg  is passed', () => {
            const wrapper = shallow(<FullHeader bgImg="bg.jpg"/>)
            expect(wrapper).to.have.style("background-image").equal("url(bg.jpg)");
        });
    });

    context('video', () => {
        it('should have video tag when video is passed', () => {
         const wrapper = shallow(<FullHeader video="my_video.mp4" />)
         expect(wrapper.find('video')).to.have.length(1);
        });
     
        it('should have video tag when video not passed', () => {
         const wrapper = shallow(<FullHeader />)
         expect(wrapper.find('video')).to.have.length(0);
        });
     
        it('should have video tag with src passed', () => {
         const wrapper = shallow(<FullHeader video="my_video.mp4"/>)
         expect(wrapper.find('video').props().src).to.be.eql("my_video.mp4");
        });
    });
    
});
