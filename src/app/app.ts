import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import IAccordion, { type IAccordionData, type IAccordionOptions } from './components/IAccordion';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IAccordion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  data = signal<IAccordionData>([
    { 
      title: "<i>What is Lorem Ipsum? </i>", 
      description: "<strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.", 
      key: "1", 
      activeInitially: true
    }, 
    {
      title: "Why do we use it?", 
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      key: "2", 
     
    }, 
     {
      title: "Where does it come from?", 
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      key: "3"
    }, 
    {
      title: "Lorem ipsum disabled", 
      description:"",
      key: "4", 
      disabled: true
    },
     {
      title: "Where can I get some?", 
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
      key: "5", 
    }
  ]);

  options = signal<IAccordionOptions>({
    showMultiple: true,
    headIsClickable: true,
    titleVariant: "html",
    descriptionVariant: "html",
    headColors: {
        active: {
            bg: '#1e40af', 
            text: '#ffffff'
        }, 
        deactive: {
            bg: '#2563eb', 
            text: '#ffffff'
        }, 
        disabled: {
            bg: 'gray', 
            text: '#ffffff'
        }, 
    }, 
    descriptionColors: {
        active: {
            bg: '#eff6ff', 
            text: '#1e3a8a'
        },
        disabled: {
            bg: '#9c9c9c', 
            text: '#ffffff'
        }, 
    }
  })

}
