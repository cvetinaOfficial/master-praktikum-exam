var IndexScripts = function () {
  var _getCharactersData = async function () {
    return $.ajax({
      url: "https://rickandmortyapi.com/api/character",
      method: "GET",
      success: function (response) {
        return response;
      }
    });
  }

  var _getEpisodesData = async function () {
    return $.ajax({
      url: "https://rickandmortyapi.com/api/episode",
      method: "GET",
      success: function (response) {
        return response;
      }
    });
  }

  var _buildCharactersView = function (data) {
    $('#list').empty();

    data.forEach(element => {
      let list = document.getElementById("list");
      let col3 = document.createElement("div");
      col3.className = "col-md-6 mb-2";

      let staticName = document.createElement("h5");
      staticName.className = "d-inline mr-2";
      staticName.textContent = "Name:";
      let staticGender = document.createElement("h6");
      staticGender.textContent = "Gender:";
      staticGender.className = "d-inline mr-2";
      let staticSpecies = document.createElement("h6");
      staticSpecies.textContent = "Species:";
      staticSpecies.className = "d-inline mr-2";
      let staticStatus = document.createElement("h6");
      staticStatus.textContent = "Status:";
      staticStatus.className = "d-inline mr-2";
      let staticLocation = document.createElement("h6");
      staticLocation.textContent = "Location:";
      staticLocation.className = "d-inline mr-2";
      let staticCreated = document.createElement("h6");
      staticCreated.textContent = "Created:";
      staticCreated.className = "d-inline mr-2";
      let staticOrigin = document.createElement("h6");
      staticOrigin.textContent = "Origin:";
      staticOrigin.className = "d-inline mr-2";

      let cardElement = document.createElement("div");
      cardElement.className = "card align-items-center p-3";
      let imgContainer = document.createElement("div");
      imgContainer.className = "w-50 h-100";
      let img = document.createElement("img");
      img.setAttribute("src", element.image);
      img.className = "card-img-top w-100 h-100";
      img.style.borderRadius = "125px";
      imgContainer.appendChild(img);
      let cardBody = document.createElement("div");
      cardBody.className = "card-body";
      cardBody.style.minHeight = "300px";
      let name = document.createElement("h5");
      name.className = "card-title name";
      name.className = "d-inline";
      name.textContent = element.name;
      let gender = document.createElement("h6");
      gender.textContent = element.gender;
      gender.className = "card-text";
      gender.className = "d-inline";
      let location = document.createElement("h6");
      location.textContent = element.location.name;
      location.className = "card-text";
      location.className = "d-inline";
      let status = document.createElement("h6");
      status.textContent = element.status;
      status.className = "card-text";
      status.className = "d-inline";
      let species = document.createElement("h6");
      species.textContent = element.species;
      species.className = "card-text";
      species.className = "d-inline";
      let origin = document.createElement("h6");
      origin.textContent = element.origin.name;
      origin.className = "card-text";
      origin.className = "d-inline";
      let created = document.createElement("h6");
      created.textContent = new Date(element.created).toLocaleDateString();
      created.className = "card-text";
      created.className = "d-inline";

      let divContainerName = document.createElement("div");
      divContainerName.appendChild(staticName);
      divContainerName.appendChild(name);
      let divContainerGender = document.createElement("div");
      divContainerGender.appendChild(staticGender);
      divContainerGender.appendChild(gender);
      let divContainerLocation = document.createElement("div");
      divContainerLocation.appendChild(staticLocation);
      divContainerLocation.appendChild(location);
      let divContainerStatus = document.createElement("div");
      divContainerStatus.appendChild(staticStatus);
      divContainerStatus.appendChild(status);
      let divContainerSpecies = document.createElement("div");
      divContainerSpecies.appendChild(staticSpecies);
      divContainerSpecies.appendChild(species);
      let divContainerOrigin = document.createElement("div");
      divContainerOrigin.appendChild(staticOrigin);
      divContainerOrigin.appendChild(origin);
      let divContainerCreated = document.createElement("div");
      divContainerCreated.appendChild(staticCreated);
      divContainerCreated.appendChild(created);

      cardBody.appendChild(divContainerName);
      cardBody.appendChild(divContainerGender);
      cardBody.appendChild(divContainerLocation);
      cardBody.appendChild(divContainerStatus);
      cardBody.appendChild(divContainerSpecies);
      cardBody.appendChild(divContainerOrigin);
      cardBody.appendChild(divContainerCreated);
      cardElement.appendChild(imgContainer);
      cardElement.appendChild(cardBody);
      col3.appendChild(cardElement);

      list.appendChild(col3);
    });
  }

  var _buildEpisodesView = function (data) {
    $('#list').empty();
    data.forEach(element => {
      let list = document.getElementById("list");
      let col3 = document.createElement("div");
      col3.className = "col-md-6 mb-2";

      let staticName = document.createElement("h5");
      staticName.className = "d-inline mr-2";
      staticName.textContent = "Name:";
      let staticEpisode = document.createElement("h6");
      staticEpisode.textContent = "Episode:";
      staticEpisode.className = "d-inline mr-2";
      let staticCreated = document.createElement("h6");
      staticCreated.textContent = "Created:";
      staticCreated.className = "d-inline mr-2";
      let staticAirDate = document.createElement("h6");
      staticAirDate.textContent = "Air-date:";
      staticAirDate.className = "d-inline mr-2";

      let cardElement = document.createElement("div");
      cardElement.className = "card align-items-center p-3";
      let cardBody = document.createElement("div");
      cardBody.className = "card-body";
      cardBody.style.minHeight = "300px";
      let name = document.createElement("h5");
      name.className = "card-title name";
      name.className = "d-inline";
      name.textContent = element.name;
      let episode = document.createElement("h6");
      episode.textContent = element.episode;
      episode.className = "card-text";
      episode.className = "d-inline";
      let airDate = document.createElement("h6");
      airDate.textContent = element.air_date;
      airDate.className = "card-text";
      airDate.className = "d-inline";
      let created = document.createElement("h6");
      created.textContent = new Date(element.created).toLocaleDateString();
      created.className = "card-text";
      created.className = "d-inline";

      let divContainerName = document.createElement("div");
      divContainerName.appendChild(staticName);
      divContainerName.appendChild(name);
      let divContainerEpisode = document.createElement("div");
      divContainerEpisode.appendChild(staticEpisode);
      divContainerEpisode.appendChild(episode);
      let divContainerAirDate = document.createElement("div");
      divContainerAirDate.appendChild(staticAirDate);
      divContainerAirDate.appendChild(airDate);
      let divContainerCreated = document.createElement("div");
      divContainerCreated.appendChild(staticCreated);
      divContainerCreated.appendChild(created);

      cardBody.appendChild(divContainerName);
      cardBody.appendChild(divContainerEpisode);
      cardBody.appendChild(divContainerAirDate);
      cardBody.appendChild(divContainerCreated);
      cardElement.appendChild(cardBody);
      col3.appendChild(cardElement);

      list.appendChild(col3);
    });
  }

  var _loadDataManipulationEpisodesSection = function () {
    $('#search-episodes').removeAttr('hidden');
    $('#search-actors').attr('hidden', 'hidden');
    $('#category').attr('hidden', 'hidden');
    $('#episode-number').removeAttr('hidden');

    $('#search-column').find('label').text('Search by episode:');
  }

  var _loadDataManipulationCharactersSection = function () {
    $('#search-actors').removeAttr('hidden');
    $('#search-episodes').attr('hidden', 'hidden');
    $('#episode-number').attr('hidden', 'hidden');
    $('#category').removeAttr('hidden');

    $('#search-column').find('label').text('Search by actor:');
  }

  var _loadCharactersData = async function () {
    _loadDataManipulationCharactersSection();
    let data = await _getCharactersData();
    _buildCharactersView(data.results);
  }

  var _loadEpisodesData = async function () {
    _loadDataManipulationEpisodesSection();
    let data = await _getEpisodesData();
    _buildEpisodesView(data.results);
  }

  var _onClickEvent = async function () {
    $('#actors').on('click', _loadCharactersData);

    $('#episodes').on('click', _loadEpisodesData);

    $("#switch-layout").on('click', function () {
      let layout = $('.card').css('flex-direction');
      if (layout === "column") {
        $('.card').css('flex-direction', 'row');
        $(this).text('Switch to column layout');
      } else {
        $('.card').css('flex-direction', 'column');
        $(this).text('Switch to row layout');
      }
    });

    $('#male').on('click', async function () {
      $('#male').attr('checked',true);
      if (actorsSearch.length !== 0) {
        let dataFiltered = actorsSearch[0].filter(item => {
          return item.gender.toLowerCase() === $(this).val().toLowerCase();
        });
        _buildCharactersView(dataFiltered);
      } else {
        let data = await _getCharactersData();
        let dataFiltered = data.results.filter(item => {
          return item.gender.toLowerCase() === $(this).val().toLowerCase();
        });
        _buildCharactersView(dataFiltered);
      }
    });

    $('#female').on('click', async function () {
      $('#female').attr('checked',true);
      if (actorsSearch.length !== 0) {
        let dataFiltered = actorsSearch[0].filter(item => {
          return item.gender.toLowerCase() === $(this).val().toLowerCase();
        });
        _buildCharactersView(dataFiltered);
      } else {
        let data = await _getCharactersData();
        let dataFiltered = data.results.filter(item => {
          return item.gender.toLowerCase() === $(this).val().toLowerCase();
        });
        _buildCharactersView(dataFiltered);
      }
    });

    $('#unknown').on('click', async function () {
      $('#unknown').attr('checked',true);
      if (actorsSearch.length !== 0) {
        let dataFiltered = actorsSearch[0].filter(item => {
          return item.gender.toLowerCase() === $(this).val().toLowerCase();
        });
        _buildCharactersView(dataFiltered);
      } else {
        let data = await _getCharactersData();
        let dataFiltered = data.results.filter(item => {
          return item.gender.toLowerCase() === $(this).val().toLowerCase();
        });
        _buildCharactersView(dataFiltered);
      }
    });
  }

  var _onKeyUpEvents = async function () {
    $('#search-actors').on('keyup', async function () {
      var value = $(this).val().toLowerCase();

      var typeActorNameAsync = async function () {
        actorsSearch = [];
        if($('input[name="gender"]:checked').val()){
          let data = await _getCharactersData();
          let searchedData = data.results.filter(item => {
            return items = item.name.toLowerCase().includes(value);
          });
          let dataFiltered = searchedData.filter(item => {
            return item.gender.toLowerCase() === $('input[name="gender"]:checked').val().toLowerCase();
          });
          _buildCharactersView(dataFiltered);
          actorsSearch.push(searchedData);
        }else {
          let data = await _getCharactersData();
          let dataFiltered = data.results.filter(item => {
            return item.name.toLowerCase().includes(value);
          });
          actorsSearch.push(dataFiltered);
          _buildCharactersView(dataFiltered);
        }
      }

      setTimeout(typeActorNameAsync, 1000);
    });

    $('#search-episodes').on('keyup', async function () {
      var value = $(this).val().toLowerCase();
      var typeEpisodeNameAsync = async function () {
        episodesSearch = [];

        let filterValue = $('#air-date-filter :selected').val();
        let data = await _getEpisodesData();
        let searchedData = data.results.filter(item => {
          return item.name.toLowerCase().includes(value);
        });
        let dataFiltered = searchedData.filter(item => {
          return item.air_date.toLowerCase().includes(filterValue);
        });
        episodesSearch.push(searchedData);
        _buildEpisodesView(dataFiltered);
      }

      setTimeout(typeEpisodeNameAsync, 3000);

    });
  }

  var _onChangeEvent = function(){
    $('#air-date-filter').on('change', async function(){
      let filterValue = $('#air-date-filter :selected').val().toLowerCase();
      if(episodesSearch.length !== 0){
        let dataFiltered = episodesSearch[0].filter(item => {
          return item.air_date.toLowerCase().includes(filterValue);
        });
        _buildEpisodesView(dataFiltered);
      }
      else{
        let data = await _getEpisodesData();
        let dataFiltered = data.results.filter(item => {
          return item.air_date.toLowerCase().includes(filterValue);
        });
        _buildEpisodesView(dataFiltered);
      }

    });
  }

  return {
    init: async function () {
      _getCharactersData();
      _getEpisodesData();
      let characters = await _getCharactersData();
      let episodes = await _getEpisodesData();
      _buildEpisodesView(episodes.results);
      _buildCharactersView(characters.results);
      _loadDataManipulationCharactersSection();
      _loadDataManipulationEpisodesSection();
      _loadEpisodesData();
      _loadCharactersData();
      _onClickEvent();
      _onKeyUpEvents();
      _onChangeEvent();
    }
  };
}();

$(document).ready(function () {
  actorsSearch = [];
  episodesSearch = [];
  actorsFilter = [];
  episodesFilter = [];
  IndexScripts.init();
  $('#actors').trigger('click');
});