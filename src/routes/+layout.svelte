<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '../lib/styles/global.css';
  </script>
  
  <Header />
  <slot /> <!-- Conteúdo das páginas será injetado aqui -->
  <Footer />