function ComponentsManager() {
    // feed base para vizualização e funcções relacionadas aos componentes
    this.feedComponents = {
        "section": {
            content: ' <div class="row">&nbsp;</div>',
            description: {
                text: 'Seção',
                picture: {
                    link: '/img/component-icons.png',
                    position: 'center -1034px',
                }
            }
        },
        "line": {
            content: '<hr/>',
            description: {
                text: 'Linha',
                picture: {
                    link: '/img/component-icons.png',
                    position: 'center -1378px',
                }
            }
        },
        "column": {
            content: '<div class="col-md-4"></div>',
            description: {
                text: 'Coluna',
                picture: {
                    link: '/img/component-icons.png',
                    position: 'center -1262px',
                }
            }
        },
        "box": {
            content: ' caixa',
            description: {
                text: 'Caixa',
                picture: {
                    link: '/img/component-icons.png',
                    position: 'center -1148px',
                }
            }
        },
        "text": {
            content: '<p>texto<p/>',
            description: {
                text: 'Texto',
                picture: {
                    link: '/img/component-icons.png',
                    position: 'center -8px',
                }
            }
        },
        "buttom": {
            content: '<span class="btn btn-primary">botao</span>',
            description: {
                text: 'Botão',
                picture: {
                    link: '/img/component-icons.png',
                    position: 'center -236px',
                }
            }
        },
        "image": {
            content: '<img src="" alt="some image"/>',
            description: {
                text: 'Imagem',
                picture: {
                    link: '/img/component-icons.png',
                    position: 'center -122px',
                }
            }
        },
        "video": {
            content: ' video',
            description: {
                text: 'Vídeo',
                picture: {
                    link: '/img/component-icons.png',
                    position: 'center -1603px',
                }
            }
        },
        "html": {
            content: ' html',
            description: {
                text: 'HTML',
                picture: {
                    link: '/img/component-icons.png',
                    position: 'center -920px',
                }
            }
        }
    }

    // Método que inicializa os componentes disponíveis em formato html para inserção na página
    this.stringfyComponents = () => {
        return Object.entries(this.feedComponents).map(([key, content]) => {
            return `<div class="item" style="background-position: ${content.description.picture.position}" ondragstart="drag(event)" draggable="true" data-type="${key}">
                        ${content.description.text}
                    </div>`
        }).join('')
    }

    // Obtem o valor de um atributo específico do componente passado
    this.getDescription = (component, field) => {
        switch (field) {
            case 'text':
                return this.feedComponents[component].description.text;
            case 'picture':
                return this.feedComponents[component].description.picture;
            case 'content':
                return this.feedComponents[component].content;
        }
    }
}
