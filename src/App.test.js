import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {shallow, render, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });

import Topic from "./Topic";
import TopicContainer from "./TopicContainer";
import NewTopic from "./NewTopic";

// I test for functions and well a upvote and downvote
// To make it simpler i always sort before any render.
// Thus testing for sorted order is not required. 
// I can make state change to always run sort as a mixin to the state,
// that would then need to be tested.

// I use flow - a great light library that works really well with react makes JS more like,
// type script and thus allows really type safe JS that gives error while compiling if the props 
// are incorrectly passed around. The same goes for the state. 
// each prop and state is type casted. 
// functions also type casted and it has values for taking input as events. 



describe("APP Test :", () => {
	let Main, submitTopic, eachTopic, topicTitle, topicDescription, submit, upvote, downvote;

	const obj1 = {
        title: "Title 1",
        description: "Description of 1st topic",
        vote: 1
    }
    const obj2 = {
        title: "Title 2",
        description: "Description of 2nd topic",
        vote: 9
    }
    const obj3 = {
        title: "Title 3",
        description: "Description of 3rd topic",
        vote: 4
    }

	beforeEach(() => {
		Main = shallow(<App/>)
		submitTopic = mount(<NewTopic submitTopic = {Main.instance().submitTopic} />);
		eachTopic = mount(<Topic title={obj1.title} 
								 description={obj1.description} 
								 vote={obj1.vote} 
								 upvote = {Main.instance().upvote} 
								 downvote= {Main.instance().downvote} />);

		topicTitle = submitTopic.find("input").at(0);
		topicDescription = submitTopic.find("input").at(1);
		submit = submitTopic.find("button").at(0);
		upvote = eachTopic.find('img').at(0);
		downvote = eachTopic.find('img').at(1);
	});

	describe("Test Components", () => {
		test("Testing non crash <App />", () => {
			mount(<App />);
		});
		test("Testing non crash <TopicContainer />", () => {
			mount(<TopicContainer topics={[obj1]} />);
		});
		test("Testing non crash <NewTopic/>", () => {
			mount(<NewTopic submitTopic={Main.instance().submitTopic} />);
		});
		test("Testing non crash <Topic/>", () => {
			mount(<Topic title={obj2.title} description={obj2.description} vote={obj2.vote} upvote = {Main.instance().upvote} downvote= {Main.instance().downvote} />);
		});
	});

	describe("Test Each Topic Component", () => {
		beforeEach(() => {
			Main.state().topics = [obj1]
		});

		describe("Test upvote", () => {
			beforeEach(() => {
				upvote.simulate("click");
			});
			test("testing click", () => {
				expect(Main.state().topics[0].vote).toEqual(obj1.vote + 1);
			});
		})

		describe("Test downvote", () => {
			beforeEach(() => {
				downvote.simulate("click");
			});
			test("testing click", () => {
				expect(Main.state().topics[0].vote).toEqual(obj1.vote - 1);
			});
		})
	});

	describe("Test New Topic Component", () => {
		beforeEach(() => {
			topicTitle.simulate('change',  {
				target: { value: obj1.title }
			});
			topicDescription.simulate('change', {
				target: { value: obj1.description }
			})
		});

		describe("Test change in Component", () => {

			test("testing title", () => {
				expect(submitTopic.state().title).toEqual(obj1.title);
			});
			test("testing description", () => {
				expect(submitTopic.state().description).toEqual(obj1.description);
			});
		})

		describe("Test changes in state in App", () => {
			beforeEach(() => {
				Main.state().topics = [obj1]
				submitTopic.instance().submitNew();
			});
			test("testing App state", () => {
				expect(Main.state().topics[0]).toEqual(obj1);
			});
		})
	});
});
