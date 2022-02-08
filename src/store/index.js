import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

export default createStore({
  state: {
    colReturn: '',
    colMethodName: '',
    colConnectionStrings: '',
    colCrud: '',
    colTableName: '',
    fields: [],
    codes: ''
  },
  getters: {
    colReturn (state) {
      return state.colReturn
    },
    colMethodName (state) {
      return state.colMethodName
    },
    colConnectionStrings (state) {
      return state.colConnectionStrings
    },
    colCrud (state) {
      return state.colCrud
    },
    colTableName (state) {
      return state.colTableName
    },
    fields (state) {
      return state.fields
    },
    codes (state) {
      return state.codes
    }
  },
  mutations: {
    addData (state, data) {
      state.colReturn = data.Return
      state.colMethodName = data.MethodName
      state.colConnectionStrings = data.ConnectionStrings
      state.colCrud = data.Crud
      state.colTableName = data.TableName
      state.codes = data.Codes
    },
    clearData (state) {
      state.colReturn = ''
      state.colMethodName = ''
      state.colConnectionStrings = ''
      state.colCrud = ''
      state.colTableName = ''
      state.fields.length = 0
      state.codes = ''
    },
    addField (state, { fields, data }) {
      state.fields = fields
      state.fields.push(data)
    },
    deleteField (state, index) {
      state.fields.splice(index, 1)
    },
    cancelField (state, index) {
      state.fields[index].editType = state.fields[index].type
      state.fields[index].editName = state.fields[index].name
      state.fields[index].editNull = state.fields[index].isnull
      state.fields[index].edit = false
    },
    updateField (state, { field, index }) {
      state.fields[index].type = state.fields[index].editType
      state.fields[index].name = state.fields[index].editName
      state.fields[index].isnull = state.fields[index].editNull
      state.fields[index] = field
    },
    changeField (state, field) {
      state.fields = field
    },
    checkbox (state, { checkbox, ischeck, index }) {
      switch (checkbox) {
        case '1':
          state.fields[index].check = ischeck
          break
        case '2':
          state.fields[index].check2 = ischeck
          break
        case '3':
          state.fields[index].check3 = ischeck
          break
      }
    }
  },
  plugins: [createPersistedstate(
    { storage: sessionStorage }
  )]
})
