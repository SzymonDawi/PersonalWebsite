import ariadne 
query = ariadne.QueryType()

@query.field("home")
def resolve_home(*_):
    return "Hello world!"

schema = ariadne.make_executable_schema(ariadne.load_schema_from_path("schema.graphql"), query)
