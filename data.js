//Diseño informal de un relato interactivo



var cuadros = {
	cuadro_0 : {
		message : '(I) La tortuga que quería bailar breakdance'
	},
	cuadro_a : {
		
		message : 'Esta es Arnulfa la tortuga. Arnulfa gusta mucho de :',
		
		opt01 : {
			message: 'Ser aletargada como el resto de sabias tortugas',	
			relatedRoom : 'cuadro_b',
		},
		opt02 : {
			message: 'Desafiar la tradición establecida', 
			relatedRoom : 'cuadro_c',
		},
		opt03 : {
			message: 'Mantener un equilibrio en su vida', 
			relatedRoom : 'cuadro_d',
		},
	},
	cuadro_b : {
		
		message : 'Arnulfa será algún día vieja y sabia. El furor de su juventud es el adelanto crepuscular de una vida de tortuga muy aletargada y plena. Gracias por jugar!',
		
	},
	cuadro_c : {	

		message : 'Arnulfa gusta mucho de desafiar la tradición establecida. Mientras sus amigos son vivamente aletargados y aburridos, ella busca algo más. Hoy siente una inquietud especial y tiene ganas de :',

		opt01 : {
			message: 'Imitar a sus amigos e impregnarse del espíritu paciente de la lentitud.',	
			relatedRoom : 'cuadro_b',
		},
		opt02 : {
			message: 'bailar hasta fundirse con la música', 
			relatedRoom : 'cuadro_e',
		},
		opt03 : {
			message: 'cocinar algo sumamente dulce', 
			relatedRoom : 'cuadro_f',
		},
	},
	cuadro_d : {	

		message : 'Arnulfa quiere mantener un equilibrio en su tortuguezca vida. Sin embargo, no puede dejar de sentirse un poco apagada y ha notado una inquietud que desde dentro de sí busca estremecerla. Ella debe :',

		opt01 : {
			message: 'ignorar sus instintos y ser sosa como marca la tendencia de la mayoría de tortugas',	
			relatedRoom : 'cuadro_b',
		},
		opt02 : {
			message: 'romper con la monotonía y echarse un bailecito', 
			relatedRoom : 'cuadro_e',
		},
		opt03 : {
			message: 'reconsiderar quién es ella y qué tipo de cosas le agradan', 
			relatedRoom : 'cuadro_a',
		}
	},
	cuadro_e : {	

		message : 'Arnulfa la tortuga ha decidido que hoy bailará. Su danza y la música que le acompa–a han de ser un solo fuego. El ritmo al que arderá Arnulfa será :',

		opt01 : {
			message: 'algo lento y cadencioso como una balada romántica',	
			relatedRoom : 'cuadro_g',
		},
		opt02 : {
			message: 'algo estridente y radical que remueva la misma tierra', 
			relatedRoom : 'cuadro_h',
		},
		opt03 : {
			message: 'ninguno, es mejor que los monos bailen', 
			relatedRoom : 'cuadro_b',
		},
	},
	cuadro_f : {	

		message : 'Arnulfa cocinar‡ algo dulce y tendr‡ una explosión de adrenalina por el azúcar en su sangre de tortuga. Lo mejor que ella puede hacer al respecto de su hiperactividad es:',

		opt01 : {
			message: 'refrenar sus impulsos y sosegarse como buena tortuga prudente',	
			relatedRoom : 'cuadro_b',
		},
		opt02 : {
			message: 'sacudirse los ‡nimos moviendo el esqueleto', 
			relatedRoom : 'cuadro_e',
		},
		opt03 : {
			message: 'repensar su identidad y aquello que le mueve', 
			relatedRoom : 'cuadro_a',
		},
	},
	cuadro_g : {	

		message : 'Algo tan poco animado no es suficiente para revertir el estado tortuguezco del que Arnulfa es víctima. Quiz‡s una leve variante hubiera desencadenado otras explosiones anímicas en el desdichado quelonio.',
	},
	cuadro_h : {	

		message : 'Arnulfa desea mover el esqueleto de un modo radical y sísmico. Acaso alguno de sus amigos pueda ayudarle. La tortuga debe buscar para bailar a :',

		opt01 : {
			message: 'El buen y sensato caracol',	
			relatedRoom : 'cuadro_g',
		},
		opt02 : {
			message: 'el desquiciado y furibundo mono', 
			relatedRoom : 'cuadro_i',
		},
		opt03 : {
			message: 'nadie, será mejor cocinar algo dulce', 
			relatedRoom : 'cuadro_f',
		},
	},
	cuadro_i : {	

		message : 'Arnulfa busca en el bosque a su amigo el mono. El desquiciado y furibundo macaco le muestra lo último que ha aprendido, se trata de un paso mortal de breakdance. El paso consiste en girar intempestivamente con la espalda sobre el piso. Àquí debe hacer Arnulfa?',

		opt01 : {
			message: 'olvidarse de todo e ir a reposar por el agitamiento de ésta confusión',	
			relatedRoom : 'cuadro_b',
		},
		opt02 : {
			message: 'pensarlo mejor, sin desanimarse de la decisión', 
			relatedRoom : 'cuadro_j',
		},
		opt03 : {
			message: 'sin pensarlo más, hacerlo hasta morir, que la música nos posea', 
			relatedRoom : 'cuadro_k',
		},
	},
	cuadro_j : {	

		message : 'Arnulfa está decidida a bailar como el mono, pero antes quiere su consejo. El mono explica su técnica y ésta resulta ser muy trabajosa. Arnulfo tiene un gran obstáculo en frente y lo que debe hacer es :',

		opt01 : {
			message: 'rendirse. Notablemente este baile no fue hecho para tortugas dormilonas',	
			relatedRoom : 'cuadro_b',
		},
		opt02 : {
			message: 'practicar, reintentar, perseverar, aunque tome mucho tiempo ', 
			relatedRoom : 'cuadro_l',
		},
		opt03 : {
			message: 'no practicar ni rendirse, intentar el baile mortal del breakdance impulsivamente', 
			relatedRoom : 'cuadro_k',
		},
	},
	cuadro_k : {	

		message : 'Una tortuga como Arnulfa no puede ponerse de espaldas al piso sin un entrenamiento arduo y meticuloso. El desenlace de tan imprudente decisión es fatal y todos sus amigos lo lamentamos. Gracias por jugar!',
	},
	cuadro_l : {	

		message : 'Arnulfa tenía unas ganas explosivas de bailar, sin embargo toda la práctica que le tomó poder ponerse de espaldas y girar para luego levantarse le tomo mucho tiempo y eso hizo que aquel fuego inquieto con el que Arnulfa ardía internamente se vuelva perpetuo. Hoy en día es la única tortuga capaz de bailar breakdance sin perecer. Un saludo a los que no se rinden con lo que les apasiona! Gracias por jugar!',
	},

}


