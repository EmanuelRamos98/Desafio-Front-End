const data = {
    user_info: {
        username: "Pepe",
        lastname: "Pepito",
        img: "/Assets/slack.png",
        img_perfil: '/Assets/pepe.jpg',
        notificaciones: true,
        id: "1"
    },
    workspaces: [
        {
            nombre: "Workspace A",
            fecha_creacion: "2023-05-15",
            id: "1",
            canales: [
                {
                    nombre: "General",
                    id: "1",
                    mensajes: [
                        {
                            texto: "Hola, ¿cómo van las cosas hoy?",
                            autor: "Ana",
                            img: "",
                            fecha: "2023-05-15T09:30:00",
                            id: "1"
                        },
                        {
                            texto: "Todo bien por aquí, gracias.",
                            autor: "Carlos",
                            img: "",
                            fecha: "2023-05-15T09:35:00",
                            id: "2"
                        },
                        {
                            texto: "¿Alguien tiene actualizaciones sobre el proyecto?",
                            autor: "Ana",
                            img: "",
                            fecha: "2023-05-15T10:00:00",
                            id: "3"
                        },
                        {
                            texto: "Estoy revisando eso ahora mismo.",
                            autor: "Juan",
                            img: "",
                            fecha: "2023-05-15T10:05:00",
                            id: "4"
                        },
                        {
                            texto: "Perfecto, avísame si necesitas ayuda.",
                            autor: "Ana",
                            img: "",
                            fecha: "2023-05-15T10:10:00",
                            id: "5"
                        }
                    ]
                },
                {
                    nombre: "Proyectos",
                    id: "2",
                    mensajes: [
                        {
                            texto: "¿Quién está a cargo del nuevo proyecto?",
                            autor: "Pedro",
                            img: "",
                            fecha: "2023-05-16T14:00:00",
                            id: "1"
                        },
                        {
                            texto: "Eso lo está manejando Juan.",
                            autor: "Ana",
                            img: "",
                            fecha: "2023-05-16T14:05:00",
                            id: "2"
                        },
                        {
                            texto: "¿Cuál es la fecha límite para la entrega?",
                            autor: "Pedro",
                            img: "",
                            fecha: "2023-05-16T14:10:00",
                            id: "3"
                        },
                        {
                            texto: "El viernes de la próxima semana.",
                            autor: "Ana",
                            img: "",
                            fecha: "2023-05-16T14:15:00",
                            id: "4"
                        },
                        {
                            texto: "Entendido, vamos a asegurarnos de cumplir.",
                            autor: "Pedro",
                            img: "",
                            fecha: "2023-05-16T14:20:00",
                            id: "5"
                        }
                    ]
                },
                {
                    nombre: "Soporte",
                    id: "3",
                    mensajes: [
                        {
                            texto: "¿Alguien más está teniendo problemas con el software?",
                            autor: "Sara",
                            img: "",
                            fecha: "2023-05-17T11:00:00",
                            id: "1"
                        },
                        {
                            texto: "Sí, parece que algunos están experimentando errores.",
                            autor: "Ana",
                            img: "",
                            fecha: "2023-05-17T11:05:00",
                            id: "2"
                        },
                        {
                            texto: "¿Hay alguna actualización en la solución?",
                            autor: "Sara",
                            img: "",
                            fecha: "2023-05-17T11:10:00",
                            id: "3"
                        },
                        {
                            texto: "El equipo de soporte está trabajando en ello.",
                            autor: "Ana",
                            img: "",
                            fecha: "2023-05-17T11:15:00",
                            id: "4"
                        },
                        {
                            texto: "Gracias por la información, estaré atento.",
                            autor: "Sara",
                            img: "",
                            fecha: "2023-05-17T11:20:00",
                            id: "5"
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Workspace B",
            fecha_creacion: "2023-06-10",
            id: "2",
            canales: [
                {
                    nombre: "General",
                    id: "1",
                    mensajes: [
                        {
                            texto: "Buenos días a todos.",
                            autor: "Luis",
                            img: "",
                            fecha: "2023-06-10T08:00:00",
                            id: "1"
                        },
                        {
                            texto: "¡Hola!",
                            autor: "Ana",
                            img: "",
                            fecha: "2023-06-10T08:05:00",
                            id: "2"
                        },
                        {
                            texto: "¿Qué planes tenemos para hoy?",
                            autor: "Luis",
                            img: "",
                            fecha: "2023-06-10T08:10:00",
                            id: "3"
                        },
                        {
                            texto: "Tenemos la reunión de seguimiento a las 10.",
                            autor: "Ana",
                            img: "",
                            fecha: "2023-06-10T08:15:00",
                            id: "4"
                        },
                        {
                            texto: "Entendido, estaré allí.",
                            autor: "Luis",
                            img: "",
                            fecha: "2023-06-10T08:20:00",
                            id: "5"
                        }
                    ]
                },
                {
                    nombre: "Marketing",
                    id: "2",
                    mensajes: [
                        {
                            texto: "¿Cómo van las métricas de la última campaña?",
                            autor: "Elena",
                            img: "",
                            fecha: "2023-06-11T13:30:00",
                            id: "1"
                        },
                        {
                            texto: "Estamos viendo un aumento en la interacción.",
                            autor: "Ana",
                            img: "",
                            fecha: "2023-06-11T13:35:00",
                            id: "2"
                        },
                        {
                            texto: "¿Cuál es la retroalimentación de los clientes?",
                            autor: "Elena",
                            img: "",
                            fecha: "2023-06-11T13:40:00",
                            id: "3"
                        },
                        {
                            texto: "Mayormente positiva, con algunas sugerencias.",
                            autor: "Ana",
                            img: "",
                            fecha: "2023-06-11T13:45:00",
                            id: "4"
                        },
                        {
                            texto: "Genial, sigamos así.",
                            autor: "Elena",
                            img: "",
                            fecha: "2023-06-11T13:50:00",
                            id: "5"
                        }
                    ]
                },
                {
                    nombre: "Recursos Humanos",
                    id: "3",
                    mensajes: [
                        {
                            texto: "¿Hay alguna novedad con las contrataciones?",
                            autor: "Juan",
                            img: "",
                            fecha: "2023-06-12T15:00:00",
                            id: "1"
                        },
                        {
                            texto: "Sí, estamos en proceso de entrevistas.",
                            autor: "Ana",
                            img: "",
                            fecha: "2023-06-12T15:05:00",
                            id: "2"
                        },
                        {
                            texto: "¿Cuándo esperamos tener nuevos miembros en el equipo?",
                            autor: "Juan",
                            img: "",
                            fecha: "2023-06-12T15:10:00",
                            id: "3"
                        },
                        {
                            texto: "Probablemente dentro de dos semanas.",
                            autor: "Ana",
                            img: "",
                            fecha: "2023-06-12T15:15:00",
                            id: "4"
                        },
                        {
                            texto: "Gracias por la actualización.",
                            autor: "Juan",
                            img: "",
                            fecha: "2023-06-12T15:20:00",
                            id: "5"
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Workspace C",
            fecha_creacion: "2023-07-01",
            id: "3",
            canales: [
                {
                    nombre: "General",
                    id: "1",
                    mensajes: [
                        {
                            texto: "Buenos días a todos.",
                            autor: "María",
                            img: "",
                            fecha: "2023-07-01T10:00:00",
                            id: "1"
                        },
                        {
                            texto: "¡Hola! ¿Cómo están?",
                            autor: "Ana",
                            img: "",
                            fecha: "2023-07-01T10:05:00",
                            id: "2"
                        },
                        {
                            texto: "¿Alguien tiene pendiente alguna tarea importante hoy?",
                            autor: "María",
                            img: "",
                            fecha: "2023-07-01T10:10:00",
                            id: "3"
                        },
                        {
                            texto: "Necesito finalizar el informe para mañana.",
                            autor

: "Ana",
                            img: "",
                            fecha: "2023-07-01T10:15:00",
                            id: "4"
                        },
                        {
                            texto: "Avísame si necesitas ayuda con eso.",
                            autor: "María",
                            img: "",
                            fecha: "2023-07-01T10:20:00",
                            id: "5"
                        }
                    ]
                },
                {
                    nombre: "Ventas",
                    id: "2",
                    mensajes: [
                        {
                            texto: "¿Tenemos alguna actualización sobre los leads?",
                            autor: "Pablo",
                            img: "",
                            fecha: "2023-07-02T11:30:00",
                            id: "1"
                        },
                        {
                            texto: "Estamos en conversaciones con un cliente potencial.",
                            autor: "Ana",
                            img: "",
                            fecha: "2023-07-02T11:35:00",
                            id: "2"
                        },
                        {
                            texto: "¿Cuándo esperamos cerrar el trato?",
                            autor: "Pablo",
                            img: "",
                            fecha: "2023-07-02T11:40:00",
                            id: "3"
                        },
                        {
                            texto: "Probablemente al final de la próxima semana.",
                            autor: "Ana",
                            img: "",
                            fecha: "2023-07-02T11:45:00",
                            id: "4"
                        },
                        {
                            texto: "Mantennos informados sobre el progreso.",
                            autor: "Pablo",
                            img: "",
                            fecha: "2023-07-02T11:50:00",
                            id: "5"
                        }
                    ]
                },
                {
                    nombre: "Desarrollo",
                    id: "3",
                    mensajes: [
                        {
                            texto: "¿Hay algún problema con la implementación reciente?",
                            autor: "David",
                            img: "",
                            fecha: "2023-07-03T16:00:00",
                            id: "1"
                        },
                        {
                            texto: "Estamos resolviendo un pequeño bug.",
                            autor: "Ana",
                            img: "",
                            fecha: "2023-07-03T16:05:00",
                            id: "2"
                        },
                        {
                            texto: "¿Cuándo podemos esperar la solución?",
                            autor: "David",
                            img: "",
                            fecha: "2023-07-03T16:10:00",
                            id: "3"
                        },
                        {
                            texto: "Deberíamos tenerlo listo para hoy.",
                            autor: "Ana",
                            img: "",
                            fecha: "2023-07-03T16:15:00",
                            id: "4"
                        },
                        {
                            texto: "Gracias por ocuparte de eso.",
                            autor: "David",
                            img: "",
                            fecha: "2023-07-03T16:20:00",
                            id: "5"
                        }
                    ]
                }
            ]
        }
    ]
};

export{data}