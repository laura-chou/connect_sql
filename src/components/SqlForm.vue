<template>
  <div class="container p-0">
    <div class="row mb-3 subject">
      <div class="col-12 text-center">
        <h2 class="font-monospace mt-2">ASP.NET Web Form MySQL CRUD</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <form class="row g-3 mb-3 needs-validation" novalidate>
          <div class="col-md-6">
            <label for="validationReturn" class="form-label">Return</label>
            <select class="form-select" id="validationReturn" v-model="colReturn" required>
              <option selected value="">Choose Type...</option>
              <option>No</option>
              <option>DataTable</option>
              <option>String</option>
              <option>Int</option>
            </select>
            <div class="invalid-feedback">
              Please select a valid return.
            </div>
          </div>
          <div class="col-md-6">
            <label for="validationCRUD" class="form-label">CRUD</label>
            <select class="form-select" id="validationCRUD" v-model="colCrud" required>
              <option selected value="">Choose CRUD...</option>
              <option value="SELECT">Select</option>
              <option value="INSERT">Insert</option>
              <option value="UPDATE">Update</option>
              <option value="DELETE">Delete</option>
            </select>
            <div class="invalid-feedback">
              Please select a valid CRUD.
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationMethodName" class="form-label">Method Name</label>
            <input type="text" class="form-control" id="validationMethodName" v-model="colMethodName" required>
            <div class="invalid-feedback">
              Please provide a valid method name.
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationConnectionString" class="form-label">ConnectionStrings</label>
            <input type="text" class="form-control" id="validationConnectionString" v-model="colConnectionStrings" required>
            <div class="invalid-feedback">
              Please provide a valid connectionstrings.
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationTableName" class="form-label">Table Name</label>
            <input type="text" class="form-control" id="validationTableName" v-model="colTableName" required>
            <div class="invalid-feedback">
              Please provide a valid table name.
            </div>
          </div>
          <div class="col-md-12">
            <label class="form-label">Field</label>
            <table id="fieldTable" class="table table-striped">
              <thead>
                <tr>
                  <td colspan="8">
                    <div class="form-group row d-flex align-items-center">
                      <select class="form-select no-validate" v-model="addType" style="width:30%" @change="ChangeType($event)">
                        <option selected value="">Choose Type...</option>
                        <option value="string">String</option>
                        <option value="int">Int</option>
                        <option value="DateTime">DateTime</option>
                        <option value="double">Double</option>
                      </select>
                      &emsp;
                      <input type="text" class="form-control no-validate" v-model="addName" autocomplete="off" placeholder="Name" style="width:30%">
                      &emsp;
                      <div class="form-check form-check-inline" style="width:5%">
                        <input id="add-null" class="form-check-input" type="checkbox" v-model="addNull">
                        <label class="form-check-label">isnull</label>
                      </div>
                      &emsp;
                      <button type="button" class="btn btn-primary d-flex" @click="AddItem" style="width:auto">
                        <vue-feather type="plus" stroke="white"></vue-feather>
                      </button>
                      <div class="field invalid-feedback field-error">
                        Please provide a valid field.
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="title">
                  <th></th>
                  <th>{{ crudField }}</th>
                  <th>WHERE</th>
                  <th>ORDER BY</th>
                  <th>Type</th>
                  <th>Name</th>
                  <th>Null</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <draggable v-model="fields" tag="tbody" item-key="name" handle=".handle" class="drag" @change="CheckMove" :animation="100">
                <template #item="{ element, index }">
                  <tr>
                    <td>
                      <vue-feather class="handle" type="align-justify" stroke="black"></vue-feather>
                    </td>
                    <td>
                      <input class="form-check-input" type="checkbox" v-if="(!element.edit && crudField !== 'DELETE')" :checked=element.check @click="CheckItem('1', element.check, index)">
                    </td>
                    <td>
                      <input class="form-check-input" type="checkbox" v-if="(!element.edit && crudField !== 'INSERT INTO')" :checked=element.check2 @click="CheckItem('2', element.check2, index)">
                    </td>
                    <td>
                      <input class="form-check-input" type="checkbox" v-if="(!element.edit && crudField === 'SELECT')" :checked=element.check3 @click="CheckItem('3', element.check3, index)">
                    </td>
                    <td v-if="!element.edit">{{ element.type }}</td>
                    <td v-else>
                      <select class="form-select" v-model="element.editType">
                        <option value="string">String</option>
                        <option value="int">Int</option>
                        <option value="DateTime">DateTime</option>
                        <option value="double">Double</option>
                      </select>
                    </td>
                    <td v-if="!element.edit">{{ element.name }}</td>
                    <td v-else>
                      <input type="text" class="form-control" v-model="element.editName">
                    </td>
                    <td v-if="!element.edit">
                      <input class="form-check-input" type="checkbox" :checked=element.isnull disabled>
                    </td>
                    <td v-else>
                      <input class="form-check-input" type="checkbox" v-model="element.editNull" :disabled="EditNull(element.editType)">
                    </td>
                    <td class="d-flex justify-content-center" v-if="!element.edit">
                      <button type="button" class="btn btn-success d-flex" @click="EditItem(element)">
                        <vue-feather type="edit" stroke="white"></vue-feather>
                      </button>
                      &ensp;
                      <button type="button" class="btn btn-danger d-flex" @click="DeleteItem(index)">
                        <vue-feather type="trash-2" stroke="white"></vue-feather>
                      </button>
                    </td>
                    <td class="d-flex justify-content-center" v-else>
                      <button type="button" class="btn btn-success d-flex" @click="UpdateItem(element, index)">
                        <vue-feather type="check" stroke="white"></vue-feather>
                      </button>
                      &ensp;
                      <button type="button" class="btn btn-danger d-flex" @click="CancelItem(index)">
                        <vue-feather type="x" stroke="white"></vue-feather>
                      </button>
                    </td>
                  </tr>
                </template>
              </draggable>
            </table>
          </div>
          <div class="col-12 text-center">
            <button class="btn btn-danger" type="button" @click="Clear">Clear</button>
            &ensp;
            <button class="btn btn-primary" type="button" @click="Submit">Submit</button>
          </div>
        </form>
      </div>
      <div class="col-12">
        <pre v-highlightjs><code class="javascript" >{{ codes }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SqlForm',
  data: function () {
    return {
      colReturn: this.$store.getters.colReturn,
      colMethodName: this.$store.getters.colMethodName,
      colConnectionStrings: this.$store.getters.colConnectionStrings,
      colCrud: this.$store.getters.colCrud,
      colTableName: this.$store.getters.colTableName,
      fields: this.$store.getters.fields,
      addType: '',
      addName: '',
      addNull: false,
      isSubmit: false
    }
  },
  computed: {
    codes () {
      return this.$store.getters.codes
    },
    crudField () {
      let code = ''
      switch (this.colCrud) {
        case 'SELECT':
          code = 'SELECT'
          break
        case 'INSERT':
          code = 'INSERT INTO'
          break
        case 'UPDATE':
          code = 'UPDATE SET'
          break
        case 'DELETE':
          code = 'DELETE'
          break
      }
      return code
    }
  },
  methods: {
    CheckMove () {
      const field = this.fields
      this.$store.commit('changeField', field)
    },
    ChangeType (event) {
      if (event.target.value === 'string') {
        document.getElementById('add-null').disabled = true
      } else {
        document.getElementById('add-null').disabled = false
      }
    },
    Submit () {
      this.isSubmit = true
      if (this.fields.length === 0) {
        document.getElementsByClassName('field')[0].style.display = 'block'
        document.getElementsByClassName('title')[0].style.borderBottom = '2px solid #dc3545'
      }
      const countfield = this.fields.length
      const forms = document.querySelectorAll('.needs-validation')
      let validate = false
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          if (!form.checkValidity()) {
            form.classList.add('was-validated')
          } else if (countfield === 0) {
            form.classList.add('was-validated')
          } else {
            validate = true
          }
        })
      if (validate) {
        this.isSubmit = false
        let str = 'public ' + ((this.colReturn === 'No') ? 'void' : ((this.colReturn !== 'DataTable') ? this.colReturn.toLowerCase() : this.colReturn)) + ' ' + this.colMethodName + ' ('
        let varible = ''
        for (const i of this.fields) {
          const isnull = (i.isnull && i.type !== 'string') ? '?' : ''
          switch (this.colCrud) {
            case 'SELECT':
            case 'DELETE':
              if (i.check2) {
                varible += (varible !== '') ? ', ' : ''
                varible += i.type + isnull + ' ' + i.name
              }
              break
            case 'INSERT':
              if (i.check) {
                varible += (varible !== '') ? ', ' : ''
                varible += i.type + isnull + ' ' + i.name
              }
              break
            case 'UPDATE':
              if (i.check) {
                varible += (varible !== '') ? ', ' : ''
                varible += i.type + isnull + ' ' + i.name
              }
              if (i.check2) {
                if (!varible.includes(i.name)) {
                  varible += (varible !== '') ? ', ' : ''
                  varible += i.type + isnull + ' ' + i.name
                }
              }
              break
          }
        }
        str += varible + '){\n\n  '
        if (this.colReturn === 'DataTable') {
          str += 'DataTable dataTable1 = new DataTable();\n\n  '
        } else if (this.colReturn === 'String') {
          str += 'string returnStr="";\n\n  '
        } else if (this.colReturn === 'Int') {
          str += 'string returnInt="";\n\n  '
        }
        str += 'string sqlstr = @"' + this.colCrud
        let fieldCount = 0
        switch (this.colCrud) {
          case 'SELECT':
            varible = ''
            for (const i of this.fields) {
              if (i.check) {
                varible += ((varible !== '') ? ', ' : '') + i.name
                fieldCount++
              }
            }
            if (fieldCount === this.fields.length) varible = '*'
            str += ' ' + varible + ' FROM ' + this.colTableName
            varible = ''
            for (const i of this.fields) {
              if (i.check2) {
                if (!str.includes('WHERE')) str += ' WHERE '
                varible += ((varible !== '') ? ' and ' : '') + i.name + '=@' + i.name
              }
            }
            str += varible
            varible = ''
            for (const i of this.fields) {
              if (i.check3) {
                if (!str.includes('ORDER BY')) str += ' ORDER BY '
                varible += ((varible !== '') ? ' and ' : '') + i.name
              }
            }
            str += varible + '";\n\n'
            break
          case 'INSERT':
            str += ' INTO ' + this.colTableName + ' ( '
            varible = ''
            for (const i of this.fields) {
              if (i.check) {
                varible += ((varible !== '') ? ', ' : '') + i.name
              }
            }
            str += varible + ' ) VALUES ( '
            varible = ''
            for (const i of this.fields) {
              if (i.check) {
                varible += ((varible !== '') ? ', ' : '') + '@' + i.name
              }
            }
            str += varible + ' )";\n\n'
            break
          case 'UPDATE':
            str += ' ' + this.colTableName + ' SET '
            varible = ''
            for (const i of this.fields) {
              if (i.check) {
                varible += ((varible !== '') ? ', ' : '') + i.name + '=@' + i.name
              }
            }
            str += varible + ' WHERE '
            varible = ''
            for (const i of this.fields) {
              if (i.check2) {
                varible += ((varible !== '') ? ' and ' : '') + i.name + '=@' + i.name
              }
            }
            str += varible + '";\n\n'
            break
          case 'DELETE':
            str += ' ' + this.colTableName
            varible = ''
            for (const i of this.fields) {
              if (i.check2) {
                if (!str.includes('WHERE')) str += ' WHERE '
                varible += ((varible !== '') ? ' and ' : '') + i.name + '=@' + i.name
              }
            }
            str += varible + '";\n\n'
            break
        }
        str += '  string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["' + this.colConnectionStrings + '"].ToString();\n\n'
        str += '  using (SqlConnection conn = new SqlConnection(connString)){\n\n    SqlCommand cmd = new SqlCommand(sqlstr);\n\n    '
        varible = ''
        for (const i of this.fields) {
          let type = i.type
          switch (i.type) {
            case 'string':
              type = 'NVarChar'
              break
            case 'int':
              type = 'Int'
              break
            case 'double':
              type = 'Double'
              break
          }
          switch (this.colCrud) {
            case 'SELECT':
            case 'DELETE':
              if (i.check2) {
                varible += ((varible !== '') ? '\n    ' : '') + 'cmd.Parameters.Add("@' + i.name + '", SqlDbType.' + type + ').Value = ' + i.name + ';'
              }
              break
            case 'INSERT':
              if (i.check) {
                varible += ((varible !== '') ? '\n    ' : '') + 'cmd.Parameters.Add("@' + i.name + '", SqlDbType.' + type + ').Value = ' + i.name + ';'
              }
              break
            case 'UPDATE':
              if (i.check) {
                varible += ((varible !== '') ? '\n    ' : '') + 'cmd.Parameters.Add("@' + i.name + '", SqlDbType.' + type + ').Value = ' + i.name + ';'
              }
              if (i.check2) {
                if (!varible.includes(i.name)) {
                  varible += ((varible !== '') ? '\n    ' : '') + 'cmd.Parameters.Add("@' + i.name + '", SqlDbType.' + type + ').Value = ' + i.name + ';'
                }
              }
              break
          }
        }
        str += varible + '\n\n    foreach (SqlParameter Parameter in cmd.Parameters)\n      if (Parameter.Value == null || Parameter.Value.ToString() == "")\n        Parameter.Value = DBNull.Value;\n\n    '
        str += 'cmd.Connection = conn;\n    conn.Open();\n\n  '
        if (this.colReturn === 'DataTable') {
          str += '  SqlDataReader dr = cmd.ExecuteReader();\n\n    dataTable1.Load(dr);\n\n    '
        } else if (this.colReturn === 'String') {
          str += '  returnStr = Convert.ToString(cmd.ExecuteScalar());\n\n    '
        } else if (this.colReturn === 'Int') {
          str += '  returnInt = Convert.ToInt32(cmd.ExecuteScalar());\n\n    '
        } else {
          str += '  cmd.ExecuteNonQuery();\n\n    '
        }
        str += 'conn.Close();\n  }'
        if (this.colReturn !== 'No') {
          str += '\n\n  '
        }
        if (this.colReturn === 'DataTable') {
          str += 'return dataTable1;'
        } else if (this.colReturn === 'String') {
          str += 'return returnStr;'
        } else if (this.colReturn === 'Int') {
          str += 'return returnInt;'
        }
        str += '\n}'
        const data = {
          Return: this.colReturn,
          MethodName: this.colMethodName,
          ConnectionStrings: this.colConnectionStrings,
          Crud: this.colCrud,
          TableName: this.colTableName,
          Codes: str
        }
        this.$store.commit('addData', data)
      }
    },
    Clear () {
      if (confirm('Make sure you want to clear？')) {
        location.reload()
        this.$store.commit('clearData')
      }
    },
    AddItem () {
      if (this.addType === '') {
        alert('Please choose type')
      } else if (this.addName === '') {
        alert('Please input name')
      } else {
        const fields = this.fields
        const data = { type: this.addType, editType: this.addType, name: this.addName, editName: this.addName, isnull: this.addNull, editNull: this.addNull, edit: false, check: true, check2: false, check3: false }
        this.$store.commit('addField', { fields, data })
        this.addType = ''
        this.addName = ''
        this.addNull = false
        if (this.isSubmit) {
          document.getElementsByClassName('field')[0].style.display = 'none'
          document.getElementsByClassName('title')[0].style.borderBottom = 'none'
        }
      }
    },
    EditItem (field) {
      field.edit = true
    },
    DeleteItem (index) {
      if (confirm('Make sure you want to delete？')) {
        this.$store.commit('deleteField', index)
        if (this.isSubmit && this.fields.length === 0) {
          document.getElementsByClassName('field')[0].style.display = 'block'
          document.getElementsByClassName('title')[0].style.borderBottom = '2px solid #dc3545'
        }
      }
    },
    CancelItem (index) {
      this.$store.commit('cancelField', index)
    },
    UpdateItem (field, index) {
      field.edit = false
      this.$store.commit('updateField', { field, index })
    },
    CheckItem (checkbox, check, index) {
      const ischeck = !(check)
      this.$store.commit('checkbox', { checkbox, ischeck, index })
    },
    EditNull (type) {
      if (type === 'string') {
        return true
      }
    }
  }
}
</script>
<style lang="stylus">
.subject
  border-bottom 1px solid #7B7B7B
table tr
  td,th
    text-align center
    vertical-align middle
.title
  th:nth-child(1)
  th:nth-child(7)
    width 5%
  th:nth-child(2)
  th:nth-child(3)
  th:nth-child(4)
  th:nth-child(5)
  th:nth-child(6)
  th:nth-child(8)
    width 15%
.form-control.no-validate:valid
.form-select.no-validate:valid
    border-color #ced4da !important
    padding-right .75rem !important
    background-image none !important
.field-error
  width max-content !important
  margin-left 5%
.handle
  cursor move
.drag
  td:nth-child(1)
    line-height 10px
</style>
