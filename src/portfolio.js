const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://y-majid16.github.io/portofolio',
  title: 'Portofolio.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Yaumul Majid',
  role: 'Web Developer',
  description:
    ' I have a strong desire to develop my skills in web development, and understand the basic concepts of web development, I am enthusiastic about continuously learning and developing my abilities to build dynamic and engaging websites for users.',
  resume:
    'https://drive.google.com/file/d/1QjX5t2Ukeugb_3BEd3pOkIqnjr7_bZI1/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/yaumulmajidd',
    github: 'https://github.com/y-majid16',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Web App Calculator',
    description:
      'Calculator web application is a tool for calculating from simple calculations such as addition, subtraction, multiplication and division.',
    stack: ['HTML', 'JavaScript', 'CSS'],
    sourceCode: 'https://github.com/y-majid16/project-js-calculator-progate',
    livePreview: 'https://y-majid16.github.io/project-js-calculator-progate',
  },
  {
    name: 'Online Course',
    description:
      'An online course landing page is a page on a website where the potential target audience for e-learners can learn about an online course.',
    stack: ['HTML', 'CSS'],
    sourceCode: 'https://github.com/y-majid16/proyek-html-css-progate',
    livePreview: 'https://y-majid16.github.io/proyek-html-css-progate',
  },
  {
    name: 'To Do Apps',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', 'JavaScript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/y-majid16',
    livePreview: 'https://github.com/y-majid16',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Bootstrap',
  'React',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'yaumulmajid@gmail.com',
}

export { header, about, projects, skills, contact }
