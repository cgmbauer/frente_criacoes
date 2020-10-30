<p align="center"> 
  <img src='https://github.com/cgmbauer/assets/blob/master/logo/Remoto.svg' alt='Remoto logo' width="400px" />
</p>


# :film_projector: Remoto

Aplicação feita para controlar habilidades e salários do corpo artístico de uma emissora de TV fictícia.

## :gear: Ferramentas

- [ReactJS v.17.0.1](https://reactjs.org/);

- [Axios](https://github.com/axios/axios);

- [Styled-Components](https://styled-components.com/);

- :construction: em progresso :construction:


## :green_book: Utilização do Git

- Antes de tentar fazer um merge, dê um pull da branch master para a sua branch para pegar as últimas atualizações:

    - git checkout <nome_da_sua_branch>                  ex: git checkout dev-gui
    - git pull origin master
    
- Para fazer um merge de sua branch para a master:

    - git add .
    - git commit -m 'feat: alguma coisa'     `*obs1`
    - git push -u origin <nome_da_sua_branch>            ex: git push -u origin dev-gui
    - git checkout master                  
    - git merge <nome_da_sua_branch>                     ex: git merge dev-gui
    - git push -u origin master
    
    `    
    obs1: para saber sobre commits semânticos: https://ilegra.com/blog/tudo-o-que-voce-precisa-saber-sobre-commits-semanticos/
    `
    
- Evite fazer push direto para a master, antes de fazer para sua branch.

- Evite modificar arquivos que alguém já está modificando, para evitar conflitos na hora de dar push.
