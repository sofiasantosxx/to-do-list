function adicionarTarefa() {
  const input = document.getElementById("tarefa");
  const texto = input.value.trim();
  if (texto === "") return;

  const li = document.createElement("li");
  li.textContent = texto;

  // Marcar como concluída ao clicar
  li.onclick = () => li.classList.toggle("done");

  // Remover com duplo clique
  li.ondblclick = () => li.remove();

  document.getElementById("lista").appendChild(li);
  input.value = "";
}
