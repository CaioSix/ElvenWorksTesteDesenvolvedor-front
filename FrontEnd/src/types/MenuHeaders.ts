export interface MenuItem {
    name: string;
    url: string;
}


export interface PageMenu {
    firstMenu: MenuItem[];
    secondMenu: MenuItem[];
    thirdMenu: MenuItem[];
    fortyMenu: MenuItem[];
}


export const menuData: PageMenu = {
    firstMenu: [
        { name: 'Gestao de Acidentes', url: '/#' },
        { name: 'Sintetico', url: '/#' },
        { name: 'Novidades', url: '/#' },
        { name: 'Status Page', url: '/#' },
        { name: 'Observabilidade', url: '/#' },
    ],
    secondMenu: [
        { name: 'NOC', url: '/#' },
        { name: 'SRE', url: '/#' },
    ],
    thirdMenu: [
        { name: 'Blog', url: '/#' },
        { name: 'Livro SRE', url: '/#' },
        { name: 'WorkBook SRE', url: '/#' },
        { name: 'CloudStrify', url: '/#' },
    ],
    fortyMenu: [
    
    ],
};

