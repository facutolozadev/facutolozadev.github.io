import {
    AngularIcon, 
    GitHubIcon, AstroIcon, 
    GitIcon, 
    HTMLIcon,
    JavascriptIcon, 
    NextJSIcon,
    ReactIcon,
    TailwindIcon,
    TypeScriptIcon
} from '../icons/index.ts'

export interface SkillType {
    name: string,
    Icon: (_props: Record<string, any>) => any,
    section: string
}

export const SKILLS : SkillType[] = [
    {
        name: 'JavaScript',
        Icon:  JavascriptIcon ,
        section: 'main'
    }, 
    {
        name: 'ReactJS',
        Icon: ReactIcon,
        section: 'main'
    },
    {
        name: 'TypeScript',
        Icon: TypeScriptIcon,
        section: 'main'
    },
    {
        name: 'NextJS',
        Icon: NextJSIcon,
        section: 'main'
    },
    {
        name: 'TailwindCSS',
        Icon: TailwindIcon,
        section: 'main'
    },
    {
        name: 'AngularJS',
        Icon: AngularIcon,
        section: 'learning'
    },
    {
        name: 'AstroJS',
        Icon: AstroIcon,
        section: 'learning'
    },
    {
        name: 'HTML/CSS',
        Icon: HTMLIcon,
        section: 'basics'
    },
    {
        name: 'Git',
        Icon: GitIcon,
        section: 'basics'
    },
    {
        name: 'Github',
        Icon: GitHubIcon,
        section: 'basics'
    },
]