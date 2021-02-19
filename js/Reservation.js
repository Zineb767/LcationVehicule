
        var prix;
        function myFunction1() {

            var v = document.getElementById('Vehicule').value;
            var c = document.getElementById('carburant');
            
            switch (v) {
                case "Moto":
                    document.getElementById("carburant").disabled = false;
                    c.options.length = 0;
                    c.options[c.options.length] = new Option('electrique', 'electrique');
                    c.options[c.options.length] = new Option('essence', 'essence');

                    break;
                case "Citadine":
                    document.getElementById("carburant").disabled = false;
                    c.options.length = 0;
                    c.options[c.options.length] = new Option('electrique', 'electrique');
                    c.options[c.options.length] = new Option('essence', 'essence');
                    c.options[c.options.length] = new Option('hybirde', 'hybirde');
                    c.options[c.options.length] = new Option('Disel', 'Disel');
                    break;
                case "Compacte":
                    document.getElementById("carburant").disabled = false;
                    c.options.length = 0;
                    c.options[c.options.length] = new Option('Disel', 'Disel');
                    c.options[c.options.length] = new Option('essence', 'essence');
                    c.options[c.options.length] = new Option('hybirde', 'hybirde');
                    break;
                case "Berline":
                    document.getElementById("carburant").disabled = false;
                    c.options.length = 0;
                    c.options[c.options.length] = new Option('Disel', 'Disel');
                    c.options[c.options.length] = new Option('essence', 'essence');
                    c.options[c.options.length] = new Option('hybirde', 'hybirde');
                    break;
                case "Utilitaire":
                    document.getElementById("carburant").disabled = false;
                    c.options.length = 0;
                    c.options[c.options.length] = new Option('Disel', 'Disel');
                    break;
                case "Engin":
                    document.getElementById("carburant").disabled = false;
                    c.options.length = 0;
                    c.options[c.options.length] = new Option('Disel', 'Disel');
                    c.options[c.options.length] = new Option('essence', 'essence');
                    break;
                case "Camion":
                    document.getElementById("carburant").disabled = false;
                    c.options.length = 0;
                    c.options[c.options.length] = new Option('Disel', 'Disel');
                    break;
                default:
                    break;
            }
        }

        function prixPayer() {
            prix = 0;
            var v = document.getElementById('Vehicule').value;
            var d = document.getElementById('days').value;
            var carb = document.getElementById("carburant").value;
            var vts = document.getElementById("vitesse").value;

            switch (v) {
                case "Moto":
                    if (carb == "essence") {
                        prix = (10 * 0.14) * d;
                    } else if (carb == "electrique") {
                        prix = ((10 * 0.05) + 10) * d;
                    }
                    break;
                case "Citadine":
                    if (carb == "essence") {
                        prix = ((12 * 0.14) + 12) * d;
                    }
                    else if (carb == "electrique") {
                        prix = ((12 * 0.05) + 12) * d;
                    }
                    else if (carb == "hybirde") {
                        prix = ((12 * 0.09) + 12) * d;
                    }
                    else if (carb == "Disel") {
                        prix = ((12 * 0.21) + 12) * d;
                    }
                    break;

                case "Compacte":
                    if (carb == "essence") {
                        prix = ((14 * 0.14) + 14) * d;
                    }

                    else if (carb == "hybirde") {
                        prix = ((14 * 0.09) + 14) * d;
                    }
                    else if (carb == "Disel") {
                        prix = ((14 * 0.21) + 14) * d;
                    }
                    break;


                case "Berline":
                    if (carb == "essence" && vts == "Automatique") {
                        prix = (((20 * 0.14) + (20 * 0.19)) + 20) * d;
                    }
                    else if (carb == "hybirde" && vts == "Automatique") {
                        prix = (((20 * 0.09) + (20 * 0.19)) + 20) * d;
                    }
                    else if (carb == "Disel" && vts == "Automatique") {
                        prix = (((20 * 0.21) + (20 * 0.19)) + 20) * d;
                    }

                    break;

                case "Utilitaire":
                    if (carb == "Disel") {
                        prix = ((16 * 0.21) + 16) * d;

                        break;
                    }

                case "Engin":
                    if (carb == "essence") {
                        prix = ((900 * 0.14) + 900) * d;
                    }
                    else if (carb == "Disel") {
                        prix = ((900 * 0.21) + 900) * d;
                    }
                    break;

                case "Camion":
                    if (carb == "Disel" && vts == "Automatique") {
                        prix = (((250 * 0.21) + (250 * 0.19)) + 250) * d;
                    }
                    break;

                default:
                    break;
            }

        }

        document.querySelector('#calcPrix').addEventListener('click', () => {
            document.querySelector("#input-cacule").value = prix ;
        });
